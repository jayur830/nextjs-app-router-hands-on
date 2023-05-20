import Link from 'next/link'
import { color } from './color'

export const metadata = {
  title: 'Index'
};

export default function Index() {
  return (
    <div style={{ background: color.page, padding: 20 }}>
      page<br />
      <Link href={{ pathname: '/foo', query: { value: 'wtf' } }} as="/foo" passHref>foo</Link>&nbsp;
      <Link href="/loo">loo</Link>&nbsp;
      <Link href="/parallel">parallel</Link>
    </div>
  )
}
