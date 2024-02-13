import heroImg from "../../../../assets/hero.jpg";
import Button from "../../../../components/Button";
import { FaStar } from "react-icons/fa";
import { button } from "../../../../theme";

export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto p-2">
        <div className="flex flex-col justify-between items-center md:flex-row my-12">
          <article className="pl-0  text-center  flex flex-col items-center md:inline-block md:text-left md:pl-8">
            <h1 className="text-5xl font-bold mb-8 ">Welcome to MenuEASY</h1>
            <div className="w-1/2">
              <Button variant={button.lg_primary} content="Book" />
            </div>
          </article>
          <article className="hidden md:flex">
            <img src={heroImg} alt="A resturant" />
          </article>
        </div>
      </div>
      {/* <FaStar color="orange" className="text-2xl" /> */}
    </section>
  );
}
