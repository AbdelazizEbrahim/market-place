'use client'

import UploadThumbnail from "@/components/UploadThumbnail";
/* eslint-disable react/jsx-key */
import { Ad } from "@/models/Ad";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [ads, setAds] = useState<Ad[]>([]);
  useEffect(() => {
    fetch('/api/ads').then(response => {
      response.json().then(adsDocs => {
        setAds(adsDocs);
      })
    })
  }, []);
  return (
    <div className="flex w-full">
      <div className="bg-gray-300 grow w-1/4">left</div>
      <div className="p-4 grow w-3/4">
      <h2 className="font-bold mt-2 mb-4">Latest Products</h2>
      <div className="grid md:grid-cols-4 gap-x-4 gap-y-8">
        {ads.map(ad => (
          <div className="border-red-500 min-h-24 flex flex-col justify-end">
            {ad.files?.length > 0 && (
              <div className="rounded-md overflow-hidden relative">
                <UploadThumbnail file={ad.files[0]} onClick={() => {}}/>
                  <Link href={`/ad/${ad._id}`} className="absolute inset-0"></Link>
              </div>
            )}
            <div className="">
              <p className="mt-1 font-bold ">Br.{ad.price}</p>
              <Link href={`/ad/${ad._id}`}>{ad.title}</Link>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

