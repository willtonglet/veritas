import { useContext } from 'react';
import Context from 'context/Context';

const resolve = (path: string, content: PageContentContentInterface, separator = '.') => {
    const properties: any[] = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev: string[], curr: number) => prev && prev[curr], content);
};

export const content = (prop: string): string => {
    const { content } = useContext(Context);
    let text = '';
    try {
        text = content && resolve(prop, content);
    } catch (error) {
        throw new Error(`Couldn't find the text for ${prop}`);
    }

    return text;
};
