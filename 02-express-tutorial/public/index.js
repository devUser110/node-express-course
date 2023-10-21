document.addEventListener("DOMContentLoaded", () => {
  const getBtn = document.getElementById("getBtn");
  const allProductsDiv = document.getElementById("allProducts");

  getBtn.addEventListener("click", async () => {
    try {
      const response = await fetch("/api/v1/products");

      if (!response.ok) {
        throw new Error("Error completing request.");
      }

      const data = await response.json();

      const products = data;

      allProductsDiv.innerHTML = "";

      products.forEach((p) => {
        const allProductsElement = document.createElement("div");
        allProductsElement.innerHTML = `<strong>${p.name}</strong><br>Price: $${p.price}<br>${p.desc}<br><br>`;
        allProductsDiv.appendChild(allProductsElement);
      });
    } catch (error) {
      console.log("Error getting products...", error);
      allProductsDiv.innerHTML = "Error getting products";
    }
  });
});
