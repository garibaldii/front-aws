import { Toaster } from 'sonner'
import './App.css'
import { BucketSession } from './components/BucketSession'
import { Route, Routes } from 'react-router-dom'
import { BucketDetail } from './components/BucketDetail'

function App() {


  return (
    <div className='flex items-center justify-center' >
      <Routes>
        <Route path='/bucket/:name' element={<BucketDetail/>}/>
        <Route path='/buckets' element={<BucketSession/>}/>
      </Routes>

      <Toaster />
    </div>
  )
}

export default App
