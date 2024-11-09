'use client'

import UploadArea from "./UploadArea";
import AdTextInput, { AdTexts } from "./AdTextInput";
import SubmitButton from "./SubmitButton";
import { UploadResponse } from "imagekit/dist/libs/interfaces";
import { useState } from "react";
import { createAd, updateAd } from "@/app/actions/adActions";
import { useRouter } from "next/navigation";

type Props = {
    id?: string | null;
    defaultFiles?: UploadResponse[];
    defaultTexts?: AdTexts; 
}

export default function AdForm({
            id=null,
            defaultFiles = [],
            defaultTexts={},
        } : Props) {

    const [files, setFiles] = useState<UploadResponse[]>(defaultFiles);
    const router = useRouter();

    async function handleSubmit(formData:FormData) {
        formData.set('files', JSON.stringify(files));
        if (id) {
          formData.set('_id', id);
        }
        const result = id
          ? await updateAd(formData)
          : await createAd(formData);
        router.push('/ad/'+result._id);
      }

    return (
        <form 
            action={handleSubmit}
            className='max-w-xl mx-auto grid grid-cols-2 gap-12'>
        <div className='grow pt-8'>
            
           <UploadArea files={files} setFiles={setFiles}/>

        </div>
        <div className='grow pt-2'>
            <AdTextInput defaultValues={defaultTexts}/>
            <SubmitButton>{id ? 'Save' : 'Publish'}</SubmitButton>
        </div>
    </form>
    )
}