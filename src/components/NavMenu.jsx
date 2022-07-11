function NavMenu() {
  return (
    <div className="fixed right-0 z-50 h-screen w-2/3 border-2 border-violet-600 bg-violet-900 text-center text-3xl font-bold text-white opacity-95 ">
      {" "}
      <p className="pt-10">Dave Foley</p>
      <p className="text-lg">For Local President</p>
      <ul className="pt-10 pl-8 text-left text-2xl leading-loose tracking-wider">
        <li>About</li>
        <li>Issues</li>
        <li>Contact</li>
        <li>Contribute</li>
        <li>Join</li>
      </ul>
    </div>
  );
}
export default NavMenu;
