import register from '../images/online.png'
import bookImage from '../images/book.jpeg'
import calculatorImage from '../images/project-3.png'
import ecommerceImage from '../images/shop.png'
import examsystem from '../images/examm.png'

const projects = [
  {
    title: 'online exam System',
    description:
     'A modern full-stack online examination system designed for secure and efficient exams, featuring student and teacher management, academic department organization, question bank management, exam scheduling, timed multiple-choice exams, automatic grading, result tracking, and separate Admin, Academic Dean, Teacher, and Student dashboards.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL'],
    image: examsystem,
    liveDemo:
      'https://online-exam-system-silk.vercel.app/?utm_source=chatgpt.com',
    github:
      'https://github.com/eyobweldiebelay-cyber/online-Exam-System.git',
    type: 'web',
  },
  {
    title: 'E-Commerce Website',
    description:
      'A modern full-stack e-commerce website designed for online shopping, with product browsing, product details, shopping cart, favorites, checkout, orders, payment processing, and separate customer and admin features.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL'],
    image: ecommerceImage,
    liveDemo:
      'https://commerce-ii6sjb0kv-eyob-portfolio.vercel.app',
    github:
      'https://github.com/eyobweldiebelay-cyber/E-Commerce.git',
    type: 'web',
  },

  {
    title: 'Student Registration System',
    description:
      'A web-based student registration and management system designed to make student information and registration processes easier to manage.',
    technologies: ['React', 'Node.js', 'Express', 'MySQL'],
    image: register,
    liveDemo:
      'https://online-ruby-zeta.vercel.app',
    github:
      'https://github.com/eyobweldiebelay-cyber/onlineRegister.git',
    type: 'web',
  },

  {
    title: 'Scientific Calculator',
    description:
      'An Android calculator application built with Android Studio for performing mathematical calculations through a simple and user-friendly interface. The application also includes sound feedback.',
    technologies: [
      'Android Studio',
      'Java',
      'Kotlin',
      'Jetpack Compose',
    ],
    image: calculatorImage,
    liveDemo:
      'https://drive.google.com/file/d/1Xy16J2oi-7MxX1olniuXUKixfAOrIQW_/view?usp=drive_link',
    github: 'https://github.com/eyobweldiebelay-cyber/ScientificCalculator-Android.git',
    type: 'android',
  },

  {
    title: 'Book App',
    description:
      'An Android application developed using Android Studio as a practical mobile application project.',
    technologies: [
      'Android Studio',
      'Java',
      'Kotlin',
      'Jetpack Compose',
    ],
    image: bookImage,
    liveDemo:
      'https://drive.google.com/file/d/1VQp0Qeo-TiDmYhY3INDDutgMUd4NHMiy/view?usp=drive_link',
    github: 'https://github.com/eyobweldiebelay-cyber/AndroidBookApp.git',
    type: 'android',
  },
]

export default projects