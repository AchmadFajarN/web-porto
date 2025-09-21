const UlNav = ({
  homeTarget,
  projectTarget,
  experienceTarget,
  aboutTarget,
  locale,
  active,
  setActive,
  className
}) => {
   const handlerScroll = (target) => {
    target.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(!active)
  };  
  return (
    <ul
      className={`flex  md:flex-row absolute md:static top-16 py-8 ${
        locale === "light" ? "bg-gray-50" : "bg-slate-900"
      } shadow-xl left-0 right-0 flex-col w-full gap-4 items-center ${ !active ? '-translate-y-100' : '-translate-y-0' } md:-translate-0 md:py-0 md:bg-transparent md:shadow-none origin-top-right-left transition-transform duration-300 ease-in-out`}
    >
      <li
        onClick={() => handlerScroll(homeTarget)}
        className={`hover:text-yellow-500 ${
          locale === "light" && "text-gray-700"
        } cursor-pointer transition-colors ease-in`}
      >
        Home
      </li>
      <li
        onClick={() => handlerScroll(projectTarget)}
        className={`hover:text-yellow-500 ${
          locale === "light" && "text-gray-700"
        } cursor-pointer transition-colors ease-in`}
      >
        Project
      </li>
      <li
        onClick={() => handlerScroll(experienceTarget)}
        className={`hover:text-yellow-500 ${
          locale === "light" && "text-gray-700"
        } cursor-pointer transition-colors ease-in`}
      >
        experience
      </li>
      <li
        onClick={() => handlerScroll(aboutTarget)}
        className={`hover:text-yellow-500 ${
          locale === "light" && "text-gray-700"
        } cursor-pointer transition-colors ease-in`}
      >
        About
      </li>
    </ul>
  );
};

export default UlNav;
