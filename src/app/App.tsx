import React, {Component} from 'react';

import Header from './Header';
import MainContent from './MainContent';
export class App extends Component {
    public render() {
        return (
            <>
                <Header />
                <MainContent />
            </>
        )
    }
}