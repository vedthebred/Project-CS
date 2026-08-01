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

function updateSiteState() {
  const currentFocusElement = document.querySelector("#current-focus");
  const currentQuestElement = document.querySelector("#current-quest-text");

  currentFocusElement.textContent = siteState.currentFocus;
  currentQuestElement.textContent = siteState.currentQuest;
}

updateSiteState();
