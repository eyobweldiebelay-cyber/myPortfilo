import register from '../images/re.png'
import bookImage from '../images/book.jpeg'
import calculatorImage from '../images/project-3.png'


const projects = [
  {
    title: 'Student Registration System',
    description:
      'A web-based student registration and management system designed to make student information and registration processes easier to manage.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL'],
    image: '/images/re.png',
    liveDemo: 'https://online-m5u4fhp46-eyob-portfolio.vercel.app/',
    github: 'https://github.com/eyobweldiebelay-cyber/onlineRegister.git',
    type: 'web',
  },

  {
    title: 'Scientific Calculator',
    description:
      'An Android calculator application built with Android Studio for performing mathematical calculations through a simple and user-friendly interface. The application also includes sound feedback.',
    technologies: ['Android Studio', 'Java', 'Kotlin', 'Jetpack Compose'],
    image: calculatorImage,
    liveDemo:
      'https://drive.google.com/file/d/1xT-10v1ERe6vFr9jQMrPPuE9FoEzAwL_/view?usp=sharing',
    github: '#',
    type: 'android',
  },

  {
    title: 'Book App',
    description:
      'An Android application developed using Android Studio as a practical mobile application project.',
    technologies: ['Android Studio', 'Java', 'Kotlin', 'Jetpack Compose'],
    image: bookImage,
    liveDemo: 'https://drive.google.com/file/d/10yC6pzuwaUu2HIRyy-C1jicsm0bK6XCl/view?usp=drive_link',
    github: '#',
    type: 'android',
  },
]

export default projects