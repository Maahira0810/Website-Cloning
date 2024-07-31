const productsContainer = document.getElementById('featured-products');
  
  function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product');
  
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
    `;
  
    productsContainer.appendChild(productCard);
  }
  
  products.forEach(createProductCard);
  