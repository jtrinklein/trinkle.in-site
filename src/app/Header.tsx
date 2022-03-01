import React from "react";
import {Navbar, Row, Col, Container} from 'react-bootstrap';
import Logo from './Logo';
export default class Header extends React.Component {
    render(): React.ReactNode {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Logo />
                        trinklein Apps
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}