function Button(props) {
    return (
        <div className="bg-indigo-300 flex justify-center py-10">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                {props.text}
            </button>
        </div>
    )
}

export default Button;