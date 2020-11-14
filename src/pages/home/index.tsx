import { NextPage } from 'next';
import React from 'react';

import Layout from '@components/Layout';
import Cover from '@sections/cover';

import api from '@core/api';

const Home: NextPage<PageProps> = (props) => {
    return (
        <Layout {...props}>
            <Cover />
        </Layout>
    );
};

export const getStaticProps = async (): Promise<PageContentContentInterface> => {
    const content = await api.get();

    return {
        props: {
            content
        }
    };
};

export default Home;
