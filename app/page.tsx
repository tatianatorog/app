'use client';
import React, { useState } from 'react';
import type { MouseEventHandler } from 'react';
import { LazyImage } from "@/components/RandomFox"


const random = () => Math.floor(Math.random() * 123) + 1;

const generateId = () => Math.random().toString(36).substring(2);

type ImageItems = Array<{ id: string; url: string }>;



export default function Home() {
  const [images, setImages] = useState<ImageItems>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: { id: string; url: string } = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
    };

    setImages([...images, newImageItem]);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hola</h1>
      <button onClick={addNewFox}>Add new fox</button>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <LazyImage src={url} width={320} height="auto" title="random fox" className='rounded bg-gray-300' onClick={()=> console.log("hey")} />
        </div>
      ))}
      
    </main>
  );
}
        