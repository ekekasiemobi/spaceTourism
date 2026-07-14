import Technology from '../../assets/image-space-capsule-portrait.jpg'
import Nav from '../../components/nav'

function TechnologyC() {

  return (

    <>
        <div className="min-h-screen relative technology">

            <Nav />

            <div className='w-[80vw] mx-auto'>
                <p className='text-[#A6ABCA] barlow pt-30 text-2xl' >03 SPACE LAUNCH 101</p>
            </div>

            <div className="flex justify-between w-[80vw] mx-auto items-center pt-10">
                

                
                <div className=' flex justify-center items-center gap-7 w-[40vw]'>
                    <ul className='flex flex-col gap-13'>
                        <li><a className='bg-white rounded-full  px-6 py-5 ' href="/technologyA">1</a></li>
                        <li><a className='bg-white rounded-full  px-6 py-5 ' href="/technologyB">2</a></li>
                        <li><a className='bg-white rounded-full  px-6 py-5 ' href="/technologyC">3</a></li>
                    </ul>
                  
                    <div className='flex flex-col gap-5'>
                        
                        <h1 className="text-white text-3xl bellefair">THE TERMINOLOGY… </h1>
                        <p className="text-white text-5xl bellefair">LAUNCH VEHICLE</p>
                        <p className="text-[#A6ABCA] barlow">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                    </div>

                </div>

                <div className='w-[30vw]'>
                    <img className='w-95' src={Technology} alt="" />
                </div>

            </div>

        </div>
    </>
  )
}

export default TechnologyC