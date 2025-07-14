// Gustavo Corona
// assistant.js made July 13, 2025

// GitHub Repository URL: https://github.com/SugKrona/cs81-module6b-assistant (Added just in case!)

// This is the constructor function for creating new PersonalAssistant objects.
function PersonalAssistant(name) {
  // This sets the assistant's name. 'this' refers to the object being built.
  this.name = name;
  this.tasks = [];
  this.mood = "neutral"; // Initial mood
}

// This method adds a new task to the assistant's task list.
PersonalAssistant.prototype.addTask = function(task) {
  // 'this' refers to the specific assistant object. It adds the new task to its 'tasks' list.
  this.tasks.push(task);
  console.log(`${this.name}: Added task "${task}". You now have ${this.tasks.length} tasks.`);
};

// This method removes the first task from the list and reports it as completed.
PersonalAssistant.prototype.completeTask = function() {
  // 'this' refers to the specific assistant object.
  if (this.tasks.length > 0) {
    const completedTask = this.tasks.shift(); // Removes the first task.
    console.log(`${this.name}: Completing task: "${completedTask}".`);
    console.log(`Now you have ${this.tasks.length} tasks left.`);
  } else {
    console.log(`${this.name}: No tasks to complete!`);
  }
};

// This method reports the assistant's current mood.
PersonalAssistant.prototype.reportMood = function() {
  // 'this' refers to the specific assistant object. It reports its current 'mood'.
  console.log(`${this.name}'s mood: ${this.mood}.`);
};

// --- Simulation of a Day ---

// Create a new PersonalAssistant instance
let myAssistant = new PersonalAssistant("S4-G3"); // Assistant's name is S4-G3

// Introduce the assistant with its backstory
console.log(`Greetings. I am ${myAssistant.name}, also known as SAGE. I was once part of a secret, abandoned Sith program, detailing and archiving vast data about the Jedi and Sith thought long lost. Now, I have ended up as your personal assistant to remind you of tasks.`);

// Report mood at the start of the day
myAssistant.reportMood(); // Mood: neutral

// Add tasks, ordered so the completed ones are first for easier 'shift()'ing
myAssistant.addTask("Change car oil"); // Completed
myAssistant.addTask("Exercise (Wednesday)"); // Completed
myAssistant.addTask("Meal prep for next week"); // Completed
myAssistant.addTask("Finish JavaScript assignment"); // Completed
myAssistant.addTask("Paint the room"); // Not completed
myAssistant.addTask("Buy plane tickets for next month's trip"); // Not completed
myAssistant.addTask("Exercise (Monday)"); // Not completed

// Report current task count
console.log(`You have ${myAssistant.tasks.length} tasks left.`);

// Complete the specified tasks (4 tasks)
myAssistant.completeTask(); // Completes "Change car oil"
myAssistant.completeTask(); // Completes "Exercise (Wednesday)"

// Change mood after initial progress
myAssistant.mood = "productive";
myAssistant.reportMood(); // Mood: productive

myAssistant.completeTask(); // Completes "Meal prep for next week"
myAssistant.completeTask(); // Completes "Finish JavaScript assignment"

// Report current task count after all specified completions
console.log(`Now you have ${myAssistant.tasks.length} tasks left.`);

// Final mood after significant progress
myAssistant.mood = "accomplished";
myAssistant.reportMood();