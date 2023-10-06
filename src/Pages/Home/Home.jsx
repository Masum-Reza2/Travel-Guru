import HomeLeft from "../../Components/HomeLeft/HomeLeft"
import HomeRight from "../../Components/HomeRight/HomeRight"

const Home = () => {
    return (
        <div className="min-h-[88vh] flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
            <div className=" w-full md:w-[40%] h-72">
                <HomeLeft />
            </div>
            <div className="w-full md:w-[60%] h-72">
                <HomeRight />
            </div>
        </div>
    )
}

export default Home