import PrimaryButton from "../buttons/PrimaryButton";

function JoinWaitlist() {
    
    return (
        <div className="relative">

            { /*Title */} 
            <div className="mt-20">
                <h1 className="font-black text-black"> Join the community! </h1>
            </div>
    
            { /*Sub-heading */} 
            <div className="mt-10">
                <p className="font-bold text-2xl text-black">
                    Start spending and saving with <span style={{fontStyle: 'italic'}}>confidence</span>.
                </p>
            </div>
    
            {/* Cento Mascot
            <div className="flex justify-center">
                <img src="/images/cento-holding.png" alt="Cento Holding"
                    className=""/>
            </div> */}

            {/* Mascot + Card container */}
            <div className="relative flex justify-center items-end mt-15 mb-20">
            
            {/* Cento Mascot */}
            <img src="/images/cento-holding.png" alt="Cento Holding"
                className="absolute -left-15 md:left-[11%] lg:left-[7%] bottom-0 w-95 md:w-110 lg:w-125 z-10"/>

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-lg p-12 w-100 z-0 text-left">
                <div className="mb-6">
                <label className="font-bold text-black block mb-2 text-lg">First Name</label>
                <input className="w-full border border-gray-200 rounded-full px-4 py-2 bg-gray-50 text-sm" placeholder="Your first name" />
                </div>
                <div className="mb-6">
                <label className="font-bold text-black block mb-2 text-lg">Last Name</label>
                <input className="w-full border border-gray-200 rounded-full px-4 py-2 bg-gray-50 text-sm" placeholder="Your last name" />
                </div>
                <div className="mb-8">
                <label className="font-bold text-black block mb-2 text-lg">Email</label>
                <input className="mb-3 w-full border border-gray-200 rounded-full px-4 py-2 bg-gray-50 text-sm" placeholder="Your email" />
                </div>

                {/* "Join Waitlist" button */}
                <div className="flex justify-end">
                    <PrimaryButton buttonColor={"orange"} borderColor={"orange"} textColor={"white"}/>
                </div>
            </div>
            </div>
    
            {/* Hill Background */}
            <div className="full-width -mt-10 overflow-hidden h-[95vh] absolute top-57 left-0 w-full -z-10">
                <img src="/images/Home Screen Layered Hill 1.svg" alt="Hill Background"
                className="w-full object-cover object-top"/>
            </div>
        </div>
    );
}

export default JoinWaitlist;