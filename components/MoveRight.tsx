const items = ['123123', '456456', '789789', 'test12', 'test34', 'test56', 'test78'];

export default function MoveRight() {
  return (
    <div className='w-full overflow-hidden'>
      <div className='animate-moveRight inline-flex w-[200%]'>
        <div className='flex w-1/2'>
          {items.map((item, index) => (
            <span key={index} className='px-4'>
              {item}
            </span>
          ))}
        </div>
        <div className='flex w-1/2'>
          {items.map((item, index) => (
            <span key={`duplicate-${index}`} className='px-4'>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
