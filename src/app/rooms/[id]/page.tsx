'use client';
import RoomHeader from '@/components/Global/RoomHeader';
import PropertyPageDescription from '@/components/PropertyPage/Description';
import PropertyPageReserve from '@/components/PropertyPage/Reserve';
import PropertyPageTopSection from '@/components/PropertyPage/TopSection';
import Star from '@/icons/Star';
import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { cache, use } from 'react';

const getData = cache(async (id: string) => {
  const data = await fetch(
    'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  );
  const notionApi = await data.json();

  return notionApi?.data?.find((d: any) => d.info.id === id);
});

const reviewsCount = faker.datatype.number(400);

export default function Home({ params }: { params: { id: string } }) {
  const data = use(getData(params.id));

  const images = data.info.images.data?.slice(0, 5);
  const {
    ratings,
    location,
    price,
    currency,
    host,
    details,
    description,
    amenities,
  } = data.info;

  return (
    <main className='flex min-h-screen flex-col'>
      <RoomHeader />
      <div className='flex flex-col w-full max-w-6xl lg:px-4 mx-auto py-6'>
        <PropertyPageTopSection
          data={data}
          ratings={ratings}
          reviewsCount={reviewsCount}
          host={host}
          location={location}
        />

        <section className='grid relative h-full max-h-[60vh] mt-6 mb-12 grid-cols-[repeat(4,_minmax(250px,_300px))] grid-rows-[repeat(2,_minmax(250px,_300px))] lg:rounded-xl overflow-hidden gap-2'>
          {images.map((image: { url: string }) => (
            <div
              key={image.url}
              className='flex relative w-full h-full first:col-span-2 first:row-span-2'
            >
              <Image src={image.url} alt='' fill className='object-cover' />
            </div>
          ))}
        </section>

        <section className='flex flex-col lg:flex-row px-4 lg:px-0'>
          <div className='flex flex-col shrink-0 lg:w-[59%]'>
            <div className='flex justify-between items-center gap-2'>
              <div className='flex text-neutral-800 font-normal flex-col gap-1'>
                <h2 className='font-medium text-2xl'>Hosted by {host.name}</h2>
                <p className='text-base'>
                  {details.data
                    .map(
                      ({ value, type }: { value: string; type: string }) =>
                        `${value} ${Number(value) > 1 ? `${type}s` : type}`
                    )
                    .join(' · ')}
                </p>
              </div>
              <Image
                src={host.avatar.url}
                alt={host.name}
                width={56}
                height={56}
                className='object-cover rounded-full shrink-0'
              />
            </div>
            <hr className='border-secondary mt-6 mb-8' />

            <PropertyPageDescription description={description} />

            <hr className='border-secondary my-12' />

            <div className='flex flex-col gap-6'>
              <h2 className='font-medium text-2xl'>What this place offers</h2>

              <ul className='grid grid-cols-2 gap-4'>
                {amenities.data.map(
                  ({ group, title, type }: any) =>
                    group === 'Bathroom' && (
                      <div key={type} className='flex items-center gap-2'>
                        <Image
                          src={`/amenities/${type}.svg`}
                          alt=''
                          width={24}
                          height={24}
                        />
                        <p className='font-light text-sm'>{title}</p>
                      </div>
                    )
                )}
              </ul>

              <button className='border rounded-lg w-max py-3 px-6 hover:bg-gray-100 border-neutral-800'>
                Show all {amenities.count} amenities
              </button>
            </div>
          </div>
          <PropertyPageReserve
            currency={currency}
            ratings={ratings}
            price={price}
            reviewsCount={reviewsCount}
          />
        </section>

        <hr className='border-secondary my-12' />

        <div className='flex flex-col px-6 lg:px-0'>
          <span className='flex items-center text-xl gap-1'>
            <Star className='w-4 h-4 fill-black' />
            {ratings.guestSatisfactionOverall} ·{' '}
            <button>{reviewsCount} reviews</button>
          </span>

          <ul className='flex flex-col lg:grid grid-cols-2 gap-4 mt-8 mb-6'>
            {Object.entries(ratings).map(
              ([label, rate]) =>
                label !== 'guestSatisfactionOverall' && (
                  <div
                    key={label}
                    className='flex capitalize justify-between text-xs text-neutral-800'
                  >
                    <p>{label}</p>
                    <div className='flex gap-2 items-center'>
                      <span className='w-28 h-[3px] rounded-full bg-neutral-400 block'>
                        <span
                          className='h-full bg-black block'
                          style={{ width: `${Number(rate) * 20}%` }}
                        />
                      </span>
                      {Number(rate as string).toFixed(1)}
                    </div>
                  </div>
                )
            )}
          </ul>

          <ul className='flex flex-col lg:grid grid-cols-2 gap-6 my-2'>
            {Array.from(Array(6).keys()).map((i) => (
              <li className='flex flex-col gap-2' key={i}>
                <div className='flex items-center gap-2'>
                  <div className='w-10 h-10 rounded-full bg-neutral-100 animate-pulse' />
                  <span className='flex flex-col text-sm text-neutral-800'>
                    <b className='font-semibold'>John Doe</b>
                    <p className='text-neutral-500 font-normal'>May 2023</p>
                  </span>
                </div>

                <p className='line-clamp-4 font-light text-sm lg:pr-12'>
                  I cannot say enough great things about this place. Kaci and
                  Waylon have created a magical experience at the tree loft.
                  This Airbnb has been on my radar for awhile, but it is usually
                  booked out a year in advance. I was able to snag a last minute
                  cancellation! My husband and I own a restaurant and we needed
                  a few days away from the stress. The tree loft was exactly
                  what we needed. I was worried about being anxious not having
                  cell service or bored without tv and internet. Nope. I hate
                  how we rely on technology so much. Thank you for creating a
                  place that allows you to be closer to nature, enjoy the
                  company of someone you love, and tap into your true self and
                  desires. This will now be an annual trip at the very least.
                  For those of you that haven’t been..book it whatever date
                  comes available just book it.
                </p>
              </li>
            ))}
          </ul>

          <button className='border rounded-lg w-max mt-6 py-3 px-6 hover:bg-gray-100 border-neutral-800'>
            Show all reviews
          </button>
        </div>
      </div>
    </main>
  );
}
