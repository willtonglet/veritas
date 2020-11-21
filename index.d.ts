declare module '*.png';

interface PageProps {
    content: {
        title: string;
        meta: {
            [key: string]: string;
        };
        content: PageContentContentInterface;
    };
}

interface SectionProps {
    id?: string;
}

interface MosaicInterface {
    title: string;
    description: string;
    icon: string;
}

interface PageContentContentInterface {
    [key: string]: string | PageContentContentInterface;
}

interface SlidesInterface {
    title: string;
    image: {
        main: ImageProps;
        cover: ImageProps;
        thumb: ImageProps;
    };
}

interface SpacesInterface extends SlidesInterface {
    size: string;
    amount: string;
    items: Array<string>;
}
interface ImageProps {
    url: string;
    size: {
        width: number;
        height: number;
    };
}

interface LocationProps {
    title: string;
    options: Array<string>;
}
