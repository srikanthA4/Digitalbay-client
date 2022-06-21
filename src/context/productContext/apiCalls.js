import axios from 'axios';
import { 
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  createProductStart,
  createProductSuccess,
  createProductFailure,
  deleteProductFailure, 
  deleteProductStart, 
  deleteProductSuccess, 
  getProductsFailure, 
  getProductsStart, 
  getProductsSuccess 
} from './ProductActions';

// GET PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart())
  try {
    const res = await axios.get('https://tranquil-brook-13044.herokuapp.com/api/products')
    dispatch(getProductsSuccess(res.data))
  } catch (error) {
    dispatch(getProductsFailure())
  }
}

// CREATE PRODUCT
export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart())
  try {
    const res = await axios.post(`https://tranquil-brook-13044.herokuapp.com/api/products/create`, product, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(createProductSuccess(res.data))
  } catch (error) {
    dispatch(createProductFailure())
  }
}

// UPDATE PRODUCT
export const updateProduct = async (product, dispatch) => {
  dispatch(updateProductStart())
  try {
    const res = await axios.put(`https://tranquil-brook-13044.herokuapp.com/api/products/update/${product.id}`, product, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    console.log(res.data)
    dispatch(updateProductSuccess(res.data))
  } catch (error) {
    dispatch(updateProductFailure())
  }
}

// DELETE PRODUCT
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    await axios.delete(`https://tranquil-brook-13044.herokuapp.com/api/products/delete/${id}`, {
      headers: {
        token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
      }
    })
    dispatch(deleteProductSuccess(id))
  } catch (error) {
    dispatch(deleteProductFailure())
  }
}