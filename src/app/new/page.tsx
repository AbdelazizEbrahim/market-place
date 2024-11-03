import { faImage, faLocationCrosshairs, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const NewProductPage = () => {
  return (
    <form action={''} className='max-w-xl mx-auto flex gap-12'>
        <div className='grow pt-8'>
            <div className='bg-gray-100 p-4 rounded'>
                <h2 className='text-center text-xs text-gray-400 uppercase font-bold'>
                    Add Product Photos
                </h2>
                <div className='flex flex-col'>
                    <FontAwesomeIcon icon={faImage} className='h-24 text-gray-300'/>
                    <button className='mt-2 border border-blue-600  text-blue-600 px-4 py-2 rounded inline-flex gap-1 items-center justify-center'>
                    <FontAwesomeIcon icon={faPlus} />
                        <span className=''>Add Photo</span>
                    </button>
                </div>
            </div>
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
            <select name='' id='categoryIn'>
            <option selected disabled value={''}>Select Category</option>
            <option value={''}>🚗 Cars</option>
            <option value={''}>📱 Electronics</option>
            <option value={''}>🏡 Properties</option>
            </select>

            <label htmlFor='descriptionIn'>Description </label>
            <textarea name='' id='descriptionIn' placeholder='Description' > </textarea>

            <label htmlFor='contactIn'>Contact</label>
            <textarea name='' id='contactIn' placeholder='Mobile: +251900000000' ></textarea>

            <button className='mt-2 bg-blue-600 text-white px-4 py-2 rounded'>
                Publish
            </button>
        </div>
        
    </form>
  )
}

export default NewProductPage
