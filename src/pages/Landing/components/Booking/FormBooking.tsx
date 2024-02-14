import Input from "../../../../components/ui/Input";
import Calendar from "../../../../components/ui/Calendar";
const FormBooking = () => {
  return (
    <div className="width-[90%] mx-auto">
      <form>
        <Input id="name" placeholder="Input your name..." name="name" />
        <Input id="email" placeholder="example@email..." name="email" />
        <Calendar styles="mt-2" />
      </form>
    </div>
  );
};

export default FormBooking;
