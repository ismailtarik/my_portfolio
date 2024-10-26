/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ismail TARIK",
  title: "Hi all, I'm Ismail",
  subTitle: emoji(
    "A passionate Full Stack Software Developer with experience in building Web and Mobile applications using PHP, Laravel, JEE, Spring Boot, HTML, CSS, JavaScript, React.js, Express.js, Node.js and React Native."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", 
  displayGreeting: true,
  tools: [
    "Web Development: PHP, Laravel, JEE, Spring Boot, HTML, CSS, JavaScript, React.js, Express.js, Node.js",
    "Mobile Development: React Native",
    "Programming Languages: C, Java, Python",
    "Databases: SQL, PL/SQL, MongoDB",
    "Data Analysis: Machine Learning, Big Data, Python"
  ],
  image: require("./assets/images/tarik_image_croped.jpeg")
};



// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ismailtarik",
  linkedin: "https://www.linkedin.com/in/ismail-tarik-b1b07b248/",
  gmail: "tarikismail600@gmail.com",
  facebook: "https://www.facebook.com/tarik0631",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER EXPLORING MULTIPLE TECHNOLOGIES AND DATA ANALYTICS",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front-end / User Interfaces for web and mobile applications using HTML, CSS, JavaScript, React.js, and React Native"
    ),
    emoji(
      "⚡ Build robust backend systems using PHP (Laravel), JEE, Spring Boot, Node.js, and Express.js"
    ),
    emoji(
      "⚡ Create and manage databases with SQL, PL/SQL, MongoDB, and other database technologies"
    ),
    emoji(
      "⚡ Experience in mobile development using React Native"
    ),
    emoji(
      "⚡ Skilled in Python programming and Machine Learning for data analysis"
    ),
    emoji(
      "⚡ Integration of third-party services and tools like Firebase and AWS"
    ),
    emoji(
      "⚡ Progressive Web Applications (PWA) using modern stacks"
    ),
    emoji(
      "⚡ Knowledge in Big Data technologies and analysis"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // Additional technologies based on your previous list
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "JEE",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Big Data",
      fontAwesomeClassname: "fas fa-server"
    }
  ],
  display: true ,// Set false to hide this section, defaults to true
  image: require("./assets/images/what_i_do.png")
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Faculty of Sciences Chouaib Doukkali",
      logo: require("./assets/images/fsj.jpg"),
      subHeader: "Master's in Computer Engineering and Data Analysis",
      duration: "November 2023 - June 2025"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Faculty of Sciences and Techniques of Settat",
      logo: require("./assets/images/fsts.png"),
      subHeader: "Bachelor's in Computer Engineering",
      duration: "September 2020 - June 2023"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "OCP Jorf El Sfar",
      companylogo: require("./assets/images/ocp.png"),
      date: "May 2023 – June 2023",
      desc: "Created a web application for managing fertilizer analyses",
      // descBullets: [
      // ]
    },
    {
      role: "Full Stack Developer",
      company: "Faculty of Sciences El Jadida",
      companylogo: require("./assets/images/fsj.jpg"),
      date: "June 2024 – August 2024",
      desc: "Created a web application for exam scheduling and assigning invigilators."
    }
  ]
};


const openSource = {
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "SOME ACADEMIC PROJECTS THAT I CREATED DURING MY STUDIES",
  projects: [
    {
      image: require("./assets/images/navigation.png"), // Replace with actual image path
      projectName: "Mobile Application for Navigating the Faculty",
      projectDesc: "Technologies: REACT NATIVE, FIREBASE",
    },
    {
      image: require("./assets/images/blood_donation.png"), // Replace with actual image path
      projectName: "Mobile Application for Scheduling Blood Donation Appointments",
      projectDesc: "Technologies: REACT NATIVE, EXPRESS, NODE, MYSQL",
     
    },
    {
      image: require("./assets/images/web_recruitement.jpg"), // Replace with actual image path
      projectName: "Online Recruitment Web Application",
      projectDesc: "Technologies: HTML, BOOTSTRAP, CSS, PHP, MYSQL",
     
    },
    {
      image: require("./assets/images/detection_object.jpg"), // Replace with actual image path
      projectName: "Object Detection",
      projectDesc: "Technologies: REACT.JS, TENSORFLOW.JS",
     
    },
    {
      image: require("./assets/images/scopus.png"), // Replace with actual image path
      projectName: "Analysis of Scientific Publications Using the Scopus API",
      projectDesc: "Technologies: PYTHON",
      // footerLink: [
      //   {
      //     name: "Visit the project",
      //     url: "https://github.com/ismailtarik/Analyse_Bibliometrique_des_Publications_Scientifiques_avec_API_Scopus"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};




// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true 
};

const contactInfo = {
  title: emoji("Contact Moi ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+212 708023218",
  email_address: "tarikismail600@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "", 
  display: true 
};

const isHireable = false; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
