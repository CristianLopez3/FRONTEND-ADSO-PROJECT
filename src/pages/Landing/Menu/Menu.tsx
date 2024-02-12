import MenuNav from "./MenuNav";

export default function Menu() {
  return (
    <section className="pt-2 dark:bg-secondary text-white">
      <div className="container mx-auto">
        <h2>Menu</h2>
        <MenuNav />
      </div>
    </section>
  );
}
