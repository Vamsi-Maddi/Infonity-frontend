import React from 'react'
import "./HomePage.css";
import HomeNav from './HomeNav';
import Card from './card';
import Feautures from './Feautures';
import ContacUs from './ContactUs';
import Footer from './Footer';
import FAQMenu from './FAQMenu';
function HomePage() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
           <HomeNav scrollToSection={scrollToSection} />
           <Card/>
           <Feautures />
           <FAQMenu/>
           <ContacUs/>
           <Footer/>

        </div>
    )
}

export default HomePage;