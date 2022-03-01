import React from 'react';
import { Container } from 'react-bootstrap';
import AppCard from './AppCard';
import prstatLogo from '../img/prstat.png';

export default class MainContent extends React.Component {
    render(): React.ReactNode {
        return (
            <Container>
                <AppCard imagePath={prstatLogo} name='PrStat' description='Simple utility to trak pull requests in Azure Dev Ops.' />
                <AppCard name='OtherTool' description='A tool todo somthing else. Probably not ery good' />
            </Container>
        );
    }
}