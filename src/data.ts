// Central course data — edit here to update the whole site.

export const COURSE = {
  code: "BIOL 2402",
  section: "1505",
  title: "Human Anatomy & Physiology II",
  term: "Summer 2026",
  session: "6W2",
  creditHours: 4,
  college: "Lone Star College – North Harris",
  startDate: "Thursday, July 16, 2026",
  endDate: "August 23, 2026",
  weeks: 6,
  odr: "July 20, 2026",
  withdrawal: "August 11, 2026",
  finalExam: "August 21, 2026",
};

export const INSTRUCTOR = {
  name: "Dr. Victor Garcia Martinez",
  email: "Victor.H.GarciaMartinez@lonestar.edu",
  office: "WNSP-210G · LSC-North Harris",
  hours: "Zoom by email appointment",
};

export const LINKS = {
  zoom: "https://us02web.zoom.us/j/87378838613",
  d2l: "https://d2l.lonestar.edu",
  starBundle: "https://LoneStar.edu/starbundle",
  policies: "https://www.lonestar.edu/syllabus-policies",
  otsPhone: "832-813-6600",
};

export const KICKOFF = {
  dayLabel: "Thursday · July 16",
  time: "10:00 AM",
  tz: "CST",
  required: false,
  note: "Not required — but highly recommended. It's day one of the course.",
};

// Headline metrics for the "at a glance" strip.
export const METRICS = [
  { value: 6, suffix: "wk", label: "Fast-track session" },
  { value: 4, suffix: "", label: "Credit hours" },
  { value: 1000, suffix: "pt", label: "Total points" },
  { value: 12, suffix: "ch", label: "Chapters covered" },
];

// What lives in D2L — adapted from the course announcement + syllabus.
export const MATERIALS = [
  {
    emoji: "🧪",
    tag: "MANDATORY",
    tone: "pulse",
    title: "Digital Lab Manual (Top Hat)",
    body: "Your required lab manual is bundled in the STAR Bundle. Find it under D2L → Course Materials. Issues? Read the D2L announcement instructions first.",
  },
  {
    emoji: "🤖",
    tag: "GRADED",
    tone: "cyan",
    title: "Notebook LM Activities",
    body: "Learn to use this AI tool to study & research any topic. 5 activities, 10% of your grade. All instructions live in D2L → Content.",
  },
  {
    emoji: "🔒",
    tag: "SET UP EARLY",
    tone: "cyan",
    title: "LockDown Browser + Respondus",
    body: "All exams are proctored. A second camera (your phone) is mandatory. Setup guide is under D2L → Content. Do this before Exam 1.",
  },
  {
    emoji: "📦",
    tag: "AUTO-ENROLLED",
    tone: "gold",
    title: "STAR Bundle",
    body: "All required materials are ready by day one, billed to your student account. You can opt out — but then you buy everything yourself.",
  },
  {
    emoji: "📖",
    tag: "RECOMMENDED",
    tone: "cyan",
    title: "Hole's Anatomy & Physiology",
    body: "McGraw Hill, Evergreen release. Highly recommended (not mandatory). Connect access is optional.",
  },
  {
    emoji: "💻",
    tag: "REQUIRED GEAR",
    tone: "pulse",
    title: "Laptop + Webcam",
    body: "Working laptop/desktop with webcam + internet. Chromebooks & iPads can't take exams. Google Chrome works best with D2L.",
  },
];

// Grade breakdown.
export const GRADING = [
  { label: "Lecture Exams", detail: "5 × 100 pts", pct: 50 },
  { label: "Lab Practicals", detail: "3 × 70 pts", pct: 21 },
  { label: "Final Exam", detail: "Comprehensive · Ch 1–12", pct: 10 },
  { label: "Notebook LM", detail: "5 × 20 pts", pct: 10 },
  { label: "Lab Manual Units", detail: "3 × 30 pts", pct: 9 },
];

// Six-week roadmap (key beats only).
export const ROADMAP = [
  {
    week: "Week 1",
    dates: "Jul 16–17",
    focus: "Kickoff + Heart",
    detail: "Course intro, Chapter 15 (Heart), lab safety & heart dissection.",
  },
  {
    week: "Week 2",
    dates: "Jul 20–24",
    focus: "Vessels · Endocrine · Blood",
    detail: "Ch 13–16. Lecture Exam 1 on Jul 23 (Ch 12, 14, 15).",
  },
  {
    week: "Week 3",
    dates: "Jul 27–31",
    focus: "Immunity · Respiration · Renal",
    detail: "Ch 16, 19, 20. Lab Practical 1 (Jul 27). Lecture Exam 2 (Jul 31).",
  },
  {
    week: "Week 4",
    dates: "Aug 3–7",
    focus: "Fluid Balance · Digestive",
    detail: "Ch 17, 21. Lecture Exam 3 (Aug 5). Lab Practical 2 (Aug 7).",
  },
  {
    week: "Week 5",
    dates: "Aug 10–14",
    focus: "Nutrition · Reproductive · Embryology",
    detail: "Ch 18, 22, 23. Lecture Exam 4 (Aug 11).",
  },
  {
    week: "Week 6",
    dates: "Aug 17–21",
    focus: "Genetics + Finals",
    detail: "Ch 24. Lab Practical 3 (Aug 17). Lecture Exam 5 (Aug 19). Final Exam (Aug 21).",
  },
];

// Ticker strip words.
export const TICKER = [
  "Starts July 16",
  "Endocrine",
  "Circulatory",
  "Immune",
  "Respiratory",
  "Digestive",
  "Reproductive",
  "Urinary",
  "Homeostasis",
  "Finish strong",
];
