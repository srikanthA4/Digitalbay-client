import React from 'react'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { CartState } from '../context/cartContext/CartContext';

const ProductCard = (props) => {
  const { state: { cart }, dispatch } = CartState();
  const MAX_LENGTH = 30;
  return (
  <div style={{ width: '100%', margin: 'auto' }}>
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={props.image} height={160} alt={props.title} />
      </Card.Section>
      
      <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
        <Text size={17} weight={400}>{props.title.substring(0, MAX_LENGTH)}...</Text>
        <Badge color="green" variant="light">
          ${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Badge>
      </Group>
      
      <Text size="sm" style={{ lineHeight: 1.5 }}>
        {props.description}
      </Text>
      
      {
        cart.some((product) => product.id === props.id) ? (
        <Button variant="light" color="red" fullWidth style={{ marginTop: 14 }} onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: props })}>
          Remove from cart
        </Button>
        )
        : 
        (
        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }} onClick={() => dispatch({ type: "ADD_TO_CART", payload: props })}>
          Add to cart
        </Button>
        )
      }

    </Card>
	</div>
  )
}

export default ProductCard;