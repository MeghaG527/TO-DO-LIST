const input = document.querySelector(".task-input");
const ul = document.querySelector(".task-list");

// Function to delete a task with animation
function taskDeleter(e) {
 const taskItem = e.currentTarget.closest("li");
 taskItem.classList.add("fade-out"); // Add animation class
 taskItem.addEventListener("animationend", () => taskItem.remove());
}

// Function to add a task
function addTask(task) {
 if (!task) return alert("Cannot add an empty task!"); // Alert and exit if task is empty

 const li = document.createElement("li");
 li.classList.add("tasklist-item", "fade-in"); // Add fade-in animation class
 li.innerHTML = `
  <span>${task}</span>
  <button class="delete-btn">Delete</button>
  `;
 li.querySelector(".delete-btn").addEventListener("click", taskDeleter);
 ul.prepend(li); // Add task at the top
}

// Add task on pressing Enter
input.addEventListener("keypress", (e) => {
 if (e.key === "Enter") {
  addTask(input.value.trim());
  input.value = ""; // Clear the input field
 }
});
