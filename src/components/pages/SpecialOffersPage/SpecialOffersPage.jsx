import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { specialOffers } from "../../../data/special-offers";
import Rating from "../../rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../redux/apiCall/cartApiCall";
import toast, { Toaster } from "react-hot-toast";
const SpecialOffersPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cart);
  const { id } = useParams();
  const product = specialOffers.find((e) => e.id === +id);
  const { images } = product;
  const [imgSrc, setImgSrc] = useState(0);
  const [val, setVal] = useState(1);

  if (val < 1) {
    setVal(1);
    toast.error("Minimum 1.");

  } else if (val > 50) {
    setVal(50);
    toast.error("Miximum 50.");

  }
  const handleClick = () => {
    dispatch(
      addItemToCart({
        title: product?.title,
        price: product?.price,
        image: product?.images[0],
        quantity: val,
        id: product?.id,
      })
    );

    setVal(1);
  };
  useEffect(()=>{
window.scrollTo(0,0)
  },[])

  return (
    <>
        <Toaster position="top-center" reverseOrder={false} />

    <div className=" py-7 colored">
      <div className="w-5/6 m-auto ">
        <div className="flex flex-col  md:flex-row items-center justify-around">
          <div className=" flex flex-col ">
            <div>
              <img
                className="w-72 md:w-80 py-5 m-auto  rounded-4xl"
                src={images[imgSrc]}
                alt=""
              />
            </div>
            <div className="flex flex-row  ">
              {images.map((imge, index) => {
                return (
                  <img
                    key={index}
                    className="w-16 md:w-28 rounded-2xl border-purple-600 border-2 mx-3 cursor-pointer"
                    src={imge}
                    onClick={() => setImgSrc(index)}
                    alt=""
                  />
                );
              })}
            </div>
          </div>

          <div className="text-center flex flex-col mt-6 ">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="mb-4  text-base text-neutral-600 dark:text-neutral-200">
              {" "}
            </p>
            <div className="text-center m-auto mb-3">
              <Rating rating={product.rating} />{" "}
            </div>
            <div className="text-neutral-500 dark:text-neutral-300">
              <span className="text-2xl mb-3 text-amber-900">
                {" "}
                {product.price -
                  (product.price * product.discount) / 100} ${" "}
              </span>
              <span className="text-xl text-red-800 line-through">
                {" "}
                {product.price} ${" "}
              </span>
            </div>
            <div className="flex flex-col py-3">
              <div className="flex items-center ">
                <input
                  onChange={(e) => Number(setVal(e.target.value))}
                  className="w-20 px-2 outline-0 rounded-md border-2  h-10 bg-amber-200"
                  type="number"
                  name=""
                  value={val}
                  min={1}
                  id=""
                />
                <button
                  onClick={() => handleClick()}
                  type="button"
                  className="inline-block mr-3 cursor-pointer rounded bg-amber-400 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-black  shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                >
                  اضافه الي سله التسوق
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10">
          <p className="product-description block">
            <p className="font-bold text-2xl">حول هذه السلعة</p>
            <br />
            صوت فائق: استمتع بصوت واضح وراحة فائقة مع سماعات رأس ستوديو مونيتور
            من ون اوديو. تتمتع سماعة الرأس بمشغلات كبيرة بحجم 50 ملم مع مغانط من
            النيوديميوم، حيث يشكل الجهير القوي والصوت الواضح والنغمات العالية
            النقية صوت هاي فاي مثالي.
            <br />
            يوفر التصميم المغلق من الخلف صوت هاي فاي غامر عالي الدقة برقاقة سي
            اس ار ومكبرات الصوت 40 ملم معًا، إنها أفضل من السماعات بخاصية إلغاء
            الصوت النشطة من حيث جودة الأصوات. صُممت وسائد الأذن المبطنة عالية
            الجودة خصيصًا لسماعات رأس الستوديو الاحترافية لتوفير أقصى قدر من
            الراحة وعزل الضوضاء. عصابة الرأس قابلة للتعديل وقابلة للتمدد من أجل
            إيجاد الزاوية المفضلة المرغوب فيها كي تلائمك.
            <br />
            لا مزيد من المحولات: تتمتع بسلك ملفوف بنمط دي جيه (بطول 9.8 قدم
            ببنية قابلة للتمدد) حيث يصل بسهولة من التلفزيون أو الستيريو إلى
            كرسيك المفضل. تتضمن قابس قياسي 6.35 ملم ومقبس 3.5 ملم. يتمتع كلاهما
            بتصميم قابل للفصل بالكامل، حيث يمكنك توصيل جهاز الدمج الصوتي الذي
            تريد استخدامه.
            <br />
            مراقبة من جانب واحد: تتمتع سماعة الرأس بأغطية أذن دوارة بزاوية 90
            درجة لعزل أذن واحدة في أي وقت، كما تتميز بشريط رأس مرن وقابل للتعديل
            الذاتي، حيث توفر تجربة استماع خالية من التعب يمكن أن تدوم لساعات،
            مثالية لعشاق الموسيقى والدمج الصوتي.
            <br />
            تعمل مع: ايباد وايبود وايفون واندرويد والعديد من أجهزة الصوت الأخرى.
            توفر صوت عالي الجودة ومتانة فائقة وراحة قصوى. تُمثل هذه السماعات
            الرائعة خيارك المفضل.
          </p>
        </div>
      </div>
    </div>
    </>

  );
};

export default SpecialOffersPage;
