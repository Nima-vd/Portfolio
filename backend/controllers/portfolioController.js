// Portfolio Data
const portfolioData = {
  profile: {
    name: 'Nima Norbu Sherpa',
    title: 'BSc(Hons) Computer Science Graduate & Junior Data Analyst',
    bio: 'Passionate about transforming raw data into actionable insights. I bridge the gap between complex computer science principles and sophisticated data analytics.',
    mission: 'To transform complex datasets into clear, actionable insights through structured analysis and transparent storytelling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhXoeIZxmYDFxrgNkGmm5m7pD6l51sF0G6NE0zoEjtoivLkwiI1mNGJn1vaEk8O7Hp-w1fyGgMAYpJlsyn_hscWBVt1iFeJ6UAV85QjIwDrLTdNCOysd4ifij92udh06X-Rr0ONl8f5xGFCgupsAvgpMeGPTAp92RZi2oo4PzC14UfXDjAOyCdJKZd0w5OYa2gTOLXC66fZv4RRe_lzz0h--g61b-70dZg0dvO5cwDSltKxd1Pk4kSmDBosnYoO56DXjdoR5cr1jY'
  },

  skills: [
    { icon: 'bar_chart', name: 'Power BI', percentage: 90 },
    { icon: 'terminal', name: 'Python', percentage: 85 },
    { icon: 'table_rows', name: 'Excel', percentage: 85 },
    { icon: 'database', name: 'SQL', percentage: 80 },
    { icon: 'palette', name: 'Canva', percentage: 75 },
    { icon: 'draw', name: 'Figma', percentage: 70 }
  ],

  projects: [
    {
      id: 1,
      title: 'Healthcare Analytics',
      description: 'Comprehensive COVID-19 Analysis using advanced Power BI modeling to track recovery and spread rates.',
      tag: 'Power BI',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZJbzw8W34UzEWENdAuoAN3VjHS_nHDm0d-eMdOHemAQlaC24DxR4YB_qQ5-wdFnhnTBq7rpw-MV0CwvSBmAVWjGN1mAawtrKBnwwLRIGUpmnpXLGKmNfYPVZJ_lFGxjWIqpQoMNnMK59mIPMDWyi9ZGyJh6i6OwKPzi-_v1c1BNd0X3wAxpRO8ciTL13Xb36M4QjbvU64rVyt7g7hva33w_zPV3m5h2OXQgNBlIo17oTr6bI5j-REMLMFm-HLO0aEubRpbnuF5kA',
      link: '#'
    },
    {
      id: 2,
      title: 'Business Intelligence',
      description: 'In-depth Sales Analysis using Python (Pandas/Matplotlib) to identify seasonal trends and growth opportunities.',
      tag: 'Python',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1xA4k7oKt_VQnqDDmNPPmG0m44pOHBzl4I77UGTU15LWVwBYUzdYDm3pBkxLfUp6xbvdUH2Aas4MA5yDMQi31aAUstSZPLRy4YpdYKzCDy9_itgQ_enU4PeyLzSziRWpMtV0Q7yag3Yh1Fvyr2Tp3cRzXaaDWMDkIL81fflmAZYkOWuKHQ3_RY3Sy78Pwr5oh5q2ixbHd7TQNjVsR6vUXLoGW3gjth_Wlo5wn71g3EC5IG7xlQ9h1kKkRYytV_HyMAE7Dbz6zZcE',
      link: '#'
    },
    {
      id: 3,
      title: 'Healthcare Database',
      description: 'Scalable Hospital Management System designed with SQL for efficient patient records and inventory tracking.',
      tag: 'SQL',
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJ-c-E8a_9WipNTaW-sSUEYYFfs_AnE6JHGfN3WWPWYXEoqyg0KmTUPY4Ubgffo4PcvmpPjlLEZS15K-JkcbWOOZN_yTM5g6xnY53SSW6SDSZElX7GrJYmdRCIacJ91IvnCXm0Y0p_-MfEGCLpjXP8oqCtWf2ke1F1BOJPKsdkUi7Rw7K0bV7BeNAywDLD4ZEUnPmH-TNEiqjAl4z_sHJ3AgAB6RDyjrUVcgnMP26hyr34cNaQrQ8gex6ikKK9uBdwV0c8SA1-YvU',
      link: '#'
    }
  ],

  education: [
    {
      year: '2023 — 2026',
      title: 'BSc(Hons) Computer Science',
      school: 'Herald College, Kathmandu',
      grade: '',
      isActive: true
    },
    {
      year: '2022',
      title: 'Higher Secondary',
      school: 'Reliance International Academy',
      grade: 'GPA: 3.34',
      isActive: false
    },
    {
      year: '2020',
      title: 'Secondary',
      school: 'Winsome English Boarding School',
      grade: 'GPA: 3.80',
      isActive: false
    }
  ],

  training: [
    'Data Analytics & Business Intelligence',
    'Python Programming & Data Science',
    'SQL Database Management',
    'Power BI Dashboard Design & DAX Functions'
  ],

  contact: {
    location: 'Bouddha, Kathmandu, Nepal',
    phone: '+977 9803059811',
    email: 'nimanorbu353@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nima-norbu-sherpa-026819262/',
    github: '#'
  },

  passions: [
    { icon: 'self_improvement', label: 'Yoga' },
    { icon: 'fitness_center', label: 'Gym' },
    { icon: 'strategy', label: 'Chess' },
    { icon: 'psychology', label: 'Learning' }
  ]
};

// Messages storage (in production, use a database)
const messages = [];

// Get Profile
export const getProfile = (req, res) => {
  res.json(portfolioData.profile);
};

// Get Skills
export const getSkills = (req, res) => {
  res.json(portfolioData.skills);
};

// Get Projects
export const getProjects = (req, res) => {
  res.json(portfolioData.projects);
};

// Get Education
export const getEducation = (req, res) => {
  res.json({
    education: portfolioData.education,
    training: portfolioData.training
  });
};

// Get Experience
export const getExperience = (req, res) => {
  res.json({
    education: portfolioData.education,
    training: portfolioData.training
  });
};

// Get Contact Info
export const getContact = (req, res) => {
  res.json(portfolioData.contact);
};

// Submit Contact Form
export const submitContact = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const newMessage = {
    id: messages.length + 1,
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  };

  messages.push(newMessage);

  // In production, you would send an email here
  console.log('New message received:', newMessage);

  res.status(201).json({
    success: true,
    message: 'Message received successfully',
    data: newMessage
  });
};

// Get Full Portfolio Data
export const getFullPortfolio = (req, res) => {
  res.json({
    profile: portfolioData.profile,
    skills: portfolioData.skills,
    projects: portfolioData.projects,
    education: portfolioData.education,
    training: portfolioData.training,
    contact: portfolioData.contact,
    passions: portfolioData.passions
  });
};
