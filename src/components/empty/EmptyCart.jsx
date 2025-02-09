import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <>
    <h2 className='text-2xl pt-5 pr-4 text-gray-600'>
      سله التسوق الخاصه بك فارغه
    </h2>
    <Link
    to="/"
    type="button"
    className="inline-block text-center mr-5 rounded cursor-pointer bg-amber-400 w-2/6 mt-5 px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
  >
الرجوع للتسوق  </Link>
    </>

  )
}

export default EmptyCart
