import { setProduct, setProducts,cleareLoading,loading } from '../slices/productSlise';
import axios from "axios";

export  function allData(){
    return async (dispatch) => {
        try {
            dispatch(loading())
          const {data} = await axios.get("http://localhost:5000/products");
          dispatch(setProducts(data))
          dispatch(cleareLoading());
        } catch (error) {
          console.log(error);
          dispatch(cleareLoading());
        }
      };
}
export  function getDataById(id){
    return async (dispatch) => {
        try {
            dispatch(loading());
          const {data} = await axios.get(`http://localhost:5000/products/${id}`);
          dispatch(setProduct(data))
          dispatch(cleareLoading());

        } catch (error) {
          console.log(error);
          dispatch(cleareLoading());
        }
      };
}