import JoinWaitlistSubmissionButton from "../components/buttons/JoinWaitlistSubmissionButton";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import './JoinWaitlist.css';

function JoinWaitlist() {
    const[submitted, setSubmitted] = useState(false);
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from("waitlist")
            .insert([
                {
                    first_name: firstName,
                    last_name: lastName,
                    email: email
                }
            ]);

            // clear input forms after submission
            if (!error) {
                setSubmitted(true);
                setFirstName("");
                setLastName("");
                setEmail("");
            }
    };

    return (
        <div className="relative">

            {/* Heading */}
            <div className="joinwaitlist-hero">
                <h1 className="joinwaitlist-title">Join the community!</h1>
                <p className="joinwaitlist-subtitle">
                    Start spending and saving with{" "}
                    <span className="joinwaitlist-confidence">confidence.</span>
                </p>
            </div>

            {/* Mascot + Card container */}
            <div className="relative flex justify-center items-end mt-15 mb-20">

            {/* Form Card + Cento wrapper */}
            <div className="relative">

            {/* Cento Mascot — absolutely positioned relative to the form wrapper */}
            <img src="/images/cento-holding.png" alt="Cento Holding"
                className="hidden md:block absolute md:right-[calc(100%-335px)] lg:right-[calc(100%-410px)] md:-bottom-16 md:w-[620px] lg:w-[760px] max-w-none z-[60]"/>

            {/* Form Card */}
            <form onSubmit={handleSubmit} className="relative z-50">
                <div className="bg-white rounded-3xl shadow-lg p-12 w-100 relative z-50 text-left">
                    <div className="mb-6">
                    <label className="font-bold text-black block mb-2 text-lg">First Name</label>
                    <input className="w-full border border-gray-200 rounded-full px-4 py-2 bg-gray-50 text-sm" placeholder="Your first name"
                        value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>
                    <div className="mb-6">
                    <label className="font-bold text-black block mb-2 text-lg">Last Name</label>
                    <input className="w-full border border-gray-200 rounded-full px-4 py-2 bg-gray-50 text-sm" placeholder="Your last name"
                        value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="mb-8">
                    <label className="font-bold text-black block mb-2 text-lg">Email</label>
                    <input className="mb-3 w-full border border-gray-200 rounded-full px-4 py-2 bg-gray-50 text-sm" placeholder="Your email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    {/* "Join Waitlist" button */}
                    <div className="flex justify-end">
                        <JoinWaitlistSubmissionButton buttonColor="white" borderColor="#FA9E4D" textColor="#FA9E4D" />
                    </div>
                </div>
            </form>
            </div> {/* end form+cento wrapper */}
            </div>

            {/* Hill Background */}
            <div className="full-width -mt-10 overflow-hidden h-[95vh] absolute top-57 left-0 w-full -z-10">
                <img src="/images/Home Screen Layered Hill 1.svg" alt="Hill Background"
                className="w-full object-cover object-top"/>
            </div>

            {submitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                <div className="bg-white p-8 rounded-2xl shadow-xl text-center w-80">
                    <h2 className="text-xl font-black mb-4">You've signed up 🎉</h2>
                    <p className="mb-6 text-gray-600">
                        Thanks for joining the waitlist - <br />
                        we'll keep you in the loop about TwoCents!
                    </p>

                    <button
                        style={{ backgroundColor: "orange" }}
                        className="mt-6 text-white px-6 py-2 rounded-full cursor-pointer transition-all hover:opacity-80 active:scale-95"
                        onClick={() => setSubmitted(false)}
                    >
                        Close
                    </button>
                </div>
            </div>
        )}
        </div>
    );
}

export default JoinWaitlist;
