import Navbar from "./Navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <Navbar />
      <main className="h-screen flex-1 overflow-y-auto">{children}</main>
    </section>
  );
};

export default Container;
