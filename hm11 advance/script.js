const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];


const createCard = (productList) =>{
    const cardContainer = document.createElement("div");

    cardContainer.innerHTML =`
        ${productList
        .map((prod) => {
            return `
            <h1>${prod.name}</h1>
            <h3>${prod.brand}</h3>
            <ul>
            ${prod.properties
            .map((prod) => {
                return `
                <li>
                    ${prod}
                </li>
            `;
            })
            .join("")}
            </ul>
        `;
        })
        .join("")}
    `;

    document.body.append(cardContainer);
}

createCard(products);