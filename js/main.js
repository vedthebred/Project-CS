const projectName = "Project CS";
const currentStep = 9;
const isJavaScriptUnlocked = true;
const journalButton = document.getElementById("journal-toggle");
const journalContent = document.getElementById("journal-content");

journalButton.addEventListener("click", function () {
  journalContent.hidden = true;
});

const siteState = {
  currentFocus: "JavaScript Fundamentals",
  currentProject: "Project CS",
  currentWorld: "Web Development",
  currentQuest:
    "Learn JavaScript fundamentals and begin adding interactive behavior to Project CS.",
  questLink: "#learning-path",
  currentWork: "Learning JavaScript fundamentals.",
  progress: 67,
  achievementCount: 8,
};

function updateSiteState() {
  setText("#current-world", siteState.currentWorld);
  setText("#current-project", siteState.currentProject);
  setText("#current-focus", siteState.currentFocus);
  setText("#current-quest-text", siteState.currentQuest);
  setText("#current-work", `Current Work: ${siteState.currentWork}`);
  setText("#achievement-count", `${siteState.achievementCount} Completed`);
  setText("#progress-label", `${siteState.progress}%`);

  const progressElement = document.querySelector("#current-world-progress");

  if (progressElement) {
    progressElement.value = siteState.progress;
    progressElement.textContent = `${siteState.progress}%`;
  }

  const questLinkElement = document.querySelector("#current-quest-link");

  if (questLinkElement) {
    questLinkElement.setAttribute("href", siteState.questLink);
  }
}

function setText(selector, text) {
  const element = document.querySelector(selector);

  if (!element) {
    console.warn(`Could not find element: ${selector}`);
    return;
  }

  element.textContent = text;
}

updateSiteState();
