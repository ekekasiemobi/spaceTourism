import Crew from '../../assets/image-douglas-hurley.png'
import Nav from '../../components/nav'

function CrewA() {

  return (

    <>
        <div className="min-h-screen bg-[#101320] relative">

            <Nav />

            <div className='w-[80vw] mx-auto'>
                <p className='text-[#A6ABCA] barlow pt-30 text-2xl' >02 MEET OUR CREW</p>
            </div>

            <div className="flex justify-between w-[80vw] mx-auto items-center pt-10">
                

                
                <div className=' flex flex-col gap-7 w-[35vw]'>
                  
                    <div className='flex flex-col gap-5'>
                        
                        <h1 className="text-white text-3xl bellefair">COMMANDER </h1>
                        <p className="text-white text-5xl bellefair">DOUGLAS HURLEY</p>
                        <p className="text-[#A6ABCA] barlow">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    </div>

                </div>

                <div className='w-[40vw]'>
                    <img className='w-95' src={Crew} alt="" />
                </div>

            </div>

        </div>
    </>
  )
}

export default CrewA