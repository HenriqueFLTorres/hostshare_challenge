import Checkbox from '@/components/shared/inputs/Checkbox';
import { useState } from 'react';

export default function FilterModalAmenities() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className='flex flex-col py-8 px-6'>
      <h3 className='text-xl text-neutral-800 mb-6 font-semibold'>Amenities</h3>

      <h4 className='text-base font-semibold text-neutral-800 mb-6'>
        Essentials
      </h4>

      <ul className='flex flex-col lg:grid grid-cols-2 gap-6'>
        {amenities.essentials.map((type) => (
          <Checkbox key={type} label={type} />
        ))}
      </ul>

      {showMore && (
        <>
          <h4 className='text-base font-semibold text-neutral-800 mt-8 mb-6'>
            Essentials
          </h4>

          <ul className='grid grid-cols-2 gap-6'>
            {amenities.features.map((type) => (
              <Checkbox key={type} label={type} />
            ))}
          </ul>
        </>
      )}

      <button
        onClick={() => setShowMore((prev) => !prev)}
        className='text-base w-max py-3 text-neutral-800 underline font-semibold'
      >
        {showMore ? 'Show less' : 'Show more'}
      </button>
    </section>
  );
}

const amenities = {
  essentials: [
    'Wifi',
    'Washer',
    'Air conditioning',
    'Dedicated workspace',
    'Hair dryer',
    'Kitchen',
    'Dryer',
    'Heating',
    'TV',
    'Iron',
  ],
  features: [
    'Pool',
    'Hot tub',
    'Free parking on premises',
    'EV charger',
    'Crib',
    'Gym',
    'BBQ grill',
    'Breakfast',
    'Indoor fireplace',
    'Smoking allowed',
  ],
};
