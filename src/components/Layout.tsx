import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" text-accent-light font-ff-main max-w-[75rem] py-8 mx-auto">
      {children}
    </div>
  );
};

export default Layout;
