import Tick from '@/icons/Tick';
import * as CSwitch from '@radix-ui/react-switch';

export default function Switch() {
  return (
    <CSwitch.Root className='bg-neutral-300 shrink-0 hover:bg-neutral-400 flex p-0.5 data-[state=checked]:bg-black duration-300 w-14 rounded-full'>
      <CSwitch.Thumb className='bg-white group items-center justify-center w-8 h-8 flex rounded-full shrink-0 duration-300 data-[state=checked]:translate-x-[1.25rem] transition-[transform,_background-color] shadow-sm'>
        <Tick className='w-4 h-4 stroke-black opacity-0 group-data-[state=checked]:opacity-100 duration-300 transition-opacity' />
      </CSwitch.Thumb>
    </CSwitch.Root>
  );
}
