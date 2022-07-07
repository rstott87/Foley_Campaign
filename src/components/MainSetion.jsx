import EmailForm from "./EmailForm"
import { useState } from "react";

const placeholderUser = [
    {
        name: 'John Placeholder Smith',
        email: 'Jsmith@placeholder.com',
        agency: 'CSE'
    },
    {
        name: 'Brian Placeholder Brown',
        email: 'Brownh@placeholder.com',
        agency: 'DDS'
    },
]

function MainSection() {
    const [submittedUser, setSubmittedUser] = useState(placeholderUser)

    const userEmail = (user) => {
        setSubmittedUser(prevUser => {
            return [user, ...prevUser]
        })
    }

    return (
        <div className="main-section flex justify-center bg-gradient-to-r from-blue-600 to-blue-300">
            <div className="text-bold text-neutral-50">
            <div className="p-5">
                <p className="text-3xl" >Dave Foley</p>
                <p className="text-lg"> For Local President</p>
            </div>
                <div className="backdrop-invert-40 p-5 ">
                    <img className= "opacity-60"src="./src/images/Dave_headshot.jpeg"></img>
                </div>
                <p className="text-center font-bold text-2xl">Join Our Campaign</p>
                <p className="text-center text-sm">For info and upates</p>
                <EmailForm getEmail={userEmail} />
            </div>
        </div>
    )
}

export default MainSection