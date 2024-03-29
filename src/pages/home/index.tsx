import { NextPage } from 'next';
import dynamic from 'next/dynamic';

import api from '@core/api';

import Layout from '@components/Layout';
import Cover from '@sections/cover';
import Info from '@sections/info';

const Empreendimento = dynamic(() => import('@sections/empreendimento'), { ssr: false });
const Plantas = dynamic(() => import('@sections/plantas'), { ssr: false });
const Perspectivas = dynamic(() => import('@sections/perspectivas'), { ssr: false });
const Localizacao = dynamic(() => import('@sections/localizacao'), { ssr: false });
const LocalizacaoMapa = dynamic(() => import('@sections/localizacao-mapa'), { ssr: false });
const Video = dynamic(() => import('@sections/video'), { ssr: false });
const Contato = dynamic(() => import('@sections/contato'), { ssr: false });

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
