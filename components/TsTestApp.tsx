import React from "react";
import { Text } from "react-native";


interface TsTestAppProps {
    textFill?: string,
    children?: React.ReactNode
}

export const TsTestApp: React.FC<TsTestAppProps> = ({children, textFill}) => {
    console.log();
    

    return (
        <>
        {children}
        </>
    )
}