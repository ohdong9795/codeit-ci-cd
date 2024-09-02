'use client';

import React, { useState, useEffect, useRef } from 'react';

const Button = (props: { onClick: () => void; text: string }) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

function Counter() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const initialTitleRef = useRef<string | null>(null);

  useEffect(() => {
    // 브라우저에서만 실행되는 코드
    if (typeof document !== 'undefined') {
      initialTitleRef.current = document.title;
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = checked ? `Total number of clicks: ${count}` : initialTitleRef.current || '';
    }
  }, [checked, count]);

  return (
    <div>
      <span data-testid='count'>
        Clicked {count} time{count === 1 ? '' : 's'}
      </span>
      <br />
      <Button onClick={() => setCount(count + 1)} text='Increment' />
      <div>
        <input type='checkbox' id='checkbox-title' checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        <label htmlFor='checkbox-title'>Check to display count in document title</label>
      </div>
    </div>
  );
}

export default Counter;
