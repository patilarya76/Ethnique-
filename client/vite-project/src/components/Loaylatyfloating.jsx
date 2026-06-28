import { Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useLoyalty } from "../context/LoyaltyContext";

function LoyaltyFloating() {
  const { points } = useLoyalty();

  return (
    <Link
      to="/loyalty"
      className="
        fixed
        bottom-6
        right-6
        z-50
        bg-[#8B1E3F]
        text-white
        px-4
        py-3
        rounded-full
        shadow-lg
        flex
        items-center
        gap-2
        hover:scale-105
        transition
      "
    >
      <Gift size={20} />
      <span>{points} pts</span>
    </Link>
  );
}

export default LoyaltyFloating;