import { jobs } from "./jobs.js";

const jobContainer = document.querySelector(".job-container");

jobs.forEach(job => {
  const card = document.createElement("article");
  card.className = "job-card";

  card.innerHTML = `
    <div class="company-logo" aria-hidden="true">${job.title.charAt(0)}</div>
    <div class="job-date">${job.date}</div>
    <h2>${job.title}</h2>
    <div class="job-tags">
      ${job.tags.map(tag => `<span>${tag}</span>`).join("")}
      <span>${job.projectWork}</span>
    </div>
  `;

  jobContainer.appendChild(card);
});
