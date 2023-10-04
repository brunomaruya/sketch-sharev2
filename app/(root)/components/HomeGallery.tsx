'use client';
import React from 'react';
import images from '@/data/images.json';
import Image from 'next/image';
import Masonry from 'react-masonry-css';
import '../styles/Gallery.css';
import ScrollReveal from '@/components/libs/ScrollReveal';

export default function HomeGallery() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
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
            <div key={id}>
              <ScrollReveal>
                <Image
                  width={500}
                  height={500}
                  src={image.url}
                  alt="image"
                  className="mb-6 rounded-lg sr "
                />
              </ScrollReveal>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}
