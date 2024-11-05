'use client'

import AdTextInput from '@/components/AdTextInput'
import UploadArea from '@/components/UploadArea'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import React, { useEffect, useState } from 'react'
import MapPicker from 'react-google-map-picker'

const NewProductPage = () => {
    const [files, setFiles] = useState<UploadResponse[]>([]);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        setShowMap(true);
    }, [])

  return (
    <form action={''} className='max-w-xl mx-auto grid grid-cols-2 gap-12'>
        <div className='grow pt-8'>
            
           <UploadArea files={files} setFiles={setFiles}/>

            <div className='mt-8'>
                <label htmlFor=''>Where Is It Located?</label>
                <button className='w-full flex items-center gap-1 py-1 justify-center border border-gray-400 text-gray-600 rounded'>
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                    <span>Share Current Location</span>
                </button>
                <div className='mt-2 bg-gray-100 p-4 min-h-12 rounded text-gray-400 text-center'>
                    {showMap && (
                        <MapPicker
                             apiKey={'AIzaSyA134BG7_TC2DH1hgisVWQX5sSD7-PAXak'}
                             defaultLocation={{ lat: 11.5902, lng: 37.3833 }}
                         />
                    )}

                </div>
            </div>

        </div>

        <div className='grow pt-2'>

            <AdTextInput/>

            <button className='mt-2 bg-blue-600 text-white px-4 py-2 rounded'>
                Publish
            </button>
        </div>
        
    </form>
  )
}

export default NewProductPage
