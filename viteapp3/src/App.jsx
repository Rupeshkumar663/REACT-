
import './App.css'
import Card from './Components/Card'
function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>tailwind</h1>
    {/* let myarr={
           username:"keshav"
           city:"Bihar"
     } */}
     let arr=[1,2,3]
    {/* <Card name='Nitish' someobj={arr}/>*/}
      <Card name='Anand'/>
       <Card name='keshav'/>
    </>
  )
}

export default App
