import './App.css'

function App() {

  return (
    <div className='flex '>
      <SideBar/>
      <MainBody/>
    </div>
  )
}

function SideBar(){
  return (
    <div className=' bg-blue-400 h-screen w-[200px] '>
      hare
    </div>
  )
}

function MainBody(){
  return(
   <div className='w-full'> 
    <div className=' h-48 bg-black'></div>
    <div className='grid grid-cols-9 gap-8 p-8 '>
      <div className='bg-green-300 h-96 col-span-2 -translate-y-20 rounded-2xl shadow-xl/20 h-[300px]'>
        hare
      </div>
      <div className='bg-yellow-300 h-96 col-span-4 rounded-2xl shadow-xl/20 '>
        krsna
      </div>
      <div className='bg-red-400 h-96 col-span-3 rounded-2xl shadow-xl/20 '>
        krsna
      </div>
    </div>
   </div>  
  )

}

export default App
