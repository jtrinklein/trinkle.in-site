import * as mime from 'mime';
import * as path from 'path';
import * as fs from 'fs';
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an S3 Bucket Policy to allow public read of all objects in bucket
// This reusable function can be pulled out into its own module
function publicReadPolicyForBucket(bucketName: string): string {
  return JSON.stringify({
    Version: "2012-10-17",
    Statement: [{
      Effect: "Allow",
      Principal: "*",
      Action: [
        "s3:GetObject"
      ],
      Resource: [
        `arn:aws:s3:::${bucketName}/*` // policy refers to bucket name explicitly
      ]
    }]
  })
}

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("trinkle.in-site-bucket",{
  website: {
    indexDocument: 'index.html'
  }
});

const addFolderContents = (siteDir: string, prefix?: string) => {
  for (let item of fs.readdirSync(siteDir)) {
    let filePath = path.join(siteDir, item);
    let isDir = fs.lstatSync(filePath).isDirectory();
    if (isDir) {
      addFolderContents(filePath, item);
      continue;
    }
    let itemPath = prefix ? path.join(prefix, item) : item;
    let _ = new aws.s3.BucketObject(itemPath, {
      bucket,
      source: new pulumi.asset.FileAsset(filePath),     // use FileAsset to point to a file
      contentType: mime.getType(filePath) || undefined, // set the MIME type of the file
    });
  }
}
addFolderContents('dist');

let bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: bucket.bucket, // depends on siteBucket
    policy: bucket.bucket.apply(publicReadPolicyForBucket)
    // transform the siteBucket.bucket output property
});

exports.websiteUrl = bucket.websiteEndpoint; // output the endpoint as a stack output

// Export the name of the bucket
exports.bucketName = bucket.bucket;
