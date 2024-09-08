import react from 'react';
import './component_CSS/home.css';
import logo from "./assets/spiderlogo.jpg";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import CarouselComponent from './carousal';
import Footer from "./footer";

const Home = () => {
    return (
    <>

        <section className='h-wrapper'>
            <div className="flexCenter paddings innerWidth h-container">
                <img src={logo} alt="logo" width={100} />
                <div className="flexCenter h-menu">
                    <a href="">Home</a>
                    <a href="">Explore</a>
                    <a href="/creategroup">Groups</a>
                    <a href="/eventlist">Events</a>
                    <button className='button'>
                        <a href="">Sign In</a>
                    </button>
                </div>
            </div>
        </section>
        <section className='hero-wrapper'>
            <div className="paddings innerWidth flexCenter hero-container">
            <div className='flexColStart hero-left'>
                <div className='hero-title'>
                <div className='orange-circle'/>
                    <h1>
                        Discover <br/>most suitable <br/>Events
                    </h1>
                </div>
                <div className='flexColStart hero-des'>
                    <span className='secondaryText'>
                        Find a variety of Events that you like.
                    </span>
                    <span className='secondaryText'>
                        Enjoy each and every moment of the event.
                    </span>
                </div>
                <div className='flexCenter search-bar'>
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" />
                    <button className='button'>Search</button>
                </div>
                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Best Events
                        </span>
                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>
                    <div className='flexColCenter stat'>
                        <span>
                            <CountUp end={28}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src={logo} alt="img"/>
                </div>
            </div>

            </div>
        </section>
        <CarouselComponent/>
        <Footer/>
    </>
    )
}

export default Home;