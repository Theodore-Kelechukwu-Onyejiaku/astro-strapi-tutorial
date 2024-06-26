export const products = [
    {
        id: 1,
        name: "Sunglasses",
        price: 12.99,
        inStock: 12,
    },
    {
        id: 2,
        name: "Shoes",
        price: 52.99,
        inStock: 25,
    },
];

export const listProducts = () => {
    return products;
};

export const purchaseProduct = (id, quantity) => {
    const [product] = products.filter((product) => product.id === parseInt(id));

    if (product.inStock > 0 && product.inStock >= quantity) {
        product.inStock -= quantity;
    } else {
        product.inStock = 0;
    }

    return products;
};
