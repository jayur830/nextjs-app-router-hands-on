import { PropsWithChildren } from 'react'
import { color } from '../color'

export default function FooLayout({ children }: PropsWithChildren) {
  return (
    <div style={{ backgroundColor: color.fooLayout, padding: 20 }}>
      foo layout
      {children}
    </div>
  )
}
