import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  type MedicalType = "clinic" | "hospital" | "medicalshop";

  interface MedDetails {
    id: number;
    name: string;
    type: MedicalType;
    rating?: number;
    phone?: string;
    address: string;
    isOpen?: boolean;
    distance: number;
  }

  useEffect(() => {
    const getClinics = async () => {
      try {
        const fetch_detials = await axios.get(
          `https://api.geoapify.com/v2/places?categories=healthcare.hospital&filter=circle:82.970712,25.275204,5000&bias=proximity:82.970712,25.275204&limit=20&apiKey=91608788542a4517848a4857ea64779c`,
        );

        let response = fetch_detials.data.features;
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    };

    // getClinics();
  }, []);

  const getMyLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      console.log(lat, long);
    });
  };

  const obj: MedDetails = {
    id: 101,
    name: "City Care Hospital",
    type: "hospital",
    address: "varanasi",
    distance: 4,
    phone: "8753432532",
  };

  const obj_1: MedDetails = {
    id: 102,
    name: "CarePoint Clinic",
    type: "clinic",
    address: "mumbai",
    distance: 3,
    phone: "8755732532",
  };

  const obj_2: MedDetails = {
    id: 103,
    name: "HealthPlus Pharmacy",
    type: "medicalshop",
    address: "delhi",
    distance: 3.2,
    phone: "8745632532",
  };
  const arr = [obj, obj_1, obj_2];

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
          <Link to="/discover" className="font-semibold text-blue-600">
            Find Healthcare
          </Link>
          <Link to="/contact" className="text-slate-600 hover:text-blue-600">
            Contact
          </Link>
        </div>
      </nav>
      {/* Page Header */}
      <section className="bg-blue-600 px-6 py-12 text-center text-white">
        <h1 className="text-4xl font-bold"> Find Healthcare Near You </h1>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100">
          Find doctors, hospitals, clinics and medical stores around your
          location.
        </p>
      </section>
      {/* Search Section */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Your Location
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Enter your city or area"
                className="flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
              <button
                className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                onClick={()=>{
                  getMyLocation()
                }}
              >
                Use My Location
              </button>
            </div>
          </div>
          {/* Search + Filters */}
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {/* Search */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                What are you looking for?
              </label>
              <input
                type="text"
                placeholder="Search dentist, hospital, pharmacy..."
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>
            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>
              <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">
                <option>All</option> <option>Doctors</option>
                <option>Hospitals</option> <option>Clinics</option>
                <option>Medical Stores</option>
              </select>
            </div>
            {/* Radius */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Distance
              </label>
              <select className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500">
                <option>2 km</option> <option>3 km</option>
                <option>4 km</option> <option>5 km</option>
                <option>10 km</option>
              </select>
            </div>
          </div>
          {/* Search Button */}
          <div className="mt-6 flex justify-end">
            <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white hover:bg-blue-700">
              Search Healthcare
            </button>
          </div>
        </div>
        {/* Results Header */}
        <div className="mt-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Healthcare Near You
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Showing results within 5 km
            </p>
          </div>
          <select className="rounded-lg border border-slate-300 bg-white px-4 py-2">
            <option>Sort: Recommended</option> <option>Nearest</option>
            <option>Highest Rated</option>
          </select>
        </div>
        {/* Results */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Place Card */}
          {/* <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                🩺
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      City Dental Care
                    </h3>
                    <p className="mt-1 text-sm text-blue-600"> Dentist </p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Open
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-yellow-500">★ 4.8</span>
                  <span className="text-slate-400"> • </span>
                  <span className="text-slate-500"> 1.2 km away </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  MG Road, Near Central Market
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/place/1"
                className="flex-1 rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                View Details
              </Link>
              <button className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Directions
              </button>
            </div>
          </div> */}
          {/* Place Card */}
          {/* <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-red-100 text-3xl">
                🏥
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      City Care Hospital
                    </h3>
                    <p className="mt-1 text-sm text-blue-600">Hospital</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Open
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-yellow-500">★ 4.6</span>
                  <span className="text-slate-400"> • </span>
                  <span className="text-slate-500"> 2.4 km away </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Civil Lines, Main Road
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/place/2"
                className="flex-1 rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                View Details
              </Link>
              <button className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Directions
              </button>
            </div>
          </div> */}
          {/* Place Card */}
          {/* <div className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex gap-4">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-3xl">
                💊
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      HealthPlus Pharmacy
                    </h3>
                    <p className="mt-1 text-sm text-blue-600">Medical Store</p>
                  </div>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Open
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-yellow-500">★ 4.5</span>
                  <span className="text-slate-400"> • </span>
                  <span className="text-slate-500"> 3.1 km away </span>
                </div>
                <p className="mt-2 text-sm text-slate-500">
                  Station Road, Near Bus Stand
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4">
              <Link
                to="/place/3"
                className="flex-1 rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                View Details
              </Link>
              <button className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Directions
              </button>
            </div>
          </div> */}
          {/* Place Card */}
          {arr.map((e) => {
            return (
              <div
                className="rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md"
                key={e.id}
              >
                <div className="flex gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-green-100 text-3xl">
                    🏨
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {e.name}
                        </h3>
                        <p className="mt-1 text-sm text-blue-600"> {e.type} </p>
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {e.isOpen === undefined
                          ? "N/A"
                          : e.isOpen === true
                            ? "Open"
                            : "Close"}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-sm">
                      <span className="font-semibold text-yellow-500">
                        ★ {e.rating}
                      </span>
                      <span className="text-slate-400"> • </span>
                      <span className="text-slate-500">
                        {" "}
                        {e.distance} km away{" "}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-slate-500">{e.address}</p>
                  </div>
                </div>
                <div className="mt-5 flex gap-3 border-t border-slate-100 pt-4">
                  <Link
                    to="/place/4"
                    className="flex-1 rounded-lg bg-blue-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    View Details
                  </Link>
                  <button className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    Directions
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      {/* Footer */}
      <footer className="mt-10 bg-slate-900 px-8 py-8 text-center text-slate-400">
        <p> © 2026 DocterSheet. Your health, closer to you. </p>
      </footer>
    </div>
  );
};

export default Discover;
