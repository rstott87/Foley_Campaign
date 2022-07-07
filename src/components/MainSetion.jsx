import EmailForm from "./EmailForm"
import { useState } from "react";
import Logo from "./UI/Logo";

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
        <div className="p-5 main-section bg-gradient-to-r from-blue-500 to-white text-neutral-900">
            {/* <div className="bg-contain bg-center bg-no-repeat bg-hero-pattern text-bold text-black-100"></div> */}
            <Logo/>
            <div className="grid gap-14">

                <EmailForm getEmail={userEmail} />
            </div>
        </div>
    )
}

export default MainSection