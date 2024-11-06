'use client'

import AdTextInput from '@/components/AdTextInput'
import UploadArea from '@/components/UploadArea'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import React, { useState } from 'react'

const NewProductPage = () => {
    const [files, setFiles] = useState<UploadResponse[]>([]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>, formData: FormData) {
        event.preventDefault(); // Prevent the default form submission behavior
        formData.set('files', JSON.stringify(files));
        console.log(Object.fromEntries(formData)); // Check the console output
    }

  return (
    <form onSubmit={(e) => handleSubmit(e, new FormData(e.currentTarget))} className='max-w-xl mx-auto grid grid-cols-2 gap-12'>
        <div className='grow pt-8'>
            
           <UploadArea files={files} setFiles={setFiles}/>

            <div className='mt-8'>
                <label htmlFor=''>Where Is It Located?</label>
                <button className='w-full flex items-center gap-1 py-1 justify-center border border-gray-400 text-gray-600 rounded'>
                    <FontAwesomeIcon icon={faLocationCrosshairs} />
                    <span>Share Current Location</span>
                </button>
            </div>

        </div>

        <div className='grow pt-2'>

            <AdTextInput/>

            <button type="submit" className='mt-2 bg-blue-600 text-white px-4 py-2 rounded'>
                Publish
            </button>
        </div>
        
    </form>
  )
}

export default NewProductPage
