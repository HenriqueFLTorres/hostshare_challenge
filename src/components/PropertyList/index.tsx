'use client';
import { getProperties } from '@/api/getData';
import { PropertyFilterAtom } from '@/atoms/PropertyFilter';
import Arrow from '@/icons/Arrow';
import Like from '@/icons/Like';
import Star from '@/icons/Star';
import { cn } from '@/utils/classNames';
import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { cache, use, useMemo, useState } from 'react';

export default function PropertyList() {
  const data = use(getProperties());
  const [{ category }] = useAtom(PropertyFilterAtom);

  const filteredData = useMemo(
    () => data?.filter((d: { category: string }) => d?.category === category),
    [category, data]
  );

  return (
    <ul className='grid px-4 md:px-10 py-6 lg:px-20 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-x-6 gap-y-10 auto-rows-[minmax(min-content_max-content)] grid-flow-dense'>
      {filteredData?.map((data: any) => (
        <PropertyCard key={data.info.id} info={data.info} />
      ))}
    </ul>
  );
}

function PropertyCard({ info }: { info: any }) {
  return (
    <Link href={`rooms/${info.id}`} className='flex group lg:max-w-[18.5rem] flex-col'>
      <ImageCarrousel images={info.images.data?.slice(0, 5)} />

      <div className='flex flex-col mt-2 text-neutral-500 text-sm font-normal'>
        <header className='flex justify-between flex-wrap'>
          <h2 className='font-semibold text-sm text-neutral-800'>
            {info.title}
          </h2>
          <span className='text-black inline-flex items-center gap-1'>
            <Star className='w-4 h-4 fill-black' />
            {info.ratings.guestSatisfactionOverall}
          </span>
        </header>
        <p>kilometers away</p>
        <p>kilometers away</p>
        <p className='text-neutral-800 mt-1'>
          <b className='font-semibold'>
            {info.currency.symbol}
            {info.price}
          </b>{' '}
          night
        </p>
      </div>
    </Link>
  );
}

function ImageCarrousel({ images }: { images: any[] }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className='aspect-square relative rounded-xl overflow-hidden'>
      <div
        className='flex flex-row relative w-full h-full transition-transform duration-500'
        style={{
          transform: `translateX(-${selectedImage * 100}%)`,
        }}
      >
        {images.map((image: { url: string }, index: number) => (
          <Image
            key={image.url}
            src={image.url}
            alt=''
            fill
            className='object-cover'
            sizes='(max-width: 768px) 400px, (max-width: 1200px) 300px, 330px'
            priority={index === 0}
            style={{
              transform: `translateX(${index * 100}%)`,
            }}
          />
        ))}
      </div>
      <Like className='w-4 h-4 absolute right-4 top-3 shadow-sm stroke-white' />
      <button
        onClick={() => setSelectedImage((prev) => (prev === 0 ? 0 : prev - 1))}
        className={cn(
          'w-8 absolute rounded-full left-3 top-1/2 -translate-y-1/2 h-8 bg-white opacity-0 group-hover:opacity-80 hover:opacity-100 transition-[opacity,_transform] hover:scale-105 flex items-center justify-center shadow-md',
          {
            ['!opacity-0 !pointer-events-none']: selectedImage === 0,
          }
        )}
        disabled={selectedImage === 0}
      >
        <Arrow className='w-3 h-3' />
      </button>
      <button
        onClick={() => setSelectedImage((prev) => (prev === 4 ? 4 : prev + 1))}
        className={cn(
          'w-8 absolute rounded-full right-3 top-1/2 -translate-y-1/2 h-8 bg-white opacity-0 group-hover:opacity-80 hover:opacity-100 transition-[opacity,_transform] hover:scale-105 flex items-center justify-center shadow-md',
          {
            ['!opacity-0 !pointer-events-none']: selectedImage === 4,
          }
        )}
        disabled={selectedImage === 4}
      >
        <Arrow className='w-3 h-3 rotate-180' />
      </button>
      <ul className='flex gap-1 mt-auto -translate-x-1/2 justify-center items-center absolute bottom-2 left-1/2'>
        {images.map((i: { url: string }, idx: number) => (
          <li
            key={i.url}
            className={cn(
              'w-2 block h-2 rounded-full bg-white opacity-50 transition-opacity',
              { ['opacity-100']: idx === selectedImage }
            )}
          ></li>
        ))}
      </ul>
    </div>
  );
}
