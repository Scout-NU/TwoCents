import { Rating } from "react-simple-star-rating";

type CardSize = "sm" | "md" | "lg";

const sizeStyles = {
  sm: { card: "w-80 p-4 gap-4 min-h-24", text: "text-sm", col: "w-32", starSize: 12 },
  md: { card: "w-120 p-6 gap-6 min-h-36", text: "text-xl", col: "w-44", starSize: 16 },
  lg: { card: "w-160 p-8 gap-8 min-h-48", text: "text-2xl", col: "w-56", starSize: 20 },
};

interface RatingProps {
  rating: number;
  user: string;
  description: string;
  size?: CardSize;
}

const RatingCard = ({ rating, user, description, size = "md" }: RatingProps) => {
  const s = sizeStyles[size];
  return (
    <div className={`rounded-2xl border flex drop-shadow-2xl items-center ${s.card}`}>
      <div className={`flex flex-col justify-center items-center shrink-0 ${s.col}`}>
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-3 h-3 rounded-full bg-blue-400 shrink-0" />
          <span className={`${s.text} break-all`}>{user}</span>
        </div>
        <div className="flex items-center justify-center">
          <Rating
            size={s.starSize}
            initialValue={rating}
            readonly
            allowFraction
          />
        </div>
      </div>
      <div className={`font-light leading-snug ${s.text}`}>
        "{description}"
      </div>
    </div>
  );
};

export default RatingCard;