// Kerakli HTML tag lariga ulanish

const form = document.querySelector(".content_form");
const input = document.querySelector(".form_input");
const addBtn = document.querySelector(".form_btn");
const todolist = document.querySelector(".todo_list");


form.addEventListener("submit", function (e) {
console.log("test"); // qayta yuklanishni o'chiradi

 if (!input.value.trim()) { 
     // input.value - input ICIDAGI  qiymatni olish
    return;
  }
 // classlist - html elementlariga class qo'shish, o'chirish uchun ishlatiladi
  // innerHTML - js o'zgaruvchilari ichiga html code qo'shish
   const list_item = document.createElement("div");
  list_item.classList.add("item");
  list_item.innerHTML = `
   <div class="list_info">
        <input class="checkbox" type="checkbox">
        <p class="todo">${input.value}</p>
    </div>
    <button class="remove_btn">
        <img src="ToDo List/img/trash.bin.svg" width="20" height="20" alt="trash-icon">
    </button>
  `

const checkbox = item.querySelector(".checkbox");
const removeBtn = item.querySelector(".todo");

checkbox.addEventListener("change", function (e) {
 todo.style.textDecoration = checkbox.checked ? "line-through" : "none";
}) 

removeBtn.addEventListener("click", () => {
    item.remove();
})





});
