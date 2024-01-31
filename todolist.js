
const todoArray =  JSON.parse(localStorage.getItem('todoArray')) ||
        
        
[{
    name:"Test1",
    date:"12-124",
    qty:1,
    price:10.00
}];


renderDel();
renderTotal();

const btnAdd = document.querySelector('#btn');


btnAdd.addEventListener('click',()=>{

const getText = document.querySelector('#nana');
const gotText = getText.value ;

const getDate = document.querySelector('#date');
const gotDate = getDate.value;

const getQty = document.querySelector('#qty');
const gotQty = Math.floor(getQty.value);

const getPrice = document.querySelector('#price');
const gotPrice = Number(getPrice.value);

todoArray.push({
 
  name :  gotText ,
  date : gotDate ,
  qty : gotQty ,
  price : gotPrice
});


 renderDel();
 renderTotal();



 savetoLocal();
 getText.value = '';
 getDate.value = '';
 getQty.value = '';
 getPrice.value = '';


// console.log(todoArray);


});

function savetoLocal(){
localStorage.setItem('todoArray',JSON.stringify(todoArray));

}



function renderTotal(){

let totalqty = 0;
let totalprice = 0 ;
todoArray.forEach((item)=>{

     totalqty += item.qty;
     totalprice += item.price * item.qty;

});

console.log(totalqty);
console.log(totalprice);

document.querySelector('.qty1').innerHTML = totalqty;
document.querySelector('.price1').innerHTML = totalprice;

}

function renderDel(){


let html = '';
    for ( i = 0 ; i < todoArray.length  ; i++){

        const newTodo = todoArray[i].name;
        const newTodo2 = todoArray[i].date;
        const newTodo3 = todoArray[i].qty;
        const newTodo4 = todoArray[i].price;

        html += `<div class="grid-data">
            <div>
            ${i+1}
            </div>
            <div>
            ${newTodo}
            </div>
          
            <div>
            ${newTodo3}
            </div>
            <div>
            ${newTodo4} $
            </div>
            <div>
            ${newTodo2}
            </div>
            <button class="btndelete"
            onclick="
            todoArray.splice(${i},1);
            renderDel();
            renderTotal();
           
            "
            >Delete</button>
            </div>`;
        
      
       
    }
    document.querySelector('.getTodo').innerHTML = html;
    savetoLocal();
}
