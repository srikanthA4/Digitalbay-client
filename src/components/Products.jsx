import React, { useContext, useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import ProductCard from './ProductCard';
import { TextInput, SimpleGrid, Title, NativeSelect, Loader } from '@mantine/core';
import { ProductContext } from '../context/productContext/ProductContext';
import { getProducts } from '../context/productContext/apiCalls';
import { Search } from 'tabler-icons-react';
import { Pagination } from '@mui/material';

const Products = () => {
  const { products, isFetching, dispatch } = useContext(ProductContext);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
	  <>
    <Helmet>
      <title>Products |  E-Commerce</title>
      <meta name='description' content='Products' />
    </Helmet>
    <Title order={2} style={{ marginBottom: '10px' }}>Filter Products</Title>
    <TextInput
      size="md"
      placeholder="Search by product name"
      onChange={(e) => setSearch(e.target.value)}
      rightSectionWidth={42}
      style={{ marginTop: '20px', marginBottom: '20px' }}
      icon={<Search size={24} color='black' />}
    />
    <NativeSelect
      size="md"
      data={['Accessories', 'Desktops', 'Laptops', 'iPhones', 'iPads', 'Watches']}
      onChange={(e) => setCategory(e.target.value)}
      value={category}
      placeholder="Select one"
      label="Filter products by category"
    />
    {isFetching ?
    <Loader color="violet" size="xl" variant="dots" style={{ padding: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}/>
    :
    <>
    <SimpleGrid cols={3} style={{ marginTop: '20px' }} breakpoints={[
      { maxWidth: 'lg', cols: 3 },
      { maxWidth: 'md', cols: 3 },
      { maxWidth: 'sm', cols: 2 },
    ]}>
      {
        products
        .slice((page - 1) * 12, (page - 1) * 12 + 12)
        ?.filter((product) => {
          if(category === '' && search === ''){
            return true
          }
          if(category !== '' && search !== '' && product.category.includes(category) && product.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          if(category !== '' && product.category.includes(category)){
            return true
          }
          if(search !== '' && product.title.toLowerCase().includes(search.toLowerCase())){
            return true
          }
          return false
        })
        .map((product) => {
          return (
            <ProductCard
            key={product._id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            id={product._id}
            />
          )
        })
      }
    </SimpleGrid>
    <Pagination
      count={(products?.length / 12).toFixed(0)}
      onChange={(_, value) => {
        setPage(value);
        window.scroll(0, 450);
      }}
      style={{ padding: 20, width: '100%', display: 'flex', justifyContent: 'center' }}
    />
    </>
    }
	  </>
  )
}

export default Products;