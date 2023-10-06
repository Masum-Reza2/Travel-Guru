import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HomeRight = () => {
    const [places, setPlaces] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/touristPlaces.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div>
            <div className="carousel rounded-box space-x-5">
                {
                    places.map((place, index) => {
                        const { id, destination, img } = place;
                        const handlePlaces = () => {
                            navigate(`/destination/${id}`)
                        }
                        return (
                            <div key={index} onClick={handlePlaces} className="carousel-item rounded-3xl h-[65vh] cursor-pointer relative">
                                <img className='h-full w-[20vw] rounded-2xl' src={img} alt={destination} />
                                <h1 className='absolute bottom-5 left-2 font-bold text-2xl'>{destination}</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomeRight