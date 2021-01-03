import React,{useState, useEffect} from 'react';
import Form from './Form';
import ListImgs from './ListImgs';

const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [currentPages, setCurrentPages] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    if(!search) return
    const requestApi = async () => {
      const numberOfResult = '30'
      const API_KEY = '15430207-b4af63f91ba4c8a3b2091efb2'
      const URL= `https://pixabay.com/api/?key=${API_KEY}&q=&per_page=${numberOfResult}&page=${currentPages}`

      const request = await fetch(URL)
      const response = await request.json()

      setTotalPages(Math.ceil(response.hits/numberOfResult))
      setImages(response.hits)
    }
    requestApi()
  }, [search, currentPages]);

  const previousPages = e => {
    if(currentPages < 1) return
    setCurrentPages(state => state - 1)
  }

  const nextPages = e => {
    if(currentPages > totalPages) return
    setCurrentPages(state => state + 1)
  }

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

        {
          currentPages != 1 &&
          <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={previousPages}
          >
           &laquo; Anterior 
          </button>
        }

        {
          currentPages != totalPages &&
          <button
            type="button"
            className="bbtn btn-info mr-1"
            onClick={nextPages}
          >
            Siguiente &raquo;
          </button>
        }

      </div>
    </div>
  );
}

export default App;
