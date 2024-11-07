/* eslint-disable react/jsx-key */
'use client'

import AdItems from "@/components/AdItems";
import { categories } from "@/libs/helper";
import { Ad } from "@/models/Ad";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [ads, setAds] = useState<Ad[]>([]);
  const formRef = useRef<HTMLFormElement | null>(null);

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
      <form 
        action={handleSearch}
        ref={formRef}
        className="bg-white p-4 border-r grow w-1/4">
        <input name="phrase" type="text" placeholder="Search Marketplace"/>
        <div className="flex flex-col gap-0">
          <label className="radio-btn group">
            <input 
                onClick={() => formRef.current?.requestSubmit()}
                className="hidden" type="radio" name="category" value={''} defaultChecked/>
            <span className="icon group-has-[:checked]:bg-blue-500 group-has-[:checked]:text-white">
                <FontAwesomeIcon icon={faStore}/>
            </span>            
            All Categories
          </label>
          {categories.map(({key, label, icon}) => (
            <label className="radio-btn group">
              <span className="icon group-has-[:checked]:bg-blue-500 group-has-[:checked]:text-white">
                <FontAwesomeIcon icon={icon}/>
              </span>
              <input 
                  onClick={() => formRef.current?.requestSubmit()}
                  className="hidden" type="radio" name="category" value={key}/>
              {label}
            </label>
          ))}
        </div>
      </form>
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

