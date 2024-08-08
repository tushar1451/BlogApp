import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import conf from './conf/conf.js'
import authService from './appwrite/auth.js'
import { login, logout } from './store/authSlice.js'
import { Footer, Header } from './components/Index.js'
function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch();

useEffect(() =>{
  authService.getCurrentUser()
  .then((userData) =>{
    if(userData)
    {
      dispatch(login({userData}))
    }
    else{
      dispatch(logout)
      console.log("dispatch called");
    }

  })
  .finally(()=> setLoading(false))
}, [])
  return !loading ? <div className='min-h-screen'> 
      <div>
        <Header/>
        
      </div> 
    </div> 
    : null
}

export default App
