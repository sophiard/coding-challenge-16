// Task 1: Set HTML structure in the HTML file
//task 1: nitialize basic HTML structure

// Task 2:  Implement fetchProductsThen using .then() and .catch()
function fetchProductsThen() {
    // Fetch product data using .then()
    fetch("https://www.course-api.com/javascript-store-products")
      .then((response) => {
        // Convert response to JSON format
        return response.json();
      })
      .then((products) => {
        // Log each product name
        products.forEach(product => {
          console.log(product.fields.name);
        }); 
      })
      .catch((error) => {
        // Log any fetch errors
        console.error("Error using fetch:", error);
      }); 
}


// Task 3: Add fetchProductsAsync using async/await and try/catch
async function fetchProductsAsync() {
    try {
      // Fetches the data from API
      const response = await fetch("https://www.course-api.com/javascript-store-products");
  
      // Convert response to JSON
      const products = await response.json();
  
     
      displayProducts(products);
       // // Show products on the page
    } catch (error) {
      handleError(error);
    }   // handles error 
}


// Task 4:  Display products in the DOM with name, price, and image
function displayProducts(products) {
    const container = document.getElementById("product-container");
  // Find the container of the products 
    
    container.innerHTML = "";
    // Empties out the container
  
    
    products.slice(0, 5).forEach(product => {
    // takes the first 5 products 
     
      const { name, price, image } = product.fields;
       // takes the name, price and image of product
  
      
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      // creating the HTML for each product
  
      
      const productName = document.createElement("h2");
      productName.textContent = name;
      // Put the product name in an h2 tag
  
      
      const img = document.createElement("img");
      // creates image of the product
      img.src = image[0].url; 
      img.alt = name; 
      //sets image and url 
  
    
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${(price / 100).toFixed(2)}`; // Convert cents to dollars
    // Adds prices
      
      productDiv.appendChild(productName);
      productDiv.appendChild(img);
      productDiv.appendChild(productPrice);
      // Adds to the div

      container.appendChild(productDiv);
    }); // Puts the product div in container
  }
  
// Task 5: Add reusable handleError function
function handleError(error) {
    console.error("An error occurred:", error.message);
  } //logged if error occured 