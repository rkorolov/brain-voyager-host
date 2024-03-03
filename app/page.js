"use client";

import Banner from "./components/Banner";
import Image from "next/image";
import LittleCircle from "./components/LittleCircle";
import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import HorizScrollSection from "./components/HorizScrollSection";


export default function Home() {

  useEffect(() => {
    Aos.init({duration:1200})
  })
  
  return (
      
      <div class=" w-screen" data-aos="fade-up" >
        {/*  */}
        
        <div class="">
        <Banner/>
        <div id="hero" class=" border-b-2 h-auto gap-6 py-4 flex justify-center flex-row px-40 bg-slate-500">
          <div id="image" class=" bg-slate-700 border-2 border-slate-100  hover:shadow-lg hover:shadow-slate-300 rounded-full hover:animate-spin">
            <Image
              src="/vrLogo.png"
              width={500}
              height={400} 
              alt="transparent img"
            />

          </div>

          <div id="text" class=" bg-white w-2/3 text-right py-4 pr-8 rounded-xl">
            <h2 class="text-4xl border-1">Overview</h2>

            <div class=" text-left text-3xl px-8 border-t-2 border-slate-400 py-10">

              <h3 class="mr-0 pt-2">What ?</h3>
              <p class="text-xl font-mono pb-2">We created <span class="font-semibold">Brain Voyager</span>, a way to view data visualizations in a 3D space.</p>
              <p class="mr-8">We have made 3 data visualizations: </p>
              <ul class="list-disc ml-8">
                <li>Loose Representation of the Brain (Allen Dataset)</li>
                <li>Live Updating Bar Graphs (SynapTech Data)</li>
                <li>Brain Representation</li>
              </ul>
              <h3>Why ?</h3>
              <p class="text-xl font-mono pb-2">To encourage data literacy by providing an engaging medium to view and understand important data.</p>
            </div>
            
          </div>
          
        </div>

        </div>

        <div id="dataset " class="grid grid-cols-2 gap-4 border-b-2">
          <div class="border-r-2">

          <h2 class="text-3xl p-8">Context on the allen dataset</h2>

          <p class="px-8 leading-9">The <span> Allen Mouse Brain Connectivity Atlas</span> provides comprehensive information about 
            the connectivity patterns of neural circuits in the mouse brain. This dataset includes 
            anatomical tracing data, synaptic connectivity maps, and connectivity matrices for different 
            brain regions. Visualizing brain connectivity patterns in VR can help users explore the structural and functional organization of neural circuits and <span>understand how information flows through the brain.</span></p>

          </div>

          <div id="allenLink" class="text-3xl px-8 py-4 text-center flex flex-col mx-auto justify-center">
            <h2 class="py-2 ">Check out the Allen Mouse Brain Dataset Below</h2>

            <a target="_blank" href="https://connectivity.brain-map.org/" class="pl-16  rounded-full border-4 border-slate-200 py-4 bg-indigo-50 hover:shadow-xl active:border-4 active:border-slate-300 hover:animate-pulse">
              <Image
                src="/mouse.png"
                width={350}
                height={350}
                alt="mouse friend"
              />
            </a>
          </div>
        </div>

        
        <h1 class="text-6xl py-4 px-12" data-aos="fade-up">Our Process</h1>
        <div id="entire" class="flex flex-row justify-between border-b-2" data-aos="fade-up" > 

        <div id="timeline" class="flex flex-col">
          <div id="littlecircle">
          <LittleCircle />
          </div>
          <div id="process" class="flex flex-col ml-20 px-4  w-5/6 border-l-2">
              <div id="timeline" class=" flex flex-col w-auto pb-10">
                <div id="dataset" class="text-left">
                  <h2>Selecting a dataset</h2>
                  <p>We chose the Allen Mouse Brain Connectivity because we were the most interested in looking at how brain connectivity works!</p>
                </div>
              </div>
          </div>

          <div id="littlecircle">
          <LittleCircle />
          </div>
          <div class="flex flex-col ml-20 px-4 pb-10 w-5/6 border-l-2">
          <div id="preprocess" class="text-left">
            <h2>Preprocessing Data</h2>

            <p>We followed sample code from Allen SDK to get all the relevant data. </p>
          
          </div>
          </div>

          <div id="littlecircle">
          <LittleCircle />
          </div>
          <div class="flex flex-col ml-20 px-4 pb-10  w-5/6 border-l-2">
          <div id="preprocess" class="text-left">
            <h2>Model Creation </h2>
            <p>From the data we extracted in our processing, we used the x, y, and z coordinates to create a 3D model of corresponding squares, which is a loose representation of the brain.</p>
            <p>For our second visualizations, live brain data updating, we created around 40 bargraphs at different instants of time to string together in an animation.</p>
          
          </div>
          </div>

          <div id="littlecircle">
          <LittleCircle />
          </div>
          <div class="flex flex-col ml-20 px-4 pb-10  w-5/6 border-l-2">
          <div id="preprocess" class="text-left">
            <h2>Creating the Visualization</h2>
            <p>To create the actual visualization, we imported our models into Unity.</p>
          </div>
          </div>

         

        </div>

        <div class="place-self-end px-4 pr-10 sticky bottom-0 hover:animate-bounce">
          <Image
            src="/rocket2.png"
            width={1000}
            height={1000}
            alt="rocket"
           />
        </div>

        
          
        </div>

        <div id="future section" class="flex flex-col border-b-2" data-aos="fade-up">
          
          <h1 class="text-6xl mt-4 px-8">Future Goals</h1>

          <HorizScrollSection />

        </div>

        <h1 class="text-6xl px-8 py-4" data-aos="fade-up">Skills Learned / Used / Practiced</h1>
        <div id="skillsUsed"class="flex flex-row px-8 gap-x-4" data-aos="fade-up">

          
          <div class="flex flex-col px-8">
          <p class="font-bold text-3xl">Languages</p>
          <ul class="px-4 pb-4 list-disc flex flex-col">
            <li>C#</li>
            <li>Bash</li>
            <li>Python</li>
          </ul>
          </div>

          <div class="flex flex-col px-8">
            <p class="font-bold text-3xl w-fit">Modeling</p>
          <ul class=" pb-4 px-4 list-disc flex flex-col">
            <li>SolidWorks</li>
            <li>F3D</li>
            <li>Blender</li>
            <li>Unity</li>
          </ul>
          </div>

          <div class="flex flex-col">
          <p class="font-bold text-3xl pr-10">Processing<span class="text-white">_</span>Data</p>
          <ul class="px-12 pb-4 list-disc flex flex-col">
            <li>Allen SDK</li>
            <li>Excel</li>
          </ul>
          </div>

          <div class="flex flex-col">
          <p class="font-bold text-3xl pr-10">Website</p>
          <ul class="px-12 pb-4 list-disc flex flex-col">
            <li>JS (React, Next.js, Node.js)</li>
            <li>CSS (TailwindCSS)</li>
            <li>HTML</li>
          </ul>
          </div>
          


          {/* <ul class="px-12 pb-4 list-disc">
            <li>VR Development</li>
            <li>Using Oculus SDK</li>
            <li>C#, Bash, Python</li>
            <li>Solidworks</li>
            <li>Allen SDK</li>
            <li>F3D</li>
            <li>Modeling in Blender</li>
            <li>Developing in Unity</li>
            <li>Making a super cool gorgeous amazing showstopping website 😸</li>
          </ul> */}

        </div>

        <div id="Website Info">

        </div>


      </div>
  );
}