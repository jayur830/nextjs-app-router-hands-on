import Link from 'next/link'
import { color } from '../color'
import { useSum } from './hooks';
import FooComponent from './component';

export const metadata = {
    title: 'Foo',
};

export default async function Foo(props) {
  const sum = useSum();

  console.log(props);
  // await new Promise(resolve => setTimeout(resolve, 1000));

  return (
    <div style={{ background: color.foo, padding: 20 }}>
      foo {sum(1, 2)}<br />
      {JSON.stringify(props)}<br />
      <FooComponent /><br />
      <Link href="/">back</Link>
    </div>
  )
}
