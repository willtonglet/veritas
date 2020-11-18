import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import Layout from '@components/Layout';
import Cover from '@sections/cover';
import Info from '@sections/info';
import Empreendimento from '@sections/empreendimento';

const Perspectivas = dynamic(() => import('@sections/perspectivas'), {
    ssr: false
});

import api from '@core/api';

const Home: NextPage<PageProps> = (props) => {
    return (
        <Layout {...props}>
            <Cover id="inicio" />
            <Info />
            <Empreendimento id="empreendimento" />
            <Perspectivas id="perspectivas" />
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
