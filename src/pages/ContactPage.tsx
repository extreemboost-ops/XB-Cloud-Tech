/* eslint-disable */

// @ts-nocheck

import React, { useState } from "react"

import {
  Cloud,
  ChevronDown,
  Menu,
  ChevronRight,
  Globe,
  Terminal,
  Briefcase,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Plus,
  Minus,
  AlertCircle,
  CheckCircle2,
} from "lucide-react"

// --- Contact Page ---

const ContactPage = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0)

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle",
  )
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "sales",
    message: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const faqs = [
    {
      q: "How quickly can I expect a response?",
      a: "For sales and general inquiries, our team typically responds within 2-4 hours during business days. If you are an existing customer with technical issues, please open a ticket in the Console for SLA-backed response times.",
    },

    {
      q: "Do you offer custom enterprise pricing?",
      a: "Yes. For workloads exceeding $5,000/month or requiring custom compliance agreements, our sales engineering team can design a tailored contract and volume discount.",
    },

    {
      q: "Can I get technical support over the phone?",
      a: "Phone support is available 24/7 exclusively for customers on our Professional and Enterprise support tiers. Standard users receive priority email and ticket support.",
    },

    {
      q: "Where are your offices located?",
      a: "Our global headquarters is in San Francisco, CA. We also have major engineering hubs in London, UK and Singapore to support our global data center footprint.",
    },
  ]

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    if (formErrors[e.target.id]) {
      setFormErrors((prev) => ({ ...prev, [e.target.id]: "" }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple validation
    const errors: Record<string, string> = {}
    if (!formData.name) errors.name = "Name is required"
    if (!formData.email) errors.email = "Email is required"
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      errors.email = "Invalid email format"
    if (formData.phone && !/^\+?[0-9\s\-\(\)]+$/.test(formData.phone))
      errors.phone = "Invalid phone number"
    if (!formData.message) errors.message = "Message is required"

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setFormState("submitting")

    setTimeout(() => {
      setFormState("success")
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "sales",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="bg-light-base flex flex-col font-sans text-neutral-900 selection:bg-primary/20">
      {/* Header */}
      <header className="bg-dark-base text-white pt-20 pb-40 relative overflow-hidden">
        {/* Subtle Illustration background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-20 -mt-32 -mr-32">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#0B5FFF"
              d="M47.7,-60.8C61.4,-51.7,71.7,-37.2,77.3,-21.3C82.8,-5.4,83.7,11.8,77.4,26.9C71.1,42,57.7,55,42.4,62.3C27.1,69.5,9.8,70.9,-6.2,68.7C-22.1,66.4,-36.8,60.5,-49.2,50.7C-61.6,40.9,-71.8,27.2,-76.3,11.5C-80.9,-4.1,-79.8,-21.7,-71.3,-35.5C-62.8,-49.3,-47.1,-59.4,-31.6,-66.1C-16.1,-72.7,-0.8,-76.1,15.1,-71.9C31,-67.7,46.3,-55.8,47.7,-60.8Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-h1 mb-6 text-white leading-tight">
              Let's talk about your infrastructure.
            </h1>
            <p className="text-body-lg text-neutral-400 mb-0">
              Whether you are looking to scale, need custom pricing, or have a
              technical question, our team of cloud experts is here to help.
            </p>
          </div>
        </div>
      </header>

      {/* Split Layout Section */}
      <section className="-mt-24 relative z-20 pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-neutral-200 shadow-xl">
              {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                  <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center text-success mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-h2 mb-4">Message Sent!</h3>
                  <p className="text-neutral-500 mb-8 max-w-md">
                    Thank you for reaching out. One of our cloud engineers will
                    get back to you within the next 2-4 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-semibold hover:bg-neutral-200 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-h3 mb-8">Send us a message</h3>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`peer w-full px-4 pt-6 pb-2 bg-light-base border ${
                            formErrors.name
                              ? "border-rose-500 focus:ring-rose-500"
                              : "border-neutral-200 focus:border-primary focus:ring-primary"
                          } rounded-xl text-neutral-900 focus:outline-none focus:bg-white focus:ring-1 transition-all placeholder-transparent`}
                          placeholder="Jane Doe"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-4 top-2 text-xs font-semibold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold pointer-events-none ${
                            formErrors.name
                              ? "text-rose-500 peer-focus:text-rose-500"
                              : "text-neutral-500 peer-focus:text-primary"
                          }`}
                        >
                          Full Name
                        </label>
                        {formErrors.name && (
                          <span className="text-xs text-rose-500 absolute -bottom-5 left-2">
                            {formErrors.name}
                          </span>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`peer w-full px-4 pt-6 pb-2 bg-light-base border ${
                            formErrors.email
                              ? "border-rose-500 focus:ring-rose-500"
                              : formData.email && !formErrors.email
                                ? "border-success focus:ring-success"
                                : "border-neutral-200 focus:border-primary focus:ring-primary"
                          } rounded-xl text-neutral-900 focus:outline-none focus:bg-white focus:ring-1 transition-all placeholder-transparent ${
                            formData.email && !formErrors.email ? "pr-10" : ""
                          }`}
                          placeholder="jane@company.com"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-4 top-2 text-xs font-semibold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold pointer-events-none ${
                            formErrors.email
                              ? "text-rose-500 peer-focus:text-rose-500"
                              : formData.email && !formErrors.email
                                ? "text-success peer-focus:text-success"
                                : "text-neutral-500 peer-focus:text-primary"
                          }`}
                        >
                          Work Email
                        </label>
                        {formData.email && !formErrors.email && (
                          <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-success pointer-events-none" />
                        )}
                        {formErrors.email && (
                          <span className="text-xs text-rose-500 absolute -bottom-5 left-2">
                            {formErrors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="peer w-full px-4 pt-6 pb-2 bg-light-base border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-transparent"
                          placeholder="Acme Corp"
                        />
                        <label
                          htmlFor="company"
                          className="absolute left-4 top-2 text-xs font-semibold text-neutral-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold peer-focus:text-primary pointer-events-none"
                        >
                          Company Name (Optional)
                        </label>
                      </div>

                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`peer w-full px-4 pt-6 pb-2 bg-light-base border ${
                            formErrors.phone
                              ? "border-rose-500 focus:ring-rose-500"
                              : "border-neutral-200 focus:border-primary focus:ring-primary"
                          } rounded-xl text-neutral-900 focus:outline-none focus:bg-white focus:ring-1 transition-all placeholder-transparent ${
                            formErrors.phone ? "pr-10" : ""
                          }`}
                          placeholder="+1 234 567 890"
                        />
                        <label
                          htmlFor="phone"
                          className={`absolute left-4 top-2 text-xs font-semibold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold pointer-events-none ${
                            formErrors.phone
                              ? "text-rose-500 peer-focus:text-rose-500"
                              : "text-neutral-500 peer-focus:text-primary"
                          }`}
                        >
                          Phone Number
                        </label>
                        {formErrors.phone && (
                          <>
                            <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-rose-500 pointer-events-none" />
                            <span className="text-xs text-rose-500 absolute -bottom-5 left-2">
                              {formErrors.phone}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="relative pt-2">
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="peer w-full px-4 pt-6 pb-2 bg-light-base border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none font-medium"
                      >
                        <option value="sales">
                          Sales Inquiry & Enterprise Pricing
                        </option>
                        <option value="support">
                          Technical Support (Requires Login)
                        </option>
                        <option value="partnership">
                          Partnerships & Integrations
                        </option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      <label
                        htmlFor="service"
                        className="absolute left-4 top-4 text-xs font-semibold text-neutral-500 pointer-events-none"
                      >
                        Topic
                      </label>
                      <ChevronDown className="absolute right-4 top-1/2 w-5 h-5 text-neutral-500 pointer-events-none" />
                    </div>

                    <div className="relative">
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={`peer w-full px-4 pt-6 pb-2 bg-light-base border ${
                          formErrors.message
                            ? "border-rose-500 focus:ring-rose-500"
                            : "border-neutral-200 focus:border-primary focus:ring-primary"
                        } rounded-xl text-neutral-900 focus:outline-none focus:bg-white focus:ring-1 transition-all placeholder-transparent resize-none`}
                        placeholder="How can we help?"
                      ></textarea>
                      <label
                        htmlFor="message"
                        className={`absolute left-4 top-2 text-xs font-semibold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:font-normal peer-placeholder-shown:text-neutral-400 peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold pointer-events-none ${
                          formErrors.message
                            ? "text-rose-500 peer-focus:text-rose-500"
                            : "text-neutral-500 peer-focus:text-primary"
                        }`}
                      >
                        Message
                      </label>
                      {formErrors.message && (
                        <span className="text-xs text-rose-500 absolute -bottom-5 left-2">
                          {formErrors.message}
                        </span>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className={`w-full px-6 py-4 bg-primary text-white rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 ${
                        formState === "submitting"
                          ? "opacity-70 cursor-not-allowed"
                          : "hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                      }`}
                    >
                      {formState === "submitting"
                        ? "Sending..."
                        : "Send Message"}
                      {formState !== "submitting" && (
                        <ArrowRight className="w-5 h-5" />
                      )}
                    </button>

                    <p className="text-xs text-neutral-500 text-center mt-4">
                      By submitting this form, you agree to our{" "}
                      <a href="#" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Right: Contact Info & Map */}
            <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-10">
              <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-md transition-all flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Email Us</h4>
                  <p className="text-sm text-neutral-500 mb-2">
                    For general queries, including partnership opportunities.
                  </p>
                  <a
                    href="mailto:hello@xbcloud.tech"
                    className="text-primary font-semibold hover:underline"
                  >
                    hello@xbcloud.tech
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-md transition-all flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">Call Us</h4>
                  <p className="text-sm text-neutral-500 mb-2">
                    Mon-Fri from 8am to 5pm PST.
                  </p>
                  <a
                    href="tel:+18005550199"
                    className="text-primary font-semibold hover:underline"
                  >
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm hover:shadow-md transition-all flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 mb-1">
                    Technical Support
                  </h4>
                  <p className="text-sm text-neutral-500 mb-2">
                    Available 24/7 for critical incidents.
                  </p>
                  <a
                    href="#"
                    className="text-primary font-semibold hover:underline flex items-center gap-1"
                  >
                    Open Support Ticket <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-neutral-200 rounded-2xl overflow-hidden h-48 border border-neutral-200 relative group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                  alt="Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-white border-y border-neutral-200">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Our Global Offices</h2>
            <p className="text-body text-neutral-500">
              Come visit us or mail us at one of our primary engineering hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: "San Francisco",
                region: "Global Headquarters",
                address:
                  "100 Market Street\nSan Francisco, CA 94105\nUnited States",
              },

              {
                city: "London",
                region: "EMEA Hub",
                address:
                  "1 Canada Square\nCanary Wharf, London E14 5AB\nUnited Kingdom",
              },

              {
                city: "Singapore",
                region: "APAC Hub",
                address:
                  "Marina Bay Financial Centre\n8 Marina Blvd, Singapore 018981",
              },
            ].map((office, idx) => (
              <div
                key={idx}
                className="bg-light-base rounded-2xl p-8 border border-neutral-100 shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  <Globe className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-neutral-900 mb-1">
                  {office.city}
                </h4>
                <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-6">
                  {office.region}
                </div>
                <p className="text-neutral-500 whitespace-pre-line leading-relaxed">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Banner */}
      <section className="py-20 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div className="container-custom relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xl">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Need immediate answers?
              </h3>
              <p className="text-neutral-300">
                Our sales engineering team is online and ready to chat.
              </p>
            </div>
          </div>
          <button className="whitespace-nowrap px-8 py-3.5 bg-primary text-white rounded-xl font-bold text-base transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center gap-2">
            Start Live Chat <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Contact FAQs</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-light-base border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-neutral-100 transition-colors"
                >
                  <span className="font-semibold text-neutral-900 pr-8">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      activeFAQ === idx
                        ? "bg-primary/10 text-primary"
                        : "bg-white border border-neutral-200 text-neutral-500"
                    }`}
                  >
                    {activeFAQ === idx ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFAQ === idx
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 text-neutral-600 text-sm leading-relaxed border-t border-neutral-200 mt-2 pt-4 bg-white">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
