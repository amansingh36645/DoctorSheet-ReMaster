import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-white px-8 py-5 shadow-sm">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DocterSheet
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-blue-600">
            Home
          </Link>
          <Link to="/discover" className="text-slate-600 hover:text-blue-600">
            Find Healthcare
          </Link>
          <Link to="/contact" className="font-semibold text-blue-600">
            Contact
          </Link>
        </div>
      </nav>
      {/* Hero */}
      <section className="bg-blue-600 px-6 py-14 text-center text-white">
        <p className="mb-3 font-semibold text-blue-200">We’re Here to Help</p>
        <h1 className="text-4xl font-bold"> Contact DocterSheet </h1>
        <p className="mx-auto mt-4 max-w-2xl text-blue-100">
          Have a question, found incorrect information, or need help using
          DocterSheet? Get in touch with us.
        </p>
      </section>
      {/* Contact Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Our support team is available to help with questions, feedback
                and problems related to DocterSheet.
              </p>
            </div>
            {/* Email */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900"> Email </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    support@doctersheet.com
                  </p>
                </div>
              </div>
            </div>
            {/* Phone */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900"> Phone </h3>
                  <p className="mt-1 text-sm text-slate-500">+91 98765 43210</p>
                </div>
              </div>
            </div>
            {/* Location */}
            <div className="rounded-xl bg-white p-5 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Location</h3>
                  <p className="mt-1 text-sm text-slate-500"> India </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">
              Send Us a Message
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Fill out the form and our team will get back to you.
            </p>
            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">
                  <option>General Question</option>
                  <option>Report Incorrect Information</option>
                  <option>Technical Problem</option> <option>Feedback</option>
                  <option>Business Inquiry</option>
                </select>
              </div>
              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* Help Section */}
        <section className="mt-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              How Can We Help?
            </h2>
            <p className="mt-2 text-slate-500">
              Common reasons people contact DocterSheet
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🔎
              </div>
              <h3 className="font-semibold text-slate-900">
                Can't Find a Place?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Tell us about a healthcare provider that you think should appear
                on DocterSheet.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-2xl">
                ⚠️
              </div>
              <h3 className="font-semibold text-slate-900">
                Incorrect Information?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Let us know if a location, phone number or other information
                needs to be corrected.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                💡
              </div>
              <h3 className="font-semibold text-slate-900">Have Feedback?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Share your ideas and suggestions to help us improve DocterSheet.
              </p>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="mt-10 bg-slate-900 px-8 py-8 text-center text-slate-400">
        <p> © 2026 DocterSheet. Your health, closer to you. </p>
      </footer>
    </div>
  );
};

export default Contact;
