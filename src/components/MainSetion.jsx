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
        <div className="p-5 main-section  bg-gradient-to-r from-blue-700 to-blue-400 text-neutral-200">
            {/* <div className="bg-contain bg-center bg-no-repeat bg-hero-pattern text-bold text-black-100"></div> */}
            <div className="grid gap-14">
                <div className="">
                    <p className="text-3xl" >Dave Foley</p>
                    <p className="text-lg"> For Local President</p>
                </div>
                <EmailForm getEmail={userEmail} />
            </div>
        </div>
    )
}

export default MainSection