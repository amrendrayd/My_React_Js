import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme';
import Themebtn from './componenets/Themebtn';
import Card from './componenets/Card';

function Main() {

    const [themeMode, setThemeMode] = useState("loght")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    // actual change in theme
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className='flex flex-wrap min-h-screen items-center'>
            <div className='w-full'>
                <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
                    <Themebtn/>
                </div>

                <div className='w-full max-w-sm mx-auto'>
                    <Card/>
                </div>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default Main;