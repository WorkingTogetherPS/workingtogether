"use client"

import Image from "next/image"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { Gallery6 } from "@/components/ui/gallery6"
import { Home, User, Phone as PhoneIcon, Calendar, Mail, MapPin, Clock, Images } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Page() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Our Work", url: "/gallery", icon: Images },
    { name: "Book Consultation", url: "#booking", icon: Calendar },
  ]

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Consultation Request - ${bookingForm.service}`)
    const body = encodeURIComponent(
      `Name: ${bookingForm.name}\n` +
        `Email: ${bookingForm.email}\n` +
        `Phone: ${bookingForm.phone}\n` +
        `Service: ${bookingForm.service}\n\n` +
        `Message:\n${bookingForm.message}`
    )
    window.location.href = `mailto:workingtogetherps@gmail.com?subject=${subject}&body=${body}`
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Contact Form Submission")
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\n` +
        `Email: ${contactForm.email}\n\n` +
        `Message:\n${contactForm.message}`
    )
    window.location.href = `mailto:workingtogetherps@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-2">
        <div className="max-w-[1800px] mx-auto px-4 flex items-center justify-between relative">
          {/* Logo on the left */}
          <div className="flex-shrink-0 -ml-8">
            <Image
              src="/wtlogoltd2.png"
              alt="Working Together Property Services Logo"
              width={500}
              height={500}
              className="w-auto h-[55px]"
              priority
            />
          </div>

          {/* Navigation centred absolutely */}
          <div className="absolute left-1/2 -translate-x-1/2 z-50">
            <NavBar items={navItems} className="!relative !top-0 !left-0 !-translate-x-0" />
          </div>

          {/* Phone Number on the right */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <a
              href="tel:07595938285"
              className="flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors"
            >
              <PhoneIcon className="w-6 h-6 text-green-600" />
              <span className="hidden md:inline">07595 938285</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-[55vh] min-h-[420px] px-4 text-white overflow-hidden flex items-center justify-center">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/bathroom-hero.jpg')",
              filter: "blur(3px)",
            }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-blue-900/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[1700px] mx-auto text-center relative z-10 mt-8"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Built to Put You First
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-10 opacity-95">
            We exist to make your home safer, better, and built around you, with a special dedication to helping older people and those with mobility needs live life on their own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a
              href="#booking"
              className="px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer relative z-10"
            >
              Book Free Consultation
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all cursor-pointer relative z-10"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </section>

      {/* Services Gallery */}
      <Gallery6
        heading="What Services Do We Offer?"
        demoUrl="#booking"
        items={[
          {
            id: "wet-rooms",
            title: "Wet Rooms",
            summary:
              "Our speciality. We convert bathrooms into safe, accessible wet rooms , tailored to your needs with 13 years of expertise.",
            url: "/gallery",
            image: "/wetroom2pic2.jpg",
          },
          {
            id: "bathrooms",
            title: "Bathrooms",
            summary:
              "Full bathroom installations from design to final fit , contemporary or classic, built to suit your style and budget.",
            url: "/gallery",
            image: "/bathroompic2.jpg",
          },
          {
            id: "kitchens",
            title: "Kitchens",
            summary:
              "Quality kitchen fitting from start to finish , transforming your cooking space with clean, precise workmanship.",
            url: "/gallery",
            image: "/kitchen-home.jpg",
          },
          {
            id: "media-walls",
            title: "Media Walls",
            summary:
              "Bespoke media wall installations with integrated fireplaces , a stunning centrepiece for your living room.",
            url: "/gallery",
            image: "/MEDIAWALL1.jpg",
          },
        ]}
      />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 mb-4 -mt-12">
                  Why Choose Working<span className="text-green-600">Together?</span>
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                Established in 2024, Working Together Property Services Ltd was built on 13 years of industry
                experience , and a desire to do things properly. After years of working for other companies with
                limitations, we created a business with one primary focus: the customer. We go the extra mile
                to make your life easier and better, with a particular dedication to helping older people and
                those with mobility issues.
              </p>
              <ul className="space-y-6">
                {[
                  "Skilled tradespeople with 13 years of hands-on experience",
                  "Established in 2024 , built around you",
                  "Specialists in accessible wet room conversions",
                  "Dedicated to helping older people & those with mobility needs",
                  "Free consultations, no obligation",
                  "Serving Liverpool and surrounding areas",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 text-gray-700 text-xl md:text-2xl pb-4 border-b border-gray-200">
                    <span className="text-green-600 font-bold text-2xl">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
                </ul>
              </motion.div>
              <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="aspect-[4/5] rounded-lg overflow-hidden relative"
            >
              <Image
                src="/paulworking1.png"
                alt="Paul Working"
                width={1600}
                height={1200}
                quality={100}
                className="w-full h-full object-cover object-[center_65%]"
              />
              </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-[1700px] mx-auto mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Trusted by homeowners across Liverpool and surrounding areas</p>
        </div>
        <InfiniteSlider gap={32} duration={140} className="w-full">
          {[
            {
              name: "Karen Mitchell",
              location: "Wavertree, Liverpool",
              text: "Absolutely brilliant job on our wet room conversion. My mum can now use the bathroom independently , it's changed her life. The finish is spotless and the lads were so respectful throughout.",
              service: "Wet Room",
              stars: 5,
            },
            {
              name: "Steve Gallagher",
              location: "Crosby, Liverpool",
              text: "Had a full kitchen fitted and couldn't be happier. The attention to detail was fantastic and they kept the mess to a minimum every day. Would recommend to anyone in Liverpool without hesitation.",
              service: "Kitchen",
              stars: 5,
            },
            {
              name: "Diane Pearce",
              location: "Childwall, Liverpool",
              text: "From the free consultation right through to the final tidy up, the whole experience was first class. Our new bathroom looks stunning. Very professional team.",
              service: "Bathroom",
              stars: 5,
            },
            {
              name: "Tony Brennan",
              location: "Woolton, Liverpool",
              text: "Got a media wall installed in the living room and it's the centrepiece of the whole house now. Neat work, no fuss, finished on time. Proper tradesmen.",
              service: "Media Wall",
              stars: 5,
            },
            {
              name: "Linda Hughes",
              location: "Allerton, Liverpool",
              text: "We needed a wet room for my husband after his operation and Working Together sorted everything out quickly and compassionately. The quality is outstanding and it was done within budget.",
              service: "Wet Room",
              stars: 5,
            },
            {
              name: "Paul Donoghue",
              location: "Huyton, Liverpool",
              text: "Second time using these lads , first for a bathroom, now a kitchen. Both times they've been tidy, punctual and the results speak for themselves. Top quality every time.",
              service: "Kitchen",
              stars: 5,
            },
            {
              name: "Janet Thorpe",
              location: "West Derby, Liverpool",
              text: "Really pleased with our new bathroom. They helped us choose the right layout and tiles and the end result looks far better than we imagined. Great value for money.",
              service: "Bathroom",
              stars: 5,
            },
            {
              name: "Michael Carr",
              location: "Maghull, Liverpool",
              text: "Friendly, reliable and genuinely skilled. The media wall looks incredible , exactly what we wanted. Will definitely be getting them back for the bathroom next year.",
              service: "Media Wall",
              stars: 5,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[85vw] sm:w-[500px] md:w-[620px] bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <span key={s} className="text-blue-500 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-blue-900 text-lg">{review.name}</p>
                  <p className="text-base text-gray-500">{review.location}</p>
                </div>
                <span className="text-sm font-semibold bg-blue-100 text-blue-900 px-4 py-2 rounded-full">
                  {review.service}
                </span>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1700px] mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-16 border border-gray-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">Book Your Free Consultation</h2>
              <p className="text-xl text-gray-600">Let&apos;s discuss your project and bring your vision to life</p>
            </div>
            <form onSubmit={handleBookingSubmit} className="">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  required
                  value={bookingForm.service}
                  onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="wet-room">Wet Room</option>
                  <option value="bathroom">Bathroom</option>
                  <option value="kitchen">Kitchen</option>
                  <option value="media-wall">Media Wall</option>
                  <option value="other">Other/Multiple Services</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                required
                value={bookingForm.message}
                onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              Request Consultation
            </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">We&apos;re here to help with your property needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <Mail className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
                  <a href="mailto:workingtogetherps@gmail.com" className="text-gray-600 hover:text-blue-900">
                    workingtogetherps@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <PhoneIcon className="w-12 h-12 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Phone</h3>
                  <a href="tel:07595938285" className="text-gray-600 hover:text-blue-900 transition-colors">
                    07595 938285
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <MapPin className="w-12 h-12 text-red-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Service Area</h3>
                  <p className="text-gray-600">Liverpool and surrounding areas</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Clock className="w-12 h-12 text-orange-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">We aim to respond within 24 hours</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="bg-gray-50 p-8 rounded-lg">
              <div className="mb-6">
                <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="opacity-80">Working Together Property Services Ltd</p>
            </div>
            <div className="flex flex-col gap-2">
              <a href="#home" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">
                Home
              </a>
              <a href="/about" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">
                About
              </a>
              <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">
                Contact
              </a>
            </div>
            <div className="opacity-80">
              <p className="mb-2">
                Email:{" "}
                <a href="mailto:workingtogetherps@gmail.com" className="hover:text-orange-500">
                  workingtogetherps@gmail.com
                </a>
              </p>
              <p className="mb-2">
                Phone:{" "}
                <a href="tel:07595938285" className="hover:text-orange-500">
                  07595 938285
                </a>
              </p>
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
