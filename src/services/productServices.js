const data = {
    products : [
    {
    id : 1,
    title : ' title 1',
    price : 2000
    },    {
    id : 2,
    title : ' title 2',
    price : 2500
    },    {
    id : 3,
    title : ' title 3',
    price : 2500
    },    {
    id : 4,
    title : ' title 4',
    price : 5000
    }

    ]
}

export const ProductService = {
    getProducts: () => {
        return data.products.slice();
    }
}