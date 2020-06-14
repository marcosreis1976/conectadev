import React from 'react';
import Header from './components/Header';
import './style.css';

function Home() {

    return (
        <div>
            <Header/>
            <div className="toolbar"></div>
            <main className="main">
                <div className="navbar">
                    NavBar                    
                </div>
                <div className="feed">
                    Feed
                </div>

            </main>
        </div>
    )
}

export default Home;