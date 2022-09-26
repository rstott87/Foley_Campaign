function MenuButton(props) {
  return (
    <div className="menu-container my-1 w-12" onClick={props.menuClickHandler}>
      <div
        className={`h-2 w-full rounded-md bg-slate-700  ${
          props.menuOpen ? "rotate-45 duration-500" : "rotate-0 duration-500"
        }`}
      ></div>
      <div
        className={`my-2 h-2 w-full rounded-md bg-slate-700
      ${
        props.menuOpen
          ? "bg-transparent duration-500 "
          : "bg-slate-700 duration-500"
      } `}
      ></div>
      <div
        className={`h-2 w-full rounded-md bg-slate-700  ${
          props.menuOpen ? "-rotate-45 duration-500" : "rotate-0 duration-500"
        }`}
      ></div>
    </div>
  );
}

export default MenuButton;
