import {
  RiFacebookBoxFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiMailSendFill,
  RiPhoneFill,
  RiUserLocationLine,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "Courses",
    href: "/courses",
  },
  {
    id: 3,
    label: "About Us",
    href: "/about",
  },
  {
    id: 4,
    label: "Pricing",
    href: "/pricing",
  },
  {
    id: 5,
    label: "Contact",
    href: "/contact",
  },
];

// *************************
//     Home page
// *************************

export const heroLogos = [
  {
    id: 1,
    item: "/images/logo-1.png",
    width: 56,
  },
  {
    id: 2,
    item: "/images/logo-2.png",
    width: 82,
  },
  {
    id: 3,
    item: "/images/logo-3.png",
    width: 57,
  },
  {
    id: 4,
    item: "/images/logo-4.png",
    width: 64,
  },
  {
    id: 5,
    item: "/images/logo-5.png",
    width: 78,
  },
  {
    id: 6,
    item: "/images/logo-6.png",
    width: 75,
  },
  {
    id: 7,
    item: "/images/logo-7.png",
    width: 65,
  },
];

export const benefitItems = [
  {
    id: 1,
    icon: "/images/icon-1.png",
    title: "Flexible Learning Schedule",
    text: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: 2,
    icon: "/images/icon-2.png",
    title: "Expert Instruction",
    text: "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    id: 3,
    icon: "/images/icon-3.png",
    title: "Diverse Course Offerings",
    text: "Explore a wide range of design and development courses covering various topics.",
  },
  {
    id: 4,
    icon: "/images/icon-4.png",
    title: "Updated Curriculum",
    text: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    id: 5,
    icon: "/images/icon-5.png",
    title: "Practical Projects and Assignments",
    text: "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    id: 6,
    icon: "/images/icon-6.png",
    title: "Interactive Learning Environment",
    text: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

export const coursesSecItems = [
  {
    id: 1,
    img: "/images/course-img-1.png",
    title: "Web Design Fundamentals",
    text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    instructor: "By John Smith",
    tags: [{ tag: "4 Weeks" }, { tag: "Beginner" }],
  },
  {
    id: 2,
    img: "/images/course-img-2.png",
    title: "Mobile App Development",
    text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    instructor: "By David Brown",
    tags: [{ tag: "8 Weeks" }, { tag: "Intermediate" }],
  },
  {
    id: 3,
    img: "/images/course-img-3.png",
    title: "Front-End Web Development",
    text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    instructor: "By Michael Adams",
    tags: [{ tag: "10 Weeks" }, { tag: "Intermediate" }],
  },
  {
    id: 4,
    img: "/images/course-img-4.png",
    title: "UI/UX Design",
    text: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    instructor: "By John Smith",
    tags: [{ tag: "6 Weeks" }, { tag: "Intermediate" }],
  },
  {
    id: 5,
    img: "/images/course-img-5.png",
    title: "Graphic Design for Beginners",
    text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    instructor: "By Sarah Thompson",
    tags: [{ tag: "10 Weeks" }, { tag: "Beginner" }],
  },
  {
    id: 6,
    img: "/images/course-img-6.png",
    title: "Advanced JavaScript",
    text: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    instructor: "By Jennifer Wilson",
    tags: [{ tag: "6 Weeks" }, { tag: "Advance" }],
  },
];

export const pricingItems = [
  {
    id: 1,
    subtitle: "Free Plan",
    title: "Available Features",
    monthly: 0,
    yearly: 0,
    list: [
      { label: "Limited course materials and resources.", condition: "true" },
      { label: "Basic community support.", condition: "true" },
      { label: "No certification upon completion.", condition: "true" },
      { label: "Ad-supported platform.", condition: "true" },
      {
        label: "Access to exclusive Pro Plan community forums.",
        condition: "false",
      },
      { label: "Early access to new courses and updates.", condition: "false" },
    ],
  },
  {
    id: 2,
    subtitle: "Pro Plan",
    monthly: 79,
    yearly: 948,
    title: "Available Features",
    list: [
      { label: "Unlimited access to all courses.", condition: "true" },
      { label: "Unlimited course materials and resources.", condition: "true" },
      { label: "Priority support from instructors.", condition: "true" },
      { label: "Course completion certificates.", condition: "true" },
      { label: "Ad-free experience.", condition: "true" },
      {
        label: "Access to exclusive Pro Plan community forums.",
        condition: "true",
      },
      { label: "Early access to new courses and updates.", condition: "true" },
    ],
  },
];

export const faqItems = [
  {
    id: 1,
    title: "Can I enroll in multiple courses at once?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 2,
    title: "Enrollment Process for Different Courses",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 3,
    title: "What kind of support can I expect from instructors?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 4,
    title:
      "Are the courses self-paced or do they have specific start and end dates?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 5,
    title: "Are there any prerequisites for the courses?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
  {
    id: 6,
    title: "Can I download the course materials for offline access?",
    text: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
  },
];

export const testimonialsItems = [
  {
    id: 1,
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    author: "Sarah L",
    img: "/images/testi-img-1.png",
  },
  {
    id: 2,
    text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    author: "Jason M",
    img: "/images/testi-img-2.png",
  },
  {
    id: 3,
    text: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    author: "Emily R",
    img: "/images/testi-img-3.png",
  },
  {
    id: 4,
    text: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    author: "Michael K",
    img: "/images/testi-img-4.png",
  },
];

export const contactInfo = [
  {
    id: 1,
    icon: RiPhoneFill,
    label: "hello@skillbridge.com",
  },
  {
    id: 2,
    icon: RiMailSendFill,
    label: "+91 91813 23 2309",
  },
  {
    id: 3,
    icon: RiUserLocationLine,
    label: "Somewhere in the World",
  },
];

export const socialIcons = [
  {
    id: 1,
    label: "Facebook",
    icon: RiFacebookBoxFill,
  },
  {
    id: 2,
    label: "Twitter",
    icon: RiTwitterFill,
  },
  {
    id: 3,
    label: "Linkedin",
    icon: RiLinkedinFill,
  },
];

export const footerLists = [
  {
    id: 1,
    title: "Home",
    links: [
      { label: "Benefits" },
      { label: "Our Courses" },
      { label: "Our Testimonials" },
      { label: "Our FAQ" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      { label: "Company" },
      { label: "Achievements" },
      { label: "Our Goals" },
    ],
  },
];

// *************************
//     courses page
// *************************

export const coursesPageItems = [
  {
    id: 1,
    title: "Web Design Fundamentals",
    text: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    link: "View Course",
    imgs: [
      { img: "/images/course-img-7.png" },
      { img: "/images/course-img-8.png" },
      { img: "/images/course-img-9.png" },
    ],
    instructor: "By John Smith",
    tags: [{ tag: "4 Weeks" }, { tag: "Beginner" }],
    curriculum: "Curriculum",
    steps: [
      { step: "01", label: "Introduction to HTML" },
      { step: "02", label: "Styling with CSS" },
      { step: "03", label: "Introduction to Responsive Design" },
      { step: "04", label: "Design Principles for Web" },
      { step: "05", label: "Building a Basic Website" },
    ],
  },
  {
    id: 2,
    title: "Mobile App Development",
    text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    link: "View Course",
    imgs: [
      { img: "/images/course-img-10.png" },
      { img: "/images/course-img-11.png" },
      { img: "/images/course-img-12.png" },
    ],
    instructor: "By Emily Johnson",
    tags: [{ tag: "6 Weeks" }, { tag: "Intermediate" }],
    curriculum: "Curriculum",
    steps: [
      { step: "01", label: "Introduction to UI/UX Design" },
      { step: "02", label: "User Research and Personas" },
      { step: "03", label: "Wireframing and Prototyping" },
      { step: "04", label: "Visual Design and Branding" },
      { step: "05", label: "Usability Testing and Iteration" },
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    text: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    link: "View Course",
    imgs: [
      { img: "/images/course-img-13.png" },
      { img: "/images/course-img-14.png" },
      { img: "/images/course-img-15.png" },
    ],
    instructor: "By David Brown",
    tags: [{ tag: "8 Weeks" }, { tag: "Intermediate" }],
    curriculum: "Curriculum",
    steps: [
      { step: "01", label: "Introduction to Mobile App Development" },
      { step: "02", label: "Fundamentals of Swift Programming (iOS)" },
      { step: "03", label: "Fundamentals of Kotlin Programming (Android)" },
      { step: "04", label: "Building User Interfaces" },
      { step: "05", label: "App Deployment and Testing" },
    ],
  },
  {
    id: 4,
    title: "Graphic Design for Beginners",
    text: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    link: "View Course",
    imgs: [
      { img: "/images/course-img-16.png" },
      { img: "/images/course-img-17.png" },
      { img: "/images/course-img-18.png" },
    ],
    instructor: "By Sarah Thompson",
    tags: [{ tag: "10 Weeks" }, { tag: "Beginner" }],
    curriculum: "Curriculum",
    steps: [
      { step: "01", label: "Introduction to Graphic Design" },
      { step: "02", label: "Typography and Color Theory" },
      { step: "03", label: "Layout Design and Composition" },
      { step: "04", label: "Image Editing and Manipulation" },
      { step: "05", label: "Designing for Print and Digital Media" },
    ],
  },
  {
    id: 5,
    title: "Front-End Web Development",
    text: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    link: "View Course",
    imgs: [
      { img: "/images/course-img-19.png" },
      { img: "/images/course-img-20.png" },
      { img: "/images/course-img-21.png" },
    ],
    instructor: "By Michael Adams",
    tags: [{ tag: "10 Weeks" }, { tag: "Intermediate" }],
    curriculum: "Curriculum",
    steps: [
      { step: "01", label: "HTML Fundamentals" },
      { step: "02", label: "CSS Styling and Layouts" },
      { step: "03", label: "JavaScript Basics" },
      { step: "04", label: "Building Responsive Websites" },
      { step: "05", label: "Introduction to Bootstrap and React" },
    ],
  },
];

// *************************
//     About page
// *************************

export const achievementsItems = [
  {
    id: 1,
    icon: "/images/icon-7.png",
    title: "Trusted by Thousands",
    text: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
  },
  {
    id: 2,
    icon: "/images/icon-8.png",
    title: "Positive Student Feedback",
    text: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
  },
  {
    id: 3,
    icon: "/images/icon-9.png",
    title: "Award-Winning Courses",
    text: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
  },
  {
    id: 4,
    icon: "/images/icon-10.png",
    title: "Industry Partnerships",
    text: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
  },
];

export const ourGoalItems = [
  {
    id: 1,
    icon: "/images/icon-11.png",
    title: "Provide Practical Skills",
    text: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
  },
  {
    id: 2,
    icon: "/images/icon-12.png",
    title: "Promote Collaboration and Community",
    text: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
  },
  {
    id: 3,
    icon: "/images/icon-13.png",
    title: "Foster Creative Problem-Solving",
    text: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
  },
  {
    id: 4,
    icon: "/images/icon-14.png",
    title: "Stay Ahead of the Curve",
    text: "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
  },
];
