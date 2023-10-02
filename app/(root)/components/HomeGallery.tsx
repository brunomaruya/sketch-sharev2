'use client';
import React from 'react';
import images from '@/data/images.json';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import '../styles/Gallery.css';

export default function HomeGallery() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="mx-7">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid gap-5"
        columnClassName="my-masonry-grid_column"
      >
        {images.data.map((image, id) => {
          return (
            <div key={id} className="">
              <Image
                width={500}
                height={500}
                src={image.url}
                alt="image"
                className="mb-6 rounded-lg "
              />
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
