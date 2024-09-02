import React from 'react';
import Card from './Card';

const Column = ({ cards, animationClass }: { cards: string[]; animationClass: string }) => (
  <div className={`flex flex-col gap-2 ${animationClass}`}>
    {cards.map((value, index) => (
      <Card key={index} value={value} />
    ))}
    {cards.map((value, index) => (
      <Card key={`duplicate-${index}`} value={value} />
    ))}
  </div>
);

export default function Reviews() {
  const column1 = ['123', '456', '789', '987'];
  const column2 = ['654', '321', '123', '456'];
  const column3 = ['789', '987', '654', '321'];

  return (
    <div className='mx-auto max-w-7xl grid grid-cols-3 gap-2 overflow-hidden'>
      <div className='h-[444px] overflow-hidden'>
        <Column cards={column1} animationClass='animate-moveUp5' />
      </div>
      <div className='h-[444px] overflow-hidden'>
        <Column cards={column2} animationClass='animate-moveUp3' />
      </div>
      <div className='h-[444px] overflow-hidden'>
        <Column cards={column3} animationClass='animate-moveUp7' />
      </div>
    </div>
  );
}
