import sanityClient from '@sanity/client';

const client = sanityClient({
    projectId: "enyrk71t",
    dataset: "production",
    useCdn: true,
});

export default client;
