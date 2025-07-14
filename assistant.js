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

