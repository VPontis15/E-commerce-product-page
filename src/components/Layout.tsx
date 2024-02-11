import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" mx-auto max-w-[75rem] p-8 font-ff-main text-main">
      {children}
    </div>
  );
};

export default Layout;
