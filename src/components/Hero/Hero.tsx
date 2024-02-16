import Button from "../ui/Button";
import { button } from "../../theme";
import "./hero.styles.css";

const Hero = () => {
  return (
    <section id="hero" className="mb-16">
      <div
        className="flex flex-col justify-center items-center p-2 min-h-screen"
        id="super-hero"
      >
        <div className="center">
          <h1 className="text-center text-3xl md:text-5xl text-white font-bold mb-8 ">
            Welcome to MenuEASY
          </h1>
          <div className="w-full px-2 md:w-[60%] mx-auto  mb-4">
            <p className="text-center text-grayLight ">
              Discover delicious dishes made simple. From classic comfort foods
              to modern delights, indulge in flavors that will tantalize your
              taste buds. Join us for a dining experience that's easy and
              delightful at Menu Easy.
            </p>
          </div>
          <div className="block mx-auto w-1/2 md:w-1/4">
            <Button variant={`${button.lg_primary} mx-0`} content="Book" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
