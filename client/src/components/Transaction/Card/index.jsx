import React from 'react';
// import Tahu from '../../assets/tahu.jpg';
import { Grid, GridItem } from '@chakra-ui/react';
import { Card, CardFooter, Text, Image } from '@chakra-ui/react';

const CardComponent = () => {
  return (
    <>
      <Card maxW="md">
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />
        <CardFooter
          display={'block'}
          textAlign={'center'}
          fontWeight={'bold'}
          fontSize={'2xl'}
          flexWrap="wrap"
        >
          <Text>Sate Ayam</Text>
          <Text color={'#00acee'}>Rp.10.000</Text>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardComponent;
