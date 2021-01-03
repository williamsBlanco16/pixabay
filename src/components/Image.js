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
      </div>
    </div>
  );
}

export default Image;
