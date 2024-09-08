import React from "react";

const NavBar = () => {
    return(
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
    )
};

export default NavBar;