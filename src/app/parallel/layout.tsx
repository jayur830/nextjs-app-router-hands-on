import Link from "next/link";
import { color } from "../color";

export default function Layout({ hello, world }) {
    return (
        <>
            <div style={{ backgroundColor: color.parallelLayout, padding: 20 }}>
                {hello}
            </div>
            <div style={{ backgroundColor: color.parallelLayout, padding: 20 }}>
                {world}
            </div>
            <Link href="/">back</Link>
        </>
    );
}