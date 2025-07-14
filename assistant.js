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