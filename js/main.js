const projectName = "Project CS";
const currentStep = 9;
const isJavaScriptUnlocked = true;

const siteState = {
  currentFocus: "JavaScript Fundamentals",
  currentQuest:
    "Learn JavaScript fundamentals and begin adding interactive behavior to Project CS.",
  currentWork: "Learning JavaScript fundamentals.",
  progress: 67,
  achievementCount: 8,
};

const currentFocusElement = document.querySelector("#current-focus");

console.log(currentFocusElement);

currentFocusElement.textContent = siteState.currentFocus;
