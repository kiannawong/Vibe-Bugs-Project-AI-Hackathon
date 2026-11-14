              <h3>${group.title}</h3>
              <div class="race-list">
                ${group.races
                  .map(
                    (race) => `
                      <article class="race-card">
                        <h4>${race.office}</h4>
                        ${race.candidates.map(renderCandidate).join("")}
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </section>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderJudicialQuestions() {
  judicialPanel.innerHTML = `
    <p class="panel-kicker">Nonpartisan retention elections</p>
    <h2 class="panel-title">Judicial retention questions</h2>
    <p class="panel-copy">
      Voters choose “Yes” or “No” on whether to retain each named justice. These are not contests between candidates.
    </p>
    <div class="judicial-list">
      ${judicialGroups
        .map(
          (group) => `
            <section class="judicial-group">
              <h3>${group.title}</h3>
              <ul class="justice-list">
                ${group.justices.map((justice) => `<li>${justice}</li>`).join("")}
              </ul>
            </section>
          `,
        )
        .join("")}
    </div>
    <p class="retention-note">
      A “Yes” vote retains a justice for the applicable term; a “No” vote does not. The California voter guide provides professional qualifications rather than campaign platforms for these offices.
    </p>
  `;
}

function renderPropositions() {
  propositionsPanel.innerHTML = `
    <p class="panel-kicker">Statewide ballot measures</p>
    <h2 class="panel-title">What each proposition is designed to do</h2>
    <p class="panel-copy">
      These are neutral, plain-language summaries based on the official titles and analyses—not arguments for or against a measure.
    </p>
    <div class="proposition-list">
      ${propositions
        .map(
          (proposition) => `
            <article class="proposition-card">
              <span class="proposition-number">${proposition.number}</span>
              <div>
                <h3>Proposition ${proposition.number}: ${proposition.title}</h3>
                <p>${proposition.description}</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderLocalMeasure() {
  localMeasurePanel.innerHTML = `
    <p class="panel-kicker">Paso Robles-area local measure</p>
    <h2 class="panel-title">Local Measure on Ballot Type 1</h2>
    <div class="local-measure-card">
      <span class="measure-badge">MEASURE G-26</span>
      <h3>Paso Robles Joint Unified School District bond measure</h3>
      <p>
        Measure G-26 asks voters whether to authorize up to $205 million in school bonds. Its stated purpose is to renovate and expand classrooms and career-training facilities and repair roofs and heating and air-conditioning systems.
      </p>
      <ul class="measure-details">
        <li><strong>Mechanism:</strong> A “Yes” vote authorizes the district to issue general-obligation bonds; a “No” vote does not.</li>
        <li><strong>Stated tax estimate:</strong> About $49.59 per $100,000 of assessed value on average while the bonds are outstanding.</li>
        <li><strong>Accountability:</strong> The measure states that it includes audits and taxpayer oversight, and excludes administrator salaries, pensions, and benefits.</li>
      </ul>
    </div>
  `;
}

function activateTab(tab) {
  tabs.forEach((item) => {
    const active = item === tab;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-selected", String(active));
    item.tabIndex = active ? 0 : -1;
  });

  panels.forEach((panel) => {
    panel.hidden = panel.id !== tab.dataset.panel;
  });
}

renderCandidates();
renderJudicialQuestions();
renderPropositions();
renderLocalMeasure();

ballotToggle.addEventListener("click", () => {
  const willOpen = ballotExample.hidden;
  ballotExample.hidden = !willOpen;
  ballotToggle.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) {
    ballotExample.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateTab(tab));

  tab.addEventListener("keydown", (event) => {
    const keys = ["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;

    event.preventDefault();
    let nextIndex = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % tabs.length;
    }
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    tabs[nextIndex].focus();
    activateTab(tabs[nextIndex]);
  });
});
