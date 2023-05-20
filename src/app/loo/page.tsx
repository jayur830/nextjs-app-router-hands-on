'use client';

import Link from 'next/link'
import { color } from '../color'
import { useState } from 'react';

// export const metadata = {
//   title: 'Loo',
// };

export default function Loo() {
  const [count, setCount] = useState<number>(0);
  return (
    <div style={{ background: color.loo, padding: 20 }}>
      loo<br />
      <button onClick={() => setCount(v => v - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(v => v + 1)}>+</button><br />
      <Link href="/">back</Link>
    </div>
  )
}
