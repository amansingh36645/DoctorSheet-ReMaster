import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">
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
          <Link to="/contact" className="text-slate-600 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </nav>
      {/* Hero */}
      <section className="px-8 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold text-blue-600">
              Your Health, Our Priority
            </p>
            <h1 className="text-5xl font-bold leading-tight text-slate-900">
              Find Healthcare
              <span className="block text-blue-600"> Near You </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Discover nearby doctors, hospitals, clinics and medical stores
              based on your location.
            </p>
            <div className="mt-8">
              <Link
                to="/discover"
                className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Find Healthcare Near Me
              </Link>
            </div>
          </div>
          {/* Hero illustration */}
          <div className="flex justify-center">
            <div className="flex h-80 w-80 items-center justify-center rounded-full bg-blue-100">
              <div className="flex h-52 w-52 items-center justify-center rounded-full bg-blue-600 text-7xl text-white">
                +
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Find What You Need
            </h2>
            <p className="mt-3 text-slate-600">
              Search for healthcare services near your location.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🩺
              </div>
              <h3 className="font-semibold text-slate-900"> Doctors </h3>
              <p className="mt-2 text-sm text-slate-500">
                Find doctors and specialists nearby.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🏥
              </div>
              <h3 className="font-semibold text-slate-900"> Hospitals </h3>
              <p className="mt-2 text-sm text-slate-500">
                Discover hospitals around you.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🏨
              </div>
              <h3 className="font-semibold text-slate-900"> Clinics </h3>
              <p className="mt-2 text-sm text-slate-500">
                Find clinics and healthcare centers.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                💊
              </div>
              <h3 className="font-semibold text-slate-900">Medical Stores</h3>
              <p className="mt-2 text-sm text-slate-500">
                Locate medical stores near you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* How it works */}
      <section className="px-8 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              How DocterSheet Works
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                1
              </div>
              <h3 className="font-semibold">Choose Location</h3>
              <p className="mt-2 text-sm text-slate-600">
                Allow location access or search for your area manually.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                2
              </div>
              <h3 className="font-semibold">Search Healthcare</h3>
              <p className="mt-2 text-sm text-slate-600">
                Search doctors, hospitals, clinics or medical stores.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                3
              </div>
              <h3 className="font-semibold">Get Details</h3>
              <p className="mt-2 text-sm text-slate-600">
                View location, ratings, contact information and other details.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-blue-600 px-8 py-16 text-center text-white">
        <h2 className="text-3xl font-bold"> Need Healthcare Near You? </h2>
        <p className="mx-auto mt-4 max-w-xl text-blue-100">
          Find doctors, hospitals, clinics and medical stores in your area.
        </p>
        <Link
          to="/discover"
          className="mt-7 inline-block rounded-lg bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
        >
          Start Searching
        </Link>
      </section>
      {/* Footer */}
      <footer className="bg-slate-900 px-8 py-8 text-center text-slate-400">
        <p> © 2026 DocterSheet. Your health, closer to you. </p>
      </footer>
    </div>
  );
};

export default Home;
