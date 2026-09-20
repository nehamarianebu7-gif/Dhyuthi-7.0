import { useState, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [activeTrack, setActiveTrack] = useState(null)
  const detailsRef = useRef(null)
  const [activeDay, setActiveDay] = useState(1)
  const [menuOpen, setMenuOpen] = useState(false)
  const tracks = {
    nexus: {
      number: '01',
      name: 'NEXUS',
      type: 'ROBOTICS',
      title: 'Robotics & Intelligent Systems',
      description:
        'Explore robotics, automation and intelligent machines through hands-on technical experiences designed around real-world engineering.',
      workshop: 'Robotics Workshop',
      competition: 'Robotics Challenge',
      cardDescription: 'Explore intelligent machines, automation and the systems connecting hardware with the world around us.',
    },

    synapse: {
      number: '02',
      name: 'SYNAPSE',
      type: 'AI + WEB',
      title: 'Artificial Intelligence & Web',
      description:
        'Explore artificial intelligence and modern web technologies while discovering how intelligent digital systems are designed and built.',
      workshop: 'AI / Web Workshop',
      competition: 'Digital Innovation Challenge',
      cardDescription: "Discover artificial intelligence, emerging web technologies and the ideas shaping tomorrow's digital experiences.",
    },

    helix: {
      number: '03',
      name: 'HELIX',
      type: 'BIOTECHNOLOGY',
      title: 'Biotechnology & Bio-Innovation',
      description:
        'Discover the intersection of biology, engineering and technology through emerging ideas and practical applications in biotechnology.',
      workshop: 'Biotechnology Workshop',
      competition: 'Bio-Innovation Challenge',
      cardDescription: 'Step into the intersection of biology, engineering and technology through emerging bio-innovation.',
    },

    forge: {
      number: '04',
      name: 'FORGE',
      type: 'MECHANICAL',
      title: 'Mechanical Engineering',
      description:
        'Explore engineering design, mechanical systems and future manufacturing through practical problem-solving and innovation.',
      workshop: 'Mechanical Workshop',
      competition: 'Engineering Design Challenge',
      cardDescription: 'Explore engineering, design and future manufacturing through mechanical innovation.',
    },
  }

  const navLinks = [
    ['#home', 'HOME'],
    ['#events', 'EVENTS'],
    ['#schedule', 'SCHEDULE'],
    ['#about', 'ABOUT'],
    ['#contact', 'CONTACT'],
  ]

  const schedule = {
  1: {
    date: 'OCT 16',
    title: 'DAY 1',
    events: [
      {
        time: '09:00 AM',
        title: 'Registration & Check-in',
        type: 'WELCOME',
        description: 'Participant check-in and registration.',
      },
      {
        time: '10:00 AM',
        title: 'Inaugural Ceremony',
        type: 'OPENING',
        description: 'The official opening of Dhyuthi 7.0.',
      },
      {
        time: '11:00 AM',
        title: 'Opening Track Sessions',
        type: 'TRACKS',
        description: 'Introduction to Nexus, Synapse, Helix and Forge.',
      },
      {
        time: '01:00 PM',
        title: 'Lunch Break',
        type: 'BREAK',
        description: 'Lunch and networking.',
      },
      {
        time: '02:00 PM',
        title: 'Technical Workshops',
        type: 'WORKSHOP',
        description: 'Hands-on technical sessions across the four tracks.',
      },
      {
        time: '04:30 PM',
        title: 'Interactive Activities',
        type: 'ACTIVITY',
        description: 'Collaborative activities and technical experiences.',
      },
      {
        time: '05:30 PM',
        title: 'Day 01 Wrap-up',
        type: 'CLOSING',
        description: 'Closing notes and announcements for Day 02.',
      },
    ],
  },

  2: {
    date: 'OCT 17',
    title: 'DAY 2',
    events: [
      {
        time: '09:00 AM',
        title: 'Orientation',
        type: 'SESSION',
        description: 'Orientation and overview of the day ahead.',
      },
      {
        time: '10:00 AM',
        title: 'Track Workshops',
        type: 'WORKSHOP',
        description: 'Technical workshops across the four Dhyuthi tracks.',
      },
      {
        time: '01:00 PM',
        title: 'Lunch Break',
        type: 'BREAK',
        description: 'Lunch and networking.',
      },
      {
        time: '02:00 PM',
        title: 'Workshop Continuation',
        type: 'WORKSHOP',
        description: 'Continuation of hands-on track activities.',
      },
      {
        time: '04:00 PM',
        title: 'Influencer Talk',
        type: 'TALK',
        description: 'An interactive session featuring a guest influencer.',
      },
      {
        time: '06:00 PM',
        title: 'Cultural Activities',
        type: 'CULTURAL',
        description: 'An evening of performances and cultural experiences.',
      },
      {
        time: '08:00 PM',
        title: 'Dinner',
        type: 'DINNER',
        description: 'Dinner and informal networking.',
      },
    ],
  },

  3: {
    date: 'OCT 18',
    title: 'DAY 3',
    events: [
      {
        time: '09:00 AM',
        title: 'Workshops & Competitions',
        type: 'COMPETITION',
        description: 'Technical workshops and competitions begin.',
      },
      {
        time: '11:30 AM',
        title: 'Track Challenges',
        type: 'CHALLENGE',
        description: 'Participants put their skills to the test.',
      },
      {
        time: '01:00 PM',
        title: 'Lunch Break',
        type: 'BREAK',
        description: 'Lunch and networking.',
      },
      {
        time: '02:00 PM',
        title: 'Games & Interactive Events',
        type: 'GAMES',
        description: 'Games and activities for participants.',
      },
      {
        time: '04:00 PM',
        title: 'Competition Finals',
        type: 'FINALS',
        description: 'Final rounds of the Dhyuthi competitions.',
      },
      {
        time: '06:00 PM',
        title: 'Dinner',
        type: 'DINNER',
        description: 'Final dinner of Dhyuthi 7.0.',
      },
      {
        time: '07:00 PM',
        title: 'Prize Distribution',
        type: 'AWARDS',
        description: 'Recognition and prizes for competition winners.',
      },
      {
        time: '07:30 PM',
        title: 'Closing Ceremony',
        type: 'CLOSING',
        description: 'The official conclusion of Dhyuthi 7.0.',
      },
    ],
  },
}
    useEffect(() => {
    if (activeTrack && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 100)
    }
  }, [activeTrack])

  return (
    <main className="site">
      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>

        <nav className="navbar">
        <div className="brand">

  <img
    src="/logos/dhyuthi-logo.png"
    alt="Dhyuthi 7.0"
    className="dhyuthi-logo"
  />

  <div className="brand-text">
    <span className="brand-name">DHYUTHI 7.0</span>
    <span className="brand-subtitle">IEEE SCT SB</span>
  </div>

</div>
          <div className={`nav-links ${menuOpen ? 'menu-open' : ''}`}>
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}

            <a
              href="#register"
              className="mobile-register"
              onClick={() => setMenuOpen(false)}
            >
              REGISTER
            </a>

            <div className="mobile-organizer-logos">
              <img src="/logos/ieee-white.png" alt="IEEE" />
              <span></span>
              <img src="/logos/ieee-sct-sb.png" alt="IEEE SCT SB" />
            </div>
          </div>

<div className="organizer-logos">

  <img
    src="/logos/ieee-white.png"
    alt="IEEE"
    className="ieee-logo"
  />

  <span className="logo-divider"></span>

  <img
    src="/logos/ieee-sct-sb.png"
    alt="IEEE SCT SB"
    className="sct-logo"
  />

</div>
<button
  className={`menu-toggle ${menuOpen ? 'menu-active' : ''}`}
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation"
>
  <span></span>
  <span></span>
  <span></span>
</button>
          <a href="#register" className="register-button">
            REGISTER <span>→</span>
          </a>
        </nav>

        <div className="side-message side-left">
          <span>A</span>
          <span>BRIGHTER</span>
          <span>TOMORROW</span>
          <span>TOGETHER</span>
          <i></i>
        </div>

        <div className="side-message side-right">
          <span>IDEAS</span>
          <span>PEOPLE</span>
          <span>TECHNOLOGY</span>
          <span>BEYOND</span>
          <i></i>
        </div>

        <div className="hero-content" id="home">
          <p className="eyebrow">IEEE SCT SB PRESENTS</p>

          <h1>
            DHYUTHI
            <span>7.0</span>
          </h1>

          <p className="hero-tagline">
            IDEAS <b>•</b> INNOVATION <b>•</b> A BRIGHTER TOMORROW
          </p>

          <a href="#events" className="explore-button">
            EXPLORE EVENTS
            <span>↓</span>
          </a>
        </div>

        <div className="hero-date">
          <span className="hero-event-date">16 — 18 OCT 2026</span>
          <i></i>
          <span className="hero-college">
          SREE CHITRA THIRUNAL COLLEGE OF ENGINEERING
          </span>
        </div>

        <div className="scroll-indicator">
          <span>SCROLL</span>
          <div className="mouse">
            <div></div>
          </div>
        </div>
      </section>
<section className="grid-world">

        <div className="stats-panel">

          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">DAYS</span>
          </div>

          <div className="stat">
            <span className="stat-number">4</span>
            <span className="stat-label">TRACKS</span>
          </div>

          <div className="stat">
            <span className="stat-number">∞</span>
            <span className="stat-label">POSSIBILITIES</span>
          </div>

        </div>

        <section className="tracks-section" id="events">

          <div className="section-heading">

            <div>
              <span className="section-kicker">EXPLORE</span>
              <h2>THE TRACKS</h2>
            </div>

            <p>
              Four domains. Three days. One space to
              learn, build and explore what comes next.
            </p>

          </div>

          <div className="tracks-grid">
            {Object.entries(tracks).map(([key, track]) => (
              <article className="track-card" key={key}>
                <span className="track-number">{track.number}</span>

                <div className="track-info">
                  <span className="track-type">{track.type}</span>
                  <h3>{track.name}</h3>
                  <p>{track.cardDescription}</p>

                  <button onClick={() => setActiveTrack(key)}>
                    EXPLORE TRACK <span>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
              {activeTrack && (
  <div
    className="track-details"
    ref={detailsRef}>

              <div className="details-top">

                <div className="details-identity">
                  <span className="details-number">
                    {tracks[activeTrack].number}
                  </span>

                  <div>
                    <span className="details-type">
                      {tracks[activeTrack].type}
                    </span>

                    <h3>
                      {tracks[activeTrack].name}
                    </h3>
                  </div>
                </div>

                <button
                  className="close-details"
                  onClick={() => setActiveTrack(null)}
                >
                  CLOSE ×
                </button>

              </div>

              <div className="details-content">

                <div className="details-description">

                  <span className="details-label">
                    ABOUT THE TRACK
                  </span>

                  <h4>
                    {tracks[activeTrack].title}
                  </h4>

                  <p>
                    {tracks[activeTrack].description}
                  </p>

                </div>

                <div className="track-activities">

                  <div className="activity">
                    <span className="activity-number">
                      01
                    </span>

                    <span className="activity-type">
                      WORKSHOP
                    </span>

                    <h5>
                      {tracks[activeTrack].workshop}
                    </h5>

                    <p>
                      Hands-on learning session with
                      practical demonstrations and guided
                      activities.
                    </p>

                    <span className="coming-soon">
                      DETAILS COMING SOON
                    </span>
                  </div>

                  <div className="activity">
                    <span className="activity-number">
                      02
                    </span>

                    <span className="activity-type">
                      COMPETITION
                    </span>

                    <h5>
                      {tracks[activeTrack].competition}
                    </h5>

                    <p>
                      Put your ideas and skills to the test
                      through an engaging technical
                      challenge.
                    </p>

                    <span className="coming-soon">
                      DETAILS COMING SOON
                    </span>
                  </div>

                </div>

              </div>

            </div>
          )}

        </section>
<section className="schedule-section" id="schedule">

          <div className="schedule-heading">

            <div>
              <span className="section-kicker">THREE DAYS OF DHYUTHI</span>
              <h2>THE SCHEDULE</h2>
            </div>

            <p>
              From workshops and competitions to talks,
              culturals and collaborative experiences.
            </p>

          </div>
<div className="day-selector">

            {[1, 2, 3].map((day) => (
              <button
                key={day}
                className={`day-button ${
                  activeDay === day ? 'active-day' : ''
                }`}
                onClick={() => setActiveDay(day)}
              >
                <span>{schedule[day].title}</span>
                <strong>{schedule[day].date}</strong>
              </button>
            ))}

          </div>
<div className="timeline">

            {schedule[activeDay].events.map((event, index) => (

              <div className="timeline-event" key={index}>

                <div className="event-time">
                  {event.time}
                </div>

                <div className="timeline-marker">
                  <span></span>
                </div>

                <div className="schedule-event-content">

                  <span className="schedule-event-type">
                    {event.type}
                  </span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                </div>

              </div>

            ))}

          </div>

        </section>
<section className="about-section" id="about">

          <div className="about-heading">
            <span className="section-kicker">ABOUT / 7.0</span>
            <h2>WHAT IS DHYUTHI?</h2>
          </div>

          <div className="about-layout">
<div className="about-copy">

              <span className="about-index">01 / THE EXPERIENCE</span>

              <p className="about-lead">
                Dhyuthi 7.0 is the flagship event of
                IEEE SCT SB — a three-day experience built
                around technology, creativity and collaboration.
              </p>

              <p className="about-description">
                Bringing together four forward-looking tracks,
                Dhyuthi creates a space where participants can
                explore emerging technologies through technical
                workshops, competitions, talks and interactive
                experiences.
              </p>

              <p className="about-description">
                From intelligent systems and digital innovation
                to biotechnology and mechanical engineering,
                each track encourages participants to learn,
                experiment and transform ideas into meaningful
                experiences.
              </p>

            </div>
<div className="about-seven">

  <div className="seven-frame">
    <span className="seven-number">7.0</span>

    <span className="seven-label">
      DHYUTHI
    </span>

    <span className="seven-year">
      2026
    </span>
  </div>

  <div className="seven-coordinates">
    <span>07 / 00</span>
    <i></i>
    <span>IEEE SCT SB</span>
  </div>

</div>
<div className="about-facts">

              <div className="about-fact">
                <span className="fact-number">3</span>
                <div>
                  <strong>DAYS</strong>
                  <span>OCT 16 — 18</span>
                </div>
              </div>

              <div className="about-fact">
                <span className="fact-number">4</span>
                <div>
                  <strong>TRACKS</strong>
                  <span>ONE EXPERIENCE</span>
                </div>
              </div>

              <div className="about-fact">
                <span className="fact-number fact-ieee">IEEE</span>
                <div>
                  <strong>SCT SB</strong>
                  <span>STUDENT BRANCH</span>
                </div>
              </div>

              <div className="about-fact">
                <span className="fact-number">7.0</span>
                <div>
                  <strong>DHYUTHI</strong>
                  <span>2026</span>
                </div>
              </div>

            </div>

          </div>

          <div className="about-statement">

            <span>FROM A SPARK</span>

            <div className="statement-line">
              <i></i>
              <img
  src="/logos/dhyuthi-logo.png"
  alt="Dhyuthi logo"
  className="statement-logo"
/>
              <i></i>
            </div>

            <span>INTO SOMETHING MORE</span>

          </div>

        </section>
<section className="contact-section" id="contact">

  <div className="contact-heading">

    <div>
      <span className="section-kicker">CONTACT / VENUE</span>
      <h2>FIND US</h2>
    </div>

    <p>
      Everything you need to find Dhyuthi 7.0
      and get in touch with the team.
    </p>

  </div>

  <div className="contact-layout">
<div className="map-container">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.1118851564481!2d76.97857658187175!3d8.470231553187036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05baee56e6b99b%3A0x4ce024c88eb0ddcb!2sSree%20Chitra%20Thirunal%20College%20of%20Engineering%2C%20Thiruvananthapuram!5e0!3m2!1sen!2sin!4v1711636446051!5m2!1sen!2sin"
        title="Sree Chitra Thirunal College of Engineering location"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="map-corner map-corner-one"></div>
      <div className="map-corner map-corner-two"></div>

    </div>
<div className="contact-information">

      <div className="contact-block">

        <span className="contact-number">01</span>

        <div>
          <span className="contact-label">VENUE</span>

          <h3>
            Sree Chitra Thirunal
            <br />
            College of Engineering
          </h3>
        </div>

      </div>

      <div className="contact-block">

        <span className="contact-number">02</span>

        <div>
          <span className="contact-label">ADDRESS</span>

          <strong><p>
            NH 66, CTO Colony, Pappanamcode,
            <br />
            Thiruvananthapuram, Kerala 695018
          </p></strong>

        </div>

      </div>

      <div className="contact-block">

        <span className="contact-number">03</span>

        <div>
          <span className="contact-label">EMAIL</span>

          <a href="mailto:ieeesctsb@gmail.com">
            ieeesctsb@gmail.com
            <span>↗</span>
          </a>
        </div>

      </div>

      <div className="contact-block contact-people">

        <span className="contact-number">04</span>

        <div>
          <span className="contact-label">CONTACT</span>

          <div className="contact-person">

            <h4>Neha Maria Nebu</h4>

            <a href="tel:+919633900109">
              +91 96339 00109
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
<section className="registration-section" id="register">

          <div className="registration-glow"></div>

          <div className="registration-content">

            <span className="registration-kicker">
              REGISTRATION / 2026
            </span>

            <h2>
              READY TO BUILD
              <span>WHAT COMES NEXT?</span>
            </h2>

            <p>
              Three days. Four tracks. One space to explore,
              create and connect.
            </p>

            <div className="registration-meta">

              <div>
                <strong><span>EVENT</span></strong>
                <strong>DHYUTHI 7.0</strong>
              </div>

              <i></i>

              <div>
                <strong><span>DATE</span></strong>
                <strong>16 — 18 OCT 2026</strong>
              </div>

              <i></i>

              <div>
                <strong><span>VENUE</span></strong>
                <strong>SCT COLLEGE OF ENGINEERING</strong>
              </div>

            </div>

            <button className="final-register-button">
                <span>REGISTER NOW</span>
                <b>→</b>
                </button>
            <span className="registration-note">
              REGISTRATION DETAILS COMING SOON
            </span>

          </div>
<div className="final-horizon">

            <div className="horizon-light"></div>

            <div className="horizon-grid"></div>

          </div>

        </section>
        </section>
<footer className="footer">

          <div className="footer-brand">

            <span className="footer-mark">✦</span>

            <div>
              <strong>DHYUTHI 7.0</strong>
              <span>IEEE SCT SB</span>
            </div>

          </div>

          <div className="footer-center">
            <span className="footer-date">16 — 18 OCT 2026</span>
            <i></i>
            <span>THIRUVANANTHAPURAM</span>
          </div>

          <div className="footer-links">

            <a href="#home">HOME</a>
            <a href="#events">EVENTS</a>
            <a href="#schedule">SCHEDULE</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
          </div>

        </footer>

    </main>
  )
}

export default App
