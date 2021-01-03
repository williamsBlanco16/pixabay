import React from 'react';
import Image from './Image'
const ListImgs = ({images}) => {
  return (
    <div className="row p-5 col-12">
      {
        images.map(image => (
          <Image
            key={image.id}
            image ={image}
          />
        ))
      }
    </div>
  );
}

export default ListImgs;
