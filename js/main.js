const projectName = "Project CS";
const currentStep = 9;
const isJavaScriptUnlocked = true;
const journalButton = document.getElementById("journal-toggle");
let journalExpanded = false;
const journalEntries = document.querySelectorAll(
  "#journal-content .journal-item",
);
const roadmapSteps = document.querySelectorAll(".path-step");

function updateRoadmap() {
  roadmapSteps.forEach(function (step) {
    const stepNumber = Number(step.dataset.step);
    const marker = step.querySelector(".path-marker");
    const status = step.querySelector(".path-status");

    step.classList.remove("path-complete", "path-current", "path-locked");

    step.removeAttribute("aria-current");

    if (stepNumber < currentStep) {
      step.classList.add("path-complete");
      marker.textContent = "✓";
      status.textContent = "Complete";
    } else if (stepNumber === currentStep) {
      step.classList.add("path-current");
      marker.textContent = stepNumber;
      status.textContent = "Current";
      step.setAttribute("aria-current", "step");
    } else {
      step.classList.add("path-locked");
      marker.textContent = stepNumber;
      status.textContent = "Locked";
    }
  });
}

function updateJournalView() {
  const latestStartIndex = journalEntries.length - 3;

  journalEntries.forEach(function (entry, index) {
    if (journalExpanded) {
      entry.hidden = false;
    } else {
      if (index < latestStartIndex) {
        entry.hidden = true;
      } else {
        entry.hidden = false;
      }
    }
  });

  if (journalExpanded) {
    journalButton.textContent = "Show Less";
    journalButton.setAttribute("aria-expanded", "true");
  } else {
    journalButton.textContent = "Show More";
    journalButton.setAttribute("aria-expanded", "false");
  }
}

journalButton.addEventListener("click", function () {
  journalExpanded = !journalExpanded;
  updateJournalView();
});

updateJournalView();

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
updateRoadmap();
