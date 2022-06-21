import React, { useContext } from 'react';
import { Header, Container, Group, Button } from '@mantine/core';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext/AuthContext';
import { CartState } from '../context/cartContext/CartContext';
import { BrandApple, ShoppingCart } from 'tabler-icons-react';

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const { state: { cart } } = CartState();

  return (
  <Header height={60} mb={40}>
    <Container 
    style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      height: '100%' }}
    >
      <div style={{ width: '42px' }}>
        <Link to='/'>
          <BrandApple size={45} strokeWidth={1} color={'#7140bf'} />
        </Link>
      </div>
      {/* <div className="textLogo">Apple eCommerce</div> */}
      <Group spacing={5}>
        <NavLink to='/products'>
          <Button type="Submit" variant="subtle" color="gray" size="sm" >Products</Button>
        </NavLink>
        {/* <Link to='/products'>
          <Button type="Submit" variant="subtle" size="sm" >Products</Button>
        </Link> */}

        {
        user ? 
        <NavLink to='/account'>
          <Button variant="subtle" color="gray" size="sm">Account</Button>
        </NavLink> : 
        <NavLink to='/login'>
          <Button variant="subtle" color="gray" size="sm">Login</Button>
        </NavLink>
        }

        <NavLink to='/cart'>
          <Button type="Submit" variant="subtle" color="gray" size="sm" ><ShoppingCart size={16} color={'grey'}/>
            &nbsp; {cart.length}
          </Button>
        </NavLink>
      </Group>

    </Container>
  </Header>
  )
}

export default NavBar