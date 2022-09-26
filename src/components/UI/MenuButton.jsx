function MenuButton(props) {
  return (
    <div className="menu-container my-1 w-12" onClick={props.menuClickHandler}>
      <div className="h-2 w-full rounded-md bg-slate-700 "></div>
      <div className="my-2 h-2 w-full rounded-md bg-slate-700"></div>
      <div className="h-2 w-full rounded-md bg-slate-700"></div>
    </div>
  );
}

export default MenuButton;
