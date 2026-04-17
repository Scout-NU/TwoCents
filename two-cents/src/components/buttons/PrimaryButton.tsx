type PrimaryButtonProps = {
    buttonColor: string;
    borderColor: string;
    textColor: string;
    buttonWidth?: string;
    buttonHeight?: string;
    fontSize?: string


  };

  const PrimaryButton = ({buttonColor, borderColor, textColor, buttonWidth, buttonHeight, fontSize}: PrimaryButtonProps) => {
    return (
        <a
        href="/join-waitlist"
        className=" whitespace-nowrap border flex items-center justify-center rounded-4xl tracking-normal"
        style={{
            backgroundColor: buttonColor,
            borderColor: borderColor,
            color: textColor,
            height: buttonHeight, 
            width: buttonWidth,
            fontSize: fontSize
        }}> Join Waitlist
        </a>
    )
}


export default PrimaryButton