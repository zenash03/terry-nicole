import React from 'react'
import SmoothScrolling from './_components/SmoothScrolling'
import Header from './_components/Header'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import GallerySection from '@/components/GallerySection'

export default function Home() {
  return (
    <div>
      <SmoothScrolling>
        <div className="overflow-x-hidden">
          <Header />
          <HeroSection />  
          <AboutSection />    
          <GallerySection />  
          <AboutSection />
        </div>

      </SmoothScrolling>
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