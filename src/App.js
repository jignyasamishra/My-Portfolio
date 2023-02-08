import React, { useState, useEffect } from 'react'
import './App.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import ht from './Photos/html-5.png'
import cs from './Photos/css3.png'
import et from './Photos/ethereum.png'
import ex from './Photos/express.png'
import fi from './Photos/figma.png'
import go from './Photos/golang.png'
import js from './Photos/javascript.png'
import mo from './Photos/mongodb.png'
import sql from './Photos/mysql.png'
import nd from './Photos/nodejs.png'
import react from './Photos/react-native.png'
import img from './Photos/image.png'
import img2 from './Photos/secondimg.png'
import imglast from './Photos/fourthimg.png'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { SlArrowRight } from 'react-icons/sl';






function App() {
  const mouse_in = () => {
    let a = document.getElementById("arrowone")
    a.style.color = "#8e8e8c"
    a.style.transform = "scale(1.1)"
    a.style.transitionDuration = "0.3s"

  }
  const mouse_out = () => {

  }


  return (
    <div>
      <Parallax pages={5}>

        <ParallaxLayer offset={0} style={{ backgroundRepeat: "no-repeat", backgroundColor: "#4D0000" }}>

          <ParallaxLayer offset={0.5} style={{ zIndex: "10" }} speed={-0.3}>

            <div className='name'>
              <h1>Jignyasa Mishra's Portfolio</h1>
              <div >
                <a className='hover' style={{ padding: "1rem 1rem", fontSize: "2.5rem", color: "white" }} href="https://github.com/jignyasamishra" target="_blank" ><BsGithub /></a>
                <a className='hover' style={{ padding: "1rem 1rem", fontSize: "2.5rem", color: "white" }} href="https://www.linkedin.com/in/jignyasa-mishra-356520179/" target="_blank" ><BsLinkedin /></a>
                <a className='hover' style={{ padding: "1rem 1rem", fontSize: "2.5rem", color: "white" }} href="https://twitter.com/JignyasaMishra" target="_blank" ><BsTwitter /></a>

              </div>


            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.9} offset={0}>

            <img id='mainpic' src={img} alt="" />
          </ParallaxLayer>


        </ParallaxLayer>
        <ParallaxLayer offset={1} style={{ backgroundColor: "#9D8B7C", zIndex: "3" }}>

          <ParallaxLayer offset={0.2} style={{ zIndex: "10" }} speed={-0.1}>

            <div className="about">
              About Me
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} style={{ zIndex: "10" }} speed={0.3}>

            <div className="aboutContent">
              I am an IT undergrad and a full stack web developer.I have experience in Blockchain too.
              I love to contribute in Open source.I was selected as a mentee under MICROSOFT ENGAGE PROGRAM 2022.
              I have deep interest in designing.
            </div>
          </ParallaxLayer>
          <ParallaxLayer speed={0.4} offset={0.5}>
            <img id='imagetwo' src={img2} alt="" />
          </ParallaxLayer>

        </ParallaxLayer>
        <ParallaxLayer offset={2} style={{ backgroundColor: "#4D0000", zIndex: "3" }}>
          <ParallaxLayer offset={-0.1} speed={-0.1}>
            <div className="skills">
              <h1>Tech I am familiar with</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.8} speed={0.25}>
            <div className="logo">
              <img className='padding' src={ht} alt="" />
              <img className='padding' src={cs} alt="" />
              <img className='padding' src={js} alt="" />
              <img className='padding' src={react} alt="" />
              <img className='padding' src={mo} alt="" />
              <img className='padding' src={ex} style={{ filter: "invert(100%)" }} alt="" />
              <img className='padding' src={nd} alt="" />
              <img className='padding' src={et} alt="" />
              <img className='padding' src={fi} alt="" />
              <img className='padding' src={sql} alt="" />
              <img className='padding' src={go} alt="" />
            </div>
          </ParallaxLayer>



        </ParallaxLayer>
        <ParallaxLayer offset={3} style={{ backgroundColor: "#9D8B7C", zIndex: "3", color: "white" }}>
          <ParallaxLayer offset={0.08} speed={-0.025} >
            <div className="projects">
              <h1>My Projects</h1>


            </div>
          </ParallaxLayer>

          <ParallaxLayer style={{ display: "flex", width: "100%" }} offset={0.99} speed={0.2}>
            <div style={{ height: "50rem", width: "100%" }}>
              <h1 className='center'>
                <a style={{textDecoration:"none",color:"white"}} className='arrow' href="https://github.com/jignyasamishra/blog-website" target="_blank">
                  <span className='arrow'>INITIAL'S </span>
                  < SlArrowRight className='side' /></a></h1>
              <p className='aboutproject' >A website in which you can write short blogs and display it on the website for later reviewing.
                This website gives confidence to new bloggers to start their blogging journey.
                <p style={{zIndex:"100"}}> </p>

              </p>
            </div>
            <div style={{ height: "50rem", width: "100%" }}>
              <h1 className='center'>
              <a style={{textDecoration:"none",color:"white"}} className='arrow' href="https://github.com/jignyasamishra/blog-website" target="_blank">
              <span className='arrow'>ARTE</span>
              
              < SlArrowRight className='side'/></a>
              </h1>
              <p className='aboutproject' >A website in which you can experience various forms of art and architecture and you can see paintings
                stored in Rijks Museum through their API I use in the website 
               
                 </p>
            </div>
            <div style={{ height: "50rem", width: "100%" }}>
              <h1 className='center'> 
              <a style={{textDecoration:"none",color:"white"}} className='arrow' href="https://github.com/jignyasamishra/blog-website" target="_blank">
              <span className='arrow'>MULTILINGUAL TRANSLATING WEBSITE</span>
              
              < SlArrowRight  className='side' /></a>
              </h1>
              <p className='aboutproject' >A website in which you can speak or write in any language and it will translate it into your desired language.
                This website has both text-to-speech and speech-to-text functionalities.
                
              </p>
            </div>


          </ParallaxLayer>
         


        </ParallaxLayer>
        <ParallaxLayer offset={4} style={{ backgroundColor: "#4D0000", zIndex: "3", color: "white" }}>
          <ParallaxLayer offset={0.08} speed={-0.02} >
            <div className="acheive">
              <h1>Acheivements</h1>


            </div>
          </ParallaxLayer>


          <ParallaxLayer  horizontal={true} offset={1.1} speed={0.1}>
            <div className="aboutacheive downtwo" id='one' >
              <li>DESIGN X SOCIAL 2021 UMO FINALIST</li>
            </div>
            <div className="aboutacheive downtwo" id='two' >
              <li>MICROSOFT ENGAGE 2022 MENTEE</li>
            </div>
          </ParallaxLayer>
          <ParallaxLayer horizontal={true} offset={-0.7} speed={-0.1}  >
            <img id='last' className='down' style={{ position: "relative", top: "38rem", transform: "scale(0.9)" }} src={imglast} alt="" />

          </ParallaxLayer>





        </ParallaxLayer>

      </Parallax>


    </div>

  );
}

export default App;
