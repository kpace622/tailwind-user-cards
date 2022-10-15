import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/kpace622/followers')
    .then(res => {
      setUserData(res.data)
    })
  }, [])

  return (
    <div className='w-5/6 m-auto bg-slate-400' >
      <h1 className='text-3xl font-bold underline text-center my-8'>GitHub Followers</h1>
      <UserCard userData={userData}/>
    </div>
  );
}

export default App;
