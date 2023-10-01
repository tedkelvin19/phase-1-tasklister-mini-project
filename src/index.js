document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener('submit',(e) =>{
    e.preventDefault()
    buildNewtask(e.target.todoList.value)
    form.reset()
  })
});
function buildNewtask(todo){
 let listElement = document.createElement("li")
 let btn  = document.createElement("button")
 btn.textContent = "X"
 listElement.textContent = `${todo}  `
 listElement.appendChild(btn) 
console.log(listElement)
 document.querySelector('#tasks').appendChild(listElement)
 btn.addEventListener('click',handleToDoList)
}
function  handleToDoList(e){
  e.target.parentNode.remove()
}