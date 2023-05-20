import { PropsWithChildren } from "react";
import { color } from "../color";

export default function FooTemplate({ children }: PropsWithChildren) {
    return (
        <div style={{ backgroundColor: color.fooTemplate, padding: 20 }}>
            foo template
            {children}
        </div>
    );
}
