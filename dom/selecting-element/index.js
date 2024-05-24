//const submit= document.getElementById("form1-submit");
// const text=document.getElementById("form1-fname");
// const para=document.getElementById("p");
// function submitFormOne(e){
//     e.preventDefault();
//     console.log('first name is :'+ text.value)
// };

// submit.addEventListener("click", submitFormOne);


// const countLabel = document.getElementById("btn-count");
// const getLabel = document.getElementsByTagName("label");
// const printLabel= document.getElementById("print-label");
// countLabel.addEventListener("click" , ()=>{
//     printLabel.innerHTML= "number of label is " + getLabel.length;
// })


// const getList= document.getElementsByClassName("list");

// console.log(getList[0].value);

// const dataOfList = [].map.call(getList , item => item.innerText);

// console.log(dataOfList);


// const ul = document.querySelector(".list");

// const li = document.querySelectorAll(".item");

// console.log("one", ul);

// const createEle = document.createElement("li");
// createEle.value = "Node";

// ul.appendChild(createEle);

// console.log("two",ul);

// const ul = document.querySelectorAll("#list1");
// const ulTwo = document.getElementsByTagName("li");
// console.log(ul.forEach((item) => console.log(item)));

// console.log(ulTwo);

const li = document.querySelector("#list1");

console.log(li.parentElement);