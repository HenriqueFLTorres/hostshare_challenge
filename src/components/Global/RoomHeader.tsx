import Arrow from '@/icons/Arrow';
import Download from '@/icons/Download';
import Globe from '@/icons/Globe';
import Hamburguer from '@/icons/Hamburguer';
import Like from '@/icons/Like';
import SearchBasic from '@/icons/Search';
import UserProfile from '@/icons/UserProfile';
import Image from 'next/image';
import Link from 'next/link';

export default function RoomHeader() {
  return (
    <>
      <header className='hidden md:flex px-10 2xl:px-20 py-4 border-y border-secondary w-full'>
        <div className='flex items-center justify-between w-full max-w-[160rem]'>
          <Link
            href={'/'}
            className='block items-center lg:grow lg:shrink-0 lg:basis-52'
          >
            <Image
              src={'/brand/logo-simple.png'}
              alt='HostShare Logo'
              width={32}
              height={32}
              className='block xl:hidden'
            />
            <Image
              src={'/brand/logo-primary.png'}
              alt='HostShare Logo'
              width={146}
              height={32}
              className='hidden xl:block'
            />
          </Link>

          <div className='block px-6 basis-auto grow-0 shrink'>
            <button className='flex text-sm divide-x w-[18.75rem] justify-between font-normal pl-6 text-neutral-800 p-2 items-center rounded-full bg-white shadow-md hover:shadow-black/20 transition-shadow border border-secondary'>
              <p>Start your search</p>
              <div className='w-8 h-8 flex items-center justify-center bg-primary rounded-full'>
                <SearchBasic className='w-3 h-3 stroke-white' />
              </div>
            </button>
          </div>

          <nav className='flex basis-52 shrink-0 grow items-center justify-end'>
            <button className='hover:bg-gray-100 shrink-0 p-3 text-sm text-neutral-800 rounded-full motion-safe:transition-colors duration-500'>
              Hostshare your home
            </button>
            <button className='hover:bg-gray-100 p-3 text-neutral-800 rounded-full motion-safe:transition-colors duration-500'>
              <Globe className='w-4 h-4 fill-neutral-800' />
            </button>
            <button className='flex items-center gap-3 ml-1 hover:shadow-md motion-safe:transition-shadow duration-500 border border-secondary rounded-full p-1 pl-3'>
              <Hamburguer className='w-4 h-4 fill-neutral-800' />
              <UserProfile className='w-8 h-8 fill-neutral-500' />
            </button>
          </nav>
        </div>
      </header>

      <header className='flex md:hidden p-4 w-full justify-between'>
        <Link
          href='/'
          className='p-2 pl-4 text-sm font-light items-center hover:underline flex gap-2'
        >
          <Arrow className='w-4 h-4 !stroke-[4px] fill-neutral-800' />
          Homes
        </Link>

        <div className='items-center gap-1 flex'>
          <button className='w-8 h-8 hover:bg-neutral-100 grid place-items-center rounded-full'>
            <Download className='w-4 h-4 fill-neutral-800' />
          </button>
          <button className='w-8 h-8 hover:bg-neutral-100 grid place-items-center rounded-full'>
            <Like className='w-4 h-4 fill-transparent stroke-1 stroke-neutral-800' />
          </button>
        </div>
      </header>
    </>
  );
}
