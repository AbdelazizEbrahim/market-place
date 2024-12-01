'use client';

import AdItem from "@/components/AdItems";
import SearchForm from "@/components/SearchForm";
import { Ad } from "@/models/Ad";
import { useState, useEffect } from "react";

export default function Home() {
  const [ads, setAds] = useState<Ad[] | null>(null); // Null indicates loading
  const [adsParams, setAdsParams] = useState<URLSearchParams>(new URLSearchParams);
  const [error, setError] = useState<string | null>(null); // Error state for debugging

  // Fetch ads function
  async function fetchAds(params?: URLSearchParams) {
    if (!params) params = new URLSearchParams();

    const url = `/api/ads?${params.toString()}`;
    console.log("Fetching ads from URL:", url); // Debug log

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ads: ${response.status} ${response.statusText}`);
      }
      const adsDocs = await response.json();
      console.log("Fetched ads:", adsDocs); // Debug log

      setAds(adsDocs);
      setAdsParams(params);
      setError(null); // Clear any previous error
    } catch (err) {
      console.error("Error fetching ads:", err);
      setAds([]);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    }
  }

  // Handle search form submission
  function handleSearch(formData: FormData) {
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        params.set(key, value);
      }
    });
    console.log("Search params:", params.toString()); // Debug log
    fetchAds(params);
  }

  // Automatically fetch ads when the component mounts
  useEffect(() => {
    console.log("Component mounted, fetching initial ads...");
    fetchAds();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Check if search parameters are dirty
  const formDirty = adsParams.get('phrase')
    || adsParams.get('category')
    || adsParams.get('min')
    || adsParams.get('max');

  return (
    <div className="flex w-full">
      <SearchForm action={handleSearch} />
      <div className="p-4 grow bg-gray-100 w-3/4">
        <h2 className="font-bold mt-2 mb-4">
          {formDirty ? 'Search results' : 'Latest Products'}
        </h2>
        <div className="grid md:grid-cols-4 gap-x-4 gap-y-6">
          {ads && ads.map(ad => (
            <AdItem key={ad._id} ad={ad} />
          ))}
        </div>
        {ads && ads.length === 0 && (
          <div className="text-gray-400">No products found</div>
        )}
        {ads === null && (
          <div className="text-gray-400">Loading...</div>
        )}
        {error && (
          <div className="text-red-500 mt-4">Error: {error}</div>
        )}
      </div>
    </div>
  );
}
