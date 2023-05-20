import { PropsWithChildren } from 'react'
import { color } from '../color'

export default function LooLayout({ children }: PropsWithChildren) {
  return (
    <div style={{ backgroundColor: color.looLayout, padding: 20 }}>
      loo layout<br />
      {children}
    </div>
  )
}
