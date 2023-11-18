import Navbar from "./Navbar";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <Navbar />
      <main className="flex-1 min-h-screen">{children}</main>
    </section>
  );
};

export default Container;
