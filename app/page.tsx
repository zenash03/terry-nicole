import config from '@/sanity/config/client-config';
import { client } from '@/sanity/lib/client';
import { getPhotoGalleryQuery } from '@/sanity/lib/queries';
import { getPhotos } from '@/sanity/sanity-utils';
import urlBuilder from '@sanity/image-url';
import React from 'react'

export default function Home() {
  return (
    <div>
      {/* {
        getPhotos().then(photos => (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            {photos.map(photo => (
              <div key={photo._id} style={{ border: '1px solid #ccc', padding: '8px' }}>
                <img src={urlBuilder(config).image(photo.image).url()} alt={photo.title} style={{ width: '100%', height: 'auto' }} />
                <h2>{photo.title}</h2>
                <p>Tags: {photo.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        ))
      } */}
    </div>
  )
}