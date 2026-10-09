import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [category, setCategory] = useState("all");
  const [kilometer, setKilometer] = useState("2000");

  const [data, setData] = useState<MedicalPlace[]>([]);

  interface MedicalPlace {
    id: string;
    name: string;
    type: string;
    address: string;
    distance: number;
    latitude: number;
    longitude: number;
  }

  useEffect(() => {
    // get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        setLongitude(long);
        setLatitude(lat);
      },
      (error) => {
        const err = error.PERMISSION_DENIED;
        const msg = error.message;
        console.log(err, msg);
      },
    );
  }, []);

  const getDeatils = async () => {
    //calling the api
    try {
      const fetch_detials = await axios.get(
        `https://api.geoapify.com/v2/places?categories=healthcare${category}&filter=circle:${longitude},${latitude},${kilometer}&bias=proximity:${longitude},${latitude}&limit=12&apiKey=91608788542a4517848a4857ea64779c`,
      );

      const response = fetch_detials.data.features.map((e) => {
        return {
          id: e.properties.place_id,
          name: e.properties.name,
          type: e.properties.categories[0],
          address: e.properties.formatted,
          distance: e.properties.distance,
          latitude: e.properties.lat,
          longitude: e.properties.lon,
        };
      });
      const place: MedicalPlace[] = response;
      setData(place);
      console.log(category);
      console.log(kilometer);
      
    } catch (err) {
      console.log(err);
    }
  };

  const filterName = (e) => {
    setCategory(e.target.value)

  }

  const kiloRange = (e)=>{
    setKilometer(e.target.value)
  }

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
          {/* Search + Filters */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Category */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Category
              </label>

              <select value={category}
                onChange={filterName}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value={""}>All</option>
                <option value={".dentist"}>Dentist</option>
                <option value={".hospital"}>Hospitals</option>
                <option value={".clinic_or_praxis.general"}>General</option>
                <option value={".pharmacy"}>Pharmacy</option>
              </select>
            </div>

            {/* Radius */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Distance
              </label>

              <select onChange={kiloRange} value={kilometer} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100">
                <option value={"2000"}>2 km</option>
                <option value={"3000"}>3 km</option>
                <option value={"4000"}>4 km</option>
                <option value={"5000"}>5 km</option>
                <option value={"10000"}>10 km</option>
              </select>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => {
                getDeatils();
              }}
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
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
        {data.length === 0 ? (
          <div>Click search for result</div>
        ) : (
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Place Card */}
            {data.map((e) => {
              return (
                <div
                  className="rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  key={e.id}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                        🏥
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-slate-800">
                          {e.name}
                        </h3>

                        <span className="mt-1 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                          {e.type}
                        </span>
                      </div>
                    </div>

                    {/* Distance */}
                    <span className="whitespace-nowrap rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                      {e.distance} m away
                    </span>
                  </div>

                  {/* Address */}
                  <div className="mt-5 flex gap-3">
                    <span className="text-lg">📍</span>

                    <p className="text-sm leading-6 text-slate-600">
                      {e.address}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex gap-3">
                    <button className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                      View Details
                    </button>

                    <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                      Directions
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
      {/* Footer */}
      <footer className="mt-10 bg-slate-900 px-8 py-8 text-center text-slate-400">
        <p> © 2026 DocterSheet. Your health, closer to you. </p>
      </footer>
    </div>
  );
};

export default Discover;
