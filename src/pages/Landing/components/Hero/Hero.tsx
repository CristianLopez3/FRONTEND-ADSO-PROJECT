import Button from "../../../../components/ui/Button";
import { button } from "../../../../theme";
import "./hero.styles.css";

export default function Hero() {
  return (
    <section id="hero">
      <div className="flex flex-col justify-center items-center p-2 min-h-screen">
        <h1 className="text-center text-4xl md:text-6xl text-white font-bold mb-8 ">
          Welcome to MenuEASY
        </h1>
        <div className="w-full px-2 md:w-[60%] mx-auto  mb-4">
          <p className="text-center text-grayLight ">
            Discover delicious dishes made simple. From classic comfort foods to
            modern delights, indulge in flavors that will tantalize your taste
            buds. Join us for a dining experience that's easy and delightful at
            Menu Easy.
          </p>
        </div>
        <div className="w-1/2 md:1/2">
          <Button variant={button.lg_primary} content="Book" />
        </div>
      </div>
    </section>
  );
}
