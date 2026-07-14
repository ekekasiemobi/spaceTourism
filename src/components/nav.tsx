import Logo from '../assets/Subtract.png'
import Line from '../assets/line.png'
import { Link } from 'react-router-dom' 

function nav() {
  return (
    <div className="mt-7 absolute w-screen">
        <nav className="w-screen pl-15 flex justify-between items-center">
            <img className='w-5' src={Logo} alt="" />

            <img className='w-100' src={Line} alt="" />

            <ul className='bg-gradient-to-r from-[#0B0E18] to-[#1B2845] flex justify-center gap-9 p-7 w-[50vw]'>
                <li><Link className="text-white barlow" to="/">00 HOME</Link></li>

                <li><Link className="text-white barlow" to="/destinationA">01 DESTINATION</Link></li>
                
                <li><Link className="text-white barlow" to="/crewA">02 CREW</Link></li>

                <li><Link className="text-white barlow" to="">03 TECHNOLOGY</Link></li>

            </ul>
        </nav>
    </div>
  )
}

export default nav