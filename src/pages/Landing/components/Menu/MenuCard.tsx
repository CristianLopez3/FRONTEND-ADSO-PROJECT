import Img from "../../../assets/biryani3.png";
import ImgMenu from "./ImgMenu";
import { type ImgMenuProps } from "./ImgMenu";
// https://dribbble.com/shots/21617600-Restaurant-Landing-Page-Design-UI

type MenuCardProps = {
  title: string;
  description: string;
} & ImgMenuProps;

export default function MenuCard() {
  return (
    <article className="relative sm:w-1/2 sm:h-52 md:w-[200px] md:h-56 bg-gray-100 rounded-md px-4 py-2">
      <ImgMenu src={Img} alt="img" />
      <div className="text-center text-black dark:text-white">
        <h3 className="text-bold text-xl"> Menu Name </h3>
        <p className="text-sm"> Description </p>
      </div>

      <div className="absolute top-[18%] right-0 w-[1px] h-[30%] bg-secondary"></div>
      <div className="absolute bottom-[0] left-[10%] h-[1px] w-[80%] bg-secondary"></div>
    </article>
  );
}
