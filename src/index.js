document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", createTodoList)

  function createTodoList(e){
    e.preventDefault();
    let li = document.createElement("li")
    li.textContent = e.target["new-task-description"].value
    document.getElementById("tasks").appendChild(li)
    e.target["new-task-description"].value = ""
  }
});
