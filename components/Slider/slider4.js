import React from "react";
import styles from "./index.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import Image from "next/image";


import keep from  "../../public/images/launchApp/keep.svg";
import teamspeak from "../../public/images/launchApp/teamspeak.svg";
import yearn from "../../public/images/launchApp/yearn.svg";
import osmosis from "../../public/images/launchApp/osmosis.svg";
import kaspa from "../../public/images/launchApp/kaspa.svg";
import minecraft from "../../public/images/launchApp/minecraft.svg"
export function Slider4(){
    return(
        <React.Fragment>
           


            <div style={{marginTop: "-100px"}}>
              <Splide aria-label="My Favorite Images"
                   options={{
                    // perPage: 5.5,
                    fixedWidth: "10rem",
                    pagination: false,
                    arrows: 0,
                    autoplay: true,
                    rewind: true,
                    gap: "5rem",
                   
                    perMove: 1,
                    direction: 'rtl',
                    breakpoints: {
                      

                        // 1371:{
                        //     perPage: 5.5,
                           
                        // },
                       
                        // 1300:{
                        //     perPage: 4.5,
                           
                        // },
                        // 1100:{
                        //     perPage: 4,
                           
                        // },
                        // 991.98: {
                        //     perPage: 3.2,
                        //   },
                        //   767.98: {
                        //     perPage: 2.5,
                        //     gap: "3rem",
                        //   },
                        //   640: {
                        //     perPage: 2,
                        // },
                        //   575.98: {
                        //     perPage: 1.5
                        //   },
                    },
                     
                }}
            >
                
              
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={keep} alt="Image 1"/></div>
                    <a className={styles.btn} href="#">Keep</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={teamspeak} alt="Image 1"/></div>
                    <a className={styles.btn} href="#">Teamspeak</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={yearn} alt="Image 1"/></div>
                    <a className={styles.btn} href="#">Yearn</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={osmosis} alt="Image 1"/></div>
                    <a className={styles.btn} href="#">Osmosis</a>
                    </div>
                </SplideSlide>
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={kaspa} alt="Image 1"/></div>
                    <a className={styles.btn} href="#">Kaspa</a>
                    </div>
                </SplideSlide>
              
                <SplideSlide>
                <div className={styles.appCard}>
                    <div><Image src={minecraft} alt="Image 1"/></div>
                    <a className={styles.btn} href="#">Minecraft</a>
                    </div>
                </SplideSlide>
               
                </Splide>
                </div>
        </React.Fragment>
    )
}