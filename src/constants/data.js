// import images from './images';
import { v4 as uuidv4 } from 'uuid';

const mySpeech = ` I'm very curious & passionate about web technology & also a dedicated learner of new technology. By
learning new knowledge I try to serve other peoples that how can I add value in their life through
my learning skills.`;


const userInfo = {
    Name: 'Md Taiseen Azam',
    Age: '29+ ',
    Qualification: 'B.Sc. Engineering',
    Post: ' Front End Developer',
    Language: 'Bangla, English, Hindi ',
}



const education = [
    {
        year: '2008 - 2007',
        level: 'SSC',
        institute: 'Hamidullah High School',
        city: 'Chapai Nawabgonj',
    },
    {
        year: '2010 - 2008',
        level: 'HSC',
        institute: 'Nawabganj Government College',
        city: 'Chapai Nawabgonj',
    },
    {
        year: '2016 - 2011',
        level: 'Diploma in Computer',
        institute: 'National Polytechnic Institute',
        city: 'Dhaka',
    },
    {
        year: '2021 - 2017',
        level: 'B.Sc in CSE',
        institute: 'Daffodil International University',
        city: 'Dhaka',
    },
];


// const skills = [
//     {
//         id: 1,
//         name: 'Logic pro',
//         percent: '90',
//     },
//     {
//         id: 2,
//         name: 'Pro tools',
//         percent: '80',
//     },
//     {
//         id: 3,
//         name: 'FL studio',
//         percent: '70',
//     },
//     {
//         id: 4,
//         name: 'Cubase',
//         percent: '60',
//     },
//     {
//         id: 5,
//         name: 'Nuendo',
//         percent: '60',
//     },
// ];


const portfolio = [
    {
        id: uuidv4(),
        title: 'Car - Max Wheels',
        liveUrl: 'https://car-website-demo.netlify.app',
        imgUrlEndPoint: '1LzZJbq/Car-Max-Wheels',
        tag: ['sass', 'js'],
    },
    {
        id: uuidv4(),
        title: 'Travel Agency - Dark Mode',
        liveUrl: 'https://travel-agency-sample.netlify.app',
        imgUrlEndPoint: '1L5453k/Travel-Agency-Dark-Mode',
        tag: ['sass', 'js'],
    },
    {
        id: uuidv4(),
        title: 'Construction',
        liveUrl: 'https://construction-demo.netlify.app',
        imgUrlEndPoint: 'BTFJcMC/Construction',
        tag: ['sass', 'js'],

    },
    {
        id: uuidv4(),
        title: 'Book\'s Store',
        liveUrl: 'https://book-store-sample.netlify.app',
        imgUrlEndPoint: 'CVgfYrN/Book-s-Store',
        tag: ['sass', 'js'],
    },
    {
        id: uuidv4(),
        title: 'Grocery Store',
        liveUrl: 'https://grocery-demo.netlify.app',
        imgUrlEndPoint: '0nPmQFf/Grocery-Store',
        tag: ['sass', 'js'],
    },
    {
        id: uuidv4(),
        title: 'Coffee Shop - v3',
        liveUrl: 'https://light-coffee.netlify.app',
        imgUrlEndPoint: '3px09kG/Coffee-Shop-v3',
        tag: ['sass', 'js'],
    },
    {
        id: uuidv4(),
        title: 'Demo of SASS + React UI',
        liveUrl: 'https://demo-react-sass.netlify.app',
        imgUrlEndPoint: 'gDsJFjQ/Demo-of-React-SASS',
        tag: ['sass', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Grocery Store - React UI',
        liveUrl: 'https://grocery-store-react-site.netlify.app',
        imgUrlEndPoint: 'vYPN4TS/Grocery-Store-React',
        tag: ['sass', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Mini Shopping Cart - React',
        liveUrl: 'https://mini-shopping-cart-demo.netlify.app',
        imgUrlEndPoint: 'CtKBR6d/Mini-Shopping-Cart',
        tag: ['sass', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Employ CRUD Operation - React + CSS',
        liveUrl: 'https://taiseen.github.io/employ-crud',
        imgUrlEndPoint: 'wJryngx/Employ-CRUD',
        tag: ['css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Add Location - React',
        liveUrl: 'https://add-location.netlify.app',
        imgUrlEndPoint: '7V9CkjS/add-Location',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Memories - MERN App',
        liveUrl: 'https://memories-app-bd.netlify.app',
        imgUrlEndPoint: 'kcJLhNd/memories-app-bd',
        tag: ['material-ui', 'react'],
    },
    {
        id: uuidv4(),
        title: 'E-com Cart - Next-Js',
        liveUrl: 'https://next-e-com.vercel.app',
        imgUrlEndPoint: 'THnD3Dx/next-js',
        tag: ['css', 'next-js'],
    },
    {
        id: uuidv4(),
        title: 'Real-Estate - Next-Js',
        liveUrl: 'https://real-estate-uae-app.vercel.app',
        imgUrlEndPoint: 'bb6RjHF/Next-Real-Estate',
        tag: ['chakra-ui', 'next-js'],
    },
    {
        id: uuidv4(),
        title: 'Blog App - Next-Js',
        liveUrl: 'https://blogs-demo.vercel.app',
        imgUrlEndPoint: 'g7DGgmc/Blog-App',
        tag: ['tailwind-css', 'next-js'],
    },
    {
        id: uuidv4(),
        title: 'Admin DashBoard - React',
        liveUrl: 'https://admin-dashboard-demo.netlify.app',
        imgUrlEndPoint: 'p4JJHCF/Admin-Dash-Board',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Chat App - React + NodeJs',
        liveUrl: 'https://chat-app-bd.netlify.app',
        imgUrlEndPoint: 'wdgJLdf/Chat-App',
        tag: ['react', 'node-js'],
    },
    {
        id: uuidv4(),
        title: 'User Profile - React + NodeJs',
        liveUrl: 'https://user-login-sys.netlify.app',
        imgUrlEndPoint: 'gRXYq5y/user-profile',
        tag: ['react', 'node-js'],
    },
    {
        id: uuidv4(),
        title: 'Drag-&-Drop ToDo - React + CSS',
        liveUrl: 'https://taiseen.github.io/to-do-drag-n-drop-ts',
        imgUrlEndPoint: 'N9jtKPN/Drag-Drop-To-Do',
        tag: ['css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Mini E-com - React + Tailwind-CSS',
        liveUrl: 'https://mini-e-com.netlify.app',
        imgUrlEndPoint: 'y40bJTT/Mni-E-com',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'KanBan Drag-&-Drop - React + Tailwind',
        liveUrl: 'https://kanban-bd.netlify.app',
        imgUrlEndPoint: '5Kxn747/KanBan.png',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Demo UI Profile - React + Tailwind-CSS',
        liveUrl: 'https://taiseen-tailwind.netlify.app',
        imgUrlEndPoint: 'TcNKpFY/taiseen-tailwind',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Burger UI - React + Tailwind-CSS',
        liveUrl: 'https://burger-ui.netlify.app',
        imgUrlEndPoint: 'GQtys6c/Burger-UI',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Landing Page - React + Tailwind-CSS',
        liveUrl: 'https://sledgar.netlify.app',
        imgUrlEndPoint: '8Nc3nLZ/Slideger',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'VR Landing Page - React + Tailwind',
        liveUrl: 'https://vr-page.netlify.app',
        imgUrlEndPoint: 'SB1CL77/VR-Landing-Page',
        tag: ['tailwind-css', 'react'],
    },
    {
        id: uuidv4(),
        title: 'Blog - Nextjs + Tailwind',
        liveUrl: 'https://next-simple-blog-bd.vercel.app',
        imgUrlEndPoint: 'qkCh9Kt/Blog',
        tag: ['tailwind-css', 'next-js'],
    },
    {
        id: uuidv4(),
        title: 'Employee CRUD - Nextjs + Tailwind',
        liveUrl: 'https://next-crud-employ.vercel.app',
        imgUrlEndPoint: 'JjSHKSJ/Employee-CURD',
        tag: ['tailwind-css', 'next-js'],
    },
    // {
    //     id: uuidv4(),
    //     title: 'Resume Builder - React + Tailwind',
    //     liveUrl: 'https://resumes-builder.netlify.app',
    //     imgUrlEndPoint: '00000000000000000/ResumeBuilder.png',
    //     tag: ['tailwind-css', 'react'],
    // },
];


const data = {
    userInfo,
    education,
    // skills,
    portfolio,
    mySpeech,
}


export default data;