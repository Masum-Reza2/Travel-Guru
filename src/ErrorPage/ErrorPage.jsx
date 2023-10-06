import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const error = useRouteError()

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="border p-5 shadow-md shadow-gray-500 rounded-md space-y-3 text-center">
                <h1 className="text-2xl font-semibold">Oops!</h1>
                <p className="text-xl" >Sorry, an unexpected error has occurred.</p>
                <p className="font-semibold">
                    <i>{error.statusText || error.message}</i>
                </p>
                <Link to={'/'}>
                    <button className="boder px-3 py-1 shadow-md shadow-gray-500 rounded-md hover:-translate-y-[0.10rem] active:translate-y-[0.10rem] mt-2">Goto Home</button>
                </Link>
            </div>
        </div>
    )
}

export default ErrorPage