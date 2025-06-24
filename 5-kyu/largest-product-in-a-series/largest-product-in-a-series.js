function greatestProduct(input) {
    let maxProduct = 0; 
    for (let i = 0; i <= input.length - 5; i++) {
        let currentProduct = 1;
        for (let j = 0; j < 5; j++) {
            currentProduct *= parseInt(input[i + j]);
        }
        if (currentProduct > maxProduct) {
            maxProduct = currentProduct;
        }
    }
    return maxProduct;
}