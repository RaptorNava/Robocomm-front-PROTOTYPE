import type { Dictionary } from "./ru";

const en: Dictionary = {
  nav: {
    opening: "Opening",
    network: "Network",
    projects: "Projects",
    about: "The club",
    team: "Team",
    menu: "Menu",
    close: "Close",
  },
  switcher: {
    label: "City and language",
    city: "City",
    language: "Language",
  },
  city: {
    bishkek: { name: "Bishkek", genitive: "Bishkek" },
  },
  hero: {
    eyebrow: "For students. By students.",
    title: "RoboComm — a student robotics club of four colleges in {{city}}",
    lead: "Free. No experience needed. Founded by students for students — with a mentor's support.",
    cta: "Register for the opening",
    secondary: "How the club works",
  },
  banner: {
    date: "27.11",
    text: "Opening — 27 November, 16:00, Salymbekov University. 40 students raise the electronic flag of Kyrgyzstan.",
    reg: "Registration:",
    form: "[form link]",
  },
  opening: {
    index: "02",
    kicker: "Opening 27 November",
    title: "40 rays — one flag",
    diagram: "RoboComm / contour diagram",
    rays: "rays / participants",
    p1: "On 27 November, 40 students from four colleges each solder one LED onto a circular sun contour. The result is the electronic flag of Kyrgyzstan: 40 rays — 40 tribes from the Manas epic, joined into one people.",
    p2: "At the finale, college representatives turn four keys at the same time. The flag lights up only when every key is turned. That is how the club opens.",
    program: "On the program",
    items: [
      "flag soldering — we teach on the spot, 40 seats, 10 per college;",
      "the Oppora mini-challenge in mixed teams — for those who are not soldering;",
      "a demo zone with student projects;",
      "a draw for 6 AICademy discount certificates and 3 certificates for a free NEN test.",
    ],
    keysCaption: "4 keys → one shared action",
    key: "Key",
    when: "When and where",
    place: "27 November, 16:00–18:30, Salymbekov University, assembly hall, [address, building].",
    door: "Registration at the door from 15:45.",
    come: "I want to come",
  },
  network: {
    index: "03",
    kicker: "Network",
    title: "Four colleges — one network",
    p1: "A robot is not only code. It is also design, game mechanics and a business model. That is why RoboComm is a network of chapters at different colleges.",
    p2: "Chapters at other colleges open after 27 November. Studying somewhere else? Come anyway — mark it on the form.",
    colCollege: "College",
    colTrack: "Chapter",
    opens: "Opens 27 November",
    colleges: [
      {
        id: "salym",
        name: "International College of IT and Business, Salymbekov University",
        track: "IT and business",
      },
      { id: "tsi", name: "TSI AUCA", track: "IT and business" },
      { id: "compass", name: "Compass College", track: "Design" },
      { id: "portal", name: "Portal College (not decided yet)", track: "Game Dev" },
    ],
  },
  stages: {
    index: "04",
    kicker: "What you can learn",
    title: "Four stages",
    note: "You choose the level. The club grows each track gradually — as members prepare the sessions.",
    items: [
      { title: "Mechanics and electronics", text: "Soldering, sensors, 3D printing." },
      { title: "Arduino and microcontrollers", text: "C/C++, ESP32." },
      { title: "Raspberry Pi and computer vision", text: "Python, OpenCV." },
      { title: "ROS 2 and autonomy", text: "SLAM, Nav2." },
    ],
  },
  projects: {
    index: "05",
    kicker: "From idea to robot",
    title: "Club projects",
    items: [
      {
        tag: "RoboComm / shared project",
        status: "In preparation",
        title: "Electronic flag of Kyrgyzstan",
        text: "The club's first shared project: 40 rays, 40 participants, 4 colleges. We build it at the opening on 27 November.",
      },
      {
        tag: "RoboComm / concept",
        status: "Planned, looking for people",
        title: "Autonomous platform",
        text: "A wheeled Raspberry Pi robot that drives without an operator.",
      },
      {
        tag: "RoboComm / your idea",
        status: "Open",
        title: "Your project",
        text: "Bring an idea — we will find a team and a mentor among the members.",
      },
    ],
  },
  principles: {
    index: "06",
    kicker: "Principles",
    title: "How the club works",
    lead: "From students, for students.",
    text: "Members prepare the sessions themselves, find materials and run the events. You leave with skills and with experience you can show an employer.",
    cards: [
      {
        title: "What we have now",
        text: "A launch team, a mentor, a venue for the opening at Salymbekov University, and partners who help with equipment.",
      },
      {
        title: "What we don't have yet",
        text: "Our own space and budget. Meetings happen in partner colleges' rooms, and we find materials together with partners.",
      },
      {
        title: "What we expect",
        text: "Show up regularly, finish projects, and help newcomers.",
      },
      {
        title: "What there won't be",
        text: "Grades, homework and supervision. This is a club, not a class.",
      },
    ],
  },
  path: {
    index: "07",
    kicker: "Taking part and growing",
    title: "A member's path",
    steps: [
      { title: "Member", text: "You come to meetings and work on a project." },
      { title: "Club active", text: "You lead a chapter, a track or an event." },
      {
        title: "Physical AI",
        text: "The first grant-funded robotics course. Active club members are first in line for selection.",
      },
    ],
    note: "BIROK is a separate organization that trains robotics mentors and works with schools. The club is free and is not financially tied to BIROK.",
  },
  events: {
    index: "08",
    kicker: "Club calendar",
    title: "Events",
    items: [
      { date: "6 November", time: "—", title: "Registration for the opening is open", hot: false },
      {
        date: "27 November",
        time: "16:00",
        title: "Club opening and flag soldering, Salymbekov University",
        hot: true,
      },
      { date: "4 December", time: "16:00", title: "First club meeting and active-member vote", hot: false },
    ],
    telegram: "All announcements are in the club Telegram channel",
    telegramLink: "[Telegram]",
  },
  team: {
    index: "09",
    kicker: "Club people",
    title: "Launch team",
    people: [
      {
        id: "rayana",
        name: "Rayana Urmatbekova",
        role: "Project lead",
        bio: "Runs the launch and makes sure everything happens on time",
      },
      {
        id: "akylai",
        name: "Akylai Ashirbekova",
        role: "Event manager",
        bio: "Opening script and the flag-lighting ceremony",
      },
      {
        id: "aizirek",
        name: "Aizirek Mairambekova",
        role: "SMM",
        bio: "The club's voice on social media",
      },
      {
        id: "aisha",
        name: "Aisha Timurova",
        role: "College partnerships",
        bio: "Agrees the network with the colleges",
      },
      {
        id: "elina",
        name: "Elina Erkinbekova",
        role: "Logistics and registration",
        bio: "Venue and participant registration",
      },
      {
        id: "adilkhan",
        name: "Adilkhan Satymkulov",
        role: "Tech lead",
        bio: "Electronic-flag schematic and the technical side",
      },
      {
        id: "anvar",
        name: "Anvar Kumushbekov",
        role: "Web and data",
        bio: "Site and registration",
      },
      {
        id: "abdykerim",
        name: "Abdykerim Adenov",
        role: "Mentor",
        bio: "Head of BIROK, WRCC 2026 participant in Baku",
      },
    ],
  },
  faq: {
    index: "10",
    kicker: "FAQ",
    title: "Questions and answers",
    items: [
      { q: "Do I need experience?", a: "No. We will teach soldering and programming." },
      { q: "How much does it cost?", a: "Nothing. The club is free." },
      {
        q: "I study at another college. Can I join?",
        a: "Yes. Choose “another college” when you register.",
      },
      {
        q: "What is Physical AI?",
        a: "The first grant-funded robotics course. Active club members are first in line for selection.",
      },
      {
        q: "How do I join the club active?",
        a: "Come to the opening or the first meeting on 4 December and fill in the form. The active is chosen by vote at the first meeting.",
      },
    ],
  },
  contact: {
    index: "11",
    kicker: "Contact",
    title: "In touch with RoboComm",
    mail: "[email]",
    instagram: "Instagram [Instagram]",
    telegram: "Telegram [Telegram]",
  },
  footer: {
    rights:
      "© 2026 RoboComm, {{city}}. Student robotics club of Salymbekov · TSI AUCA · Compass College.",
    year: "2026",
  },
};

export default en;
