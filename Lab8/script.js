document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("search");
    const sortSelect = document.getElementById("sort");

    let products = [];

    function fetchProducts() {
        const res = new XMLHttpRequest();
        res.open("GET", "https://raw.githubusercontent.com/CynthiaEstherMetilda/Xhrdemo/main/products.json", true);
        res.onload = function () {
            if (res.status === 200) {
                products = JSON.parse(res.responseText);
                console.log(products)
                displayProducts();
            }
        };
        res.send();
    }

    function displayProducts() {
        productList.innerHTML = "";

        const keyword = searchInput.value.toLowerCase();
        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(keyword) || product.description.toLowerCase().includes(keyword)
        );

        const sortBy = sortSelect.value;
        if (sortBy === "nameA") {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "nameD") {
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === "priceA") {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === "priceD") {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        filteredProducts.forEach(function (product) {

            const card = document.createElement("card");
            card.setAttribute( "class", "card p-3 d-flex justify-content-center align-items-center m-3");
            card.setAttribute("style", "width: 20vw; border-radius: 10px; min-height: 200px");
            
            const img = new Image();
            img.setAttribute("class", "mx-2");
            img.src = product.image;
            img.setAttribute("alt", `${product.name} Image`)
            card.appendChild(img);
            
            const body = document.createElement("div");
            body.setAttribute("class", "card-body");
            
            const name = document.createElement("h4");
            name.setAttribute("class", "card-title");
            name.textContent = product.name;
            body.appendChild(name);
            
            const price = document.createElement("h5");
            price.setAttribute("class", "card-text px-3");
            price.textContent = `$ ${product.price.toFixed(2)}`;
            body.appendChild(price);
            
            const desc = document.createElement("div");
            desc.setAttribute("class", "card-text");
            desc.setAttribute("style", "text-align: justify;");
            desc.textContent = product.description;
            body.appendChild(desc);
            
            card.appendChild(body);
            
            productList.appendChild(card);
        });
    }

    searchInput.addEventListener("input", displayProducts);
    sortSelect.addEventListener("change", displayProducts);

    fetchProducts();
});