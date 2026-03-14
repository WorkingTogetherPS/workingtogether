"use client"

import Image from "next/image"
import Link from "next/link"
import { Home, User, Phone as PhoneIcon, Calendar, Images, CheckCircle2, Clock, Hammer, Layers, PhoneCall } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { motion } from "framer-motion"

export default function AboutPage() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Our Work", url: "/gallery", icon: Images },
    { name: "Book Consultation", url: "/#booking", icon: Calendar },
  ]

  const stats = [
    { value: "13+", label: "Years in the Industry", icon: Clock },
    { value: "2024", label: "Est.", icon: Hammer },
    { value: "4", label: "Core Services", icon: Layers },
    { value: "100%", label: "Free Consultations", icon: PhoneCall },
  ]

  const services = [
    {
      title: "Wet Rooms",
      description:
        "Our speciality. We convert standard bathrooms into fully accessible, barrier-free wet rooms , helping people maintain independence safely and comfortably at home.",
      image: "/wetroompic1.jpg",
    },
    {
      title: "Bathrooms",
      description:
        "Complete bathroom renovations from design to final fit. Whether contemporary or classic, we deliver a finish that looks stunning and stands the test of time.",
      image: "/bathroompic1.jpg",
    },
    {
      title: "Kitchens",
      description:
        "Professional kitchen installations carried out with precision and care. We handle every detail so you get a kitchen that's both beautiful and fully functional.",
      image: "/kitchen-home.jpg",
    },
    {
      title: "Media Walls",
      description:
        "Bespoke media wall builds with integrated fireplaces and alcove lighting , a showstopping centrepiece that transforms any living room.",
      image: "/mediawall.jpg",
    },
  ]

  const values = [
    {
      title: "Customer First, Always",
      description:
        "This business was built to remove the limitations that stop tradespeople from truly putting clients first. Every decision we make starts with you.",
    },
    {
      title: "Going the Extra Mile",
      description:
        "We don't just complete a job , we make sure our clients' lives are genuinely easier and better because of the work we've done.",
    },
    {
      title: "Helping Those Who Need It Most",
      description:
        "We are especially passionate about supporting older people and those with mobility issues, helping them live safely and independently in their own homes.",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        {/* Mobile layout */}
        <div className="md:hidden px-4 py-2 flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/wtlogoltd2.png" alt="Working Together Property Services Logo" width={500} height={500} className="w-auto h-[45px]" priority />
            </Link>
          </div>
          <a href="tel:07595938285" className="flex items-center gap-2 text-blue-900 font-semibold">
            <PhoneIcon className="w-6 h-6 text-green-600" />
          </a>
        </div>
        <div className="md:hidden flex justify-center pb-2">
          <NavBar items={navItems} className="!relative !top-0 !left-0 !-translate-x-0" instanceId="about-mobile" />
        </div>
        {/* Desktop layout */}
        <div className="hidden md:flex max-w-[1800px] mx-auto px-4 items-center justify-between relative py-2">
          <div className="flex-shrink-0 -ml-4">
            <Link href="/">
              <Image src="/wtlogoltd2.png" alt="Working Together Property Services Logo" width={500} height={500} className="w-auto h-[68px]" priority />
            </Link>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-50">
            <NavBar items={navItems} className="!relative !top-0 !left-0 !-translate-x-0" instanceId="about-desktop" />
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
            src="/about-hero.jpg"
            alt="About us hero"
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
          <p className="uppercase tracking-widest text-blue-200 text-sm font-semibold mb-4">About Us</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg leading-tight">
            Built on Trust.<br />Delivered with Care.
          </h1>
          <p className="text-xl md:text-2xl font-medium text-blue-100">
            We got tired of limitations. So we built a company where the customer always comes first , no exceptions.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-blue-900 flex items-center justify-center mb-5">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between"
            >
              <div>
                <p className="uppercase tracking-widest text-green-600 text-sm font-semibold mb-3">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 leading-tight">
                  A Business Built Around People
                </h2>
                <div className="space-y-6 text-gray-700 text-xl leading-relaxed">
                  <p>
                    Working Together Property Services Ltd was established in 2024, but the experience behind it spans
                    over 13 years working in the industry. Having spent years delivering high-quality work for other
                    companies, we always felt held back by limitations that got in the way of truly putting the customer first.
                  </p>
                  <p>
                    So we built something better. Working Together Property Services Ltd was created with one primary
                    focus: the customer. We go the extra mile to make our clients&apos; lives easier and better, because
                    that&apos;s what this business was always meant to be about.
                  </p>
                  <p>
                    We are especially passionate about helping older people and those with mobility issues. Our core
                    speciality is converting bathrooms into fully accessible wet rooms, enabling people to live safely
                    and independently in their own homes. Every project we take on is carried out with skill,
                    compassion, and genuine care for the person behind it.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {[
                  "Backed by 13 years of hands-on trade experience",
                  "Established in 2024, built around the customer",
                  "Specialists in accessible wet room conversions",
                  "Dedicated to helping older people and those with mobility needs",
                  "Free consultation on every project",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 border-b border-gray-200 last:border-0">
                    <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-2xl">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/bonding2.jpg"
                  alt="Our renovation work"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "45% center" }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute bottom-2 left-2 md:-bottom-6 md:-left-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
                <p className="text-3xl font-extrabold text-blue-900">13+</p>
                <p className="text-sm text-gray-500 font-medium">Years in the Industry</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-widest text-green-600 text-sm font-semibold mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Our Services</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-white text-2xl font-bold">{service.title}</h3>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                  <Link
                    href="/gallery"
                    className="inline-block mt-4 text-blue-900 font-semibold text-sm hover:text-green-600 transition-colors"
                  >
                    View our work →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-[1700px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="uppercase tracking-widest text-green-600 text-sm font-semibold mb-3">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">Our Values</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 h-56 md:h-72">
        {["/wetroompic2.jpg", "/bathroompic2.jpg", "/kitchen1pic1.jpg", "/mediawall1.jpg"].map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <Image
              src={src}
              alt="Our work"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-200 text-lg mb-10">
            Book your free consultation today , no obligation, just honest advice.
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
