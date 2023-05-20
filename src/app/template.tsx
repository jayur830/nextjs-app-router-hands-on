'use client';

import { PropsWithChildren, useState } from "react";
import { color } from "./color";

export default function Template({ children }: PropsWithChildren) {
    const [count, setCount] = useState<number>(0);
    return (
        <div style={{ backgroundColor: color.template, padding: 20 }}>
            template<br />
            <button onClick={() => setCount(v => v - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(v => v + 1)}>+</button>
            {children}
        </div>
    );
}
