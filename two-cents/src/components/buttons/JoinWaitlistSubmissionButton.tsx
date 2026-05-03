import { useState } from "react";

type JoinWaitlistSubmissionButtonProps = {
    buttonColor: string;
    borderColor: string;
    textColor: string;
};

const JoinWaitlistSubmissionButton = ({ buttonColor, borderColor, textColor }: JoinWaitlistSubmissionButtonProps) => {
    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);

    const getBackground = () => {
        if (pressed) return 'linear-gradient(0deg, rgba(249, 198, 105, 0.27) 0%, rgba(249, 198, 105, 0.27) 100%), #FFF';
        if (hovered) return 'linear-gradient(0deg, #FA9E4D 0%, #FA9E4D 100%), #FFF';
        return buttonColor;
    };

    return (
        <button
            type="submit"
            className="whitespace-nowrap font-semibold cursor-pointer"
            style={{
                display: 'inline-flex',
                padding: '6px 16px',
                alignItems: 'center',
                flexShrink: 0,
                borderRadius: '30px',
                border: `1px solid ${borderColor}`,
                background: getBackground(),
                color: hovered && !pressed ? '#FFF' : textColor,
                transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => { setHovered(false); setPressed(false); }}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
        >
            Join Waitlist
        </button>
    );
};

export default JoinWaitlistSubmissionButton;
