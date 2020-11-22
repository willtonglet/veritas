export default {
    get: async (): Promise<PageContentContentInterface> => {
        let data;

        try {
            data = await import('../../data/content.json');
            if (!data) throw new Error('Conteúdo não encontrado');
        } catch (error) {
            throw new Error(error);
        }

        return (data.default as unknown) as PageContentContentInterface;
    }
};
