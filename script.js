// ==========================================================
// ======================= SPLASH ===========================
// ==========================================================

window.addEventListener('load', () => {

  setTimeout(() => {

    const splash =
      document.getElementById('splash');

    if (splash) {
      splash.classList.add('hide');
    }

  }, 2200);

});


// ==========================================================
// ===================== MOBILE NAV =========================
// ==========================================================

const navToggle =
  document.getElementById('navToggle');

const navLinks =
  document.getElementById('navLinks');


if (navToggle && navLinks) {

  navToggle.addEventListener(
    'click',
    () => {
      navLinks.classList.toggle('open');
    }
  );


  navLinks
    .querySelectorAll('a')
    .forEach(a => {

      a.addEventListener(
        'click',
        () => {
          navLinks.classList.remove('open');
        }
      );

    });

}


// ==========================================================
// ================= ACTIVE NAV ON SCROLL ===================
// ==========================================================

const sections =
  document.querySelectorAll('section[id]');

const navA =
  document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(sec => {

    if (
      window.scrollY >=
      sec.offsetTop - 90
    ) {

      current = sec.id;

    }

  });


  navA.forEach(a => {

    a.classList.toggle(
      'active',
      a.getAttribute('href') === '#' + current
    );

  });

});


// ==========================================================
// ===================== TYPING ROLES =======================
// ==========================================================

const roles = [

  "AI/ML Engineer",
  "Data Analyst",
  "Data Engineer",
  "Python Developer",
  "Data Scientist"

];


const roleEl =
  document.getElementById('role-text');


let ri = 0;
let ci = 0;
let deleting = false;


function tick() {

  if (!roleEl) return;

  const word =
    roles[ri];


  if (!deleting) {

    ci++;

    roleEl.textContent =
      word.slice(0,ci);


    if (
      ci === word.length
    ) {

      deleting = true;

      setTimeout(
        tick,
        1400
      );

      return;

    }

  } else {

    ci--;

    roleEl.textContent =
      word.slice(0,ci);


    if (ci === 0) {

      deleting = false;

      ri =
        (ri + 1) %
        roles.length;

    }

  }


  setTimeout(
    tick,
    deleting ? 45 : 85
  );

}


tick();


// ==========================================================
// ================= REVEAL ON SCROLL =======================
// ==========================================================

const revealElements =
  document.querySelectorAll('.reveal');


if (
  'IntersectionObserver' in window
) {

  const io =
    new IntersectionObserver(

      entries => {

        entries.forEach(e => {

          if (
            e.isIntersecting
          ) {

            e.target.classList.add('in');

            io.unobserve(
              e.target
            );

          }

        });

      },

      {
        threshold: 0.08
      }

    );


  revealElements.forEach(
    el => io.observe(el)
  );

} else {

  revealElements.forEach(
    el => el.classList.add('in')
  );

}


// ==========================================================
// ======================== TABS ============================
// ==========================================================

document
  .querySelectorAll('.tab-btn')
  .forEach(btn => {

    btn.addEventListener(
      'click',
      () => {

        document
          .querySelectorAll('.tab-btn')
          .forEach(b =>
            b.classList.remove('active')
          );


        document
          .querySelectorAll('.tab-panel')
          .forEach(p =>
            p.classList.remove('active')
          );


        btn.classList.add('active');


        const panel =
          document.getElementById(
            'tab-' + btn.dataset.tab
          );


        if (panel) {
          panel.classList.add('active');
        }

      }
    );

  });


// ==========================================================
// ===================== PROJECTS DATA ======================
// ==========================================================

const projects = [

  {
    name:
      "TruthScan – AI-Powered Lie Detection System",

    card:
      "An AI-powered text analysis system using NLP and Machine Learning to analyze statements and predict Truth/Lie probabilities. Includes OCR-based screenshot analysis using Tesseract and an interactive Streamlit dashboard.",

    desc:
      "TruthScan is an AI-powered text analysis application that uses Machine Learning and NLP to analyze statements and predict whether they are likely to be Truth or Lie based on linguistic patterns. It also supports OCR-based screenshot analysis, allowing users to extract and analyze text from chat screenshots.",

    features: [

      "Single Text Analysis – Predicts Truth/Lie probability and confidence score.",

      "Screenshot OCR Analysis – Extracts text from screenshots using Tesseract OCR.",

      "Text Preprocessing – Cleans and normalizes extracted text before prediction.",

      "ML-Based Prediction – Uses Logistic Regression and Random Forest models.",

      "Interactive Dashboard – Modern Streamlit interface with prediction cards.",

      "Probability Analysis – Displays Truth and Lie probabilities for statements."

    ],

    tools: [

      "Python",
      "Streamlit",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Tesseract OCR",
      "OpenCV",
      "NLP",
      "TF-IDF"

    ],

    github:
      "https://github.com/textgithum/truthscan-ai",

    live:
      "https://truthscan-ai-ekk7g9kaotxrakk4dnz7mi.streamlit.app/"

  },


  {
    name:
      "AI-Powered Real-Time PPE Detection System",

    card:
      "Real-time AI-based workplace safety system that detects helmets, safety vests, and masks using YOLO and computer vision for PPE compliance monitoring.",

    desc:
      "An AI-powered workplace safety monitoring system that uses computer vision and deep learning to detect Personal Protective Equipment (PPE) such as helmets, safety vests, and masks from images and video streams. Performs real-time object detection and identifies PPE compliance to support automated workplace safety monitoring.",

    features: [

      "Real-time PPE detection from images and video.",

      "Detection of helmets, safety vests, and masks.",

      "YOLO-based object detection with bounding boxes.",

      "PPE compliance monitoring with automated violation alerts.",

      "Image preprocessing and augmentation.",

      "Support for webcam/CCTV-based monitoring."

    ],

    tools: [

      "Python",
      "YOLO",
      "CNN",
      "OpenCV",
      "TensorFlow",
      "Keras",
      "Matplotlib",
      "Seaborn",
      "Plotly"

    ],

    github:
      "https://github.com/textgithum",

    live:
      null

  },


  {
    name:
      "Bike Trip User Type Prediction App",

    card:
      "Machine Learning web app that predicts whether a bike-sharing user is a Registered Member or Casual Customer using trip-related features and a Random Forest classifier.",

    desc:
      "A Machine Learning-based web application that predicts whether a bike-sharing user is a Registered Member or Casual Customer based on trip details such as duration, time, day, and rush-hour indicators, using a Random Forest Classification model with class weights to handle imbalanced data. Deployed on Streamlit Cloud with dynamic model loading via Google Drive and gdown.",

    features: [

      "Predicts Registered or Casual user type in real time.",

      "Interactive Streamlit interface for entering trip details.",

      "Random Forest classification model with class weights.",

      "Handles imbalanced data effectively.",

      "Dynamic model loading using Google Drive.",

      "Deployed end-to-end on Streamlit Cloud."

    ],

    tools: [

      "Python",
      "Streamlit",
      "Scikit-learn",
      "NumPy",
      "Joblib",
      "gdown",
      "Random Forest"

    ],

    github:
      "https://github.com/textgithum/Bike_Data_Predictor",

    live:
      "https://bikedatapredictor-zk3d4wbpelgq2jltoz6kbi.streamlit.app/"

  },


  {
    name:
      "Indian Agriculture Dashboard",

    card:
      "Interactive Power BI dashboard analyzing India's agriculture sector — crop-wise production, seasonal trends, and state-level insights using DAX and KPIs.",

    desc:
      "An interactive Power BI project developed to analyze India's agriculture sector using historical agricultural data. Explores crop-wise production, seasonal trends, year-wise variations, and state/district-level insights through interactive visualizations using DAX, KPIs, slicers, maps, and drill-downs. Developed as part of the AICTE–Shell Edunet Foundation internship.",

    features: [

      "Interactive Power BI dashboard for agriculture analysis.",

      "Crop-wise and season-wise production analysis.",

      "Year-wise production and area trends.",

      "State and district-level production insights.",

      "Interactive KPIs, slicers, maps, and drill-downs."

    ],

    tools: [

      "Power BI",
      "DAX",
      "Excel",
      "Data Cleaning",
      "Data Visualization"

    ],

    github:
      "https://github.com/textgithum/Indian-Agriculture-Dashboard",

    live:
      null

  },


  {
    name:
      "Jet Image Classification using Deep Learning and Tabular Data Fusion",

    card:
      "CNN-based autoencoder that detects anomalies in high-energy physics jet images by fusing image and tabular data, using reconstruction error analysis.",

    desc:
      "Applies Deep Learning techniques to analyze jet images from high-energy physics experiments, using a CNN-based Autoencoder to learn normal jet patterns and identify unusual or anomalous jets via reconstruction error. Combines 100×100 jet images with tabular physics features for a multimodal approach.",

    features: [

      "CNN-based Autoencoder for anomaly detection.",

      "Processes 100×100 jet image data.",

      "Reconstruction-based anomaly detection using MSE.",

      "Combines image and tabular physics data.",

      "Visualizes anomalous jets and their reconstructions."

    ],

    tools: [

      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn"

    ],

    github:
      "https://github.com/textgithum/JetDataset_IITK",

    live:
      null

  },


  {
    name:
      "Smart Gutter Management System",

    card:
      "IoT-based smart infrastructure system using ESP32 sensors to monitor water level, flow, and drainage blockages in real time, with AI/ML-based predictive analysis.",

    desc:
      "An IoT-based smart infrastructure project designed to monitor water levels, water flow, and potential drainage blockages in real time, using an ESP32 microcontroller with sensors such as HC-SR04 and YF-S201. Sensor readings are transmitted via Wi-Fi and MQTT for remote monitoring, with AI/ML-based predictive analysis for preventive maintenance.",

    features: [

      "Real-time water-level and water-flow monitoring.",

      "Potential drainage blockage detection.",

      "ESP32-based IoT system with Wi-Fi connectivity.",

      "MQTT-based data communication.",

      "AI/ML-based predictive analysis and alerts."

    ],

    tools: [

      "ESP32",
      "MicroPython",
      "Python",
      "IoT",
      "MQTT",
      "AWS IoT",
      "AI/ML"

    ],

    github:
      "https://github.com/textgithum/smart-gutter-management-system",

    live:
      null

  },


  {
    name:
      "Hotel Management System",

    card:
      "Python + Tkinter desktop application for hotel operations — login/registration, customer management, room booking, and MySQL-backed data storage.",

    desc:
      "A Python-based desktop application developed using Tkinter to manage basic hotel operations through a graphical user interface. Provides features for user login, registration, customer management, room booking, and viewing details and reports, with form validation, duplicate user checking, and password recovery.",

    features: [

      "User login and registration system.",

      "Customer details management.",

      "Room booking and management.",

      "MySQL database integration.",

      "Form validation and duplicate user checking."

    ],

    tools: [

      "Python",
      "Tkinter",
      "MySQL",
      "PIL"

    ],

    github:
      "https://github.com/textgithum/Hotel-Management",

    live:
      null

  },


  {
    name:
      "Noha.AI – Voice Assistant",

    card:
      "Python voice assistant that performs Google/YouTube/Wikipedia searches, WhatsApp messaging, music playback, and app/browser automation via voice commands.",

    desc:
      "A Python-based voice assistant designed to perform various computer and web automation tasks using voice commands. Uses Speech Recognition to understand commands and pyttsx3 for text-to-speech responses, with automation features for YouTube and Chrome including play, pause, mute, tab control, and navigation.",

    features: [

      "Voice-based command recognition.",

      "Text-to-speech responses.",

      "Google, YouTube, and Wikipedia search.",

      "WhatsApp messaging and music playback.",

      "Application and browser automation.",

      "Screenshot and time-related commands."

    ],

    tools: [

      "Python",
      "SpeechRecognition",
      "pyttsx3",
      "PyWhatKit",
      "Wikipedia API",
      "PyAutoGUI"

    ],

    github:
      "https://github.com/textgithum/Noha.AI",

    live:
      null

  }

];


// ==========================================================
// ===================== PROJECT CARDS ======================
// ==========================================================

const grid =
  document.getElementById(
    'projectsGrid'
  );


if (grid) {

  projects.forEach(
    (p,idx) => {

      const card =
        document.createElement('div');


      card.className =
        'proj-card';


      card.innerHTML = `

        <h4>
          ${p.name}
        </h4>

        <p>
          ${p.card}
        </p>

        <div class="tag-row2">

          ${p.tools
            .slice(0,4)
            .map(
              t =>
                `<span class="tag">${t}</span>`
            )
            .join('')}

        </div>

        <div class="proj-links">

          ${
            p.live
              ? `
                <a
                  class="proj-link"
                  href="${p.live}"
                  target="_blank"
                  rel="noopener"
                >
                  Live Demo →
                </a>
              `
              : ''
          }

          <a
            class="proj-link"
            href="${p.github}"
            target="_blank"
            rel="noopener"
          >
            GitHub →
          </a>

          <span
            class="proj-link details"
            data-idx="${idx}"
          >
            Details
          </span>

        </div>

      `;


      grid.appendChild(card);

    }
  );

}


// ==========================================================
// =================== PROJECT MODAL ========================
// ==========================================================

const overlay =
  document.getElementById(
    'modalOverlay'
  );


if (grid && overlay) {

  grid.addEventListener(
    'click',
    e => {

      if (
        e.target.classList.contains(
          'details'
        )
      ) {

        const p =
          projects[
            e.target.dataset.idx
          ];


        if (!p) return;


        document
          .getElementById('modalTitle')
          .textContent =
          p.name;


        document
          .getElementById('modalDesc')
          .textContent =
          p.desc;


        document
          .getElementById('modalFeatures')
          .innerHTML =
          p.features
            .map(
              f => `<li>${f}</li>`
            )
            .join('');


        document
          .getElementById('modalTools')
          .innerHTML =
          p.tools
            .map(
              t =>
                `<span class="tag">${t}</span>`
            )
            .join('');


        document
          .getElementById('modalLinks')
          .innerHTML = `

            ${
              p.live
                ? `
                  <a
                    class="proj-link"
                    href="${p.live}"
                    target="_blank"
                    rel="noopener"
                  >
                    Live Demo →
                  </a>
                `
                : ''
            }

            <a
              class="proj-link"
              href="${p.github}"
              target="_blank"
              rel="noopener"
            >
              GitHub →
            </a>

          `;


        overlay.classList.add(
          'open'
        );

      }

    }
  );

}


const modalClose =
  document.getElementById(
    'modalClose'
  );


if (
  modalClose &&
  overlay
) {

  modalClose.addEventListener(
    'click',
    () => {
      overlay.classList.remove(
        'open'
      );
    }
  );


  overlay.addEventListener(
    'click',
    e => {

      if (
        e.target === overlay
      ) {

        overlay.classList.remove(
          'open'
        );

      }

    }
  );

}


// ==========================================================
// ===================== CERTIFICATES =======================
// ==========================================================

const certificates = [

  {
    file: "DS.png",
    title: "Data Science",
    sub: "Certificate"
  },


  {
    file: "Gen_AI.jpg",
    title: "Generative AI",
    sub: "Certificate"
  },

  {
    file: "SAP.png",
    title: "SAP",
    sub: "Certificate"
  },

  {
    file: "Udemy_certificate.jpg",
    title: "Udemy Course",
    sub: "Certificate of Completion"
  },

  {
    file: "web_certificate.jpg",
    title: "Web Development",
    sub: "Certificate"
  },

  {
    file: "DA.jpeg",
    title: "Data Analytics",
    sub: "FutureSkills Prime · NASSCOM · 04-03-2026"
  },

  {
    file: "DV-1.png",
    title: "Data Visualization",
    sub: "Anudip Foundation"
  },

  {
    file: "internship.png",
    title: "Internship Certificate",
    sub: "Internship"
  }

];


const certGrid =
  document.getElementById(
    'certGrid'
  );


const lightbox =
  document.getElementById(
    'lightbox'
  );


const lightboxImg =
  document.getElementById(
    'lightboxImg'
  );


const lightboxCap =
  document.getElementById(
    'lightboxCap'
  );


function openLightbox(c) {

  if (
    !lightbox ||
    !lightboxImg ||
    !lightboxCap
  ) {
    return;
  }


  lightboxImg.src =
    c.file;


  lightboxImg.alt =
    c.title +
    ' certificate';


  lightboxCap.textContent =
    c.title +
    (
      c.sub
        ? ' — ' + c.sub
        : ''
    );


  lightbox.classList.add(
    'open'
  );

}


function closeLightbox() {

  if (
    !lightbox ||
    !lightboxImg
  ) {
    return;
  }


  lightbox.classList.remove(
    'open'
  );


  lightboxImg.src =
    '';

}


if (certGrid) {

  certificates.forEach(
    c => {

      const btn =
        document.createElement(
          'button'
        );


      btn.type =
        'button';


      btn.className =
        'cert-card';


      btn.setAttribute(
        'aria-label',
        'View certificate: ' +
        c.title
      );


      const img =
        document.createElement(
          'img'
        );


      img.className =
        'cert-thumb';


      img.src =
        c.file;


      img.alt =
        c.title +
        ' certificate';


      img.loading =
        'lazy';


      img.onerror =
        () => {

          const miss =
            document.createElement(
              'div'
            );


          miss.className =
            'cert-missing';


          miss.textContent =
            'Image not found: ' +
            c.file;


          img.replaceWith(
            miss
          );


          btn.dataset.missing =
            '1';

        };


      const name =
        document.createElement(
          'div'
        );


      name.className =
        'cert-name';


      name.textContent =
        c.title;


      const sub =
        document.createElement(
          'div'
        );


      sub.className =
        'cert-sub';


      sub.textContent =
        c.sub;


      btn.append(
        img,
        name,
        sub
      );


      btn.addEventListener(
        'click',
        () => {

          if (
            !btn.dataset.missing
          ) {

            openLightbox(c);

          }

        }
      );


      certGrid.appendChild(
        btn
      );

    }
  );

}


const lightboxClose =
  document.getElementById(
    'lightboxClose'
  );


if (lightboxClose) {

  lightboxClose.addEventListener(
    'click',
    closeLightbox
  );

}


if (lightbox) {

  lightbox.addEventListener(
    'click',
    e => {

      if (
        e.target === lightbox
      ) {

        closeLightbox();

      }

    }
  );

}


// ==========================================================
// ======================= ESC KEY ==========================
// ==========================================================

document.addEventListener(
  'keydown',
  e => {

    if (
      e.key === 'Escape'
    ) {

      closeLightbox();


      if (overlay) {

        overlay.classList.remove(
          'open'
        );

      }

    }

  }
);


// ==========================================================
// ====================== WEB3FORMS =========================
// ==========================================================

const contactForm =
  document.getElementById(
    'contactForm'
  );


const sendBtn =
  document.getElementById(
    'cf-btn'
  );


const statusEl =
  document.getElementById(
    'formStatus'
  );


const WEB3FORMS_ACCESS_KEY =
  'cb0db6a7-bb51-436b-8502-571e653941c0';


function setStatus(
  message,
  type = ''
) {

  if (!statusEl) {
    return;
  }


  statusEl.className =
    'form-status ' +
    type;


  statusEl.textContent =
    message;

}


if (contactForm) {

  contactForm.addEventListener(
    'submit',
    async e => {

      e.preventDefault();


      const nameEl =
        document.getElementById(
          'cf-name'
        );


      const emailEl =
        document.getElementById(
          'cf-email'
        );


      const msgEl =
        document.getElementById(
          'cf-msg'
        );


      if (
        !nameEl ||
        !emailEl ||
        !msgEl ||
        !sendBtn
      ) {

        console.error(
          'Contact form elements are missing.'
        );

        return;

      }


      const name =
        nameEl.value.trim();


      const email =
        emailEl.value.trim();


      const message =
        msgEl.value.trim();


      [
        nameEl,
        emailEl,
        msgEl
      ].forEach(
        el =>
          el.classList.remove(
            'invalid'
          )
      );


      // NAME

      if (!name) {

        nameEl.classList.add(
          'invalid'
        );


        setStatus(
          'Please enter your name.',
          'err'
        );


        nameEl.focus();


        return;

      }


      // EMAIL

      if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/
          .test(email)
      ) {

        emailEl.classList.add(
          'invalid'
        );


        setStatus(
          'Please enter a valid email address.',
          'err'
        );


        emailEl.focus();


        return;

      }


      // MESSAGE

      if (!message) {

        msgEl.classList.add(
          'invalid'
        );


        setStatus(
          'Please write a message.',
          'err'
        );


        msgEl.focus();


        return;

      }


      // SENDING

      sendBtn.disabled =
        true;


      sendBtn.textContent =
        'Sending...';


      setStatus(
        '',
        ''
      );


      try {

        const response =
          await fetch(
            'https://api.web3forms.com/submit',
            {

              method:
                'POST',

              headers: {

                'Content-Type':
                  'application/json',

                'Accept':
                  'application/json'

              },

              body:
                JSON.stringify({

                  access_key:
                    'cb0db6a7-bb51-436b-8502-571e653941c0',

                  subject:
                    'Portfolio inquiry from ' +
                    name,

                  name:
                    name,

                  email:
                    email,

                  message:
                    message

                })

            }
          );


        const data =
          await response.json();


        console.log(
          'Web3Forms response:',
          data
        );


        if (
          response.ok &&
          data.success
        ) {

          contactForm.reset();


          setStatus(
            'Message sent successfully! I will get back to you soon.',
            'ok'
          );

        } else {

          setStatus(
            data.message ||
            'Could not send your message. Please try again.',
            'err'
          );


          console.error(
            'Web3Forms error:',
            data
          );

        }


      } catch (error) {

        console.error(
          'Web3Forms network error:',
          error
        );


        setStatus(
          'Network error. Please try again.',
          'err'
        );


      } finally {

        sendBtn.disabled =
          false;


        sendBtn.textContent =
          'Send message';

      }

    }
  );

}


// ==========================================================
// ====================== FOOTER YEAR =======================
// ==========================================================

const yearEl =
  document.getElementById(
    'year'
  );


if (yearEl) {

  yearEl.textContent =
    new Date().getFullYear();

}