/* eslint-disable react/jsx-key */
import React, { useRef } from 'react'
import LabelRadioButton from './LabelRadioButton'
import { categories } from '@/libs/helper'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import SubmitButton from './SubmitButton'

type Props = {
    action: (data: FormData) => void;
}

const SearchForm = ({action}:Props) => {
    const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <form 
        action={action}
        ref={formRef}
        className="bg-white p-4 border-r grow w-1/4">
        <input name="phrase" type="text" placeholder="Search Marketplace"/>
        <div className="flex flex-col gap-0">
          <LabelRadioButton
              name="category"
              value=""
              icon={faStore}
              onClick={() => formRef.current?.requestSubmit()}
              label='All Categories'
          />
          {categories.map(({key: categoryKey, label, icon}) => (
            <LabelRadioButton
                name="category"
                value={categoryKey}
                icon={icon}
                onClick={() => formRef.current?.requestSubmit()}
                label={label}
            />
          ))}
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <input className="" name="min" type="number" placeholder="min"/>
            </div>
            <div className="">
              <input className="" name="max" type="number" placeholder="max"/>
            </div>
          </div>
        </div>
        <SubmitButton>Search</SubmitButton>
      </form>
  )
}

export default SearchForm
