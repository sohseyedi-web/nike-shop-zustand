import Navbar from "./Navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <section className="flex-1 min-h-screen">{children}</section>
    </>
  );
};

export default Container;
