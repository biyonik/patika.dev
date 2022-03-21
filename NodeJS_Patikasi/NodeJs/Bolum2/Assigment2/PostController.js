const posts = [
    {
        id: 1,
        title: 'NodeJS Nedir',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quam aliquid amet incidunt maiores esse pariatur accusamus corporis quaerat.'
    },
    {
        id: 2,
        title: 'JavaScript Nedir',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quam aliquid amet incidunt maiores esse pariatur accusamus corporis quaerat.'
    },
    {
        id: 3,
        title: 'Thread Nedir',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quam aliquid amet incidunt maiores esse pariatur accusamus corporis quaerat.'
    },
    {
        id: 4,
        title: 'Asenkron Nedir',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quam aliquid amet incidunt maiores esse pariatur accusamus corporis quaerat.'
    },
    {
        id: 5,
        title: 'Promise Nedir',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut blanditiis quam aliquid amet incidunt maiores esse pariatur accusamus corporis quaerat.'
    },
];

const getAll = async () => {
    await posts.map((post) => {
        console.log(post);
    })
}


const add = async (entity) => {
    const promise = new Promise((resolveFunc, rejectFunc) => {
        posts.push(entity);
        resolveFunc(posts);
    });
    return promise;
}

async function showPosts()
{
    try {
        await add(
            {
                id: posts.length + 1,
                title: 'New Post',
                content: 'New Post content'
            }
        );
        await getAll();
    } catch(error) {
        console.log(error);
    }
}

showPosts();