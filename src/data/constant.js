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

const getAllProject = () => {
    return data;
}

const getProjectById = (id) => {
    return data.find((d) => d.id === id);
}

export { getAllProject, getProjectById };