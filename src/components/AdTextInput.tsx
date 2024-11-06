/* eslint-disable @next/next/no-async-client-component */
'use client'

export default function AdTextInput() {
    return (
        <>
        <label htmlFor='titleIn'>Title</label>
            <input name="title" id='titleIn' type='text' placeholder='Title'/>

            <label htmlFor='priceIn'>Price</label>
            <input name="price" id='priceIn' type='number' placeholder='Price'/>

            <label htmlFor='categoryIn'>Category</label>
            <select name="category" id='categoryIn' defaultValue=''>
                <option disabled value=''>Select Category</option>
                <option value='car'>🚗 Cars</option>
                <option value='electronics'>📱 Electronics</option>
                <option value='properties'>🏡 Properties</option>
            </select>
            
            <label htmlFor='descriptionIn'>Description </label>
            <textarea name='description' id='descriptionIn' placeholder='Description' defaultValue=''></textarea>

            <label htmlFor='contactIn'>Contact</label>
            <textarea name='contact' id='contactIn' placeholder='Mobile: +251900000000' defaultValue=''></textarea>
        </>
    )
}