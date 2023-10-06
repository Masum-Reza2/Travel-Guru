import { useEffect, useState } from "react"
import { useLoaderData, useParams } from "react-router-dom"

const DetailsPlace = () => {
    const [targetData, setTargetData] = useState()

    const details = useLoaderData()
    const { id } = useParams()
    console.log(details, id)

    useEffect(() => {
        let requireData = details.find(detaile => detaile.id === Number.parseFloat(id))
        setTargetData(requireData)
    }, [targetData])
    console.log(targetData)

    return (
        <div className="flex flex-col md:flex-row gap-10 h-[88vh] items-center justify-center">
            <div className="border"></div>
            <div className="border"></div>
        </div>
    )
}

export default DetailsPlace