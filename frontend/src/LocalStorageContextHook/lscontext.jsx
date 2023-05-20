import React, { createContext, useContext, useState } from "react";

const LsContext = createContext(null);

export function Lsprovider({ value, children }) {
    !localStorage.getItem(value) && localStorage.setItem(value, null)
    const [ls, setls] = useState(JSON.parse(localStorage.getItem(value)));
    return (
        <LsContext.Provider value={{ lsValue: ls, lsKey: value, setls }}>
            {children}
        </LsContext.Provider>
    )
}

export const useLS = () => {
    const { lsValue, lsKey, setls } = useContext(LsContext);

    const handleSetLS = (value) => {
        // console.log(value);
        localStorage.setItem(lsKey, JSON.stringify(value));
        setls(value);
    }

    return { value: lsValue, setls: handleSetLS };
};