const dataProject = (profile1, profile2, profile3) => [
    {
        id: 1,
        name: "Project Alpha",
        description: "A groundbreaking project focused on AI development.",
        status: "In Progress",
        tools: ["React", "Postgres", "Happi JS" ],
        image: profile1
    },
    {
        id: 2,
        name: "Project Beta",
        description: "An innovative project aimed at improving healthcare systems.",
        status: "Planned",
        tools: ["EJS", "Express", "Postgres"],
        image: profile2
    },
    {
        id: 3,
        name: "Project Gamma",
        description: "A research project exploring renewable energy solutions.",
        status: "Completed",
        tools: ["React", "Tailwind", "Framer Motion"],
        image: profile3
    }
]

export default dataProject;