import React, { Component } from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Portfolio from './portfolio';
import Skills from './skills';

export default class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='container'>                
                <AboutMe></AboutMe>
                <Contact></Contact>
                <Portfolio></Portfolio>
                <Skills></Skills>
            </div>
        );
    }
}