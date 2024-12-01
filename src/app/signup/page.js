'use client'

import { useState } from "react";
import { CitySelect, CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function SignUp() {
  const [role, setRole] = useState("");
  const [countryId, setCountryId] = useState(null);
  const [, setCountryName] = useState("Ethiopia");
  const [stateId, setStateId] = useState(null);
  const [stateName, setStateName] = useState("");
  const [cityId, setCityId] = useState(null);
  const [cityName, setCityName] = useState("");

  return (
    <div className="max-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg mt-3 ">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form>
            <div className="grow grid grid-cols-2 gap-5">
                <div className="">
                            {/* Full Name */}
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Full Name
                        </label>
                        <input
                        type="text"
                        id="fullName"
                        placeholder="Enter your full name"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Password
                        </label>
                        <input
                        type="password"
                        id="password"
                        placeholder="Enter a strong password"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                        Confirm Password
                        </label>
                        <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Re-Enter password"
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                        />
                    </div>
                </div>
                <div className="">
                    {/* Role Selection */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Sign Up As</label>
                        <div className="flex items-center space-x-4 mt-2">
                        <label className="flex items-center">
                            <input
                            type="radio"
                            name="role"
                            value="Seller"
                            onChange={() => setRole("Seller")}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <span className="ml-2">Seller</span>
                        </label>
                        <label className="flex items-center">
                            <input
                            type="radio"
                            name="role"
                            value="Buyer"
                            onChange={() => setRole("Buyer")}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                            <span className="ml-2">Buyer</span>
                        </label>
                        </div>
                    </div>
                    {role === "Seller" && (
                        <div>
                        {/* TIN Number */}
                        <div className="mb-4">
                            <label htmlFor="tinNumber" className="block text-sm font-medium text-gray-700">
                            TIN Number
                            </label>
                            <input
                            type="file"
                            id="tinNumber"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            required
                            />
                        </div>

                        {/* National ID */}
                        <div className="mb-4">
                            <label htmlFor="nationalId" className="block text-sm font-medium text-gray-700">
                            National ID
                            </label>
                            <input
                            type="file"
                            id="nationalId"
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            required
                            />
                        </div>
                        </div>
                    )}
                </div>
            </div>

          {/* Address */}
          <div className="mb-4">
            <div>Location</div>
            <div className="flex flex-col sm:flex-row gap-4">
              <CountrySelect
                defaultValue={{ id: 1, name: "Ethiopia" }} // Default country is Ethiopia
                onChange={(e) => {
                  setCountryId(e.id);
                  setCountryName(e.name);
                }}
                placeHolder="Select Country"
                isDisabled={true} // Disable country selection (set default to Ethiopia)
              />
              <StateSelect
                defaultValue={stateId ? { id: stateId, name: stateName } : 0}
                countryid={countryId}
                onChange={(e) => {
                  setStateId(e.id);
                  setStateName(e.name);
                }}
                placeHolder="Select State"
              />
              <CitySelect
                defaultValue={cityId ? { id: cityId, name: cityName } : 0}
                countryid={countryId}
                stateid={stateId}
                onChange={(e) => {
                  setCityId(e.id);
                  setCityName(e.name);
                }}
                placeHolder="Select City"
              />
            </div>
          </div>

          {/* Submit Button */}
        <div className="flex justify-center mt-6">
            <button
                type="submit"
                className="w-1/3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Sign Up
            </button>
        </div>
        {/* Sign Up Link */}
         <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account? <a href="/signin" className="text-blue-600 hover:text-blue-800">Sign In</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}
