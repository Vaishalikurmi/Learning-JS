// let node = document.querySelector('#img-hero');

// let a = document.createAttribute('alt');

// a.value ="img"

// node.setAttributeNode(a);

// node.setAttribute("alt", "Created img")


// let isSubmitting;
// let isLoading;

// function submitForm() {
//    btn.setAttribute("disabled", "")
//    setTimeout(() => {
//      btn.removeAttribute("disabled")
//    }, 2000)
// }

let btnNode = document.getElementsByClassName("btn");

console.log(btnNode);

// let headingNode =  document.getElementById("heading")

// let input = document.querySelector("input")

// function submitForm(e) {
//     e.preventDefault()
//     input.toggleAttribute("disabled")
// }

// btnNode.addEventListener("click",submitForm)

// console.log(typeof Number(headingNode.getAttribute("data-count")));

let a= document.getElementsByTagName("form");
console.log(typeof a);
