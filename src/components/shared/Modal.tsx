import Close from '@/icons/Close';
import { cn } from '@/utils/classNames';
import * as Dialog from '@radix-ui/react-dialog';

export default function Modal({
  trigger,
  title = '',
  children,
  className,
}: {
  trigger: React.ReactNode;
  title?: string;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-black/60 fixed z-10 inset-0' />
        <Dialog.Content
          className={cn(
            'fixed flex flex-col z-10 h-[calc(100vh-5rem)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[48rem] bg-white focus:outline-none rounded-xl shadow-xl',
            className
          )}
        >
          <Dialog.Title className='text-neutral-800 text-base font-bold p-6 flex justify-center items-center'>
            <Dialog.Close className='hover:bg-neutral-100 absolute left-4 rounded-full p-2 transition-colors'>
              <Close className='w-4 h-4 fill-neutral-800' />
            </Dialog.Close>
            {title}
          </Dialog.Title>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
