import React from 'react'
import Header from './../components/Header'
import Footer from './../components/Footer'

export default function HomepageLayout(props) {
    return (
        <div className="fullHeight">
            <Header {...props}/>
            {props.children}
            <Footer/>
        </div>
    )
}