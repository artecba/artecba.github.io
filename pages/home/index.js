import React from 'react';
import Section from "./Section";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/header/header';
import Services from "../CommonSection/Services/Services";
import AboutUs from "../CommonSection/AboutUs";
import WebsiteDesc from "../CommonSection/WebsiteDesc";
import Pricing from "../CommonSection/Pricing/Pricing";
import Team from '../CommonSection/Team/Team';
import Process from '../CommonSection/Process/Process';
import Blog from '../CommonSection/Blog/Blog';
import Testimonials from '../CommonSection/Testimonials/Testimonials';
import GetStart from '../CommonSection/GetStart/GetStart';
import Contact from '../CommonSection/Contact/Contact';
import Social from '../CommonSection/Social';

const layout7 = props => {
    return (
        <React.Fragment>
            {/* import Header */}
            <Header />

            <Section />

            {/* import Services */}
            <Services />

            {/* import AboutUs */}
            <AboutUs />

            {/* import WebsiteDesc */}
            <WebsiteDesc />

            {/* import Pricing */}
            <Pricing />

            {/* import Team */}
            <Team />

            {/* import Process */}
            <Process />

            {/* imort Testimonials */}
            <Testimonials />

            {/* import GetStart */}
            <GetStart />

            {/* import Blog */}
            <Blog />

            {/* import Contact */}
            <Contact />

            {/* import Social Icon */}
            <Social />

            {/* import Footer */}
            <Footer />

        </React.Fragment>
    );
}


export default layout7;