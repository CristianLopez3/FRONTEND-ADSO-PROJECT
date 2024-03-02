import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
// import InputField from "../components/UI/InputField";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  example: z.string(),
  exampleRequired: z.string(),
  name: z.string(),
});
type Name = {
  example: string;
  exampleRequired: string;
  name: string;
};

type Inputs = z.infer<typeof schema>;
type FormProps = Partial<Inputs> & Partial<Name>;

function Form({ example = "cristian", exampleRequired, name }: FormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      example,
      exampleRequired,
      name,
    },
    resolver: zodResolver(schema)
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 p-10 bg-blue-200 rounded-sm"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} name="example" />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired")} />

      <InputField {...register("name")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}

export default function Test() {
  return <Form example="Cristian" exampleRequired="jeje" name="Mi rey" />;
}
