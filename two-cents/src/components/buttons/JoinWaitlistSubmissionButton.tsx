type JoinWaitlistSubmissionButtonProps = {
    buttonColor: string;
    borderColor: string;
    textColor: string;

  };

const JoinWaitlistSubmissionButton = ({buttonColor, borderColor, textColor}: JoinWaitlistSubmissionButtonProps) => {
    
    return (
        <button
            type="submit" 
            className="px-2 pr-4 rounded-xl whitespace-nowrap border font-semibold cursor-pointer transition-all hover:opacity-80 active:scale-95"
            style={{
                backgroundColor: buttonColor,
                borderColor: borderColor,
                color: textColor
            }}
        >
            Join Waitlist
        </button>
    );
};

export default JoinWaitlistSubmissionButton