import { useNavigate } from "react-router-dom";
import JoinWaitlistSubmissionButton from "../buttons/JoinWaitlistSubmissionButton";

function Waitlist() {
  const navigate = useNavigate();

  return (
    <div className="waitlist-container">
      <div className="waitlist-card">
        <h2 className="waitlist-title">
          Start spending and saving with <span className="waitlist-highlight">confidence.</span>
        </h2>
        <JoinWaitlistSubmissionButton
          buttonColor="white"
          borderColor="#FA9E4D"
          textColor="#FA9E4D"
          onClick={() => navigate('/waitlist')}
        />
      </div>
    </div>
  );
}

export default Waitlist;
