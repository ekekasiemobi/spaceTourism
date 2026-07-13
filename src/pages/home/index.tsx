import Explore from '../../assets/Display Button States - Desktop and Tablet.png'
import Nav from '../../components/nav'

function Home() {

  return (

    <>
        <div className="min-h-screen hero-image relative">
            <Nav />
            <div className="flex justify-between w-[80vw] mx-auto items-center gap-140 pt-80">
                <div className='flex flex-col gap-5'>
                    <h1 className="text-white bellefair text-2xl">SO. YOU WANT TO TRAVEL TO</h1>
                    <h1 className="text-white text-9xl bellefair">SPACE</h1>
                    <p className="text-white barlow">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>

                <img className='w-35' src={Explore} alt="" />
            </div>

        </div>
    </>
  )
}

export default Home