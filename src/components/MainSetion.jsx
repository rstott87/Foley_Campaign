import EmailForm from "./EmailForm"

function MainSection() {

    return (
        <div className="main-section flex justify-center bg-blue-500">
            <div className="my-36 text-bold text-neutral-50">
                <p className="text-center text-2xl">DAVE FOLEY</p>
                <p className="text-center">Join Our Campaign</p> 
                <p className="text-center text-sm">For info and upates</p>
                  <EmailForm/>
            </div>
        </div>
    )
}

export default MainSection