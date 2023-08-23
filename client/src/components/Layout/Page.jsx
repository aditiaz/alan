import React, { useState } from 'react';
import styles from './page.module.css';
import cooking from '../../assets/cooking.png';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from '@chakra-ui/react';
import Transaction from '../Transaction';

const Layout = ({ children }) => {
  return (
    <>
      <nav className={styles.container}>
        <img src={cooking} alt="ic" />
        <p>Alan Resto</p>
      </nav>
      <Box>
        <Tabs>
          <TabList className="ml-28 space-x-44 h-20 w-screen">
            <Tab
              _selected={{
                borderColor: '#00acee',
                color: '#00acee',
              }}
              borderBottomWidth={'thick'}
              fontSize={'3xl'}
              fontWeight={'semibold'}
            >
              Food
            </Tab>
            <Tab
              _selected={{
                borderColor: '#00acee',
                color: '#00acee',
              }}
              borderBottomWidth={'thick'}
              fontSize={'3xl'}
              fontWeight={'semibold'}
            >
              Transaksi
            </Tab>
          </TabList>

          <TabPanels bgColor={'#f8f8f8'}>
            <TabPanel>
              <p>food</p>
            </TabPanel>
            <TabPanel>
              <Box height={'full'}>
                <Transaction />
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {children}
    </>
  );
};

export default Layout;
