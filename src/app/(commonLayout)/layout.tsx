import Navbar from "../../components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Navbar />
      <div className="h-full">{children}</div>
      <div className="h-96">Footer</div>
    </div>
  );
};

export default CommonLayout;
