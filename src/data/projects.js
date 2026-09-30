import register from '../images/online.png'
import bookImage from '../images/book.jpeg'
import calculatorImage from '../images/project-3.png'
import ecommerceImage from '../images/shop.png'

const projects = [
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
      'https://online-m5u4fhp46-eyob-portfolio.vercel.app/',
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
      'https://drive.google.com/file/d/1xT-10v1ERe6vFr9jQMrPPuE9FoEzAwL_/view?usp=sharing',
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
      'https://drive.google.com/file/d/10yC6pzuwaUu2HIRyy-C1jicsm0bK6XCl/view?usp=drive_link',
    github: '#',
    type: 'android',
  },
]

export default projects