import React from 'react'

import ImageDetail from './image_detail'

const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400/000/fff' },
  { title: 'Pine Tree', link: 'https://dummyimage.com/600x400/000/fff' },
  { title: 'Mug', link: 'https://dummyimage.com/600x400/000/fff' }
]

const ImageList = () => {
  const RenderedImages = IMAGES.map( image =>
    <ImageDetail key={image.title} image={image} />
  )

  return (
    <ul className="media-list list-group">
      {RenderedImages}
    </ul>
  )
}

export default ImageList
