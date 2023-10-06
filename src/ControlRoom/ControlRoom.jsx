/* eslint-disable react/prop-types */

import { createContext } from "react"

export const GlobalContext = createContext()

const ControlRoom = ({ children }) => {
    const globalValue = {
        name: 'Masum reza'
    }


    return (
        <GlobalContext.Provider value={globalValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default ControlRoom