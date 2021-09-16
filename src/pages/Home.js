import React from 'react';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Hobbies from '../components/Hobbies';
import Skill from '../components/Skill';

const Home = () => {
    return (
        <div id="home">
            <Header />
            <main>
                <section className="left-bloc">
                    <div className="bg-left-bloc">
                        <Contact />
                        <Skill />
                        <Hobbies />
                    </div>
                </section>
                <section className="right-bloc"></section>
            </main>
        </div>
    );
};

export default Home;