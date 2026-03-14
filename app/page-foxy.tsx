"use client"

import Image from "next/image"
import { FoxyHero } from "@/components/ui/foxy-hero"
import { useState } from "react"

export default function Page() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section with FoxyHero Component */}
      <FoxyHero
        logo={{
          icon: (
            <Image
              src="/wtlogoltd2.png"
              alt="Working Together"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          ),
          text: "Working Together",
        }}
        navigation={[
          { label: "Home", isActive: true, onClick: () => scrollToSection("home") },
          { label: "About", onClick: () => scrollToSection("about") },
          { label: "Booking", onClick: () => scrollToSection("booking") },
          { label: "Contact", onClick: () => scrollToSection("contact") },
        ]}
        headerCta={{
          label: "Get Quote",
          onClick: () => scrollToSection("booking"),
        }}
        title="Transform Your Home with Expert Installation Services"
        subtitle="Professional wet rooms, bathrooms, kitchens, and media walls in Liverpool"
        ctaButtons={{
          primary: {
            label: "Book Now",
            onClick: () => scrollToSection("booking"),
          },
          secondary: {
            label: "Learn More →",
            onClick: () => scrollToSection("about"),
          },
        }}
      />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Why Choose Working Together?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are a trusted property services company serving the Liverpool area, specializing in
                high-quality installations for wet rooms, bathrooms, kitchens, and media walls.
              </p>
              <ul className="space-y-4">
                {[
                  "Professional and experienced installers",
                  "Quality craftsmanship guaranteed",
                  "Competitive pricing",
                  "Free consultations",
                  "Serving Liverpool and surrounding areas",
                  "Customer satisfaction focused",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 text-lg pb-3 border-b border-gray-200">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[400px] bg-gradient-to-br from-blue-900 to-blue-600 rounded-lg flex items-center justify-center text-white text-2xl font-semibold">
              Your Vision, Our Expertise
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Book Your Free Consultation</h2>
            <p className="text-lg text-gray-600">Let&apos;s discuss your project and bring your vision to life</p>
          </div>
          <form onSubmit={handleBookingSubmit} className="bg-white p-8 rounded-lg shadow-lg">
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
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">We&apos;re here to help with your property needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="text-5xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Email</h3>
                  <a href="mailto:workingtogetherps@gmail.com" className="text-gray-600 hover:text-blue-900">
                    workingtogetherps@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-5xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Service Area</h3>
                  <p className="text-gray-600">Liverpool and surrounding areas</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="text-5xl">⏰</div>
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
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                src="/wtlogoltd2.png"
                alt="Working Together Property Services"
                width={500}
                height={500}
                className="mb-4 brightness-0 invert w-auto h-[70px]"
              />
              <p className="opacity-80">Working Together Property Services</p>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => scrollToSection("home")} className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection("about")} className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection("contact")} className="opacity-80 hover:opacity-100 hover:text-orange-500 transition-colors text-left">
                Contact
              </button>
            </div>
            <div className="opacity-80">
              <p className="mb-2">
                Email:{" "}
                <a href="mailto:workingtogetherps@gmail.com" className="hover:text-orange-500">
                  workingtogetherps@gmail.com
                </a>
              </p>
              <p>Serving Liverpool and surrounding areas</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10 opacity-70">
            <p>&copy; 2026 Working Together Property Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
