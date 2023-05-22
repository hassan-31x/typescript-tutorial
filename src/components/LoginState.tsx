import { useState } from 'react';

const LoginState = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleLogout = () => {
        setIsLoggedIn(false)
    }


  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User is {isLoggedIn ? 'Logged IN' : 'Logged OUT'}</p>
    </div>
  )
}

export default LoginState
