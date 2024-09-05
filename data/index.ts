export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize teamwork, fostering open communication ",
    description: "",
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently developing my skills as a Fullstack developer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to collaborate?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName:
      "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Interior Designer Website",
    des: "A Interior website with clean and minimal design and smooth animations.",
    img: "/p1.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://william0209.github.io/InteriorDesign-FRONT/",
  },
  {
    id: 2,
    title: "Previous Portfolio",
    des: "My previous prtfolio which i grew out of, still a great project.",
    img: "/p2.jpg",
    iconLists: ["/re.svg", "/css.svg", "/html.svg"],
    link: "https://github.com/William0209/portf-lj1",
  },
  {
    id: 3,
    title: "Simple Fullstack website",
    des: "Simple, yet effective fullstack website + JWT auth, excluding react.",
    img: "/p3.png",
    iconLists: [
      "/html.svg",
      "/css.svg",
      "/exp.svg",
      "/mdb.svg",
    ],
    link: "https://github.com/William0209/MERN",
  },
  {
    id: 4,
    title: "Anime website",
    des: "First real next.js project, enhanced my skills in next 14, framer motion, pagination and tailwind.css",
    img: "/p4.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/fm.svg",
    ],
    link: "https://github.com/William0209/anime_project",
  },
];

export const testimonials = [
  {
    quote:
      "När jag inte studerar, älskar jag att utforska nya recept och smaker från olika kulturer. Att laga mat är som ett litet kulinariskt äventyr för mig!",
    name: "Me, msyelf and I",
    title: "Matäventyrare",
  },
  {
    quote:
      "Fiske är min fristad – där finner jag både ro och glädje i naturen, samtidigt som jag alltid hoppas på den stora fångsten.",
    name: "Me, msyelf and I",
    title: "Naturälskare med ett spö",
  },
  {
    quote:
      "Jag värdesätter tid med mina nära och kära mer än något annat. Det är där jag tankar energi och får min dag att lysa upp!",
    name: "Me, msyelf and I",
    title: "Familj och vänner är allt",
  },
  {
    quote:
      "Jag kan också varva ner med något riktigt gott att äta, framför en spännande film eller serie – det är min definition av avslappning!",
    name: "Me, msyelf and I",
    title: "",
  },
  {
    quote:
      "Jag värdesätter tillit och öppen kommunikation, både i privatlivet och på jobbet. Att bygga starka relationer grundade på respekt och förståelse är något jag alltid strävar efter.",
    name: "Me, msyelf and I",
    title: "Tillit och kommunikation är nyckeln",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Development",
    desc: "I am learning to create responsive, visually appealing web interfaces using modern tools and frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile Friendly",
    desc: "I focus on ensuring websites work smoothly and look great on all devices and screen sizes.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "UI/UX",
    desc: "I am exploring how to design user-friendly interfaces that balance function and aesthetics for a better user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Development",
    desc: "I am gaining experience in building secure and scalable server-side logic to support web and mobile apps.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
