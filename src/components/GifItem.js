import React from 'react';

const GifItem = (image) => {

  const style = {
    width:'300px',
    height: '300px',
    marginBottom: '30px',
  }

  return (
    <div className="container">
      <img style={style} src={image.gif.images.downsized.url} />
    </div>
  )
};

export default GifItem;