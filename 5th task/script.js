const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=SmFOSTFzWmdkMW1XWjFUWXBDRzdBd2tuVHYzMERCZURia3c5SzJFOTlPZ3oveDdpQVpwS0ltY2w2UW05aU90T0huV2F0aExud1Z0YndiMUgwNXJZQnc"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 99.99,
      image: "https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 29.99,
      image: "https://suprememobiles.in/cdn/shop/files/TemptSINQWithMicBluetoothSpeaker-Pink.png?v=1723270623"
    },
    {
      id: 4,
      name: "Fitness Tracker",
      price: 39.99,
      image: "https://m.media-amazon.com/images/I/61dV494jBgL.jpg"
    },
    {
      id: 5,
      name: "Portable SSD",
      price: 89.99,
      image: "https://m.media-amazon.com/images/I/71bBCTIvIIL.jpg"
    },
    {
      id: 6,
      name: "USB-C Hub",
      price: 24.99,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthrF7LmjePQ0Tnv2Ovvj56_GMyE7TxZ88VQ&s"
    },
    {
      id: 7,
      name: "Laptop Stand",
      price: 34.99,
      image: "https://m.media-amazon.com/images/I/71xlXzGX9aL.jpg"
    },
    {
      id: 8,
      name: "Noise Cancelling Earbuds",
      price: 79.99,
      image: "https://avshack.in/cdn/shop/products/ahc830ncw.jpg?v=1671771481&width=1500"
    }
  ];
  
  const productList = document.getElementById("product-list");
  const cartCount = document.getElementById("cart-count");
  const searchBox = document.getElementById("search-box");
  
  function displayProducts(filteredProducts = products) {
    productList.innerHTML = "";
    filteredProducts.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="buyNow('${product.name}')">Buy Now</button>
      `;
      productList.appendChild(card);
    });
  }
  
  function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }
  
  function buyNow(productName) {
    alert(`Thank you for purchasing ${productName}!`);
  }
  
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCount.textContent = cart.length;
  }
  
  searchBox?.addEventListener("input", () => {
    const searchTerm = searchBox.value.toLowerCase();
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
  });
  
  // Initialize
  displayProducts();
  updateCartCount();
  