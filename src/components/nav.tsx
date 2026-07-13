import Logo from '../assets/Subtract.png'
import Line from '../assets/line.png'

function nav() {
  return (
    <div className="mt-10 absolute w-screen">
        <nav className="w-screen pl-15 flex justify-between items-center">
            <img className='w-5' src={Logo} alt="" />

            <img className='w-100' src={Line} alt="" />

            <ul className='bg-gradient-to-r from-[#0B0E18] to-[#1B2845] flex justify-center gap-9 p-7 w-[50vw] flex-wrap'>
                <li><a className="text-white barlow" href="">00 HOME</a></li>

                <li><a className="text-white barlow" href="">01 DESTINATION</a></li>
                
                <li><a className="text-white barlow" href="">02 CREW</a></li>

                <li><a className="text-white barlow" href="">03 TECHNOLOGY</a></li>

            </ul>
        </nav>
    </div>
  )
}

export default nav