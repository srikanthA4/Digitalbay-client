import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { TextInput, Textarea, Title, Button, NativeSelect } from '@mantine/core';
import { ProductContext } from '../../context/productContext/ProductContext';
import { updateProduct } from '../../context/productContext/apiCalls';

const EditProduct = ({ editId, setEdit }) => {
	const admin = JSON.parse(localStorage.getItem('user')).isAdmin;
  const { dispatch } = useContext(ProductContext);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  
  useEffect(() => {
    const getProductData = async () => {
      const response = await axios.get(`https://tranquil-brook-13044.herokuapp.com/api/products/find/${editId}`);
      const data = response.data.payload;
      setImage(data.image);
      setTitle(data.title);
      setDescription(data.description);
      setCategory(data.category);
      setPrice(data.price);
    }
    getProductData();
  }, [editId]);

  const handleUpdate = () => {
    const updatedData = {
      id: editId,
      image: image,
      title: title,
      description: description,
      category: category,
      price: price
    }
    updateProduct(updatedData, dispatch);
    setEdit(false);
  }

  // const handleUpdate = async () => {
  //   try {
  //     await axios.put(`https://tranquil-brook-13044.herokuapp.com/api/products/update/${editId}`, {
  //       image: image,
  //       title: title,
  //       description: description,
  //       category: category,
  //       price: price
  //     }, {
  //       headers: {
  //         token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
  //       }
  //     });
  //   } catch (err) {
  //     alert('error')
  //   }
  // };

  return (
    <>
    <Helmet>
      <title>Edit {title} |Digitalbay</title>
      <meta name='description' content='Edit Product' />
    </Helmet>
    {
      admin ? 
      <>
      <Title order={2}>Edit {title}</Title>
      <TextInput
      label="Image"
      value={image}
      onChange={(e) => setImage(e.target.value)}
      id="image"
      size="md"
      required
      />
      <TextInput
      label="Product Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder='Title of product'
      id="title"
      size="md"
      required
      />
      <Textarea
      label="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      id="description"
      size="md"
      required
      />
      <NativeSelect
      size="md"
      id='category'
      data={['Accessories', 'Desktops', 'Laptops', 'iPhones', 'iPads', 'Watches']}
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      placeholder="Select one"
      label="Choose category"
      />
      <TextInput
      label="Price"
      value={price}
      onChange={(e) => setPrice(e.target.value)}
      id="price"
      size="md"
      type='number'
      required
      />

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
        <Button type="Submit" variant="light" size="sm" onClick={handleUpdate}>Update Product</Button>
      </div>
    </>
      :
    <div style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}><Title order={3}>You do not have permission to access this</Title></div>
    }
    </>
  )
}

export default EditProduct
