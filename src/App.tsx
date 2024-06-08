// App.tsx
import React from 'react';
import './App.css';
import Header from './components/header';
import { FaInstagram, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import LineText from './components/lineText';
import gradientMain from './assets/gradienteMain.png';
import Background from './components/background';
import secondGradient from './assets/secondGradient.png'
import Cards from './components/OverlayTextImage';
import OverlayTextImage from './components/OverlayTextImage';
import First from './assets/01.png'
import Hike01 from './assets/hike01.png'

import Second from './assets/02.png'
import Hike02 from './assets/hike02.png'

import Third from './assets/03.png'
import Hike03 from './assets/hike03.png'


function App() {
  return (
    <div className="">

      <div className="flex flex-col h-screen  relative">
        <img src={gradientMain} alt="gradient" className="absolute w-full h-full " />

        <Background />
        <div className="flex flex-col justify-center items-center text-white z-10">
          <Header />
          <div className="flex  flex-row md:justify-between justify-center items-center container h-[60vh] ">

            <div className="hidden md:flex flex-col items-center justify-between">
              <div className="md:mb-4 text-right transform -rotate-90">
                <span className="text-lg">Follow us</span>
              </div>
              <div className="my-6">
                <span><FaInstagram /></span>
              </div>
              <div>
                <span><FaLinkedin /></span>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center font-cactus p-14 md:p-0 ">
              <div className=""><LineText text="A HIKING GUIDE" /></div>
              <h1 className="text-left md:text-5xl text-4xl w-full  md:w-[70%] md:pl-40">Be Prepared For The Mountains And Beyond!</h1>
              <div className="flex items-center justify-center pt-10">scroll down <span className="pl-2"><FaArrowDown /></span></div>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col items-center justify-center mr-4 h-32 border-r-2 border-black p-4">
                <span className="my-2">Start</span>
                <span className="my-2">01</span>
                <span className="my-2">02</span>
                <span className="my-2">03</span>
              </div>
            </div>

          </div>
        </div>

        <img src={secondGradient} alt="" className=" z-50 pt-10" />

        <div className="text-white z-10 pb-10 bg-[#0B1D26] ">
          <div className="bg-[#0B1D26] ">

            <div className="flex justify-center  flex-col bg-[#0B1D26]">
              <OverlayTextImage
                imageUrl={First}
                lineTexto={<LineText text="GET STARTED" />}
                mainText="What level of hiker are you?"
                secondaryText="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
              />
              <img src={Hike01} alt="" className="pt-[10rem] w-[60%] ml-16 my-36" />
            </div>

            <div className="flex justify-center  flex-col bg-[#0B1D26]">
              <OverlayTextImage
                imageUrl={Second}
                lineTexto={<LineText text="HIKING ESSENTIALS" />}
                mainText="Picking the right Hiking Gear!"
                secondaryText="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
              />
              <img src={Hike02} alt="" className="pt-[10rem] w-[60%] ml-16 my-36" />
            </div>

            <div className="flex justify-center  flex-col bg-[#0B1D26]">
              <OverlayTextImage
                imageUrl={Third}
                lineTexto={<LineText text="WHERE YOU GO IS THE KEY" />}
                mainText="Understand Your Map & Timing"
                secondaryText="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
              />
              <img src={Hike03} alt="" className="pt-[10rem] w-[60%] ml-16 my-36" />
            </div>


          </div>
          <div className=" z-10 p-10 bg-[#0B1D26]">
            <div className="">
              <div className="text-xl font-cactus">
                DaniloMartinez
              </div>
              <h3 className="py-4">Get out there & discover your next mountain adventure!</h3>
            </div>

            <div className="font-semibold py-10">
              <h3 className="py-2 text-textColor-yellow">More on The Blog</h3>
              <h3 className="py-2">About</h3>
              <h3 className="py-2">Write For us</h3>
              <h3 className="py-2">Contact Us</h3>
            </div>

            <div className="font-semibold py-5">
              <h3 className="py-2 text-textColor-yellow">More on DaniloMartinez</h3>
              <h3 className="py-2">About</h3>
              <h3 className="py-2">SocialMedia</h3>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
