import { Stack } from '@mui/material';
import type { NextPage } from 'next';

import FirebaseData from './firebase-data';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Stack alignItems='center'>
      <Stack>
        <FirebaseData />
      </Stack>
    </Stack>
  );
};

export default Home;
