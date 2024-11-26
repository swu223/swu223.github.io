import Link from "next/link";

const navItems = [
  {
    name:"About Me",
    href:"/",
  },
  {
    name:"Projects",
    href:"/#projects",
  },
  {
    name:"Github",
    href:"https://github.com/swu223"
  }
]

export default function NavBar() {
  return (
    <aside className="sticky top-0 left-0 right-0 p-4 px-11 bg-black text-xl">
      <nav>
        <div className="flex">
          {navItems.map((item) => {
            return (
              <Link
                key={item.name}
                href={item.href}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
              <p>{item.name}</p>
              </Link>
            )
          })}
        </div>
      </nav>
    </aside>
  )
}