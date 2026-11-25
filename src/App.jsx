import './App.css'

const features = [
  {
    number: '01',
    eyebrow: 'PLAN WITH PURPOSE',
    title: 'See the whole picture.',
    description:
      'Bring projects, priorities, and the next small steps into one clear view.',
  },
  {
    number: '02',
    eyebrow: 'MOVE TOGETHER',
    title: 'Make teamwork feel easy.',
    description:
      'Keep everyone in sync with shared updates and fewer status-check moments.',
  },
  {
    number: '03',
    eyebrow: 'MAKE REAL PROGRESS',
    title: 'Celebrate the momentum.',
    description:
      'Turn a busy week into visible wins your whole team can feel good about.',
  },
]

const tasks = [
  { title: 'Review homepage direction', label: 'Design', complete: true },
  { title: 'Share launch checklist', label: 'Planning', complete: true },
  { title: 'Prepare team update', label: 'Team', complete: false },
]

const steps = [
  {
    number: '01',
    title: 'Gather the work',
    description: 'Bring the moving pieces into one shared project space.',
  },
  {
    number: '02',
    title: 'Pick your priorities',
    description: 'Give the week a simple plan everyone understands.',
  },
  {
    number: '03',
    title: 'Keep things moving',
    description: 'Share progress, spot blockers, and celebrate the wins.',
  },
]

function ArrowIcon({ diagonal = false, down = false }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      fill="none"
      viewBox="0 0 20 20"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : down ? (
        <path d="M10 3.5v13m-5-5 5 5 5-5" />
      ) : (
        <path d="M3.5 10h13m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="check-icon" fill="none" viewBox="0 0 16 16">
      <path d="m3.5 8 3 3 6-6" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" className="spark-icon" fill="none" viewBox="0 0 24 24">
      <path d="M12 2.5 14.3 9.7 21.5 12l-7.2 2.3L12 21.5l-2.3-7.2L2.5 12l7.2-2.3L12 2.5Z" />
    </svg>
  )
}

function WorkspacePreview() {
  return (
    <div className="workspace-wrap" aria-hidden="true">
      <div className="workspace-orbit orbit-one" />
      <div className="workspace-orbit orbit-two" />
      <div className="workspace-card">
        <div className="workspace-topbar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span className="workspace-name">dayline / studio</span>
          <span className="workspace-avatar">JM</span>
        </div>

        <div className="workspace-body">
          <aside className="workspace-sidebar">
            <span className="sidebar-heading">WORKSPACE</span>
            <span className="sidebar-link active">
              <span className="sidebar-icon grid-icon" />
              Overview
            </span>
            <span className="sidebar-link">
              <span className="sidebar-icon folder-icon" />
              Projects
            </span>
            <span className="sidebar-link">
              <span className="sidebar-icon calendar-icon" />
              Calendar
            </span>
            <div className="sidebar-bottom">
              <span className="sidebar-heading">YOUR TEAM</span>
              <div className="team-avatars">
                <span>JM</span>
                <span>AL</span>
                <span>SK</span>
                <span>+2</span>
              </div>
            </div>
          </aside>

          <div className="workspace-main">
            <div className="workspace-greeting">
              <div>
                <span className="date-label">MONDAY, OCTOBER 16</span>
                <h2>Good morning, Jamie</h2>
              </div>
              <span className="sun-icon" />
            </div>

            <div className="stats-row">
              <div className="stat-card">
                <span>Active projects</span>
                <strong>04</strong>
                <small>Across your team</small>
              </div>
              <div className="stat-card highlight-stat">
                <span>Tasks completed</span>
                <strong>18</strong>
                <small>+4 this week</small>
              </div>
            </div>

            <div className="task-panel">
              <div className="task-panel-heading">
                <h3>Today&apos;s focus</h3>
                <span>View all <ArrowIcon diagonal /></span>
              </div>
              <div className="task-list">
                {tasks.map((task) => (
                  <div className="task-row" key={task.title}>
                    <span
                      className={`task-check${task.complete ? ' is-done' : ''}`}
                    >
                      {task.complete ? <CheckIcon /> : null}
                    </span>
                    <span className={task.complete ? 'task-done' : ''}>
                      {task.title}
                    </span>
                    <span className="task-tag">{task.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-note">
        <span className="note-check">
          <CheckIcon />
        </span>
        <span>
          <strong>Good momentum</strong>
          <small>Your team is right on track</small>
        </span>
      </div>
      <div className="floating-sticker">
        <span>THIS WEEK</span>
        <strong>One thing<br />at a time.</strong>
        <span className="sticker-spark">
          <SparkIcon />
        </span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="page-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dayline home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>dayline</span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#features">Features</a>
          <a href="#workflow">How it works</a>
          <a href="#about">Our approach</a>
        </nav>

        <a className="header-link" href="#get-started">
          Get started <ArrowIcon diagonal />
        </a>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              A calmer way to work together
            </p>
            <h1>
              Good work
              <br />
              <span>starts in sync.</span>
            </h1>
            <p className="hero-description">
              A clear, friendly space for small teams to plan the week, focus
              on what matters, and make progress together.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#features">
                Explore the workspace <ArrowIcon />
              </a>
              <a className="text-link" href="#workflow">
                See how it works <ArrowIcon down />
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true">
                <span>JM</span>
                <span>AL</span>
                <span>SK</span>
              </div>
              <p>
                <strong>Made for people who make things.</strong>
                <span>Less noise. More meaningful progress.</span>
              </p>
            </div>
          </div>

          <WorkspacePreview />
        </section>

        <section className="intro-strip" aria-label="Dayline highlights">
          <span>ONE SHARED PLAN</span>
          <span className="strip-star"><SparkIcon /></span>
          <span>ROOM TO FOCUS</span>
          <span className="strip-star"><SparkIcon /></span>
          <span>PROGRESS YOU CAN SEE</span>
          <span className="strip-star"><SparkIcon /></span>
          <span>BUILT FOR REAL TEAMS</span>
        </section>

        <section className="features-section section-pad" id="features">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A LITTLE MORE CLARITY</p>
              <h2>
                The basics, <span>done better.</span>
              </h2>
            </div>
            <p>
              Good teamwork doesn&apos;t need more tools. It needs the right
              things, in the right place.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-number">{feature.number}</span>
                  <span className="feature-spark" aria-hidden="true">
                    <SparkIcon />
                  </span>
                </div>
                <p className="feature-eyebrow">{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <a className="feature-link" href="#workflow">
                  See the approach <ArrowIcon diagonal />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow-section section-pad" id="workflow">
          <div className="workflow-heading">
            <p className="eyebrow eyebrow-light">SIMPLE BY DESIGN</p>
            <h2>
              From "what if?" to
              <br />
              <span>"look what we did."</span>
            </h2>
            <p>
              A lighter rhythm for the work you want to be proud of. No
              complicated setup required.
            </p>
          </div>

          <div className="workflow-steps">
            {steps.map((step) => (
              <article className="workflow-step" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section section-pad" id="get-started">
          <div className="closing-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <p className="eyebrow">MAKE SPACE FOR GOOD WORK</p>
          <h2>
            Start with a plan.
            <br />
            <span>Find your flow.</span>
          </h2>
          <a className="button button-dark" href="#top">
            Take another look <ArrowIcon />
          </a>
        </section>
      </main>

      <footer className="site-footer" id="about">
        <a className="brand footer-brand" href="#top" aria-label="Dayline home">
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>dayline</span>
        </a>
        <p>Thoughtful tools for making good things together.</p>
        <a className="back-to-top" href="#top">
          Back to top <ArrowIcon diagonal />
        </a>
        <span className="footer-note">
          Copyright 2026 Dayline Studio
        </span>
      </footer>
    </div>
  )
}

export default App
