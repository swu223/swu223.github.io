import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      Navigation Bar goes here.

      <Link href="/">Home</Link>
      
      <Link href="/#projects">Projects</Link>
    </div>
  )
}