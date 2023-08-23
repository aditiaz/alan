import React from 'react';
import {
  Text,
  Image,
  VStack,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
} from '@chakra-ui/react';

import Person from '../../../assets/person.png';
import Tahu from '../../../assets/tahu.jpg';
import outlined from '@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined';
const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <VStack bgColor={'white'} height={'3xl'}>
      <HStack marginTop={5}>
        <Image src={Person} />
        <Text fontSize={'5xl'} fontWeight={'semibold'}>
          Pesanan
        </Text>
      </HStack>
      <VStack height={'50%'} overflowY={'scroll'}>
        <HStack justifyContent={'space-around'} width={'full'}>
          <HStack>
            <Image objectFit="cover" width={'36'} height={'32'} src={Tahu} />
            <Text fontWeight={'semibold'} fontSize={'2xl'}>
              Sate Ayam
            </Text>
          </HStack>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            x3
          </Text>
          <Text fontWeight={'semibold'} fontSize={'2xl'} color={'#00acee'}>
            Rp.30.0000
          </Text>
        </HStack>
        <HStack justifyContent={'space-around'} width={'full'}>
          <HStack>
            <Image objectFit="cover" width={'36'} height={'32'} src={Tahu} />
            <Text fontWeight={'semibold'} fontSize={'2xl'}>
              Sate Ayam
            </Text>
          </HStack>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            x3
          </Text>
          <Text fontWeight={'semibold'} fontSize={'2xl'} color={'#00acee'}>
            Rp.30.0000
          </Text>
        </HStack>
        <HStack justifyContent={'space-around'} width={'full'}>
          <HStack>
            <Image objectFit="cover" width={'36'} height={'32'} src={Tahu} />
            <Text fontWeight={'semibold'} fontSize={'2xl'}>
              Sate Ayam
            </Text>
          </HStack>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            x3
          </Text>
          <Text fontWeight={'semibold'} fontSize={'2xl'} color={'#00acee'}>
            Rp.30.0000
          </Text>
        </HStack>
        <HStack justifyContent={'space-around'} width={'full'}>
          <HStack>
            <Image objectFit="cover" width={'36'} height={'32'} src={Tahu} />
            <Text fontWeight={'semibold'} fontSize={'2xl'}>
              Sate Ayam
            </Text>
          </HStack>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            x3
          </Text>
          <Text fontWeight={'semibold'} fontSize={'2xl'} color={'#00acee'}>
            Rp.30.0000
          </Text>
        </HStack>
        <HStack justifyContent={'space-around'} width={'full'}>
          <HStack>
            <Image objectFit="cover" width={'36'} height={'32'} src={Tahu} />
            <Text fontWeight={'semibold'} fontSize={'2xl'}>
              Sate Ayam
            </Text>
          </HStack>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            x3
          </Text>
          <Text fontWeight={'semibold'} fontSize={'2xl'} color={'#00acee'}>
            Rp.30.0000
          </Text>
        </HStack>
        <HStack justifyContent={'space-around'} width={'full'}>
          <HStack>
            <Image objectFit="cover" width={'36'} height={'32'} src={Tahu} />
            <Text fontWeight={'semibold'} fontSize={'2xl'}>
              Sate Ayam
            </Text>
          </HStack>
          <Text fontWeight={'semibold'} fontSize={'2xl'}>
            x3
          </Text>
          <Text fontWeight={'semibold'} fontSize={'2xl'} color={'#00acee'}>
            Rp.30.0000
          </Text>
        </HStack>
      </VStack>
      <VStack width={'full'} marginTop={'3'} px={'10'}>
        <Button fontSize={'2xl'} padding={'5'} colorScheme="red" variant="outline" width={'100%'}>
          Clear Cart
        </Button>
        <HStack width={'full'}>
          <Button
            fontSize={'2xl'}
            padding={'5'}
            bgColor="#7CB083"
            color={'whitesmoke'}
            variant="solid"
            width={'50%'}
          >
            Save Bill
          </Button>
          <Button
            fontSize={'2xl'}
            padding={'5'}
            bgColor="#7CB083"
            color={'whitesmoke'}
            variant="solid"
            width={'50%'}
          >
            Print Bill
          </Button>
        </HStack>
        <Button
          onClick={onOpen}
          borderRadius={'none'}
          fontSize={'2xl'}
          padding={'5'}
          bgColor={'#00acee'}
          color={'white'}
          variant="solid"
          width={'100%'}
          height={'12'}
        >
          Charge Rp.40.000
        </Button>
      </VStack>
      <ModalTransaction onOpen={onOpen} onClose={onClose} isOpen={isOpen} />
    </VStack>
  );
};
export default Cart;

function ModalTransaction({ onOpen, onClose, isOpen }) {
  return (
    <>
      <Modal size={'6xl'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detail Pesanan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack>
              <VStack paddingX={'16'}>
                <TableContainer width={'full'}>
                  <Table size="lg" variant="striped" colorScheme={'gray'}>
                    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                    <Thead>
                      <Tr>
                        <Th>#</Th>
                        <Th>Nama</Th>
                        <Th>Foto</Th>
                        <Th>Harga</Th>
                      </Tr>
                    </Thead>
                    <Tbody padding={'3'}>
                      <Tr padding={'3'}>
                        <Td>1</Td>
                        <Td>millimetres (mm)</Td>
                        <Td>
                          {' '}
                          <Image src={Person} />
                        </Td>
                        <Td>Rp.20.0000</Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </VStack>
              <VStack
                marginBottom={'10'}
                paddingY={'10'}
                borderLeft={'1px'}
                borderColor={'gray.100'}
              >
                <Text width={'xl'} fontWeight={'semibold'} fontSize={'2xl'} textAlign={'center'}>
                  Uang Pembeli
                </Text>
                <Input width={'xs'} />
                <HStack width={'full'} px={'32'}>
                  <Button onClick={onClose} width={'50%'} variant={'outline'}>
                    Close
                  </Button>
                  <Button colorScheme="twitter" width={'50%'} variant={'solid'}>
                    Pay!
                  </Button>
                </HStack>
                <Text
                  color={'red'}
                  fontWeight={'semibold'}
                  fontSize={'2xl'}
                  width={'xs'}
                  textAlign={'start'}
                >
                  Kembalian :
                </Text>
              </VStack>
            </HStack>
          </ModalBody>
          {/* 
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
