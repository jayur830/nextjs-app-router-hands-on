'use client';

import { useRouter } from "next/navigation";

async function getData() {
    const response = await fetch('http://localhost:3000/foo/api');
    return response.json();
}

export default function FooComponent(props) {
    // const response = use(getData());
    // console.log('response:', response);
    const router = useRouter();
    // console.log(router.);
    return (
        <div style={{ backgroundColor: '#d01254', padding: 20 }}>Component</div>
    );
}
