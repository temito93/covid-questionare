import { redberryLogo } from '@/assets';
import { useQuery } from '@/hooks';

const Card = (props) => {
  const { getQuery } = useQuery('page');
  return (
    <div className='max-w-[95rem] w-full mx-auto'>
      <div className='fixed max-w-[95rem] w-full mx-auto bg-white z-50 pt-12 top-0'>
        <div className='flex justify-between items-end'>
          <img src={redberryLogo} className='h-6' />
          <div className='font-anonymous text-[2.5rem] h-11'>{getQuery}/4</div>
        </div>
        <div className='border-b-2 border-custom-neutral-800 w-full mt-6'></div>
      </div>
      <div className='mt-11'>{props.children}</div>
    </div>
  );
};

export default Card;
