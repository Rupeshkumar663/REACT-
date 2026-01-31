import { Themeprovider } from './context/theme'

import './App.css'
import { useEffect, useState } from 'react'
import ThemeBtn from './component/ThemeBtn'
import Card from './component/Card'
function App() {
 const [themeMode,setThemeMode]=useState("light")

 const darkTheme=()=>{
   setThemeMode('dark')
 }
  const lightTheme=()=>{
   setThemeMode('light')
 }
  
 //actual theme----------------------------------
 useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark");
  document.querySelector('html').classList.add(themeMode)
 },[themeMode])


  return (
    <Themeprovider value={{themeMode,darkTheme,lightTheme}}>
     <div  className='flex flex-wrap min-h-screen  items-center '>
          <div className='w-full'>
            <div  className='w-full max-w-sm mx-auto flex justify-end mb-4'>
              {/*themeBtn*/}
              <ThemeBtn/>
            </div>

            <div  className='w-full max-w-sm mx-auto'>
              {/*card*/}
              <Card/>
            </div>

          </div>

     </div>
     </Themeprovider>
  )
}

export default App
