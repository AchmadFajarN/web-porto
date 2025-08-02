import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project2.png";
import dataProject from "../data/constant";
import Card from "./Card";

const Project = () => {
  const data = dataProject(project1, project2, project3);

  return (
    <div className="mt-50 px-4 xl:px-16">
      <h1 className="text-xl md:text-2xl font-bold my-8">Project</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 my-2">
        {data.map((key, index) => (
          <Card
            key={index}
            image={key.image}
            name={key.name}
            description={key.description}
            status={key.status}
            tools={key.tools}
            duration={index + 5}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
