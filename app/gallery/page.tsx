"use client"

import Image from "next/image"
import Link from "next/link"
import { Home, User, Phone as PhoneIcon, Calendar, Images, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function GalleryPage() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Our Work", url: "/gallery", icon: Images },
    { name: "Book Consultation", url: "/#booking", icon: Calendar },
  ]

  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const categories = [
    { id: "all", name: "All Work" },
    { id: "wet-rooms", name: "Wet Rooms" },
    { id: "bathrooms", name: "Bathrooms" },
    { id: "kitchens", name: "Kitchens" },
    { id: "media-walls", name: "Media Walls" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "kitchens",
      title: "Complete Kitchen Renovation",
      images: ["/kitchen1pic1.jpg", "/kitchen1pic2.jpg", "/kitchen1pic3.jpg"],
      description: "Full kitchen transformation with quality fitting and finishing throughout.",
    },
    {
      id: 2,
      category: "media-walls",
      title: "Custom Media Wall",
      image: "/mediawall1.jpg",
      description: "Stunning media wall feature creating a modern entertainment centrepiece.",
    },
    {
      id: 3,
      category: "bathrooms",
      title: "Bathroom Renovation",
      image: "/bathroompic1.jpg",
      description: "Professional bathroom transformation with quality tiling and finishing.",
    },
    {
      id: 4,
      category: "bathrooms",
      title: "Bathroom Renovation",
      image: "/bathroompic2.jpg",
      description: "Professional bathroom transformation with quality tiling and finishing.",
    },
    {
      id: 5,
      category: "bathrooms",
      title: "Bathroom Renovation",
      image: "/bathroompic3.jpg",
      description: "Professional bathroom transformation with quality tiling and finishing.",
    },
    {
      id: 6,
      category: "wet-rooms",
      title: "Wet Room Installation",
      images: ["/wetroom2pic4.jpg", "/wetroom2pic1.jpg", "/wetroom2pic2.jpg", "/wetroom2pic3.jpg", "/wetroom2pic5.jpg"],
      description: "Full wet room conversion , fully waterproofed with modern tiling and accessible design throughout.",
    },
    {
      id: 10,
      category: "wet-rooms",
      title: "Wet Room Installation",
      image: "/wetroompic1.jpg",
      description: "Accessible wet room with waterproof tiling and sleek modern fixtures.",
    },
    {
      id: 7,
      category: "wet-rooms",
      title: "Wet Room Installation",
      image: "/wetroompic2.jpg",
      description: "Accessible wet room with waterproof tiling and sleek modern fixtures.",
    },
    {
      id: 8,
      category: "wet-rooms",
      title: "Wet Room Installation",
      image: "/wetroompic3.jpg",
      description: "Accessible wet room with waterproof tiling and sleek modern fixtures.",
    },
    {
      id: 9,
      category: "wet-rooms",
      title: "Wet Room Installation",
      image: "/wetroompic4.jpg",
      description: "Accessible wet room with waterproof tiling and sleek modern fixtures.",
    },
  ]

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (item: any, imageIndex = 0) => {
    setCurrentProject(item)
    setCurrentImageIndex(imageIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (currentProject?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length)
    }
  }

  const prevImage = () => {
    if (currentProject?.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      )
    }
  }

  const getCoverImage = (item: any) => item.images ? item.images[0] : item.image

  return (
    <main className="min-h-screen bg-white pb-16 md:pb-0">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        {/* Mobile: logo + phone only — nav handled by bottom bar */}
        <div className="md:hidden px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <Image src="/wtlogoltd2.png" alt="Working Together Property Services Logo" width={500} height={500} className="w-auto h-[45px]" priority />
          </Link>
          <a href="tel:07595938285" className="flex items-center text-blue-900">
            <PhoneIcon className="w-6 h-6 text-green-600" />
          </a>
        </div>
        {/* Desktop layout */}
        <div className="hidden md:flex max-w-[1800px] mx-auto px-4 items-center justify-between relative py-2">
          <div className="flex-shrink-0 -ml-4">
            <Link href="/">
              <Image src="/wtlogoltd2.png" alt="Working Together Property Services Logo" width={500} height={500} className="w-auto h-[68px]" priority />
            </Link>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-50">
            <NavBar items={navItems} className="!relative !top-0 !left-0 !-translate-x-0" instanceId="gallery-desktop" />
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="tel:07595938285" className="flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors">
              <PhoneIcon className="w-6 h-6 text-green-600" />
              <span>07595 938285</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/wetroom1.jpeg"
            alt="Our work"
            fill
            className="object-cover object-center scale-105"
            style={{ filter: "blur(3px)" }}
            priority
          />
          <div className="absolute inset-0 bg-blue-900/65" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <p className="uppercase tracking-widest text-blue-200 text-sm font-semibold mb-4">Our Portfolio</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Our Work
          </h1>
          <p className="text-xl md:text-2xl font-medium text-blue-100">
            Every project tells a story. Here&apos;s what happens when craftsmanship meets genuine care for people.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[73px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1700px] mx-auto px-4">
          <div className="flex items-center gap-2 py-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-1 py-2.5 rounded-full font-semibold text-sm text-center transition-all ${
                  activeCategory === category.id
                    ? "bg-blue-900 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-[1800px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="group relative rounded-2xl overflow-hidden shadow-md cursor-pointer bg-white aspect-[4/3]"
                  onClick={() => openLightbox(item, 0)}
                >
                  <img
                    src={getCoverImage(item)}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-blue-900 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                      {categories.find(c => c.id === item.category)?.name}
                    </span>
                  </div>

                  {/* Multi-image badge */}
                  {item.images && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-900/80 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {item.images.length} photos
                      </span>
                    </div>
                  )}

                  {/* Hover content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-blue-100 text-sm">{item.description}</p>
                  </div>

                  {/* Zoom icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-24">
              <p className="text-xl text-gray-400 font-medium">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-blue-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Like What You See?</h2>
          <p className="text-blue-200 text-lg mb-10">
            Get in touch today for a free, no-obligation consultation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/#booking"
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-blue-900 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Prev / Next */}
            {currentProject.images && currentProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prevImage() }}
                  className="absolute left-5 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextImage() }}
                  className="absolute right-5 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-50"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <div
              className="relative max-w-6xl w-full px-4 sm:px-12 md:px-20"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={currentProject.images ? currentProject.images[currentImageIndex] : currentProject.image}
                alt={currentProject.title}
                className="max-h-[80vh] w-full object-contain mx-auto rounded-lg"
              />
              <div className="text-center mt-5">
                <h3 className="text-white font-bold text-xl">{currentProject.title}</h3>
                {currentProject.images && (
                  <p className="text-gray-400 text-sm mt-1">
                    {currentImageIndex + 1} / {currentProject.images.length}
                  </p>
                )}
              </div>

              {/* Thumbnail strip for multi-image */}
              {currentProject.images && currentProject.images.length > 1 && (
                <div className="flex gap-2 justify-center mt-4">
                  {currentProject.images.map((img: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex ? "border-white" : "border-transparent opacity-50 hover:opacity-80"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col gap-3">
              <p className="opacity-80">Working Together Property Services Ltd</p>
              <div className="flex flex-col gap-2 mt-1">
                <a href="https://www.youtube.com/@workingtogetherps" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-red-400 transition-colors text-sm">YouTube</a>
                <a href="https://www.instagram.com/workingtogetherps/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-pink-400 transition-colors text-sm">Instagram</a>
                <a href="https://www.tiktok.com/@workingtogetherps" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-white transition-colors text-sm">TikTok</a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Link href="/" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">Home</Link>
              <Link href="/about" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">About</Link>
              <Link href="/#contact" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">Contact</Link>
            </div>
            <div className="opacity-80">
              <p className="mb-2">Email: <a href="mailto:workingtogetherps@gmail.com" className="hover:text-orange-500">workingtogetherps@gmail.com</a></p>
              <p className="mb-2">Phone: <a href="tel:07595938285" className="hover:text-orange-500">07595 938285</a></p>
              <p>Serving Liverpool and surrounding areas</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10 opacity-70">
            <p>&copy; 2026 Working Together Property Services Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
