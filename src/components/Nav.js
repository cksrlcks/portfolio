import React , {useRef, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'
import icon_sample from'../img/icon_sample.svg'
const Nav = () => {

    let gnbBg = useRef(null);

    useEffect(() => {
        
        let item = document.querySelectorAll('.gnbItem');

        const initPosition = () =>{ 
            let activeItem = document.querySelectorAll('.gnbItem.active');
            if(activeItem.length>0){
                let homePosition =  activeItem[0].offsetTop;              
                gnbBg.style.top = homePosition + 'px';
                
            }else{
                gnbBg.style.display = 'none';
                gnbBg.classList.add('disabled');
            }
        }

        const moveBg = () => {

            item.forEach((item)=>{
                let itemPositionTop = item.offsetTop;
                item.addEventListener('click', () => {
                    if(gnbBg.classList.contains('disabled')){
                        gnbBg.classList.remove('disabled');
                        gnbBg.style.display = 'block';
                    }
                    gnbBg.style.top = itemPositionTop + 'px';
                })
            })
        }

        const initNav = () => {
            initPosition();
            moveBg();
        }
        
        if(item.length>0){
            initNav();
        }
        
    }, []);

    return (
        <nav className="gnb">
            <div className="inner">
                <NavLink exact to="/" className="gnbItem" activeClassName="active" ><span>Home</span><img src={icon_sample} alt="icon" className="icon" /></NavLink>
                <NavLink to="/Profile" className="gnbItem" activeClassName="active" ><span>Profile</span><img src={icon_sample} alt="icon" className="icon" /></NavLink>
                <NavLink to="/Work" className="gnbItem" activeClassName="active" ><span>Work</span><img src={icon_sample} alt="icon" className="icon" /></NavLink>
                <NavLink to="/Study" className="gnbItem" activeClassName="active" ><span>Study</span><img src={icon_sample} alt="icon" className="icon" /></NavLink>
                <NavLink to="/Blog" className="gnbItem" activeClassName="active" ><span>Blog</span><img src={icon_sample} alt="icon" className="icon" /></NavLink>
                <span className="activeBg" ref={el => {gnbBg = el}}></span>
            </div>
        </nav>
    );
};



export default Nav;