import React, { useContext } from 'react'
import Body from '../components/Body/Body'
import Header from '../components/Header/Header'
import { Button } from '@chakra-ui/react'
import { AuthContext } from '../context/AuthProvider'

const Home = () => {
  const {username,logout}=useContext(AuthContext)

  const handleLogout=()=>{
    logout()
  }
  return (
    <div>
      <Button onClick={handleLogout}>Logout </Button>
        <Header />
    
        <Body />
      
    </div>
  )
}

export default Home
