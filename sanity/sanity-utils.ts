import React from 'react'
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from './config/client-config';
import ImageUrlBuilder from "@sanity/image-url";
import { Photo } from '@/types/photo';
import { getPhotoGalleryQuery } from './lib/queries';


export const client = createClient(clientConfig);
export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export async function sanityFetch<QueryResponse>({
    query,
    queryParams,
    tags,
}: {
    query: string;
    queryParams: QueryParams;
    tags?: string[];
}): Promise<QueryResponse> {
  return (
    client.fetch<QueryResponse>(query, queryParams, { cache: 'force-cache', next: { tags } })
  )
}

export const getPhotos = async () => {
  const data: Photo[] = await sanityFetch<Photo[]>({
    query: getPhotoGalleryQuery,
    queryParams: {},    
  });
  return data;
};