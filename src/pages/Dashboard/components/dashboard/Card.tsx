import { type ReactNode } from "react";
import { Link } from "react-router-dom";

export type CardProps = {
  title: string;
  count: number;
  variant?: "r-right" | "r-left" | "r-top" | "r-bottom";
  icon: ReactNode;
};

const Card: React.FC<CardProps> = ({ title, count, icon, variant = "r-right" }) => {

  return (
    <article className={`${variant} w-full p-2 rounded-xl shadow-md`}>
      <div className="flex justify-between items-center mb-8">
        <Link to="/dashboard/menus">{title}</Link>
        {icon}
      </div>
      <div className="flex items-end gap-8">
        <h4 className="text-black text-3xl font-bold">32</h4>
        <p className="text-zinc-950">active {count}</p>
      </div>
    </article>
  );
};

export default Card;
