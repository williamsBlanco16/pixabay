import React from 'react';

const Form = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-md-8">
          <input 
            className="form-control form-control-lg"
            placeholder="buscador de imagenes, ejemplo: futbol o cafe"
            type="text"
          />

        </div>

        <div className="form-group col-md-4">
          <input 
            className="btn btn-lg btn-danger btn-block"
            type="submit"
            value="Buscar"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
