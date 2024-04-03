
import Header from '../components/Header';
import Footer from '../components/Footer';
import Content from '../components/content';
import './default.layout.css'
import React from 'react';
function defaultLayout() {
    return (
        <div className='default'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}

export default defaultLayout;   