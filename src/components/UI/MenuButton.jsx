function MenuButton(props) {
  return (
    <div className="menu-container " onClick={props.menuClickHandler}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="menu-button h-12 w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </div>
  );
}

export default MenuButton;
