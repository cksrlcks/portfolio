import React, {useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import logo from '../img/logo.svg'
const Nav = () => {
    const scrollHeader = () => {
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.gnb');
            const scrolled = window.pageYOffset;
            
            if(scrolled){
                header.classList.add('on');
            }else{
                header.classList.remove('on');
            }

        })
        
    }    
    scrollHeader();

    

    useEffect(() => {
        const bar = document.querySelector('.active_bar');
        const moveBar = () => {
            const activeItem = document.querySelector('.nav_rt .gnbItem.active');
            if(activeItem){
                let position = activeItem.offsetLeft;
                let width = activeItem.clientWidth / 2 ;
                let setLeft = position + width - 20;
                bar.style.opacity = 1
                bar.style.left = setLeft + "px"; 
            }else{
                bar.style.opacity = 0
            }
        }
        moveBar();
        
        const scrollToTop = () => {
            window.scrollTo({
                top:0,
                behavior : 'smooth'
            });
        }

        const gnbItem = document.querySelectorAll('.nav_rt .gnbItem');
        gnbItem.forEach((item)=>{
            item.addEventListener('click', () => {
                scrollToTop();                
                let newPosition = item.offsetLeft;
                let width = item.clientWidth / 2 ;
                let setLeft = newPosition + width - 20;
                bar.style.opacity = 1
                bar.style.left = setLeft + "px";
            })
            
        })

        const homeItem = document.querySelector('.logo_svg');
        homeItem.addEventListener('click', () => {
            bar.style.opacity = 0;
            scrollToTop();
        })
        
           
    },[])

    

    return (
        <header>
            <nav className="gnb">
                <div className="inner">
                    <NavLink exact to="/" className="gnbItem logo"><img src={logo} className="logo_svg" alt="logo"/></NavLink>
                    <div className="nav_rt">
                        {/* <NavLink to="/Profile" className="gnbItem" activeClassName="active"><span>About</span></NavLink> */}
                        <NavLink to="/Work" className="gnbItem" activeClassName="active"><span>Work</span></NavLink>
                        <NavLink to="/Study" className="gnbItem" activeClassName="active"><span>Study</span></NavLink>
                        {/* <NavLink to="/Blog" className="gnbItem" activeClassName="active"><span>Blog</span></NavLink> */}
                        <span className="active_bar"></span>
                    </div>
                </div>                
            </nav>
        </header>
    );
};



export default Nav;