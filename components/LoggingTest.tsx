import { Text } from "react-native"
import React from "react"

interface LoggingTestProps {
    children?: React.ReactNode,
    name?: string
}

export const LoggingTest: React.FC<LoggingTestProps> = ({children, name}) => {
    console.log("test2");
    

    return (
        <Text>{children}{name}</Text>
    )
}
