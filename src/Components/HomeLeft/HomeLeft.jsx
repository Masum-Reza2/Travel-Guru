import { AiOutlineArrowRight } from 'react-icons/ai';

const HomeLeft = () => {
    return (
        <div className="space-y-3">
            <h1 className="text-2xl md:text-6xl font-extrabold">Cox's bazar</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <div className='relative flex items-center justify-center gap-2 text-black w-fit'>
                <button className="bg-[#F9A51A] px-5 pr-7 py-2 rounded-md">Booking</button>
                <AiOutlineArrowRight className='absolute right-1' />
            </div>
        </div>
    )
}

export default HomeLeft