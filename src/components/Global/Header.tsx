import Filter from '@/icons/Filter';
import Globe from '@/icons/Globe';
import Hamburguer from '@/icons/Hamburguer';
import SearchBasic from '@/icons/Search';
import UserProfile from '@/icons/UserProfile';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <header className='hidden md:flex px-10 2xl:px-20 py-4 border-y border-secondary w-full'>
        <div className='flex items-center justify-between w-full max-w-[160rem]'>
          <div className='block items-center lg:grow lg:shrink-0 lg:basis-52'>
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
          </div>

          <div className='block px-6 basis-auto grow-0 shrink'>
            <div className='flex text-sm divide-x w-max divide-secondary font-semibold [&>button]:px-4 text-neutral-800 p-2 items-center rounded-full bg-white shadow-md hover:shadow-black/20 transition-shadow border border-secondary'>
              <button>Anywhere</button>
              <button>Any week</button>
              <button className='font-normal text-neutral-500'>
                Add guests
              </button>
              <button className='w-8 h-8 flex items-center justify-center bg-primary rounded-full'>
                <SearchBasic className='w-3 h-3 stroke-white' />
              </button>
            </div>
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

      <header className='flex md:hidden px-6 pt-3 w-full'>
        <div className='flex w-full min-w-[18rem] items-center rounded-full shadow-md shadow-black/5 border border-secondary'>
          <button className='flex items-center grow p-2'>
            <SearchBasic className='w-4 ml-3 mr-4 h-4 stroke-neutral-700' />

            <div className='flex flex-col items-start text-left'>
              <p className='font-semibold text-sm text-neutral-800'>Anywhere</p>
              <span className='font-normal text-neutral-500 text-xs'>
                <p>Any week • Add guests</p>
              </span>
            </div>
          </button>
          <button className='border shrink-0 w-8 m-2 h-8 rounded-full grid place-items-center border-secondary'>
            <Filter className='w-4 h-4 fill-neutral-800' />
          </button>
        </div>
      </header>
    </>
  );
}
