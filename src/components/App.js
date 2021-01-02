import React from 'react';
import Form,{useState, useEffect} from './Form';

const App = () => {
  const [search, setSearch] = useState([]);
  useEffect(() => {
    const request = async () => {
      
    }
  }, [search]);
  
  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador De Imagenes
        </p>
        <Form saveQuery={setSearch}/>
      </div>
    </div>
  );
}

export default App;
