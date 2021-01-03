import React from 'react';

const Image = ({image}) => {
  const {largeImageURL, likes, previewURL, tags, views} = image
  return (
    <div className="col-12 col-sm-6 col-md4 col-log-3">
      <div className="card">
        <img 
          src={previewURL} 
          alt={tags}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text">{likes} likes</p>
          <p className="card-text">{views} views</p>
        </div>
        <div className="card-footer">
          <a 
            target="_blank" 
            href={largeImageURL}
            rel="noopener noreferrer"
            className="btn btn-primary btn-block"
          >
              Ver Imagen
            </a>
        </div>
      </div>
    </div>
  );
}

export default Image;
