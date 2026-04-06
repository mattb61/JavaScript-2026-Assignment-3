import Link from "next/link";

export default function Header() {

    return (
        <nav>
            <div>
                <Link href = "/">Home</Link>
                <Link href = "/api/characters">Characters</Link>
                <p>This text is just a test to show that Netlify triggered a redeploy from a commit</p>
            </div>
        </nav>
    )
}