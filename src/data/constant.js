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

const data =  [
    {
        id: '1',
        name: "Read And Gift",
        description: "Read And Gift is a web app for book sharing and donations, built with React, Tailwind CSS, Hapi.js, and PostgreSQL.",
        status: "In Progress",
        tools: ["React", "Postgres", "Happi JS" ],
        image: profile1,
        screenshoot: [rag1, rag2, rag3, rag4, rag5, rag6],
        fullDescription: `Read And Gift is a collaborative web application designed to bring book donations and reviews together in one seamless platform. Users can share books along with their reviews, as well as donate books to others within the community. The project emphasizes an intuitive interface, smooth user experience, and efficient interaction flow. Built with React and styled using Tailwind CSS, the application delivers a responsive and visually appealing frontend. The backend is powered by Hapi.js, with PostgreSQL serving as the primary database to ensure reliable and structured data management. This combination of technologies enables both scalability and maintainability for future development.`
    },
    {
        id: '2',
        name: "Project Beta",
        description: "Read And Gift is a web app for book sharing and donations, built with React, Tailwind CSS, Hapi.js, and PostgreSQL.",
        status: "Planned",
        tools: ["EJS", "Express", "Postgres"],
        image: profile2,
        screenshoot: [rag1, rag2, rag3, rag4, rag5, rag6],
        fullDescription: `Read And Gift is a collaborative web application designed to bring book donations and reviews together in one seamless platform. Users can share books along with their reviews, as well as donate books to others within the community. The project emphasizes an intuitive interface, smooth user experience, and efficient interaction flow. Built with React and styled using Tailwind CSS, the application delivers a responsive and visually appealing frontend. The backend is powered by Hapi.js, with PostgreSQL serving as the primary database to ensure reliable and structured data management. This combination of technologies enables both scalability and maintainability for future development.`
    },
    {
        id: '3',
        name: "Project Gamma",
        description: "Read And Gift is a web app for book sharing and donations, built with React, Tailwind CSS, Hapi.js, and PostgreSQL.",
        status: "Complete",
        tools: ["React", "Tailwind", "Framer Motion"],
        image: profile3,
        screenshoot: [rag1, rag2, rag3, rag4, rag5, rag6],
        fullDescription: `Read And Gift is a collaborative web application designed to bring book donations and reviews together in one seamless platform. Users can share books along with their reviews, as well as donate books to others within the community. The project emphasizes an intuitive interface, smooth user experience, and efficient interaction flow. Built with React and styled using Tailwind CSS, the application delivers a responsive and visually appealing frontend. The backend is powered by Hapi.js, with PostgreSQL serving as the primary database to ensure reliable and structured data management. This combination of technologies enables both scalability and maintainability for future development.`
    }
]

const certificates = [
    {
        id: 1,
        title: 'Mengenal Dasar Pemrograman Untuk Pengembang Software',
        academy: 'Dicoding',
        time: 'April 2025',
        credentials: 'https://www.dicoding.com/certificates/4EXGVG4D1XRL',
        image: dcDasarSoftware,
        display: true
    },
    {
        id: 2,
        title: 'Pengenalan Ke Logika Pemrograman (Programing Logic 101)',
        academy: 'Dicoding',
        time: 'April 2025',
        credentials: 'https://www.dicoding.com/certificates/4EXGVGQYGXRL',
        image: dcProgramLogic,
        display: true
    },
    {
        id: 3,
        title: 'Belajar Dasar Git Dan Github',
        academy: 'Dicoding',
        time: 'April 2025',
        credentials: 'https://www.dicoding.com/certificates/QLZ93ENMMZ5D',
        image: dcGit,
        display: true
    },
    {
        id: 4,
        title: 'Belajar Pemrograman Dasar Web',
        academy: 'Dicoding',
        time: 'April 2025',
        credentials: 'https://www.dicoding.com/certificates/2VX3KEQD3XYQ',
        image: dcDasarWeb,
        display: true
    },
    {
        id: 5,
        title: 'Belajar Dasar Pemrograman Javascript',
        academy: 'Dicoding',
        time: 'April 2025',
        credentials: 'https://www.dicoding.com/certificates/ERZRE8L7NXYV',
        image: dcJsDasar,
        display: true
    },
    {
        id: 6,
        title: 'Belajar Membuat Frontend Untuk Pemula',
        academy: 'Dicoding',
        time: 'April 2025',
        credentials: 'https://www.dicoding.com/certificates/0LZ0R0GV3P65',
        image: dcFePemula,
        display: true
    },
    {
        id: 7,
        title: 'Belajar Membuat Aplikasi Menggunakan React',
        academy: 'Dicoding',
        time: 'Mei 2025',
        credentials: 'https://www.dicoding.com/certificates/ERZREOK7QXYV',
        image: dcReactPemula,
        display: false
    },
    {
        id: 8,
        title: 'Belajar Fundamental Aplikasi Web Menggunakan React',
        academy: 'Dicoding',
        time: 'Mei 2025',
        credentials: 'https://www.dicoding.com/certificates/72ZD5G24LZYW',
        image: dcFundamentalReact,
        display: false
    },
    {
        id: 9,
        title: 'Belajar Backend Pemula Dengan Javascript',
        academy: 'Dicoding',
        time: 'Mei 2025',
        credentials: 'https://www.dicoding.com/certificates/JLX19OJRNP72',
        image: dcBePemula,
        display: false
    },
    {
        id: 10,
        title: 'Belajar Fundamental Backend Menggunakan Javascript',
        academy: 'Dicoding',
        time: 'Juli 2025',
        credentials: 'https://www.dicoding.com/certificates/ERZR29RROPYV',
        image: dcBeFundamental,
        display: false
    },
    {
        id: 11,
        title: 'React.js State Management - Panduan Menggunakan State yg Baik dalam program Kelas Online CODEPOLITAN.',
        academy: 'Codepolitan',
        time: 'Maret 2025',
        credentials: 'https://codepolitan.com/c/YTUWZDZ',
        image: cpStateManagement,
        display: false
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