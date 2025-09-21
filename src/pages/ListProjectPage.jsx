import ListProject from "../components/ListProject"
import { getAllProject } from "../data/constant"
const ListProjectPage = () => {
  const projects = getAllProject();  
  return (
    <div className="w-full min-h-screen p-2 py-20 px-4 xl:p-20">
        <ListProject data={projects} />
    </div>
  )
}

export default ListProjectPage