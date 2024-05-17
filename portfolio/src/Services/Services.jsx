import React, { useState } from 'react';
import Navigation from '../Navigation/Nav.jsx';
import './Services.css';

function Services() {

    return (
        <>
            {/* <Navigation /> */}
            <div class="h-auto w-100 bg-slate-700" className='main'>
              <div className="head">
                   <h1 class="text-grey-200 text-center tracking-wide p-3"s>SERVICES</h1>
                   
              </div>
              <div class="min-h-screen flex items-end pb-10">
              <div class="flex flex-wrap justify-center gap-4">
                    <div class="max-w-sm bg-slate-700 shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
                        <div class="p-6 flex flex-col items-center">
                            <img src="https://www.svgrepo.com/show/530444/availability.svg" class="w-16 h-16 mb-4 transition duration-300 hover:brightness-125 hover:contrast-125" alt="Icon description" />
                            <h2 class="text-xl font-semibold mb-2 font-sans font-bold tracking-wide text-blue-600 ">FrontEnd Development</h2>
                            <p class="text-slate-400 text-base text-center font-serif">
                                Transforming designs into functional user interfaces using HTML, CSS, and JavaScript. Crafting visually appealing and responsive websites that enhance user experience across various devices and platforms.
                            </p>
                        </div>
                    </div>

                    <div class="max-w-sm bg-slate-700 shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
                        <div class="p-6 flex flex-col items-center">
                            <img src="https://www.svgrepo.com/show/530456/host-record.svg" class="w-16 h-16 mb-4" alt="Icon description" />
                            <h2 class="text-xl font-semibold mb-2 font-sans font-bold tracking-wide text-blue-600">BackEnd Development</h2>
                            <p class="text-slate-400 text-base text-center font-serif">
                                Building robust server-side applications and databases to power dynamic web applications. Leveraging technologies like Node.js, Python, or Ruby on Rails to manage data, handle requests, and ensure seamless functionality.
                            </p>
                        </div>
                    </div>

                    <div class="max-w-sm bg-slate-700 shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
                        <div class="p-6 flex flex-col items-center">
                            <img src="https://www.svgrepo.com/show/530437/safe-and-stable.svg" class="w-16 h-16 mb-4" alt="Icon description" />
                            <h2 class="text-xl font-semibold mb-2 font-sans font-bold tracking-wide text-blue-600">Cyber Security</h2>
                            <p class="text-slate-400 text-base text-center font-serif">
                                Safeguarding digital assets and sensitive information from potential threats and vulnerabilities. Implementing comprehensive security measures such as encryption, authentication, and intrusion detection to mitigate risks and ensure data integrity.
                            </p>
                        </div>
                    </div>

                    <div class="max-w-sm bg-slate-700 shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
                        <div class="p-6 flex flex-col items-center">
                            <img src="https://www.svgrepo.com/show/530439/api-interface.svg" class="w-16 h-16 mb-4" alt="Icon description" />
                            <h2 class="text-xl font-semibold mb-2 font-sans font-bold tracking-wide text-blue-600">Software Development</h2>
                            <p class="text-slate-400 text-base text-center font-serif">
                                Developing custom software solutions tailored to meet specific business needs. From conceptualization to deployment, creating scalable and efficient applications using industry-standard practices and cutting-edge technologies.
                            </p>
                        </div>
                    </div>

                    <div class="max-w-sm bg-slate-700 shadow-lg rounded-lg overflow-hidden transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-800 duration-300">
                        <div class="p-6 flex flex-col items-center">
                            <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" class="w-16 h-16 mb-4" alt="Icon description" />
                            <h2 class="text-xl font-semibold mb-2 font-sans font-bold tracking-wide text-blue-600">System Design</h2>
                            <p class="text-slate-400 text-base text-center font-serif">
                                Architecting reliable and scalable systems that meet performance and reliability requirements. Designing efficient software architectures, network infrastructures, and cloud-based solutions to support the seamless operation of applications and services.
                            </p>
                        </div>
                    </div>
              </div>
              </div>
            </div>
        </>
    );
}

export default Services;
