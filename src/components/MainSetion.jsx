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
        <div className="main-section flex justify-center bg-gradient-to-r from-blue-500 to-cyan-400">
            <div className="my-36 text-bold text-neutral-50">
                <div className="text-3xl m-20">DAVE FOLEY</div>
                <p className="text-center font-bold text-2xl">Join Our Campaign</p>
                <p className="text-center text-sm">For info and upates</p>
                <EmailForm getEmail={userEmail} />
            </div>
        </div>
    )
}

export default MainSection