declare module '*.png';

interface PageProps {
    content: PageContentContentInterface;
}

interface SectionProps {
    id: string;
}

interface MosaicInterface {
    title: string;
    description: string;
    icon: string;
}

interface PageContentContentInterface {
    [key: string]: string | PageContentContentInterface;
}
