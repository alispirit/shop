const data =
    {
        products: [
            {
                id: 1,
                title: ' title 1',
                price: 2000,
                src: "./img/1.jpg"
            }, {
                id: 2,
                title: ' title 2',
                price: 2500,
                src: "./img/2.jpg"
            }, {
                id: 3,
                title: ' title 3',
                price: 2500,
                src: "./img/3.jpg"
            }, {
                id: 4,
                title: ' title 4',
                price: 5000,
                src: "./img/4.jpg"
            }
        ]
    }

export const ProductService = {
    getProducts: () => {
        // console.log(data.products.slice());
        return data.products.slice();
    },
    getProductById: (id) => {
        // console.log(data.products.filter(x => x.id === id ) );
        return data.products.filter(x => x.id === id);
    }
}