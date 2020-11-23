import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import api from '@core/api';

import Layout from '@components/Layout';
import Cover from '@sections/cover';
import Info from '@sections/info';
import Empreendimento from '@sections/empreendimento';
import Plantas from '@sections/plantas';

import Perspectivas from '@sections/perspectivas';

import Localizacao from '@sections/localizacao';

import LocalizacaoMapa from '@sections/localizacao-mapa';

import Video from '@sections/video';

import Contato from '@sections/contato';

const Home: NextPage<PageProps> = (props) => {
    return (
        <Layout {...props}>
            <Cover id="inicio" />
            <Info />
            <Empreendimento id="empreendimento" />
            <Perspectivas id="perspectivas" />
            <Plantas />
            <Localizacao id="localizacao" />
            <LocalizacaoMapa />
            <Video />
            <Contato id="contato" />
        </Layout>
    );
};

export const getStaticProps = async (): Promise<PageContentContentInterface> => {
    const content = await api.content.get();

    return {
        props: {
            content
        }
    };
};

export default Home;
