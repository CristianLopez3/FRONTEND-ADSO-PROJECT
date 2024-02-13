import Button from "../../ui/Button";
import { button } from "../../../theme";
import { CiBookmark } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoPlanetOutline } from "react-icons/io5";

export default function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 z-40 w-full h-16 bg-grayLight  rounded border-secondary dark:bg-gray-700 dark:border-grayLight shadow-3xl md:hidden">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <Button variant={button.mobile_nav} content="MENU">
          <IoFastFoodOutline className="text-2xl" />
        </Button>
        <Button variant={button.mobile_nav} content="BOOK">
          <CiBookmark className="text-2xl" />
        </Button>
        <Button variant={button.mobile_nav} content="SOCIAL">
          <IoPlanetOutline className="text-2xl" />
        </Button>
        {/* <Button variant={button.mobile_nav} content="CONTACT" /> */}
      </div>
    </div>
  );
}
