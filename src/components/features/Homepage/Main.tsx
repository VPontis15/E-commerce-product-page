import ProductColumn from "../ProductColumn";

const Main: React.FC = () => {
  return (
    <main className=" grid h-full min-h-[80vh] grid-cols-2 items-center    px-10">
      <span></span>
      {/* <section>
        <h4 className=" text-xs font-semibold  uppercase tracking-wider text-accent-clr">
          Sneaker Company
        </h4>
        <h1 className=" text-3xl font-bold capitalize text-heading-clr">
          Fall Limitied Edition Sneakers
        </h1>
        <p>These low-profile sneakers are</p>
      </section> */}
      <ProductColumn />
    </main>
  );
};

export default Main;
