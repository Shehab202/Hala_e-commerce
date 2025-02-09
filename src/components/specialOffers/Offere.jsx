import { specialOffers } from "../../data/special-offers";
import SpecialOffers from "./SpecialOffers";

const Offere = () => {
  return (
    <div>
         <div className=" bg-amber-200 pb-16">
        <div className="w-5/6 m-auto">
          <h1 className="text-4xl py-4"> عروض اليوم</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
      {
        specialOffers.map((offer)=>
        <SpecialOffers key={offer.id} offer={offer}/>)
        
      }
          </div>
    </div>
    </div>
    </div>
  )
}

export default Offere
