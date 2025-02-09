import { RiDeleteBin5Line } from "react-icons/ri";
import { removeItem } from "../../../redux/apiCall/cartApiCall";
import { useDispatch, useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import EmptyCart from "../../empty/EmptyCart";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cartItems}=useSelector(state=>state.cart)
const dispatch= useDispatch()
  return (
    
    <>
    <Toaster
  position="top-left"
  reverseOrder={false}
/>
      <div className="colored py-8">
        <div className="w-5/6 m-auto">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-8 ">
              <p className="text-3xl p-5 font-bold text-center md:text-start">
                سله التسوق
              </p>
              <hr />
              {cartItems.length<1?<EmptyCart/>: cartItems.map((item) => (
                <>
                 
                  <div
                    key={item.id}
                    className="py-3 mr-2 items-center grid grid-cols-12 gap-10"
                  >
                    <div className="md:col-span-5 col-span-4 ">
                      <img className="rounded-2xl" src={item.image} alt="" />
                    </div>
                    <div className="md:col-span-5 col-span-3">
                      <h1 className="font-bold text-2xl mb-4">{item.title}</h1>
                      <h3 className="font-medium text-xl mb-4">
                        الكميه: {item.quantity}
                      </h3>
                      <h3 className="font-medium text-xl">
                       السعر: {item.price * item.quantity}$ 
                      </h3>
                    </div>
                    <div className="col-span-1 font-bold text-2xl text-red-600 cursor-pointer">
                      <RiDeleteBin5Line 
                      onClick={()=>dispatch(removeItem(item.id))}
                      />
                    </div>
                  </div>
                  <hr />
                </>
              ))}
             
            </div>
            {cartItems.length<1?"":  <div className="md:col-span-4  col-span-12 h-60 rounded-2xl mt-10 bg-amber-200">

<div className="w-5/6 m-auto py-4">
  <p className="text-green-500  sm:text-base/8  px-4 ">
    من طلبك مؤهل للشحن المجاني,قم بتحديد هذا الخيار عند الدفع
  </p>
  <h2 className="my-5 text-xl font-bold">
    المجموع الكلي :
    {cartItems.reduce((e, a) => e + a.price * a.quantity, 0)}$
    
  </h2>
  <Link
  to="/"
    type="button"
    className="inline-block text-center rounded cursor-pointer bg-amber-400 w-full px-6 pb-2 pt-2.5  font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
  >
    تابع عمليه الشراء
  </Link>
</div>
</div>}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
