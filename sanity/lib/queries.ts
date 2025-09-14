import { groq } from 'next-sanity'

export const getPhotographersQuery = groq`*[_type == "photographer"]{
  _id,
  name,
  image {
    asset -> {
      _id,
      url
    }
  }
}`;

export const getPhotoGalleryQuery = groq`*[_type == "photo"]{
  _id,
  title,
  image {
    asset -> {
      _id,
      url
    }
  },
  tags
}`;