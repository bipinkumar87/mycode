fetch('https://fakestoreapi.com/products').then((data)=>{
    //console.log(data);
    return data.json();
}).then((completdata)=>{
     //console.log(completdata[2].title);
     //document.getElementById('root').innerHTML=completdata[2].title;
     let data1="";
     completdata.map((values)=>{
        data1 +=` <div class="pro">
        
        <p class="category">${values.category}</p>
        <img src="${values.image}" alt="" class="images">
        
        <h2 class="title">${values.title}</h2>
        
        <h2 class="price">${values.price}</h2>
    </div>`
     });
     document.getElementById("products").innerHTML=data1;
}).catch((error)=>{
    console.log(error);
});
let scrollcont=document.querySelector("#products")
let backbtn=document.getElementById("left");
let backbtn1=document.getElementById("right");
backbtn1.addEventListener("click",()=>{
    scrollcont.scrollLeft +=90;
});
backbtn.addEventListener("click",()=>{
    scrollcont.scrollLeft -=900;
});
