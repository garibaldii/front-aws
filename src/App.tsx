import { Toaster } from 'sonner'
import './App.css'
import { UserSession } from './components/UserSession'

function App() {


  return (
    <div className='flex items-center justify-center' >
      <UserSession />

      <Toaster />
    </div>
  )
}

export default App
