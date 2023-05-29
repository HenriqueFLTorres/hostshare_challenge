import Arrow from '@/icons/Arrow';
import Report from '@/icons/Report';
import Star from '@/icons/Star';

export default function PropertyPageReserve({
  currency,
  ratings,
  price,
  reviewsCount,
}: any) {
  return (
    <div className='w-full items-center flex flex-col p-4 lg:p-0 lg:pl-24'>
      <div className='w-full flex flex-col border border-secondary rounded-xl shadow-xl p-6'>
        <div className='flex justify-between items-center text-neutral-800'>
          <span className='flex flex-col'>
            <h2 className='text-xl font-normal'>
              {currency.symbol}
              {price}
            </h2>
            <p className='text-sm'>Total before taxes</p>
          </span>
          <div className='flex gap-1 text-sm'>
            <span className='flex items-center gap-1'>
              <Star className='w-4 h-4 fill-black' />
              {ratings.guestSatisfactionOverall}
            </span>{' '}
            ·{' '}
            <button aria-label='See detailed reviews' className='underline text-neutral-500'>
              {reviewsCount} reviews
            </button>
          </div>
        </div>

        <div className='rounded-xl flex-col divide-y divide-neutral-500 border flex border-neutral-500 w-full h-28 mt-6 mb-4'>
          <div className='grid grid-cols-2 divide-x divide-neutral-500'>
            <span className='flex flex-col text-xs py-2.5 px-3 text-left'>
              CHECK-IN
              <p className='text-neutral-500 text-sm font-normal'>Add date</p>
            </span>
            <span className='flex flex-col text-xs py-2.5 px-3 text-left'>
              CHECKOUT
              <p className='text-neutral-500 text-sm font-normal'>Add date</p>
            </span>
          </div>
          <div className='flex justify-between items-center pr-4'>
            <span className='flex flex-col text-xs py-2.5 px-3 text-left'>
              GUESTS
              <p className='text-neutral-500 text-sm font-normal'>1 guest</p>
            </span>
            <Arrow className='rotate-[270deg] !stroke-[3px]' />
          </div>
        </div>

        <button aria-label='Reserve' className='text-white rounded-lg justify-center bg-[radial-gradient(circle_at_center,#FF385C_0%,#E61E4D_27.5%,#E31C5F_40%,#D70466_57.5%,#BD1E59_75%,#BD1E59_100%)] font-semibold text-base py-4 items-center flex'>
          Reserve
        </button>

        <p className='mt-4 text-center text-sm text-neutral-800 font-normal'>
          You won&apos;t be charged yet
        </p>
      </div>

      <button aria-label='Report listing' className='flex gap-2 items-center text-neutral-600 underline text-sm font-normal mt-6'>
        <Report className='w-4 h-4 fill-neutral-500' />
        Report this listing
      </button>
    </div>
  );
}
