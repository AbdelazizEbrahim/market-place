'use client'

import AdTextInput from '@/components/AdTextInput'
import UploadArea from '@/components/UploadArea'
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UploadResponse } from 'imagekit/dist/libs/interfaces'
import React, { useState } from 'react'
import { createAd } from '../actions/adActions'
import SubmitButton from '@/components/SubmitButton'
import { useRouter } from 'next/navigation'

const NewProductPage = () => {
    const [files, setFiles] = useState<UploadResponse[]>([]);
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>, formData: FormData) {
        event.preventDefault(); 
        formData.set('files', JSON.stringify(files));
        const result = await createAd(formData);
        router.push('/ad/'+result._id);
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
            <SubmitButton>Publish</SubmitButton>
        </div>
    </form>
  )
}

export default NewProductPage
