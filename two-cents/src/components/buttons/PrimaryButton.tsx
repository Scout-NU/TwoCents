type PrimaryButtonProps = {
    buttonColor: string;
    borderColor: string;
    textColor: string;

  };

const PrimaryButton = ({buttonColor, borderColor, textColor}: PrimaryButtonProps) => {
    return (
        <a
        href="/join-waitlist"
        className="px-2 pr-4 rounded-xl whitespace-nowrap border font-semibold"
        style={{backgroundColor: buttonColor,
        borderColor: borderColor,
        color: textColor}}> Join Waitlist
        </a>
    )
}

export default PrimaryButton