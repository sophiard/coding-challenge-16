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

