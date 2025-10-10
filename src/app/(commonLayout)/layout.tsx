import Navbar from "../../components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col h-screen">
      <Navbar />
      <div className="h-full">{children}</div>
      <div>Footer</div>
    </div>
  );
};

export default CommonLayout;
