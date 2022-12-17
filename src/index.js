document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById("create-task-form")
  form.addEventListener("submit", createTodoList)

  function createTodoList(e){
    e.preventDefault();
    document.getElementById("tasks").innerHTML += `<li>${e.target["new-task-description"].value} <span><input class="delete-todo" type="submit" value="x"></span></li>`
    e.target["new-task-description"].value = ""
  }

  const deleteContainer = document.querySelector("#tasks")
  deleteContainer.addEventListener("click", handleDelete)
  
  
  function handleDelete(e){
    e.preventDefault()
    if (e.target.classList.contains('delete-todo')) {
      console.log(e.target.parentNode.parentNode.remove())
    }
  }
});

