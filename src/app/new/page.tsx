'use client'

import UploadArea from '@/components/UploadArea'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import React, { useState } from 'react'

const NewProductPage = () => {
    const [files, setFiles] = useState<UploadResponse[]>([]);
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
                    Google map
                </div>
            </div>

        </div>

        <div className='grow pt-2'>

            <label htmlFor='titleIn'>Title</label>
            <input id='titleIn' type='text' placeholder='Title'/>

            <label htmlFor='priceIn'>Price</label>
            <input id='priceIn' type='number' placeholder='Price'/>

            <label htmlFor='categoryIn'>Category</label>
            <select id='categoryIn' defaultValue=''>
                <option disabled value=''>Select Category</option>
                <option value='car'>🚗 Cars</option>
                <option value='electronics'>📱 Electronics</option>
                <option value='properties'>🏡 Properties</option>
            </select>


            <label htmlFor='descriptionIn'>Description </label>
            <textarea name='' id='descriptionIn' placeholder='Description' defaultValue=''></textarea>

            <label htmlFor='contactIn'>Contact</label>
            <textarea name='' id='contactIn' placeholder='Mobile: +251900000000' defaultValue=''></textarea>

            <button className='mt-2 bg-blue-600 text-white px-4 py-2 rounded'>
                Publish
            </button>
        </div>
        
    </form>
  )
}

export default NewProductPage
