const tasks = ["Wash dishes", "Do laundry", "Write code", "Read a book"];
const taskBoard = document.getElementById("taskBoard");
const showTasks = document.getElementById("showTasks");

showTasks.addEventListener("click", () => { //Step 1: Add event listener
  taskBoard.textContent = ""; //Step 2: Clear previous tasks
  showTasks.disabled = true; //Step 3: Disable button to prevent multiple clicks

  let delay = 0; //Step 4: Initialize delay

  tasks.forEach((task, index) => { //Step 5: Iterate over tasks
    setTimeout(() => { //Step 6: Use setTimeout to display tasks with delay. Repeat for each task.
      const p = document.createElement("p");//Step 10: Create a new paragraph element
      p.textContent = `Task ${index + 1}: ${task}`;//Step 11: Set text content of paragraph
      taskBoard.appendChild(p); //Step 12: Append paragraph to task board
    }, delay);//Step 13: Use delay to stagger task display. Repeat step 10 - 13 for each task.

    delay += 500; //Step 7: Increment delay for next task
  });// Step 8: Re-enable button after all tasks are displayed

  // Re-enable button after last task
  setTimeout(() => { //Step 14: Re-enable button after all tasks are displayed
    showTasks.disabled = false;//Step 15: Enable button again
  }, delay);//Step 16: Set timeout to re-enable button after all tasks are displayed
}); //Step 9: Iterations complete.
