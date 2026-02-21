import Link from "next/link";

export default function Header() {

    return (
        <nav>
            <div>
                <Link href = "/">Home</Link>
                <Link href = "/characters">Characters</Link>
            </div>
        </nav>
    )
}