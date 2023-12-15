// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/python-logo.png";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "riberagorka";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo = `
    Hello, I'm Gorka! I'm not one to neatly fit into predefined profiles – I'm all about the experiences that shape who I am. Armed with degrees in Sports Science and Data Science, I thrive on transforming ideas into tangible projects.

    Currently, I'm channeling my skills at the Computing Center of the University of Cologne. Beyond my solid foundation in data and mathematics, my forte lies in lateral thinking. Having navigated diverse environments and tackled various projects, I've refined my knack for approaching challenges from unique angles.

    Outside of my workspace, I'm passionately exploring my own ideas that fuse software and communication. I'm deeply immersed in the realms of data and mathematics, crafting solutions that truly make a difference. When I'm not on the clock, catch me cycling through scenic routes, conquering mountains, diving into captivating books, or engaging in lively conversations with like-minded individuals.

    Whether you share a passion for data or just want to connect and chat, let's collaborate to make both work and life a bit more awesome!
	`;

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="logos:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 3,
    skill: <Icon icon="devicon-plain:microsoftsqlserver-wordmark" className="display-4" />,
    name: "SQL Server",
  },
  {
    id: 4,
    skill: <Icon icon="logos:tensorflow" className="display-4" />,
    name: "Tensorflow",
  },
  {
    id: 5,
    skill: <Icon icon="devicon:keras" className="display-4" />,
    name: "Keras",
  },
  {
    id: 6,
    skill: <Icon icon="logos:aws-s3" className="display-4" />,
    name: "Object Storage",
  },
  {
    id: 7,
    skill: <Icon icon="devicon:linux" className="display-4" />,
    name: "Linux",
  },
  {
    id: 8,
    skill: <Icon icon="logos:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="logos:airflow" className="display-4" />,
    name: "Airflow",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
