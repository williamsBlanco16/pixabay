import React,{useState, useEffect} from 'react';
import Form from './Form';
import ListImgs from './ListImgs';

const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  useEffect(() => {
    if(!search) return
    const requestApi = async () => {
      const numberOfResult = '30'
      const API_KEY = '15430207-b4af63f91ba4c8a3b2091efb2'
      const URL= `https://pixabay.com/api/?key=${API_KEY}&q=&per_page=${numberOfResult}`

      const request = await fetch(URL)
      const response = await request.json()
      setImages(response.hits)
    }
    requestApi()
  }, [search]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador De Imagenes
        </p>
        <Form saveQuery={setSearch}/>
      </div>
      <div className="row justify-content-center">
        <ListImgs images={images}/>
      </div>
    </div>
  );
}

export default App;
