import React from 'react';
import { Card as RbCard, Button } from 'react-bootstrap';
import defaultLogo from '../img/logo.png';

interface AppCardProps {
    name: string;
    description: string;
    imagePath?: string;
    url?: string;
}

export default class AppCard extends React.Component {
    
    private hasLink: boolean = false;
    private hasImg: boolean = false;
    constructor(public props: AppCardProps) {
        super(props);
    }
    render(): React.ReactNode {
        const hasImg = !!this.props.imagePath;
        const hasLink = !!this.props.url;
        const {imagePath, url, name, description} = this.props;
        return (
            <RbCard style={{ width: '18rem', marginTop: '6px', marginBottom: '6px' }}>
                {hasImg && (<RbCard.Img variant="top" style={{maxWidth: '120px'}} src={imagePath} /> ) }
                <RbCard.Body>
                    <RbCard.Title>{name}</RbCard.Title>
                    <RbCard.Text>
                    {description}
                    </RbCard.Text>
                    {hasLink && (<Button variant="primary" href={url}>Check it out</Button>)}
                </RbCard.Body>
            </RbCard>
        )
    }
}
