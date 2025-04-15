import React, { useContext } from 'react'
import { StoreContent } from '../../context/StoreContent'

const PlaceOrder = () => {
  const { total } = useContext(StoreContent)

  return (
    <>
      <form className="flex flex-col md:flex-row items-start justify-center mt-10 md:mt-20 gap-10 md:gap-20 p-5 w-full max-w-5xl mx-auto">
        
        {/* Delivery Information */}
        <div className="w-full md:w-1/2 bg-white p-5 shadow-lg rounded-lg">
          <p className="font-bold text-xl md:text-2xl mb-4">Delivery Information</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input className="border p-2 rounded w-full" type="text" placeholder="First Name" />
            <input className="border p-2 rounded w-full" type="text" placeholder="Last Name" />
          </div>

          <input className="border p-2 rounded w-full mt-3" type="text" placeholder="Email Address" />
          <input className="border p-2 rounded w-full mt-3" type="text" placeholder="Street" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <input className="border p-2 rounded w-full" type="text" placeholder="City" />
            <input className="border p-2 rounded w-full" type="text" placeholder="State" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            <input className="border p-2 rounded w-full" type="text" placeholder="Zip Code" />
            <input className="border p-2 rounded w-full" type="text" placeholder="Country" />
          </div>

          <input className="border p-2 rounded w-full mt-3" type="text" placeholder="Phone" />
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-5 shadow-lg rounded-lg">
          <h2 className="font-bold text-xl md:text-2xl">Cart Totals</h2>

          <div className="mt-5">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>₹{total()}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between text-gray-600">
              <p>Delivery Fee</p>
              <p>₹{total() > 0 ? '2' : '0'}</p>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-black">
              <p>Total</p>
              <p>{total() > 0 ? `₹${total() + 2}` : '₹0'}</p>
            </div>
          </div>

          <button className="w-full mt-5 bg-red-500 text-white p-3 rounded hover:bg-red-600">
            PROCEED TO PAYMENT
          </button>
        </div>

      </form>
    </>
  )
}

export default PlaceOrder
