import Moon from '../../assets/image-moon.webp'
import Nav from '../../components/nav'

function DestinationB() {

  return (

    <>
        <div className="min-h-screen bg-[#101320] relative">

            <Nav />

            <div className='w-[80vw] mx-auto'>
                <p className='text-[#A6ABCA] barlow pt-30 text-2xl' >01 PICK YOUR DESTINATION</p>
            </div>

            <div className="flex justify-between w-[80vw] mx-auto items-center pt-10">
                <div className='w-[50vw]'>
                    <img className='w-115' src={Moon} alt="" />
                </div>

                
                <div className=' flex flex-col gap-7 w-[30vw]'>
                    
                    <ul className='flex gap-5'>
                        <li><a className='text-[#A6ABCA] barlow' href="/destinationA">MOON</a></li>
                        <li><a className='text-[#A6ABCA] barlow' href="/destinationB">MARS</a></li>
                        <li><a className='text-[#A6ABCA] barlow' href="/destinationC">EUROPA</a></li>
                        <li><a className='text-[#A6ABCA] barlow' href="/destinationD">TITIAN</a></li>
                    </ul>
                    

                    <div className='flex flex-col gap-5'>
                        
                        <h1 className="text-white text-8xl bellefair">MARS</h1>
                        <p className="text-[#A6ABCA] barlow">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-[#A6ABCA] barlow'>AVG. DISTANCE</p>
                            <p className='text-white barlow text-2xl'>384,400 km</p>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <p className='text-[#A6ABCA] barlow'>Est. travel time</p>
                            <p className='text-white barlow text-2xl'>3 days</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default DestinationB