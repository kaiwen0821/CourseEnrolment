const diplomas = [
  {
    id: "dip-it",
    name: "Information Technology",
    modules: [
      {
        id: "web-dev",
        name: "C219 | Web App Development",
        description: "In this module, students will learn the fundamentals of building web applications, including designing user interfaces, implementing interactive features with HTML, CSS, and JavaScript, and connecting to data sources for dynamic content.",
        credits: 4
      },
      {
        id: "mobile app",
        name: "C346 | Mobile App Development",
        description: "In this module, students will learn the fundamentals of creating mobile applications, including designing user interfaces, implementing interactive features, and integrating data to build fully functional Android and iOS apps.",
        credits: 4
      },
      {
        id: "uiux",
        name: "C218 | UI/UX Design for Apps",
        description: "Students will be equipped with knowledge in User Experience (UX) design in areas such as requirement gathering, creating and analysis of the User Interfaces (UI) in this module.",
        credits: 4
      }
    ]
  },
  {
    id: "dip-ds",
    name: "Financial Technology",
    modules: [
      {
        id: "software app",
        name: "C237 | Software Application Development",
        description: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms.",
        credits: 4
      },
      {
        id: "payment",
        name: "Payment Technology",
        description: "This module introduces students to different payment technologies and systems.",
        credits: 4
      }
    ]
  }
];

export function getDiplomas() {
  return diplomas.map(d => ({ id: d.id, name: d.name }));
}

export function getDiploma(id) {
  return diplomas.find(d => d.id === id);
}

export function getModule({ diplomaId, moduleId }) {
  return diplomas
    .find(d => d.id === diplomaId)
    .modules.find(m => m.id === moduleId);
}
