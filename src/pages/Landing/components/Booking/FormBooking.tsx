import InputField from "../../../../components/ui/InputField";

const FormBooking = () => {
  return (
    <div className="width-full mx-auto">
      <form className="space-y-2">
        <InputField id="name" name="name" placeholder="Write your name..." />
        <InputField id="cellphone" name="cellphone" placeholder="Write your cellphone..." />
        <InputField id="time" name="time" placeholder="Enter your time..." type="time" />
      </form>
    </div>
  );
};

export default FormBooking;
