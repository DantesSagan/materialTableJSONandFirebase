import { Stack } from '@mui/material';
import type { NextPage } from 'next';

import FirebaseData from './firebase-data';

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
