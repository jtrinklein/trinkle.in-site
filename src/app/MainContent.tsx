import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppCard from './AppCard';
import prstatLogo from '../img/prstat.png';

interface AppInfo {
    name: string;
    description: string;
    url?: string;
    imagePath?: string;
}

const CARDS_PER_ROW = 4;

export default class MainContent extends React.Component {
    private apps: AppInfo[];
    constructor(props) {
        super(props);
        this.apps = [
            {
                name: 'PrStat',
                description: "A simple utility to track pull requests in Azure Dev Ops.",
                // imagePath: prstatLogo,
                url: 'https://github.com/jtrinklein/PrStat/releases'
            },
            {
                name: 'Guid.Best',
                description: 'A one stop shop for the best GUIDs on the internet.',
                url: 'https://guid.best/'
            },
        ];
    }
    render(): React.ReactNode {
        return (
            <Container style={{marginTop: '12px'}}>
                <Row md='2' className="align-items-center justify-content-center">
                {this.apps.map((app) => (
                    <Col>
                        <AppCard
                            imagePath={app.imagePath}
                            name={app.name}
                            description={app.description}
                            url={app.url} />
                    </Col>
                    
                    
                ))}
                </Row>
            </Container>
        );
    }
}