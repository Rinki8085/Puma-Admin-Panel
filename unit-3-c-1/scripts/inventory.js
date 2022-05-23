let data = JSON.parse(localStorage.getItem('products'));
// console.log(data)

window.addEventListener('load',function(){
    show_data(data);
})
function show_data(data){
    document.getElementById('all_products').innerHTML = '';
    data.map(function(ele,index){
        let box = document.createElement('div');

        let img = document.createElement('img');
        img.src = ele.image;

        let type = document.createElement('p');
        type.innerText = ele.type;
        type.setAttribute('id','heading')

        let desc = document.createElement('p');
        desc.innerText = ele.desc;

        let price = document.createElement('p');
        price.innerText = ele.price;

        let btn = document.createElement('button');
        btn.innerText = 'Remove Product';
        btn.setAttribute('id','remove_product')
        btn.addEventListener('click', () =>{
            removeProduct(ele,index)
        })

        box.append(img,type,desc,price,btn);
        document.getElementById('all_products').append(box);

    })

}

function removeProduct(ele,index){
    data.splice(index,1);
    localStorage.setItem('products',JSON.stringify(data));
    window.location.reload();
}

