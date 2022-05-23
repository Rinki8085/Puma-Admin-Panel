//store the products array in localstorage as "products"
let data = JSON.parse(localStorage.getItem('products')) || [];

// calling the function of button
function add_product(event){
    event.preventDefault();
    let form = document.getElementById('products');

    //taking value from form
    let type =form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let url = form.image.value;

    // creating object
    let obj = new add_data(type,price,desc,url);
    data.push(obj);
    localStorage.setItem('products',JSON.stringify(data));
    
    // making null after storing data into localstorage
    form.type.value = null;
    form.price.value = null;
    form.image.value = null;
    form.desc.value = null;
}

function add_data(type,price,desc,url){
    this.type = type,
    this.desc = desc,
    this.price = price,
    this.image = url
}