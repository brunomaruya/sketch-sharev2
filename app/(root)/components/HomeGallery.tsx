import React from 'react';
import images from '@/data/images.json';
import Image from 'next/image';

export default function HomeGallery() {
  return (
    <div>
      {images.data.map((image, id) => {
        return (
          <div key={id}>
            <Image width={500} height={500} src={image.url} alt="image" />
          </div>
        );
      })}
    </div>
  );
}
