'use client';
import { PropertyFilterAtom } from '@/atoms/PropertyFilter';
import Arrow from '@/icons/Arrow';
import { cn } from '@/utils/classNames';
import { useAtom } from 'jotai';
import Image from 'next/image';
import { cache, use, useEffect, useRef, useState } from 'react';
import FilterModal from './FilterModal';

const getData = cache(async () => {
  const data = await fetch(
    'https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685308258589&signature=Uwu9OZixsV6q4lIkM4RGdWT86gzpBQodVmzhbPzzAMM&downloadName=listings.json'
  );
  const notionApi = await data.json();

  return notionApi?.categories;
});

export default function FiltersList() {
  const categories = use(getData());
  const [{ category }, setFilter] = useAtom(PropertyFilterAtom);

  const [{ showLeft, showRight }, setShowScroll] = useState({
    showLeft: false,
    showRight: true,
  });
  const filtersElementRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!filtersElementRef.current) return;
    const showLeft = filtersElementRef.current?.scrollLeft > 0;
    const showRight =
      filtersElementRef.current?.scrollLeft +
        filtersElementRef.current.clientWidth <
      filtersElementRef.current?.scrollWidth;

    setShowScroll({
      showLeft,
      showRight,
    });
  };

  useEffect(() => {
    filtersElementRef?.current?.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      filtersElementRef?.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='flex shadow-md shadow-black/5 md:shadow-none w-full items-center relative md:px-10 lg:px-20'>
      <div className='flex grow overflow-hidden relative justify-between items-center'>
        <div
          className={cn(
            'h-full hidden absolute pointer-events-none pl-4 pr-12 z-10 bg-gradient-to-r opacity-0 transition-opacity from-white via-white to-white/0 md:flex items-center justify-center',
            {
              ['opacity-100']: showLeft,
            }
          )}
        >
          <button
            onClick={() =>
              filtersElementRef.current?.scroll({
                left:
                  filtersElementRef.current?.scrollLeft -
                  filtersElementRef.current?.clientWidth / 2,
                behavior: 'smooth',
              })
            }
            className={cn(
              'bg-white hover:shadow-lg hover:scale-110 transition-[box-shadow,_transform] shrink-0 grid place-items-center w-7 h-7 border border-secondary rounded-full',
              { ['pointer-events-auto']: showLeft }
            )}
            disabled={!showLeft}
          >
            <Arrow className='w-3 h-3 fill-neutral-800' />
          </button>
        </div>

        <div
          className='flex relative w-full gap-4 grow lg:gap-8 overflow-auto md:overflow-hidden px-4'
          ref={filtersElementRef}
        >
          {categories.map(
            ({
              id,
              type,
              title,
            }: {
              id: string;
              type: string;
              title: string;
            }) => (
              <button
                key={id}
                className={cn(
                  'flex shrink-0 group flex-col gap-2 opacity-60 hover:opacity-100 motion-safe:transition-opacity items-center pt-4 pb-3',
                  { ['opacity-100']: category === id }
                )}
                onClick={() => setFilter((prev) => ({ ...prev, category: id }))}
              >
                <Image
                  src={`/filters/${type}.jpeg`}
                  alt={title}
                  width={24}
                  height={24}
                />
                <p
                  className={cn(
                    "text-xs capitalize after:hidden group-hover:after:block after:absolute relative flex flex-col after:translate-y-6 after:content-[''] after:w-full after:bg-neutral-300 after:h-[2px] text-black shrink-0 font-semibold after:transition-colors",
                    { ['after:block after:bg-black']: category === id }
                  )}
                >
                  {title}
                </p>
              </button>
            )
          )}
        </div>

        <div
          className={cn(
            'h-full hidden absolute right-0 pointer-events-none pr-4 pl-12 z-10 bg-gradient-to-l from-white via-white to-white/0 md:flex items-center opacity-0 transition-opacity justify-center',
            {
              ['opacity-100']: showRight,
            }
          )}
        >
          <button
            onClick={() =>
              filtersElementRef.current?.scroll({
                left:
                  filtersElementRef.current?.scrollLeft +
                  filtersElementRef.current?.clientWidth / 2,
                behavior: 'smooth',
              })
            }
            className={cn(
              'bg-white hover:shadow-lg hover:scale-110 transition-[box-shadow,_transform] shrink-0 grid place-items-center w-7 h-7 border border-secondary rounded-full',
              { ['pointer-events-auto']: showRight }
            )}
            disabled={!showRight}
          >
            <Arrow className='w-3 h-3 rotate-180 fill-neutral-800' />
          </button>
        </div>
      </div>

      <FilterModal />
    </section>
  );
}
