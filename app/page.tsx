"use client"

import Image from "next/image"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { Gallery6 } from "@/components/ui/gallery6"
import { Home, User, Phone as PhoneIcon, Calendar, Mail, MapPin, Clock, Images, Youtube, Instagram } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Page() {
  const navItems = [
    { name: "Home", url: "#home", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Our Work", url: "/gallery", icon: Images },
    { name: "Book Consultation", url: "#booking", icon: Calendar },
  ]

  const BOOKING_FORM_ID = "xqeyllvj"
  const CONTACT_FORM_ID = "mojkllgq"

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [bookingStatus, setBookingStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [contactStatus, setContactStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBookingStatus("submitting")
    try {
      const res = await fetch(`https://formspree.io/f/${BOOKING_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingForm),
      })
      if (res.ok) {
        setBookingStatus("success")
        setBookingForm({ name: "", email: "", phone: "", service: "", message: "" })
      } else {
        setBookingStatus("error")
      }
    } catch {
      setBookingStatus("error")
    }
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setContactStatus("submitting")
    try {
      const res = await fetch(`https://formspree.io/f/${CONTACT_FORM_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      })
      if (res.ok) {
        setContactStatus("success")
        setContactForm({ name: "", email: "", message: "" })
      } else {
        setContactStatus("error")
      }
    } catch {
      setContactStatus("error")
    }
  }

  return (
    <main className="min-h-screen pb-16 md:pb-0">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        {/* Mobile: logo + phone only — nav handled by bottom bar */}
        <div className="md:hidden px-4 py-3 flex items-center justify-between">
          <Image src="/wtlogoltd2.png" alt="Working Together Property Services Logo" width={500} height={500} className="w-auto h-[45px]" priority />
          <a href="tel:07595938285" className="flex items-center text-blue-900">
            <PhoneIcon className="w-6 h-6 text-green-600" />
          </a>
        </div>
        {/* Desktop: logo | centered nav | phone */}
        <div className="hidden md:flex max-w-[1800px] mx-auto px-4 items-center justify-between relative py-2">
          <div className="flex-shrink-0 -ml-4">
            <Image src="/wtlogoltd2.png" alt="Working Together Property Services Logo" width={500} height={500} className="w-auto h-[68px]" priority />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-50">
            <NavBar items={navItems} className="!relative !top-0 !left-0 !-translate-x-0" instanceId="home-desktop" />
          </div>
          <div className="flex-shrink-0 flex items-center gap-2">
            <a href="tel:07595938285" className="flex items-center gap-2 text-blue-900 font-semibold hover:text-blue-700 transition-colors">
              <PhoneIcon className="w-6 h-6 text-green-600" />
              <span>07595 938285</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section — extra top padding on mobile to clear 2-row header */}
      <section id="home" className="relative min-h-[520px] md:h-[55vh] md:min-h-[420px] px-4 text-white overflow-hidden flex items-center justify-center pt-20 pb-16 md:pt-0 md:pb-0">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/bathroom-hero.jpg')", filter: "blur(3px)" }}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.15 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-blue-900/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[1700px] mx-auto text-center relative z-10 pb-8"
        >
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-bold mb-4">Built to Put You First</h1>
          <p className="text-sm sm:text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
            We exist to make your home safer, better, and built around you, with a special dedication to helping older people and those with mobility needs live life on their own terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#booking" className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all hover:-translate-y-1 hover:shadow-xl">
              Book Free Consultation
            </a>
            <a href="#contact" className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all">
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
          { id: "wet-rooms", title: "Wet Rooms", summary: "Our speciality. We convert bathrooms into safe, accessible wet rooms , tailored to your needs with 13 years of expertise.", url: "/gallery", image: "/wetroom2pic2.jpg" },
          { id: "bathrooms", title: "Bathrooms", summary: "Full bathroom installations from design to final fit , contemporary or classic, built to suit your style and budget.", url: "/gallery", image: "/bathroompic2.jpg" },
          { id: "kitchens", title: "Kitchens", summary: "Quality kitchen fitting from start to finish , transforming your cooking space with clean, precise workmanship.", url: "/gallery", image: "/kitchen-home.jpg" },
          { id: "media-walls", title: "Media Walls", summary: "Bespoke media wall installations with integrated fireplaces , a stunning centrepiece for your living room.", url: "/gallery", image: "/mediawall1.jpg" },
        ]}
      />

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-2xl sm:text-4xl md:text-6xl font-extrabold text-blue-900 mb-4">
                Why Choose Working<span className="text-green-600">Together?</span>
              </h2>
              <p className="text-base md:text-xl text-gray-600 mb-6 leading-relaxed">
                Established in 2024, Working Together Property Services Ltd was built on 13 years of industry experience, and a desire to do things properly. We created a business with one primary focus: the customer.
              </p>
              <ul className="space-y-3 md:space-y-6">
                {[
                  "Skilled tradespeople with 13 years of hands-on experience",
                  "Established in 2024 , built around you",
                  "Specialists in accessible wet room conversions",
                  "Dedicated to helping older people & those with mobility needs",
                  "Free consultations, no obligation",
                  "Serving Liverpool and surrounding areas",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-base md:text-xl pb-3 md:pb-4 border-b border-gray-200">
                    <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
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
              className="aspect-[4/5] md:aspect-[4/5] max-h-[400px] md:max-h-none rounded-lg overflow-hidden relative"
            >
              <Image src="/paulworking1.png" alt="Paul Working" width={1600} height={1200} quality={100} className="w-full h-full object-cover object-[center_65%]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-[1700px] mx-auto mb-10 md:mb-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-blue-900 mb-3">What Our Customers Say</h2>
              <p className="text-base md:text-xl text-gray-600">Trusted by homeowners across Liverpool and surrounding areas — here&apos;s what they have to say about working with us.</p>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center mt-4 md:mt-0">
              <div className="bg-gray-50 rounded-2xl p-3 md:p-6">
                <p className="text-xl md:text-4xl font-extrabold text-blue-900 mb-1">4.8</p>
                <div className="flex justify-center gap-0.5 mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-blue-500 text-xs md:text-lg">★</span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 font-medium">Avg Rating</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-3 md:p-6">
                <p className="text-xl md:text-4xl font-extrabold text-blue-900 mb-1">95%</p>
                <p className="text-xs text-gray-500 font-medium mt-2 md:mt-8">Recommend</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-3 md:p-6">
                <p className="text-xl md:text-4xl font-extrabold text-blue-900 mb-1">13+</p>
                <p className="text-xs text-gray-500 font-medium mt-2 md:mt-8">Yrs Experience</p>
              </div>
            </div>
          </div>
        </div>
        <InfiniteSlider gap={24} duration={140} className="w-full">
          {[
            { name: "Karen Mitchell", location: "Wavertree, Liverpool", text: "Absolutely brilliant job on our wet room conversion. My mum can now use the bathroom independently , it's changed her life. The finish is spotless and the lads were so respectful throughout.", service: "Wet Room", stars: 5 },
            { name: "Steve Gallagher", location: "Crosby, Liverpool", text: "Had a full kitchen fitted and couldn't be happier. The attention to detail was fantastic and they kept the mess to a minimum every day. Would recommend to anyone in Liverpool without hesitation.", service: "Kitchen", stars: 5 },
            { name: "Diane Pearce", location: "Childwall, Liverpool", text: "From the free consultation right through to the final tidy up, the whole experience was first class. Our new bathroom looks stunning. Very professional team.", service: "Bathroom", stars: 5 },
            { name: "Tony Brennan", location: "Woolton, Liverpool", text: "Got a media wall installed in the living room and it's the centrepiece of the whole house now. Neat work, no fuss, finished on time. Proper tradesmen.", service: "Media Wall", stars: 5 },
            { name: "Linda Hughes", location: "Allerton, Liverpool", text: "We needed a wet room for my husband after his operation and Working Together sorted everything out quickly and compassionately. The quality is outstanding and it was done within budget.", service: "Wet Room", stars: 5 },
            { name: "Paul Donoghue", location: "Huyton, Liverpool", text: "Second time using these lads , first for a bathroom, now a kitchen. Both times they've been tidy, punctual and the results speak for themselves. Top quality every time.", service: "Kitchen", stars: 5 },
            { name: "Janet Thorpe", location: "West Derby, Liverpool", text: "Really pleased with our new bathroom. They helped us choose the right layout and tiles and the end result looks far better than we imagined. Great value for money.", service: "Bathroom", stars: 5 },
            { name: "Michael Carr", location: "Maghull, Liverpool", text: "Friendly, reliable and genuinely skilled. The media wall looks incredible , exactly what we wanted. Will definitely be getting them back for the bathroom next year.", service: "Media Wall", stars: 5 },
          ].map((review, i) => (
            <div key={i} className="flex-shrink-0 w-[82vw] sm:w-[500px] md:w-[620px] bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-10 shadow-sm">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.stars }).map((_, s) => (
                  <span key={s} className="text-blue-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-base leading-relaxed mb-6">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-blue-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <span className="text-xs font-semibold bg-blue-100 text-blue-900 px-3 py-1 rounded-full">{review.service}</span>
              </div>
            </div>
          ))}
        </InfiniteSlider>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-[1700px] mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-16 border border-gray-200">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-5xl font-extrabold text-blue-900 mb-3">Book Your Free Consultation</h2>
              <p className="text-base md:text-xl text-gray-600">Let&apos;s discuss your project and bring your vision to life</p>
            </div>
            <form onSubmit={handleBookingSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Full Name *</label>
                  <input type="text" id="name" required value={bookingForm.name} onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Email Address *</label>
                  <input type="email" id="email" required value={bookingForm.email} onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Phone Number</label>
                  <input type="tel" id="phone" value={bookingForm.phone} onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Service Interested In *</label>
                  <select id="service" required value={bookingForm.service} onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base">
                    <option value="">Select a service</option>
                    <option value="wet-room">Wet Room</option>
                    <option value="bathroom">Bathroom</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="media-wall">Media Wall</option>
                    <option value="other">Other/Multiple Services</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Project Details *</label>
                <textarea id="message" required value={bookingForm.message} onChange={(e) => setBookingForm({ ...bookingForm, message: e.target.value })} rows={5} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base" placeholder="Tell us about your project..." />
              </div>
              {bookingStatus === "success" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-semibold text-center">
                  Thank you! We&apos;ll be in touch within 24 hours.
                </div>
              )}
              {bookingStatus === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-semibold text-center">
                  Something went wrong. Please try again or call us on 07595 938285.
                </div>
              )}
              <button type="submit" disabled={bookingStatus === "submitting"} className="w-full px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all hover:-translate-y-1 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed">
                {bookingStatus === "submitting" ? "Sending..." : "Request Consultation"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-3">Just Want a Quick Chat?</h2>
            <p className="text-base md:text-lg text-gray-600">No forms, no commitment — drop us a message and we&apos;ll get back to you within 24 hours</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Mail className="w-8 h-8 md:w-12 md:h-12 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Email</h3>
                  <a href="mailto:workingtogetherps@gmail.com" className="text-gray-600 hover:text-blue-900 break-all">workingtogetherps@gmail.com</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <PhoneIcon className="w-8 h-8 md:w-12 md:h-12 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Phone</h3>
                  <a href="tel:07595938285" className="text-gray-600 hover:text-blue-900 transition-colors">07595 938285</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <MapPin className="w-8 h-8 md:w-12 md:h-12 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Service Area</h3>
                  <p className="text-gray-600">Liverpool and surrounding areas</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Clock className="w-8 h-8 md:w-12 md:h-12 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-1">Response Time</h3>
                  <p className="text-gray-600">We aim to respond within 24 hours</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleContactSubmit} className="bg-gray-50 p-5 md:p-8 rounded-lg">
              <div className="mb-4">
                <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Name *</label>
                <input type="text" id="contact-name" required value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base" placeholder="Your name" />
              </div>
              <div className="mb-4">
                <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Email *</label>
                <input type="email" id="contact-email" required value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base" placeholder="your@email.com" />
              </div>
              <div className="mb-4">
                <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-2 text-sm md:text-base">Message *</label>
                <textarea id="contact-message" required value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} rows={4} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none transition-colors text-base" placeholder="Your message..." />
              </div>
              {contactStatus === "success" && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-semibold text-center">
                  Message sent! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {contactStatus === "error" && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 font-semibold text-center">
                  Something went wrong. Please try again or call us on 07595 938285.
                </div>
              )}
              <button type="submit" disabled={contactStatus === "submitting"} className="w-full px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-all disabled:opacity-60 disabled:cursor-not-allowed">
                {contactStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Socials Section */}
      <section className="py-12 md:py-20 px-4 bg-blue-900">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-white mb-3">Follow Our Work</h2>
              <p className="text-base md:text-lg text-blue-200 leading-relaxed">See our latest bathroom, wet room, kitchen and media wall projects as they happen. Follow us on social media for before &amp; afters, tips, and behind-the-scenes content.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <a href="https://www.youtube.com/@workingtogetherps" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-5 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all">
                <Youtube className="w-5 h-5 flex-shrink-0" />
                YouTube
              </a>
              <a href="https://www.instagram.com/workingtogetherps/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-5 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                Instagram
              </a>
              <a href="https://www.tiktok.com/@workingtogetherps" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 px-5 py-4 bg-white text-blue-900 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-all">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
                </svg>
                TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10 px-4">
        <div className="max-w-[1700px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col gap-3">
              <p className="opacity-80 font-medium">Working Together Property Services Ltd</p>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@workingtogetherps" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-red-400 transition-colors text-sm">YouTube</a>
                <a href="https://www.instagram.com/workingtogetherps/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-pink-400 transition-colors text-sm">Instagram</a>
                <a href="https://www.tiktok.com/@workingtogetherps" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 hover:text-white transition-colors text-sm">TikTok</a>
              </div>
            </div>
            <div className="flex gap-6 md:flex-col md:gap-2">
              <a href="#home" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">Home</a>
              <a href="/about" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">About</a>
              <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors">Contact</a>
            </div>
            <div className="opacity-80 text-sm md:text-base">
              <p className="mb-2">Email: <a href="mailto:workingtogetherps@gmail.com" className="hover:text-orange-500 break-all">workingtogetherps@gmail.com</a></p>
              <p className="mb-2">Phone: <a href="tel:07595938285" className="hover:text-orange-500">07595 938285</a></p>
              <p>Serving Liverpool and surrounding areas</p>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-white/10 opacity-70 text-sm">
            <p>&copy; 2026 Working Together Property Services Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
