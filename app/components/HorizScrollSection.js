/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function HorizScrollSection() {
    return (
        <div class="overflow-x-auto whitespace-nowrap flex flex-row text-5xl gap-10 py-8 px-8">
            <div class="bg-slate-300 rounded-md px-4 py-4">
                <h1>Being able to browse through different datasets</h1>
                <p class="line-clamp-3 text-wrap ml-4">We hope also hope to add the ability to view other datasets! Here are some examples that are also from the Allen Institute </p>
                <ul class="list-disc ml-16">
                    <li>Allen Human Brain Atlas</li>
                    <li>Allen Cell Database</li>
                    <li>Allen Brain Observatory</li>
                </ul>
            </div>

            
            <div class="bg-slate-300 rounded-md px-4 py-4">
                <h1>Making a More Robust Model</h1>
                
                <p class="text-wrap ml-4">Due to time constraints, we weren't able to make our mouse brain 3D model as robust as we would`ve hoped!</p>
                <p class="text-wrap ml-4">Specifically we hope to: </p>
                <ul class="list-disc ml-16">
                    <li>Get nrrd files of the mouse brain from Allen SDK</li>
                    <li>Use package “pynrrd” to transfer nrrd to numpy arrays</li>
                    <li>Generate obj files that can be used in Unity with the numpy arrays</li>
                    <li>Have a human brain model thats color coded by region</li>
                </ul>
            </div>


            <div class="bg-slate-300 rounded-md px-4 py-4">
                <h1>Recording Live Brain Data</h1>
                <p class="text-wrap ml-4">Finding a way to record live brain data, with something like Open BCI, to be able to contiunuously update the brain data that is viewed.</p>

            </div>
        </div>
    );
}