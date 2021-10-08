import React from 'react';
import BottomBlocRight from '../components/BottomBlocRight';
import Contact from '../components/Contact';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hobbies from '../components/Hobbies';
import Other from '../components/Other';
import Skill from '../components/Skill';
import WhoAmI from '../components/WhoAmI';

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
                <section className="right-bloc">
                    <WhoAmI />
                    <Education />
                    <Experience />
                    <Other />
                    <BottomBlocRight />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;