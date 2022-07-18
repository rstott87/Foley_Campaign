function Button(props) {
  return (
    <div className="flex justify-center bg-indigo-300 py-10">
      <button className="rounded border border-blue-700 bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
        {props.text}
      </button>
    </div>
  );
}

export default Button;
