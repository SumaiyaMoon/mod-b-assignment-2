// const searchSelect = document.getElementById("searchSelect").value
    
// const inputSearch = document.getElementById("inputSearch").value.toLowerCase();

// const searchButton = document.getElementById("searchButton");

// const renderResult = document.getElementById("renderResult");


// const model = document.getElementById("model");
// const brand = document.getElementById("brand");
// const price = document.getElementById("price");
// const camera = document.getElementById("camera");
// const storage = document.getElementById("storage");



const mobileModels = [
    {
      brand: "Samsung",
      model: "Galaxy S21",
      price: 35000,
      camera: "64 MP",
      storage: 128,
    },
    {
      brand: "Samsung",
      model: "Galaxy A52",
      price: 40000,
      camera: "64 MP",
      storage: 256,
    },
    {
      brand: "Samsung",
      model: "Galaxy Note 20",
      price: 50999,
      camera: "108 MP",
      storage: 256,
    },
    {
      brand: "Vivo",
      model: "V21",
      price: 20000,
      camera: "64 MP",
      storage: 128,
    },
    {
      brand: "Vivo",
      model: "Y72",
      price: 25000,
      camera: "48 MP",
      storage: 64,
    },
    {
      brand: "Redmi",
      model: "Note 10 Pro",
      price: 30000,
      camera: "108 MP",
      storage: 128,
    },
    {
      brand: "Redmi",
      model: "K40",
      price: 50000,
      camera: "48 MP",
      storage: 256,
    },
  ];
  
  function renderSearchResult(event) {
    event.preventDefault();
const searchSelect = document.getElementById("searchSelect").value
    
const inputSearch = document.getElementById("inputSearch").value.toLowerCase();

const searchButton = document.getElementById("searchButton");

const renderResult = document.getElementById("renderResult");


    const filter = mobileModels.filter(x => {
      let searchValue = x[searchSelect].toString().toLowerCase();
      return searchValue.includes(inputSearch);
    });
  
    if (filter.length > 0) {
      renderResult.innerHTML = '';
      filter.forEach(x => {
        renderResult.innerHTML += `
          <li>Model: ${x.model}</li>
          <li>Brand: ${x.brand}</li>
          <li>Price: Rs.${x.price}</li>
          <li>Camera: ${x.camera}</li>
          <li>Storage: ${x.storage} GB</li>
          <hr>
        `;
      });
    } else {
      renderResult.innerHTML = 'No results found.';
    }
  }
