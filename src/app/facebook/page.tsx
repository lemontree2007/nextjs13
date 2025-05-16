'use client';
import { useRouter } from "next/navigation";
import { Button } from 'react-bootstrap';

export default function Facebook() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/");
    }
    return (
        <div >
            <h1>Facebook</h1>
            <Button variant="success" onClick={handleClick}>Bootstrap</Button>
        </div>
    )
}