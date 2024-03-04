import { type ReactNode } from "react";

type DashboardNavbarProps = {
  children: ReactNode;
};

const DashboardNavbar = ({ children }: DashboardNavbarProps) => {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto px-2 md:px-20 py-6">
        <nav className="relative flex justify-between items-center font-bold text-white">
          {children}
        </nav>
      </div>
    </div>
  );
};

export default DashboardNavbar;
