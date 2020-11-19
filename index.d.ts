declare module '*.png';

interface PageProps {
    content: PageContentContentInterface;
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
