import Tick from '@/icons/Tick';
import * as CCheckbox from '@radix-ui/react-checkbox';

export default function Checkbox({
  label,
  ...props
}: { label: string } & CCheckbox.CheckboxProps) {
  return (
    <label className='flex group text-base text-neutral-800 font-normal flex-row gap-4'>
      <CCheckbox.Root
        className='w-6 h-6 data-[state=checked]:bg-black data-[state=checked]:border-black grid place-items-center rounded-[0.25rem] border border-neutral-300 group-hover:border-neutral-800 transition-colors'
        {...props}
      >
        <CCheckbox.Indicator>
          <Tick className='w-4 h-4 stroke-white' />
        </CCheckbox.Indicator>
      </CCheckbox.Root>
      {label}
    </label>
  );
}
