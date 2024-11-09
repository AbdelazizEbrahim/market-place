/* eslint-disable react/jsx-key */
'use client'

import AdItems from "@/components/AdItems";
import SearchForm from "@/components/SearchForm";
import { Ad } from "@/models/Ad";
import { useEffect, useState } from "react";

export default function Home() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    fetchAds();
  }, []);

  function fetchAds(params?: URLSearchParams ) {
    const url = `/api/ads?${params?.toString() || ''}`
    fetch(url).then(response => {
      response.json().then(adsDocs => {
        setAds(adsDocs);
      })
    })
  }

  function handleSearch(formData: FormData) {
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if(typeof value === 'string') {
        params.set(key, value);
      }
    });
   fetchAds(params);
  }

  return (
    <div className="flex w-full">
      <SearchForm action={handleSearch}/>
      <div className="p-4 grow w-3/4">
      <h2 className="font-bold mt-2 mb-4">Latest Products</h2>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8">
        {ads.map(ad => (
          <AdItems key={ad._id} ad={ad}/>
        ))}
      </div>
      </div>
    </div>
  );
}

