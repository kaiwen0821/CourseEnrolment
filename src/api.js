const diplomas = [
  {
    id: "dip-it",
    name: "Information Technology",
    description: "Software, web and mobile application development",
    modules: [
      {
        id: "web-dev",
        name: "C219 | Web App Development",
        description:
          "Learn HTML, CSS, JavaScript, React and modern web development.",
        credits: 4
      },
      {
        id: "mobile-dev",
        name: "C346 | Mobile App Development",
        description:
          "Build Android and iOS apps using modern mobile frameworks.",
        credits: 4
      },
      {
        id: "uiux",
        name: "C218 | UI/UX Design for Apps",
        description:
          "Understand UX principles and UI design for digital products.",
        credits: 4
      }
    ]
  },
  {
    id: "dip-fintech",
    name: "Financial Technology",
    description: "Finance combined with software and digital payments",
    modules: [
      {
        id: "software-app",
        name: "C237 | Software Application Development",
        description:
          "Develop full-stack software applications.",
        credits: 4
      },
      {
        id: "payment",
        name: "C372 | Payment Technology",
        description:
          "Learn digital payment systems and technologies.",
        credits: 4
      }
    ]
  },
  {
    id: "dip-ai",
    name: "Applied AI & Analytics",
    description: "Artificial intelligence and data analytics used to solve real-world problems",
    modules: [
      {
        id: "software-app",
        name: "C235 | IT Security and Management",
        description:
          "Learn how to protect systems and manage IT security.",
        credits: 4
      },
      {
        id: "payment",
        name: "C240 | AI Essentials and Innovations",
        description:
          "Learn basic AI concepts and modern AI applications.",
        credits: 4
      }
    ]
  }
];

export function getDiplomas() {
  return diplomas.map(d => ({
    id: d.id,
    name: d.name,
    description: d.description,
    modules: d.modules
  }));
}

export function getDiploma(id) {
  return diplomas.find(d => d.id === id);
}

export function getModule({ diplomaId, moduleId }) {
  return diplomas
    .find(d => d.id === diplomaId)
    .modules.find(m => m.id === moduleId);
}
