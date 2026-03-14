"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, User, Images, Calendar } from "lucide-react"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "About", url: "/about", icon: User },
  { name: "Our Work", url: "/gallery", icon: Images },
  { name: "Book", url: "/#booking", icon: Calendar },
]

export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="flex items-stretch h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.url || (item.url !== "/" && pathname.startsWith(item.url))
          const isBook = item.name === "Book"

          return (
            <Link
              key={item.name}
              href={item.url}
              className={`flex-1 flex flex-col items-center justify-center gap-1 text-xs font-semibold transition-colors
                ${isBook
                  ? "bg-blue-900 text-white"
                  : isActive
                  ? "text-blue-900"
                  : "text-gray-400"
                }`}
            >
              <Icon size={20} strokeWidth={isActive || isBook ? 2.5 : 2} />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
