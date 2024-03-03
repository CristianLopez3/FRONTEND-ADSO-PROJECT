import { LuBadgeX, LuBadgeAlert, LuBadgeCheck } from "react-icons/lu";

type AlertProps = {
  title: string;
  description: string;
  mode: "danger" | "warning" | "success";
};

const Alert: React.FC<AlertProps> = ({ title, description, mode }) => {
  const styles = {
    success: {
      class:
        "bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md",
      icon: (
        <LuBadgeCheck className="fill-current h-6 w-6 text-teal-500 mr-4" />
      ),
    },
    danger: {
      class:
        "bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md",
      icon: <LuBadgeX className="fill-current h-6 w-6 text-red-500 mr-4" />,
    },
    warning: {
      class:
        "bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md",
      icon: (
        <LuBadgeAlert className="fill-current h-6 w-6 text-yellow-500 mr-4" />
      ),
    },
  };
  return (
    <div className={styles[mode].class} role="alert">
      <div className="flex">
        <div className="py-1">
          <span>{styles[mode].icon}</span>
        </div>
        <div>
          <p className="font-bold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
