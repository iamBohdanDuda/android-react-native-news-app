import { extendTheme } from "native-base";

export const theme = extendTheme({
        components: {
            Button: {
                baseStyle: {
                    rounded: "2xl",
                    
                },
                defaultProps: {
                    colorScheme: "info"
                },
                variants: {
                    infoButtonLarge: {
                        borderRadius: "2xl",
                        w: "50%",
                        colorScheme: "info",
                        bg: "blue.500"
                    },
                    infoButtonSmall: {
                        borderRadius: "3xl",
                        size: "sm",
                        colorScheme: "info",
                        w: "30%",
                        bg: "blue.500",
                        _pressed: {
                            bg: 'blue.200',
                        },
                    },
                    categoryButton: {
                        bg: "blue.500",
                        colorScheme: "success",
                        _pressed: {
                            bg: 'blue.200',
                        },
                    }
                }
            },
            Text: {
                variants: {
                    white: {
                        color: "white"
                    },
                    infoButtonLargeText: {
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "md"
                    },
                }
            },
            Box: {
                variants: {
                    newsCardContainer: {
                        rounded: "xl",
                        borderColor: "coolGray.200",
                        borderWidth: 1,
                        overflow: "hidden"
                    },
                    postsContainer: {
                        marginX: "10px"
                    },
                    articleContainer: {
                        margin: "10px"
                    },
                    bottomBoxWrapper: {
                        alignItems: "center",
                        m: 10
                    }
                }
            },
            VStack: {
                variants: {
                    settingsWrapper: {
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        borderRadius: "3xl",
                        paddingY: 4,
                        marginX: 4,
                        mt: 1,
                        bg: "gray.100" 
                    },
                }
            },
            Select: {
                baseStyle: {
                    borderRadius: "2xl",
                    h: "40px",
                    w: "100%"
                }
            }
        }
    })
