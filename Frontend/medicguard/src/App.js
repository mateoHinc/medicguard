import './App.css';
import { useState, useEffect} from 'react';
import axios from 'axios';

function App() {
    
    const [user, setUser] = useState([]);
    const fetchData = () => {
        return axios.get("localhost:8080/api/auth/register").then((respone) => setUser(respone.data))
    } 

    useEffect(() => {
        fetchData();
    }, [])

  return (
    <div className="App">
      <h1>Usuarios</h1>
      <ul>
        {user && user.length > 0  && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
