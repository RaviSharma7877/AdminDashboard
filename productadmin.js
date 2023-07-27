const sideMenu = document.querySelector('aside')
const clicked = document.querySelector('.clicked')
const menuBtn = document.getElementById("menu-btn")
const closeBtn = document.getElementById('close-btn')
const mainSection = document.getElementById("data-list-wrapper");
const darkMode = document.querySelector('.dark-mode')

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'block';
})
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
})
darkMode.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode-variables')
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active')
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active')
})
clicked.addEventListener('click',()=>{
    clicked.classList.toggle('active')
    clicked.classList.toggle('active')
})


let status1 = ["Pending","Accept", "Decline"]
let slct1 = document.getElementById("slct1")

status1.forEach(function addstatus(item){
    let option = document.createElement("option")
    option.text = item;
    option.value = item;
    slct1.appendChild(option);
})



window.addEventListener("load", () => {          
  fetchAndRenderEmployees('http://localhost:8888/products');                    
});
//showing data on DOM ↓↓
function fetchAndRenderEmployees(url){
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error fetching products:', error));
}


function displayProduct(data){
mainSection.innerHTML = ""
data.forEach(function(product){
const tr = document.createElement('tr')
    const productId = document.createElement('td')
    Pname.innerText = product.productId;

    const productName = document.createElement('td')
    Pname.innerText = product.productName;

    const image_URL = document.createElement('td')
    Pname.innerText = product.image_URL;

    const description = document.createElement('td')
    Pname.innerText = product.description;

    const brand = document.createElement('td')
    Pname.innerText = product.brand;

    const quantity = document.createElement('td')
    Pname.innerText = product.quantity;

    const category = document.createElement('td')
    Pname.innerText = product.category;

    const price = document.createElement('td')
    Pname.innerText = product.price;

    tr.append(productId,productName,image_URL,description,brand,quantity,category,price)
    mainSection.appendChild(tr)
})
}


