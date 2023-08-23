import React from 'react';
import CardComponent from './Card';
import { Box, Grid, GridItem, HStack, SimpleGrid } from '@chakra-ui/react';
import Cart from './Cart';

const Transaction = () => {
  return (
    <HStack paddingX={'24'}>
      <SimpleGrid flex={3} columns={3} spacingY={'10'}>
        <GridItem w="100%" h="fit-content">
          <CardComponent />
        </GridItem>
        <GridItem w="100%" h="fit-content">
          <CardComponent />
        </GridItem>
        <GridItem w="100%" h="fit-content">
          <CardComponent />
        </GridItem>
        <GridItem w="100%" h="fit-content">
          <CardComponent />
        </GridItem>
      </SimpleGrid>
      <Box flex={1}>
        <Cart />
      </Box>
    </HStack>
  );
};

export default Transaction;
