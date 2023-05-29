import Arrow from '@/icons/Arrow';
import parse from 'html-react-parser';
import Modal from '../shared/Modal';

export default function PropertyPageDescription({ description }: any) {
  const parsedDescription = description
    .replace(/\*\*(.+)\*\*/gm, '<b>$1</b>')
    .replace(/\n/g, '<br/><br/>');

  return (
    <div className='flex flex-col gap-6'>
      <p className='text-base text-neutral-800 font-light line-clamp-6'>
        {parse(parsedDescription)}
      </p>

      <Modal
        trigger={
          <button aria-label='Show more' className='underline font-medium flex justify-start items-center gap-1'>
            Show more <Arrow className='rotate-180 !stroke-[3px]' />
          </button>
        }
        className='p-0'
      >
        <div className='pt-4 px-6 pb-8 overflow-auto'>
          <p className='text-base text-neutral-800 font-light'>
            {parse(parsedDescription)}
          </p>
        </div>
      </Modal>
    </div>
  );
}
