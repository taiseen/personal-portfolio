const mySpeech = ` I'm very curious & passionate about web technology & also a dedicated learner of new technology. By
learning new knowledge I try to serve other peoples that how can I add value in their life through
my learning skills.`;


const userInfo = {
    Name: 'Md. Taiseen Azam',
    Qualification: 'B.Sc. in Computer Science & Engineering',
    Post: 'Fullstack Developer',
    Language: 'English, Bangla, Hindi, Urdu',
}

const education = [
    {
        year: '2008 - 2007',
        level: 'SSC',
        institute: 'Hamidullah High School',
        city: 'Chapai Nawabgonj',
        link: 'https://rahahisc.edu.bd'
    },
    {
        year: '2010 - 2008',
        level: 'HSC',
        institute: 'Nawabganj Government College',
        city: 'Chapai Nawabgonj',
        link: 'https://www.ngcc.edu.bd/en/about'
    },
    {
        year: '2016 - 2011',
        level: 'Diploma in Computer',
        institute: 'National Polytechnic Institute',
        city: 'Dhaka',
        link: 'https://npi.edu.bd'
    },
    {
        year: '2021 - 2017',
        level: 'B.Sc in CSE',
        institute: 'Daffodil International University',
        city: 'Dhaka',
        link: 'https://daffodilvarsity.edu.bd'
    },
];

const navbarMenu = [
    { path: '#home', link: 'Home' },
    { path: '#works', link: 'Works' },
    { path: '#about', link: 'About' },
    { path: '#education', link: 'Education' },
    // { path: '#skills', link: 'Skills' },
    { path: '#contact', link: 'Contact' },
]

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

const data = {
    mySpeech,
    userInfo,
    education,
    navbarMenu,
    // skills,
}


export default data;