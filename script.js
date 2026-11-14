const candidateGroups = [
  {
    title: "Statewide offices",
    races: [
      {
        office: "Governor",
        candidates: [
          {
            name: "Xavier Becerra",
            party: "Democratic",
            focus:
              "No candidate statement was submitted in the official statewide guide.",
          },
          {
            name: "Steve Hilton",
            party: "Republican",
            focus:
              "No candidate statement was submitted in the official statewide guide.",
          },
        ],
      },
      {
        office: "Lieutenant Governor",
        candidates: [
          {
            name: "Fiona Ma",
            party: "Democratic",
            focus:
              "Affordability, financial accountability, streamlined government, and education and career pathways.",
          },
          {
            name: "Gloria Romero",
            party: "Republican",
            focus:
              "Government transparency, school choice, lower cost of living, public safety, and less bureaucracy.",
          },
        ],
      },
      {
        office: "Secretary of State",
        candidates: [
          {
            name: "Shirley N. Weber",
            party: "Democratic",
            focus:
              "Voting access and voting rights, including vote-by-mail, alongside transparent elections.",
          },
          {
            name: "Donald P. (Don) Wagner",
            party: "Republican",
            focus:
              "Faster vote counts, voter-roll accuracy, photo identification, and nonpartisan election administration.",
          },
        ],
      },
      {
        office: "Controller",
        candidates: [
          {
            name: "Malia M. Cohen",
            party: "Democratic",
            focus:
              "Transparent and fair public-finance management, broader access to state finance data, and payroll modernization.",
          },
          {
            name: "Herb W. Morgan",
            party: "Republican",
            focus:
              "Rigorous audits and a public, transaction-level database of state spending.",
          },
        ],
      },
      {
        office: "Treasurer",
        candidates: [
          {
            name: "Eleni Kounalakis",
            party: "Democratic",
            focus:
              "Financial stewardship, affordable-housing finance, support for children and families, health care, and pensions.",
          },
          {
            name: "Jennifer Hawks",
            party: "Republican",
            focus:
              "Taxpayer-first oversight, financial transparency, and identifying waste, fraud, and mismanagement.",
          },
        ],
      },
      {
        office: "Attorney General",
        candidates: [
          {
            name: "Rob Bonta",
            party: "Democratic",
            focus:
              "No candidate statement was submitted in the official statewide guide.",
          },
          {
            name: "Michael E. Gates",
            party: "Republican",
            focus:
              "Public safety, enforcement against repeat theft and drug trafficking, victim protection, treatment, and fiscal accountability.",
          },
        ],
      },
      {
        office: "Insurance Commissioner",
        candidates: [
          {
            name: "Ben Allen",
            party: "Democratic",
            focus:
              "Lower insurance costs, consumer protections, fairer and faster claims, and wildfire resilience.",
          },
          {
            name: "Jane Kim",
            party: "Democratic",
            focus:
              "Insurance-company accountability, affordability and availability, fair claims, price rules, and public disaster insurance.",
          },
        ],
      },
      {
        office: "Board of Equalization, District 2",
        candidates: [
          {
            name: "Sally J. Lieber",
            party: "Democratic",
            focus:
              "Property-tax relief, equitable assessments, taxpayer assistance, housing affordability, and disaster recovery.",
          },
          {
            name: "John Pimentel",
            party: "Democratic",
            focus:
              "Tax-board reform and accountability, tax fairness, closing corporate loopholes, and ending sales tax on restaurant and delivered food.",
          },
        ],
      },
      {
        office: "Superintendent of Public Instruction",
        candidates: [
          {
            name: "Richard Barrera",
            party: "Nonpartisan",
            focus:
              "Improving academic outcomes, reducing bureaucracy, investing in classrooms, student protections, and school safety.",
          },
          {
            name: "Sonja Shaw",
            party: "Nonpartisan",
            focus:
              "Core academics, Title IX fairness and safety, less bureaucracy, and fiscal transparency.",
          },
        ],
      },
    ],
  },
  {
    title: "Federal and state legislative offices",
    races: [
      {
        office: "U.S. Representative, 19th Congressional District",
        candidates: [
          {
            name: "Jimmy Panetta",
            party: "Democratic",
            focus:
              "Housing and health-care affordability, infrastructure and jobs, immigration reform with a secure border, and coastal and climate protection.",
          },
          {
            name: "Peter Coe Verbica",
            party: "Republican",
            focus:
              "Proposition 13 and property-tax protection, water and insurance reform, lower costs, open space and wildfire resilience, and national security.",
          },
        ],
      },
      {
        office: "State Assembly, District 30",
        candidates: [
          {
            name: "Dawn Addis",
            party: "Democratic",
            focus:
              "State funding for the Central Coast, public schools and health care, coast and climate protection, safety, housing, and utility affordability.",
          },
          {
            name: "Shannon Kessler",
            party: "Republican",
            focus:
              "Less regulation and spending, support for housing, farms, and businesses, Diablo Canyon, parents' voice, girls' sports, and balanced resource protection.",
          },
        ],
      },
    ],
  },
  {
    title: "Paso Robles-area local offices",
    races: [
      {
        office: "Paso Robles Joint Unified School District, Trustee Area 4",
        candidates: [
          {
            name: "Jennifer Hamm",
            party: "Nonpartisan",
            focus:
              "Transparent finances, recruiting and retaining school staff, student safety and support, and listening to the community.",
          },
          {
            name: "John Rowins",
            party: "Nonpartisan",
            focus:
              "Strong academics, responsible taxpayer stewardship, parent partnerships, and supporting every student's path to success.",
          },
        ],
      },
      {
        office: "Paso Robles Mayor",
        candidates: [
          {
            name: "Chris Rogalla",
            party: "Nonpartisan",
            focus:
              "Roads and infrastructure, a family-friendly city, and stronger City Hall transparency and financial accountability.",
          },
          {
            name: "Bill Britton",
            party: "Nonpartisan",
            focus:
              "Public safety, the city's water future, infrastructure, local businesses, and responsible growth.",
          },
          {
            name: "Dr. Faith Frankel",
            party: "Nonpartisan",
            focus:
              "Public safety, roads and infrastructure, water, good local jobs, responsible growth, and Main Street support.",
          },
        ],
      },
      {
        office: "Paso Robles City Council, District 1",
        candidates: [
          {
            name: "Linda “Pinky” George",
            party: "Nonpartisan",
            focus:
              "Independent, accountable representation, transparency, and attention to water, parking, and local policy decisions.",
          },
          {
            name: "Kris Beal",
            party: "Nonpartisan",
            focus:
              "Resident engagement and consensus, pedestrian safety, parks and community spaces, affordable housing, and food-truck regulation.",
          },
        ],
      },
    ],
  },
];

const judicialGroups = [
  {
    title: "Supreme Court of California",
    justices: ["Joshua P. Groban", "Kelli M. Evans"],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 1",
    justices: ["Michelle C. Kim", "Gregory J. Weingart"],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 2",
    justices: ["Anne Richardson", "Steve Goorvitch"],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 3",
    justices: ["Rashida A. Adams, Presiding Justice", "Mark Hanasono"],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 4",
    justices: [
      "Helen Zukin, Presiding Justice",
      "Nicholas Daum",
      "Audra M. Mori",
      "Armen Tamzarian",
    ],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 5",
    justices: ["Brian M. Hoffstadt, Presiding Justice"],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 6",
    justices: ["Tari L. Cody, Presiding Justice", "Kenneth R. Yegan"],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 7",
    justices: ["Gonzalo C. Martinez, Presiding Justice", "Natalie Stone"],
  },
  {
    title: "Court of Appeal, 2nd Appellate District — Division 8",
    justices: ["John Wiley", "Matthew A. Scherb", "Victor G. Viramontes"],
  },
];

const propositions = [
  {
    number: "1",
    title: "Veterans and Affordable Housing Bond Act",
    description:
      "Authorizes general-obligation bonds for affordable-housing programs, veterans' home loans, supportive housing, and down-payment assistance.",
  },
  {
    number: "2",
    title: "Increases State's Rainy Day Fund",
    description:
      "Changes reserve and debt-payment rules to build larger state budget reserves for economic downturns.",
  },
  {
    number: "3",
    title: "Permanent Funding for Schools and Health Care",
    description:
      "Makes the existing high-income tax permanent and directs revenue toward public education, health care, and related state programs.",
  },
  {
    number: "4",
    title: "California Fair Elections Act",
    description:
      "Allows state and local governments to establish public campaign-financing programs, subject to limits on eligible funds and their use.",
  },
  {
    number: "5",
    title: "Recall of State Officers",
    description:
      "Changes statewide recall elections by removing the replacement choice from the recall ballot; a vacancy would later be filled by appointment or special election.",
  },
  {
    number: "37",
    title: "Loans for Middle-Income New-Home Buyers",
    description:
      "Creates a revenue-bond-funded program for fixed-rate loans to eligible middle-income buyers of certain newly built homes.",
  },
  {
    number: "38",
    title: "Bonds for Immunology Research",
    description:
      "Authorizes general-obligation bonds for immunology and immunotherapy medical research.",
  },
  {
    number: "39",
    title: "Voter Identification and Citizenship Verification",
    description:
      "Requires identification for in-person voting and specified government-ID information on vote-by-mail ballot envelopes.",
  },
  {
    number: "40",
    title: "One-Time Tax on Certain Individuals and Trusts",
    description:
      "Imposes a one-time tax on specified taxpayers and trusts, with revenue principally directed to health-related programs.",
  },
  {
    number: "41",
    title: "Audits and Rules for New State Special Taxes",
    description:
      "Invalidates specified post-2026 state taxes excluded from the spending limit and adds auditing requirements for programs funded by new special taxes.",
  },
  {
    number: "42",
    title: "Limits on New Personal-Property and Retroactive Taxes",
    description:
      "Bars new state personal-property taxes and certain retroactive state taxes, and invalidates conflicting rules enacted after January 1, 2026.",
  },
  {
    number: "43",
    title: "Local Taxes: Limitation",
    description:
      "Requires a two-thirds vote, rather than a majority vote, for voter-proposed local special taxes beginning in 2027.",
  },
  {
    number: "44",
    title: "Community Health Clinic Spending Requirement",
    description:
      "Requires certain nonprofit community health clinics to spend at least 90% of revenue on program services or face penalties.",
  },
  {
    number: "45",
    title: "Environmental Review for Certain Projects",
    description:
      "Amends California environmental-review procedures to speed review and lawsuit deadlines for certain qualifying projects.",
  },
];

const candidatesPanel = document.querySelector("#candidates-panel");
const judicialPanel = document.querySelector("#judicial-panel");
const propositionsPanel = document.querySelector("#propositions-panel");
const localMeasurePanel = document.querySelector("#local-measure-panel");
const ballotToggle = document.querySelector("#ballot-toggle");
const ballotExample = document.querySelector("#ballot-example");
const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function renderCandidate(candidate) {
  return `
    <article class="candidate">
      <p class="candidate-name">
        ${candidate.name}
        <span class="party-tag">${candidate.party}</span>
      </p>
      <p class="candidate-focus"><strong>Stated priorities:</strong> ${candidate.focus}</p>
    </article>
  `;
}

function renderCandidates() {
  candidatesPanel.innerHTML = `
    <p class="panel-kicker">Candidate-stated priorities · paraphrased</p>
    <h2 class="panel-title">Candidates on Ballot Type 1</h2>
    <p class="panel-copy">
      Party labels are candidates' stated party preferences, not party endorsements.
      These voluntary candidate statements were submitted by campaigns and are not independently verified by the County or Secretary of State.
    </p>
    <div class="race-groups">
      ${candidateGroups
        .map(
          (group) => `
            <section class="race-group">
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
    const keys = [
      "ArrowRight",
      "ArrowDown",
      "ArrowLeft",
      "ArrowUp",
      "Home",
      "End",
    ];

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
