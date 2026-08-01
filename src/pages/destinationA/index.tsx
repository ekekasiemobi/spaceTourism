import { useState } from 'react'
import Moon from '../../assets/image-moon.webp'
// import Mars from '../../assets/destination/image-mars.webp'
import Mars from '../../assets/image-mars.webp'
import Titan from '../../assets/image-titan.png'
import Europa from '../../assets/image-europa.png'
import Nav from '../../components/nav'


function DestinationA() {
    const [active, setActive] = useState("MOON");

    const handleActive = (name: string) => {
        setActive(name)
    }

    return (
        <div className="min-h-screen destination relative">

            <Nav />

       
            <div className='container mx-auto mb-8'>
                <p className='text-[#A6ABCA] barlow pt-30 text-2xl'>01 PICK YOUR DESTINATION</p>
            </div>

        
            <div className="flex justify-between container mx-auto items-center">

              
                {/* <div className='w-1/2'>
                    <img className='w-full' src={Moon} alt={active} />
                </div> */}

               
                <div className='flex flex-col gap-7'>

                    <div className='flex justify-center gap-8 pb-2 ml-65'>
              
                        <button 
                            onClick={() => handleActive("MOON")} 
                            className={`pb-2 transition-all ${active === "MOON" ? "border-b-2 border-white text-white barlow" : "text-gray-500 barlow hover:text-gray-300"}`}
                        >
                            MOON
                        </button>
            
                  
                        <button 
                            onClick={() => handleActive("MARS")} 
                            className={`pb-2 transition-all ${active === "MARS" ? "border-b-2 border-white text-white barlow" : "text-gray-500 barlow hover:text-gray-300"}`}
                        >
                            MARS
                        </button>
                        
                        <button 
                            onClick={() => handleActive("EUROPA")} 
                            className={`pb-2 transition-all ${active === "EUROPA" ? "border-b-2 border-white text-white barlow" : "text-gray-500 barlow hover:text-gray-300"}`}
                        >
                            EUROPA
                        </button>
                      
                        <button 
                            onClick={() => handleActive("TITAN")} 
                            className={`pb-2 transition-all ${active === "TITAN" ? "border-b-2 border-white text-white barlow" : "text-gray-500 barlow hover:text-gray-300"}`}
                        >
                            TITAN
                        </button>
                    
                    </div>

                  
                    {active === "MOON" && (
                        <>
                            <div className='flex gap-20 justify-center items-center'>

                                <div className='w-[35%]'>
                                    <img className='w-full' src={Moon} alt={active} />
                                </div>

                                <div className='w-[40%]'>
                           
                                    <div className='flex flex-col gap-5'>
                                        <h1 className="text-white text-8xl bellefair">MOON</h1>
                                        <p className="text-[#A6ABCA] barlow">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                                    </div>

                                    <div className='flex justify-between border-t border-slate-800 pt-6'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>AVG. DISTANCE</p>
                                            <p className='text-white barlow text-2xl'>384,400 km</p>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>EST. TRAVEL TIME</p>
                                            <p className='text-white barlow text-2xl'>3 DAYS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {active === "MARS" && (
                        <>
                            <div className='flex gap-20 justify-center items-center'>

                                <div className='w-[35%]'>
                                    <img className='w-full' src={Mars} alt={active} />
                                </div>

                                <div className='w-[40%]'>
                           
                                    <div className='flex flex-col gap-5'>
                                        <h1 className="text-white text-8xl bellefair">MARS</h1>
                                        <p className="text-[#A6ABCA] barlow">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                                    </div>

                                    <div className='flex justify-between border-t border-slate-800 pt-6'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>AVG. DISTANCE</p>
                                            <p className='text-white barlow text-2xl'>225,400 km</p>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>EST. TRAVEL TIME</p>
                                            <p className='text-white barlow text-2xl'>9 MONTHS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {active === "EUROPA" && (
                        <>
                            <div className='flex gap-20 justify-center items-center'>

                                <div className='w-[35%]'>
                                    <img className='w-full' src={Europa} alt={active} />
                                </div>

                                <div className='w-[40%]'>
                           
                                    <div className='flex flex-col gap-5'>
                                        <h1 className="text-white text-8xl bellefair">EUROPA</h1>
                                        <p className="text-[#A6ABCA] barlow">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. Take a dip in its icy ocean, or go ice-skating across its vast frozen surface.</p>
                                    </div>

                                    <div className='flex justify-between border-t border-slate-800 pt-6'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>AVG. DISTANCE</p>
                                            <p className='text-white barlow text-2xl'>628,000,000 km</p>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>EST. TRAVEL TIME</p>
                                            <p className='text-white barlow text-2xl'>3 YEARS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}


                    {active === "TITAN" && (
                        <>
                            <div className='flex gap-20 justify-center items-center'>

                                <div className='w-[35%]'>
                                    <img className='w-full' src={Titan} alt={active} />
                                </div>

                                <div className='w-[40%]'>
                           
                                    <div className='flex flex-col gap-5'>
                                        <h1 className="text-white text-8xl bellefair">TITAN</h1>
                                        <p className="text-[#A6ABCA] barlow">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                                    </div>

                                    <div className='flex justify-between border-t border-slate-800 pt-6'>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>AVG. DISTANCE</p>
                                            <p className='text-white barlow text-2xl'>1.6 BIL. km</p>
                                        </div>

                                        <div className='flex flex-col gap-2'>
                                            <p className='text-[#A6ABCA] barlow text-xs tracking-widest'>EST. TRAVEL TIME</p>
                                            <p className='text-white barlow text-2xl'>7 YEARS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                </div>

            </div>

        </div>
    )
}

export default DestinationA