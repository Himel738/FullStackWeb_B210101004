// products = [
//   {
//     id: 1,
//     name: "Product One",
//     description: "Description for Product One",
//     price: 29.99,
//     Image: "https://picsum.photos/seed/picsum/200/300"
//   },
//   {
//     id: 2,
//     name: "Product Two",
//     description: "Description for Product Two",
//     price: 39.99,
//     Image: "https://picsum.photos/seed/picsum/200/300"
//   },
//   {
//     id: 3,
//     name: "Product Three",
//     description: "Description for Product Three",
//     price: 49.99,
//     Image: "https://picsum.photos/seed/picsum/200/300"
//   },
  
// ];

// const productList = document.getElementById("product_list");

// products.forEach(product => {
//   const productCard = `
//         <div id="${product.id}" class="bg-white rounded-lg shadow hover:shadow-lg transition">
//         <div class="bg-gray-300 h-48 rounded-t-lg flex items-center justify-center">
//           <img src="${product.Image}" alt="${product.name}" class="w-full h-full object-cover">
//         </div>
//         <div class="p-4">
//           <h3 class="text-lg font-semibold text-gray-900">${product.name}</h3>
//           <p class="text-gray-600 text-sm mt-1">${product.description}</p>
//           <div class="mt-4 flex justify-between items-center">
//             <span class="text-2xl font-bold text-blue-600">$${product.price.toFixed(2)}</span>
//             <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
//           </div>
//         </div>
//       </div>
//   `
//   productList.innerHTML += productCard;
// });

// Fetch API
const productList = document.getElementById("product_list");
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
      console.log(products);
      products.forEach(product => {
        const price = product.price ? product.price.toFixed(2) : '0.00';
        const rating = product.rating && product.rating.rate ? product.rating.rate.toFixed(1) : 'N/A';
        
        const productCard = `
          <div id="${product.id}" class="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
            <div class="bg-gray-100 h-56 flex items-center justify-center overflow-hidden">
              <img src="${product.image}" alt="${product.title}" class="w-full h-full object-contain p-4">
            </div>
            <div class="p-4 flex flex-col flex-grow">
              <h3 class="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">${product.title}</h3>
              <p class="text-xs text-gray-500 line-clamp-2 mb-3 flex-grow">${product.description}</p>
              <div class="flex items-center justify-between mb-3 pt-2 border-t border-gray-200">
                <span class="text-lg font-bold text-blue-600">$${price}</span>
                <span class="text-sm font-semibold bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">★ ${rating}</span>
              </div>
              <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-medium text-sm">Add to Cart</button>
            </div>
          </div>
        `;
        productList.innerHTML += productCard;
      });
    })
    .catch(error => console.error('Error fetching products:', error));