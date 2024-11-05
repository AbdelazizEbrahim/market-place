/* eslint-disable @next/next/no-async-client-component */
'use client'

export default async function AdTextInput() {
    return (
        <>
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
        </>
    )
}