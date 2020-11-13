import { NextPage } from 'next';
import React from 'react';

import Layout from '@components/Layout';
import Cover from '@sections/cover';

const Home: NextPage = () => {
    return (
        <Layout>
            <Cover />
        </Layout>
    );
};

export default Home;
