import Download from '@/icons/Download';
import Like from '@/icons/Like';
import Star from '@/icons/Star';

export default function PropertyPageTopSection({
  data,
  ratings,
  reviewsCount,
  host,
  location,
}: any) {
  return (
    <header className='flex px-4 lg:px-0 flex-col gap-1'>
      <h1 className='text-2xl font-medium text-neutral-800'>
        {data.info.title}
      </h1>

      <div className='flex flex-col text-neutral-800 text-sm font-normal lg:flex-row gap-4 lg:items-center justify-between'>
        <div className='flex items-center gap-1 flex-wrap'>
          <span className='flex items-center gap-1'>
            <Star className='w-4 h-4 fill-black' />
            {ratings.guestSatisfactionOverall}
          </span>
          · <button aria-label='See detailed reviews' className='underline'>{reviewsCount} reviews</button> ·{' '}
          {host.isSuperhost && (
            <p className='text-sm font-light'> Superhost ·</p>
          )}
          <button aria-label='See detailed location' className='flex underline'>
            {location.city}, {location.country.title}
          </button>
        </div>

        <div className='flex items-center gap-1'>
          <button aria-label='Share room' className='p-2 hover:bg-neutral-100 underline transition-colors flex items-center gap-2 rounded-lg'>
            <Download className='w-4 h-4 fill-neutral-800' />
            Share
          </button>
          <button aria-label='Save room' className='p-2 transition-colors underline flex items-center gap-2 hover:bg-neutral-100 rounded-lg'>
            <Like className='w-4 h-4 fill-transparent stroke-1 stroke-neutral-800' />
            Save
          </button>
        </div>
      </div>
    </header>
  );
}
