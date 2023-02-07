/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./index.module.css";
import arrowDown from "../../public/images/dropdown-icon.png"
import Image from 'next/image'
import Logo from "../../public/images/Flux_white_logo.svg"
import target from "../../public/images/target.svg"
import twitter from "../../public/images/twitter.svg"
import discord from "../../public/images/discord.svg"
import github from "../../public/images/github.svg"

export function NavBar(){

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const [navBar, setNavBar] = useState(false);
  
    useEffect(() => {
      const changeBackground = () =>{
        if(window.scrollY >= 850){
         setNavBar(true);
        } else{
         setNavBar(false);
        }
     };
 
     window.addEventListener('scroll', changeBackground);
    });
  

    return(
        <React.Fragment>
             <div className="d-none d-lg-block">
            <div className={styles.navbar2}>
            <div className={styles.topNav}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9">
                            <ul>
                                <li> <a href="#">Whitepaper <Image alt="img" src={target}/></a></li>
                                <li> <a href="#">Wiki <Image alt="img" src={target}/></a></li>
                                <li> <a href="#">Flux Store <Image alt="img" src={target}/></a></li>
                                <li> <a href="#">Zelcore <Image alt="img" src={target}/></a></li>
                                <li className={styles.navLogo}> <a href="#"><Image alt="logo" src={twitter} /></a></li>
                                <li className={styles.navLogo}> <a href="#"><Image alt="logo" src={discord}/></a></li>
                                <li className={styles.navLogo}> <a href="#"><Image alt="logo" src={github}/></a></li>
                                <li className={styles.navBtn}> <a href="#">Support</a></li>
                                <li className={styles.navBtn}> <a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           <Navbar className={navBar ? 'navNav active' : 'navNav'} expand="lg"  collapseOnSelect  >    
             <Container>
                <Navbar.Brand>
                    <Link href={'/'} className={styles.link4}><Image alt="logo" src={Logo}  height="40px" width="170px"/></Link>
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                   
                  <NavDropdown title={
                      <span>Ecosystem <span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown0" 
                    show={show}
                    onMouseEnter={showDropdown} 
                   
                    onMouseLeave={hideDropdown}
                  >
                     <div className={styles.dropMenu}>
                    <NavDropdown.Item>
                     <Link href={'https://www.runonflux.io/flux-dapps.html'} className={styles.link}  eventKey={1}> 
                      <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                    Flux OS<br/>
                    <div className={styles.sublink}>Flux's revolutionary second-layer operating<br/> system that is the heart of Flux.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                      <Link href={'https://www.runonflux.io/flux-dapps.html'} className={styles.link} eventKey="2"> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        DApps
                      <br/>
                    <div className={styles.sublink}>Explore some of the applications running on<br/> Flux.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item >
                      <Link href={'https://www.runonflux.io/flux-dapps.html'} className={styles.link} eventKey="3"> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux Nodes
                     <br/>
                    <div className={styles.sublink}>Learn more about the independently run <br/>FluxNodes that power the Flux network.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                      <Link href={'/'} className={styles.link} eventKey="4"> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux
                     <br/>
                    <div className={styles.sublink}>Our Proof-of-Work cryptocurrency that<br/> powers the Flux ecosystem.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                      <Link href={'/'} className={styles.link} eventKey="5"> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Parallel Mining
                     <br/>
                    <div className={styles.sublink}>Flux assets can be mined on other <br/>blockchains that are interchangeable with <br/>the main chain.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                      <Link href={'/'} className={styles.link} eventKey="6"> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Zelcore
                     <br/>
                     <div className={styles.sublink}>A multi-asset, multi-platform wallet with a <br/> long list of market leading features.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                      <Link href={'/'} className={styles.link} eventKey="7"> 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Dashboard
                     <br/>
                    <div className={styles.sublink}>Explore the latest stats on the Flux network <br/>via the Flux dashboard.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                      <Link href={'/'} className={styles.link} eventKey="8"> 
                      <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        XDAO
                     <br/>
                    <div className={styles.sublink}>Discover Flux decentralized governance <br/> organization.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>
                    </div> 
                   
                 </NavDropdown> 
                

                  <NavDropdown title={
                      <span>Discover<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown1" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                  >
                    <div className={styles.dropMenu}>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={9} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        Whitepaper
                        <br/>
                        <div className={styles.sublink}>Read the Flux whitepaper and discover<br/>the scope of the project.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={10} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Roadmap
                        <br/>
                        <div className={styles.sublink}>Check out the Flux roadmap and our<br/> plans for this year and beyond.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={11} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Team<br/>
                        <div className={styles.sublink}>Meet the members of the fully<br/> distributed Flux team.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={12} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Partners<br/>
                        <div className={styles.sublink}>Collaboration is at the heart of Flux and <br/> our partners are key to that.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={13} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Documentation <br/>
                        <div className={styles.sublink}>Read the Flux docs and get building on <br/> Flux today.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={14} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Block Explorer
                        <div className={styles.sublink}>View blocks mined, statistics, pools, <br/> nodes and status of the network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={15} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Carbon Neutrality <br/>
                        <div className={styles.sublink}>Flux emphasis a Sustainable Future <br/>in Blockchain &amp; Cloud Computing.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={16} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        FluxLabs
                        <div className={styles.sublink}>An incubation and acceleration project <br/>for blockchain and technology-based <br/> start-ups.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                 </div>
                 </NavDropdown> 

                 <NavDropdown title={
                      <span>Explore<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown1" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                  >
                    <div className={styles.dropMenu}>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={17} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        App
                        <br/>
                        <div className={styles.sublink}>Discover how to launch an app on the <br/>Flux network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={18} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Node
                        <br/>
                        <div className={styles.sublink}>Become a FluxNode operator with our <br/> easy to follow guides.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={19} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Miner
                        <br/>
                        <div className={styles.sublink}>Learn how to mine Flux with your GPU <br/>and what pools to join.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={20} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Buy Flux
                        <br/>
                        <div className={styles.sublink}>Learn how to trade, buy, swap or <br/>stake Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={21} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        Flux store
                        <br/>
                        <div className={styles.sublink}>Buy Flux gear designed just for you.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    </div>
                    </NavDropdown>

                    <NavDropdown title={
                      <span>Community<span className={`${styles.arrowBtn} `} style={{marginLeft: "7px"}}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown1" 
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                  >
                    <div className={styles.dropMenu}>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={22} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Blog
                        <br/>
                        <div className={styles.sublink}>Discover all the latest news on the official <br/>Flux blog on Medium.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={23} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Github
                        <br/>
                        <div className={styles.sublink}>Explore the code that powers Flux in our <br/> Github repositories.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={24} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Press kit
                        <br/>
                        <div className={styles.sublink}>Our press kit and other related resources.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={25} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Social
                        <br/>
                        <div className={styles.sublink}>Flux social media accounts.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={26} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Careers
                        <br/>
                        <div className={styles.sublink}>See current open positions and come to work <br/> with Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={27} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Bug bounty
                        <br/>
                        <div className={styles.sublink}>Get rewarded for finding bugs and exploits.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={28} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Donate
                        <br/>
                        <div className={styles.sublink}>Help us grow the Flux project and contribute <br/>to the foundation funds.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <Link href={'#'} eventKey={29} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Support
                        <br/>
                        <div className={styles.sublink}></div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                      </div>
                    </NavDropdown>
                 {/* <Nav.Link href={'#'} eventKey={3}>Explore</Nav.Link> */}
                 <Nav.Link href={'#'} eventKey={30}>Pricing</Nav.Link>
                 {/* <Nav.Link href={'#'} eventKey={5}>Community</Nav.Link> */}
                </Nav>

               
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>
            </div>














            <div className="d-block d-lg-none">
            <div className={styles.navbar2}></div>
            <Navbar  expand="lg" fixed="top"  collapseOnSelect >
            <Container>
                <Navbar.Brand>
                    <Link href={'/'} className={styles.link4}><Image alt="logo" src={Logo}  height="40px" width="170px"/></Link>
                    </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" >
               
                </Navbar.Toggle>

                

              <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mx-auto">
                    
                  <NavDropdown title={
                      <span>Ecosystem<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                   
                  >
                    <NavDropdown.Item eventKey="31" >
                      <Link href={'https://www.runonflux.io/flux-dapps.html'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}} >
                    Flux OS<br/>
                    <div className={styles.sublink}>Flux's revolutionary second-layer operating<br/> system that is the heart of Flux.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="32">
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Apps
                      <br/>
                    <div className={styles.sublink}>Explore some of the applications running on<br/> Flux.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item eventKey="33">
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux Nodes
                     <br/>
                    <div className={styles.sublink}>Learn more about the independently run <br/>FluxNodes that power the Flux network.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="34">
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Flux
                     <br/>
                    <div className={styles.sublink}>Our Proof-of-Work cryptocurrency that<br/> powers the Flux ecosystem.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="35">
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Parallel Mining
                     <br/>
                    <div className={styles.sublink}>Flux assets can be mined on other <br/>blockchains that are interchangeable with <br/>the main chain.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="36">
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Zelcore
                     <br/>
                     <div className={styles.sublink}>A multi-asset, multi-platform wallet with a <br/> long list of market leading features.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="37">
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        Dashboard
                     <br/>
                    <div className={styles.sublink}>Explore the latest stats on the Flux network <br/>via the Flux dashboard.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="38">
                      <Link href={'/'} className={styles.link} > 
                      <div style={{textDecoration: "none", color: "inherit"}}>
                        XDAO
                     <br/>
                    <div className={styles.sublink}>Discover Flux decentralized governance <br/> organization.</div>
                      </div>
                    
                      </Link> 
                    </NavDropdown.Item>

                  
                   
                 </NavDropdown>  

                 <NavDropdown title={
                      <span>Discover<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                   
                  >
                    <NavDropdown.Item eventKey="39">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        Whitepaper
                        <br/>
                        <div className={styles.sublink}>Read the Flux whitepaper and discover<br/>the scope of the project.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="40">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Roadmap
                        <br/>
                        <div className={styles.sublink}>Check out the Flux roadmap and our<br/> plans for this year and beyond.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                    <NavDropdown.Item eventKey="41">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Team<br/>
                        <div className={styles.sublink}>Meet the members of the fully<br/> distributed Flux team.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="42">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Partners<br/>
                        <div className={styles.sublink}>Collaboration is at the heart of Flux and <br/> our partners are key to that.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="43">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Documentation <br/>
                        <div className={styles.sublink}>Read the Flux docs and get building on <br/> Flux today.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="44">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Block Explorer
                        <div className={styles.sublink}>View blocks mined, statistics, pools, <br/> nodes and status of the network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="45">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Carbon Neutrality <br/>
                        <div className={styles.sublink}>Flux emphasis a Sustainable Future <br/>in Blockchain &amp; Cloud Computing.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="46">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        FluxLabs
                        <div className={styles.sublink}>An incubation and acceleration project <br/>for blockchain and technology-based <br/> start-ups.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                  
                   
                 </NavDropdown>  

                 <NavDropdown title={
                      <span>Explore<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                   
                  >

                      <NavDropdown.Item eventKey="47">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginTop: "10px"}}>
                        App
                        <br/>
                        <div className={styles.sublink}>Discover how to launch an app on the <br/>Flux network.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="48">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Node
                        <br/>
                        <div className={styles.sublink}>Become a FluxNode operator with our <br/> easy to follow guides.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="49">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Miner
                        <br/>
                        <div className={styles.sublink}>Learn how to mine Flux with your GPU <br/>and what pools to join.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    <NavDropdown.Item eventKey="50" >
                        <Link href={'#'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                        Buy Flux
                        <br/>
                        <div className={styles.sublink}>Learn how to trade, buy, swap or <br/>stake Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="51">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit", marginBottom: "10px"}}>
                        Flux store
                        <br/>
                        <div className={styles.sublink}>Buy Flux gear designed just for you.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>

                   
                    
                    </NavDropdown>
                    <NavDropdown title={
                      <span>Community<span className={`${styles.arrowBtn} d-lg-none d-xl-none`}><Image src={arrowDown} alt="arrow-down"/></span></span>
                  }
                    id="basic-nav-dropdown" 
                   
                  >
                    
                    <NavDropdown.Item eventKey="52" >
                        <Link href={'#'} className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Blog
                        <br/>
                        <div className={styles.sublink}>Discover all the latest news on the official <br/>Flux blog on Medium.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="53">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Github
                        <br/>
                        <div className={styles.sublink}>Explore the code that powers Flux in our <br/> Github repositories.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="54">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Press kit
                        <br/>
                        <div className={styles.sublink}>Our press kit and other related resources.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="55">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Social
                        <br/>
                        <div className={styles.sublink}>Flux social media accounts.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="56">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Careers
                        <br/>
                        <div className={styles.sublink}>See current open positions and come to work <br/> with Flux.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="57">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Bug bounty
                        <br/>
                        <div className={styles.sublink}>Get rewarded for finding bugs and exploits.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="58">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Donate
                        <br/>
                        <div className={styles.sublink}>Help us grow the Flux project and contribute <br/>to the foundation funds.</div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="59">
                        <Link href={'#'}  className={styles.link} >
                        <div style={{textDecoration: "none", color: "inherit"}}>
                       Support
                        <br/>
                        <div className={styles.sublink}></div>
                        </div>
                        </Link>
                       
                    </NavDropdown.Item>
                   
                    
                    </NavDropdown>
                 <Nav.Link href={'#'} eventKey="60">Pricing</Nav.Link>
              

                
                </Nav>
                <div className={styles.topNav2} style={{marginTop: "100px"}}>
                <div className="container">
                    <div className="row text-center">
                                <div className={styles.topNavLink}> <a href="#">Whitepaper</a></div>
                                <div className={styles.topNavLink}> <a href="#">Wiki</a></div>
                                <div className={styles.topNavLink}> <a href="#">Flux Store </a></div>
                                <div className={styles.topNavLink}> <a href="#">Zelcore</a></div>
                                <div className={styles.topNavLink}> <a href="#">Support</a></div>
                                <div className={styles.topNavLink}> <a href="#">Contact</a></div>

                                <div className={styles.mobileTopNav}>
                                 <a href="#"><Image alt="logo" src={twitter} /></a>
                                <a href="#"><Image alt="logo" src={discord}/></a>
                                <a href="#"><Image alt="logo" src={github}/></a>
                                </div>

                    </div>
                </div>
            </div>

                </Navbar.Collapse> 
            </Container>
        </Navbar>
        
            </div>
          
        </React.Fragment>
    )
}