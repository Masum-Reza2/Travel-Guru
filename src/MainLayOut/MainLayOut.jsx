import { Outlet } from "react-router-dom"
import bgImg from '../assets/images/Rectangle 1.png'
import Navbar from "../Components/Navbar/Navbar"

const MainLayOut = () => {

    return (
        <div className="h-screen relative z-20">
            {/* insted of bg using it to maintain opacity */}
            <img className="absolute h-screen w-full -z-20 mix-blend-multiply brightness-[0.3]" src={bgImg} alt="" />
            <div className="brightness-100 text-white">
                <Navbar />
                <div className="min-h-[80vh]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayOut