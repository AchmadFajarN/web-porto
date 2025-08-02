import { User, Mail, FolderGit2, ChevronRight } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  return (
    <aside className={`fixed ${displaySidebar ? "translate-x-0" : "-translate-x-15"} transition-transform ease-in left-0 top-20 px-0 z-20`}>
      <div className="flex">
        <ul className="border bg-slate-950 rounded-r-md flex flex-col justify-evenly w-full h-full">
          <li className="p-4 cursor-pointer hover:bg-white/20 transition-colors ease-in">
            <User />
          </li>
          <li className="p-4 cursor-pointer hover:bg-white/20 transition-colors ease-in">
            <FolderGit2 />
          </li>
          <li className="p-4 cursor-pointer hover:bg-white/20 transition-colors ease-in">
            <Mail />
          </li>
        </ul>
        <div onClick={() => setDisplaySidebar(!displaySidebar)} className="bg-slate-950 cursor-pointer hover:bg-white/20 transition-colors ease-in size-8 p-2 rounded-r-md mt-8 border-t border-r border-b flex justify-center items-center">
          <ChevronRight />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
