import React, {useState} from 'react';
import Error from './Error';

const Form = ({saveQuery}) => {
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);
  const handlerSubmit = e =>{
    e.preventDefault()
    if(!query.trim()){
      setError(true)
      return
    }
    setError(false)
    saveQuery(query)
  }
  return (
    <form onSubmit={handlerSubmit}>
      <div className="row">
        <div className="form-group col-md-8">
          <input 
            className="form-control form-control-lg"
            placeholder="buscador de imagenes, ejemplo: futbol o cafe"
            type="text"
            name="query"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

        </div>

        <div className="form-group col-md-4">
          <input 
            className="btn btn-lg btn-danger btn-block"
            type="submit"
            value="Buscar"
          />
        </div>
        {error && <Error message="Agrega un término de búsqueda"/>}
      </div>
    </form>
  );
}

export default Form;
