const shell = document.querySelector(".figma-shell");
const canvas = document.querySelector(".canvas");
const selectableFrames = document.querySelectorAll("[data-select-frame]");
const taskLinks = document.querySelectorAll("[data-open-task]");
const personLinks = document.querySelectorAll("[data-open-person]");
const backTaskButtons = document.querySelectorAll("[data-back-task]");

function selectFrame(event) {
  event.stopPropagation();
  shell.dataset.state = "frame-selected";
}

function openTask(event) {
  event.preventDefault();
  event.stopPropagation();
  shell.dataset.state = "task-selected";
}

function openPerson(event) {
  event.preventDefault();
  event.stopPropagation();
  shell.dataset.state = "person-selected";
}

function backToTask(event) {
  event.preventDefault();
  event.stopPropagation();
  shell.dataset.state = "task-selected";
}

function clearFrameSelection(event) {
  const canClear =
    shell.dataset.state === "frame-selected" ||
    shell.dataset.state === "task-selected" ||
    shell.dataset.state === "person-selected";

  if (event.target === canvas && canClear) {
    shell.dataset.state = "no-frame";
  }
}

selectableFrames.forEach((target) => {
  target.addEventListener("click", selectFrame);
});

taskLinks.forEach((target) => {
  target.addEventListener("click", openTask);
});

personLinks.forEach((target) => {
  target.addEventListener("click", openPerson);
});

backTaskButtons.forEach((target) => {
  target.addEventListener("click", backToTask);
});

canvas.addEventListener("click", clearFrameSelection);
