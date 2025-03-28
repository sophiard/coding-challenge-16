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


