import profile1 from '../assets/project1.png';
import profile2 from '../assets/project2.png';
import profile3 from '../assets/project3.png';
// RAG
import rag1 from '../assets/readAndGift/rag1.png';
import rag2 from '../assets/readAndGift/rag2.png';
import rag3 from '../assets/readAndGift/rag3.png';
import rag4 from '../assets/readAndGift/rag4.png';
import rag5 from '../assets/readAndGift/rag5.png';
import rag6 from '../assets/readAndGift/rag6.png';

// wpnh
import wpnh1 from '../assets/webPesantren/wpnh1.png'
import wpnh2 from '../assets/webPesantren/wpnh2.png'
import wpnh3 from '../assets/webPesantren/wpnh3.png'
import wpnh4 from '../assets/webPesantren/wpnh4.png'
import wpnh5 from '../assets/webPesantren/wpnh5.png'
import wpnh6 from '../assets/webPesantren/wpnh6.png'

// wp
import wp1 from '../assets/webPorto/wp1.png';
import wp2 from '../assets/webPorto/wp2.png';
import wp3 from '../assets/webPorto/wp3.png';
import wp4 from '../assets/webPorto/wp4.png';
import wp5 from '../assets/webPorto/wp5.png';
import wp6 from '../assets/webPorto/wp6.png';
import wp7 from '../assets/webPorto/wp7.png';

// Certificate
import dcDasarSoftware from '../assets/certificates/dcDasarSoftware.png';
import dcProgramLogic from '../assets/certificates/dcProgramLogic.png';
import dcGit from '../assets/certificates/dcGit.png';
import dcDasarWeb from '../assets/certificates/dcDasarWeb.png';
import dcJsDasar from '../assets/certificates/dcJsDasar.png';
import dcFePemula from '../assets/certificates/dcFePemula.png';
import dcReactPemula from '../assets/certificates/dcReactPemula.png';
import dcFundamentalReact from '../assets/certificates/dcFundamentalReact.png';
import dcBePemula from '../assets/certificates/dcBePemula.png';
import dcBeFundamental from '../assets/certificates/dcBeFundamental.png';
import cpStateManagement from '../assets/certificates/cpStateManagement.png'; 
import dcRbE from '../assets/certificates/dcRbE.png';

const data =  [
    {
        id: '1',
        name: "Read And Gift",
        description: "Read And Gift is a web app for book sharing and donations, built with React, Tailwind CSS, Hapi.js, and PostgreSQL.",
        status: "Complete",
        tools: ["React", "Postgres", "Happi JS" ],
        image: profile1,
        screenshoot: [rag1, rag2, rag3, rag4, rag5, rag6],
        repositories: 'https://github.com/AchmadFajarN/Read-and-Gift',
        fullDescription: `Read And Gift is a collaborative web application designed to bring book donations and reviews together in one seamless platform. Users can share books along with their reviews, as well as donate books to others within the community. The project emphasizes an intuitive interface, smooth user experience, and efficient interaction flow. Built with React and styled using Tailwind CSS, the application delivers a responsive and visually appealing frontend. The backend is powered by Hapi.js, with PostgreSQL serving as the primary database to ensure reliable and structured data management. This combination of technologies enables both scalability and maintainability for future development.`
    },
    {
        id: '2',
        name: "Web Pesantren Nurul Hikmah",
        description: "The official pesantren website highlighting its vision, programs, activities, facilities, and online registration.",
        status: "In Progres",
        tools: ["React", "Golang", "Postgres"],
        image: wpnh3,
        screenshoot: [wpnh1, wpnh2, wpnh3, wpnh4, wpnh5, wpnh6],
        repositories: 'https://github.com/AchmadFajarN/website_pesantren',
        fullDescription: `Collaboratively developed a responsive and user-friendly website for an Islamic boarding school, working closely with the client to align with their needs. The frontend was built using React.js, Tailwind CSS, and Framer Motion, featuring a modern UI with smooth animations for an engaging user experience. On the backend, Golang and PostgreSQL were implemented to ensure reliable performance, scalability, and secure data management. The project emphasized clarity, efficiency, and visual appeal across all devices.`
    },
    {
        id: '3',
        name: "Web Porto",
        description: "A personal website showcasing projects, skills, experiences, and achievements, built with React.js, Tailwind CSS, and Framer Motion",
        status: "Complete",
        tools: ["React", "Tailwind", "Framer Motion"],
        image: wp1,
        repositories: 'https://github.com/AchmadFajarN/web-porto',
        screenshoot: [wp1, wp2, wp3, wp4, wp5, wp6, wp7],
        fullDescription: "This portfolio website was developed to showcase personal projects, skills, experiences, and achievements in a modern and engaging way. Built with React.js, Tailwind CSS, and Framer Motion, it delivers a responsive design, smooth animations, and a user-friendly interface accessible across devices. React Router DOM was used for seamless navigation between pages, while a dark and light mode feature was implemented using React’s useContext to enhance accessibility and personalization. The website highlights both creativity and professionalism, serving as a digital profile that reflects technical expertise and design sense."
    }
]

const certificates = [
    {
        id: 0,
        title: 'Graduation Certication for bootcamp React And BackEnd',
        academy: 'Dicoding',
        release: 'Agustus 2025',
        credentials: 'https://drive.google.com/file/d/1R_6w34gsQE0uD2jhNNJDu15L5QrPWrbq/view?usp=sharing',
        image: dcRbE,
        display: true
    },
    {
        id: 1,
        title: 'Mengenal Dasar Pemrograman Untuk Pengembang Software',
        academy: 'Dicoding',
        exp: 'April 2028',
        credentials: 'https://www.dicoding.com/certificates/4EXGVG4D1XRL',
        image: dcDasarSoftware,
        display: true
    },
    {
        id: 2,
        title: 'Pengenalan Ke Logika Pemrograman (Programing Logic 101)',
        academy: 'Dicoding',
        exp: 'April 2028',
        credentials: 'https://www.dicoding.com/certificates/4EXGVGQYGXRL',
        image: dcProgramLogic,
        display: false
    },
    {
        id: 3,
        title: 'Belajar Dasar Git Dan Github',
        academy: 'Dicoding',
        exp: 'April 2028',
        credentials: 'https://www.dicoding.com/certificates/QLZ93ENMMZ5D',
        image: dcGit,
        display: true
    },
    {
        id: 4,
        title: 'Belajar Pemrograman Dasar Web',
        academy: 'Dicoding',
        exp: 'April 2028',
        credentials: 'https://www.dicoding.com/certificates/2VX3KEQD3XYQ',
        image: dcDasarWeb,
        display: true
    },
    {
        id: 5,
        title: 'Belajar Dasar Pemrograman Javascript',
        academy: 'Dicoding',
        exp: 'April 2028',
        credentials: 'https://www.dicoding.com/certificates/ERZRE8L7NXYV',
        image: dcJsDasar,
        display: true
    },
    {
        id: 6,
        title: 'Belajar Membuat Frontend Untuk Pemula',
        academy: 'Dicoding',
        exp: 'April 2028',
        credentials: 'https://www.dicoding.com/certificates/0LZ0R0GV3P65',
        image: dcFePemula,
        display: false
    },
    {
        id: 7,
        title: 'Belajar Membuat Aplikasi Menggunakan React',
        academy: 'Dicoding',
        exp: 'Mei 2028',
        credentials: 'https://www.dicoding.com/certificates/ERZREOK7QXYV',
        image: dcReactPemula,
        display: false
    },
    {
        id: 8,
        title: 'Belajar Fundamental Aplikasi Web Menggunakan React',
        academy: 'Dicoding',
        exp: 'Mei 2028',
        credentials: 'https://www.dicoding.com/certificates/72ZD5G24LZYW',
        image: dcFundamentalReact,
        display: false
    },
    {
        id: 9,
        title: 'Belajar Backend Pemula Dengan Javascript',
        academy: 'Dicoding',
        exp: 'Mei 2028',
        credentials: 'https://www.dicoding.com/certificates/JLX19OJRNP72',
        image: dcBePemula,
        display: false
    },
    {
        id: 10,
        title: 'Belajar Fundamental Backend Menggunakan Javascript',
        academy: 'Dicoding',
        exp: 'Juli 2028',
        credentials: 'https://www.dicoding.com/certificates/ERZR29RROPYV',
        image: dcBeFundamental,
        display: false
    },
    {
        id: 11,
        title: 'React.js State Management - Panduan Menggunakan State yg Baik dalam program Kelas Online CODEPOLITAN.',
        academy: 'Codepolitan',
        exp: 'Maret 2028',
        credentials: 'https://codepolitan.com/c/YTUWZDZ',
        image: cpStateManagement,
        display: true
    }
]

// project

const getAllProject = () => {
    return data;
}

const getProjectById = (id) => {
    return data.find((d) => d.id === id);
}

// certificate
const getAllCertificate = () => {
    return certificates;
}

const getDisplayCertificate = () => {
    return certificates.filter((certificate) => certificate.display);
}

export { getAllProject, getProjectById, getAllCertificate, getDisplayCertificate };