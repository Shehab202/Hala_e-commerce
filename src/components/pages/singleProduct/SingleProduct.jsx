import { useParams } from "react-router";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataById } from "../../../redux/apiCall/productApiCall";
import Spinner from "../../spinner/Spinner";
import { addItemToCart } from "../../../redux/apiCall/cartApiCall";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.product);
  const [numValue, setNumValue] = useState(1);
  if (numValue < 1) {
    toast.error("Minimum 1.");

    setNumValue(1);
  } else if (numValue > 50) {
    setNumValue(50);
    toast.error("Miximum 50.");
  }
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDataById(id));
  }, [id]);
  const addToCartHandler = () => {
    dispatch(
      addItemToCart({
        title: product?.title,
        price: product?.price,
        image: product?.image,
        quantity: numValue,
        id: product?.id,
      })
    );
    setNumValue(1);
  };
  if (isLoading) return <Spinner />;
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="colored py-8">
        <div className="w-5/6 m-auto border-gray-400">
          <div className="flex md:flex-row flex-col md:justify-around items-center">
            <div>
              <img className="rounded-2xl" src={product?.image} alt="" />
            </div>
            <div className="m-8 flex flex-col  justify-center items-center md:items-start">
              <h1 className="font-bold text-2xl mb-3">{product?.title}</h1>

              <div className="flex flex-col md:flex-row my-4 items-center">
                <div className="flex  justify-center my-3  w-16 text-center items-center bg-green-700 rounded-2xl">
                  <h3 className="px-1 text-amber-300">
                    <AiFillStar />
                  </h3>
                  <h3 className="px-1 font-bold">{product?.rating}</h3>
                </div>
                <div className=" font-bold   px-5">
                  تقييمات {product?.reviews}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-600">
                ${product?.price}
              </h3>
              <div className="flex">
                <input
                  type="number"
                  className="bg-amber-200 border-2 w-18 px-3 rounded-md outline-0 border-amber-800"
                  onChange={(e) => Number(setNumValue(e.target.value))}
                  name=""
                  value={numValue}
                  id=""
                />
                <button
                  onClick={addToCartHandler}
                  type="button"
                  className="inline-block border-2  mr-3 cursor-pointer rounded bg-amber-400 px-6 pb-2 pt-2.5 text-xs font-bold uppercase leading-normal text-black  shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                >
                  اضافه الي سله التسوق
                </button>
              </div>
            </div>
          </div>
          <div className="my-10">
            <p className="product-description block">
              <p className="font-bold text-2xl">حول هذا المنتج</p>
              <br />
              صوت فائق: استمتع بصوت واضح وراحة فائقة مع سماعات رأس ستوديو
              مونيتور من ون اوديو. تتمتع سماعة الرأس بمشغلات كبيرة بحجم 50 ملم
              مع مغانط من النيوديميوم، حيث يشكل الجهير القوي والصوت الواضح
              والنغمات العالية النقية صوت هاي فاي مثالي.
              <br />
              يوفر التصميم المغلق من الخلف صوت هاي فاي غامر عالي الدقة برقاقة سي
              اس ار ومكبرات الصوت 40 ملم معًا، إنها أفضل من السماعات بخاصية
              إلغاء الصوت النشطة من حيث جودة الأصوات. صُممت وسائد الأذن المبطنة
              عالية الجودة خصيصًا لسماعات رأس الستوديو الاحترافية لتوفير أقصى
              قدر من الراحة وعزل الضوضاء. عصابة الرأس قابلة للتعديل وقابلة
              للتمدد من أجل إيجاد الزاوية المفضلة المرغوب فيها كي تلائمك.
              <br />
              لا مزيد من المحولات: تتمتع بسلك ملفوف بنمط دي جيه (بطول 9.8 قدم
              ببنية قابلة للتمدد) حيث يصل بسهولة من التلفزيون أو الستيريو إلى
              كرسيك المفضل. تتضمن قابس قياسي 6.35 ملم ومقبس 3.5 ملم. يتمتع
              كلاهما بتصميم قابل للفصل بالكامل، حيث يمكنك توصيل جهاز الدمج
              الصوتي الذي تريد استخدامه.
              <br />
              مراقبة من جانب واحد: تتمتع سماعة الرأس بأغطية أذن دوارة بزاوية 90
              درجة لعزل أذن واحدة في أي وقت، كما تتميز بشريط رأس مرن وقابل
              للتعديل الذاتي، حيث توفر تجربة استماع خالية من التعب يمكن أن تدوم
              لساعات، مثالية لعشاق الموسيقى والدمج الصوتي.
              <br />
              تعمل مع: ايباد وايبود وايفون واندرويد والعديد من أجهزة الصوت
              الأخرى. توفر صوت عالي الجودة ومتانة فائقة وراحة قصوى. تُمثل هذه
              السماعات الرائعة خيارك المفضل.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
