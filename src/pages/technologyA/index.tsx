import { useState } from 'react'
import Technology from '../../assets/image-launch-vehicle-portrait.jpg'
import Space from '../../assets/image-spaceport-portrait.jpg'
import Capsule from '../../assets/image-space-capsule-portrait.jpg'
import Nav from '../../components/nav'
// import { Link } from 'react-router-dom'

function TechnologyA() {
    const [active, setActive] = useState(1);

    const handleActive = (num:any) => {
        setActive(num)
    }

  return (
    

    <>
        <div className="min-h-screen bg-[#101320] relative technology">

            <Nav />

            <div className='w-[80vw] mx-auto'>
                <p className='text-[#A6ABCA] barlow pt-30 text-2xl' >03 SPACE LAUNCH 101</p>
            </div>

            <div className="flex justify-between w-[80vw] mx-auto items-center pt-10">
                

                
                <div className=' flex justify-center items-center gap-7'>


                    <div className='flex flex-col gap-7'>
                        <button onClick={() => handleActive(1)} className='bg-white rounded-full  px-7 py-5 ' >1</button>
                        <button onClick={() => handleActive(2)} className='bg-white rounded-full  px-7 py-5 '>2</button>
                        <button onClick={() => handleActive(3)} className='bg-white rounded-full  px-7 py-5 ' >3</button>
                    </div>
                    {active === 1 &&(
                        <>
                            <div className='flex flex-col gap-5 w-[30vw]'>
                        
                                <h1 className="text-white text-3xl bellefair">THE TERMINOLOGY… </h1>
                                <p className="text-white text-5xl bellefair">LAUNCH VEHICLE</p>
                                <p className="text-[#A6ABCA] barlow">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                            </div>

                    

                            <div className='w-[35vw]'>
                                <img className='w-full' src={Technology} alt="" />
                            </div>
                        </>
                    )}

                    {active === 2 &&(
                        <>
                            <div className='flex flex-col gap-5 w-[30vw]'>
                        
                                <h1 className="text-white text-3xl bellefair">THE TERMINOLOGY </h1>
                                <p className="text-white text-5xl bellefair">SPACEPORT</p>
                                <p className="text-[#A6ABCA] barlow">A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                            </div>

                    

                            <div className='w-[35vw]'>
                                <img className='w-full' src={Space} alt="" />
                            </div>
                        </>
                    )}

                    {active === 3 &&(
                        <>
                            <div className='flex flex-col gap-5 w-[30vw]'>
                        
                                <h1 className="text-white text-3xl bellefair">THE TERMINOLOGY… </h1>
                                <p className="text-white text-5xl bellefair">SPACE CAPSULE</p>
                                <p className="text-[#A6ABCA] barlow">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                            </div>

                    

                            <div className='w-[35vw]'>
                                <img className='w-full' src={Capsule} alt="" />
                            </div>
                        </>
                    )}
                  
                    

                </div>

            </div>

        </div>
    </>
  )
}

export default TechnologyA