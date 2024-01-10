'use client';
import { RandomFox } from "@/components/RandomFox"

import React, { useState } from 'react';

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

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hola</h1>
      {images.map(({ id, url }) => (
        <div key={id} className="p-4">
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
}
        