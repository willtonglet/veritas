declare module '*.png';

interface PageProps {
    content: any;
}

interface PageContentContentInterface {
    [key: string]: string | PageContentContentInterface;
}
