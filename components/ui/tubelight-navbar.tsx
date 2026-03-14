"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  instanceId?: string
}

export function NavBar({ items, className, instanceId = "default" }: NavBarProps) {
  const pathname = usePathname()
  const getActiveTab = () => {
    const match = items.find((item) => item.url === pathname || (item.url !== "/" && pathname.startsWith(item.url)))
    return match ? match.name : items[0].name
  }
  const [activeTab, setActiveTab] = useState(getActiveTab)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setActiveTab(getActiveTab())
  }, [pathname])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "relative z-50",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-white border-2 border-gray-200 py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          const isBooking = item.name === "Book Consultation"

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-3 md:px-6 py-2 rounded-full transition-all",
                "text-gray-700 hover:text-blue-900",
                isActive && !isBooking && "bg-blue-50 text-blue-900",
                isBooking && "bg-blue-900 text-white hover:bg-blue-800 hover:text-white shadow-[0_0_12px_3px_rgba(30,58,138,0.5)] hover:shadow-[0_0_18px_5px_rgba(30,58,138,0.65)]",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && !isBooking && (
                <motion.div
                  layoutId={`lamp-${instanceId}`}
                  className="absolute inset-0 w-full bg-blue-100 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-t-full">
                    <div className="absolute w-12 h-6 bg-blue-400/40 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-blue-400/40 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-blue-400/40 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
