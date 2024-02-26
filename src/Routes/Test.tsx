import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiSpinnerGapLight } from "react-icons/pi";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

// type formFileds = {
//   email: string;
//   password: string;
// };

type formFields = z.infer<typeof schema>;

const Test = () => {
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<formFields>({
    defaultValues: {
      email: "test@email.com",
      password: "************",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (errr) {
      console.log(data);
    }
  };

  return (
    <main className="App flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email")}
          type="text"
          placeholder="Email"
          className="block my-2 p-2"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
        <input
          {...register("password")}
          type="password"
          className=" block my-2 p-2"
          placeholder="Password"
        />
        {errors.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <div>
              <PiSpinnerGapLight className="animate-spin" /> is processing...
            </div>
          ) : (
            "submit"
          )}
        </button>
      </form>
    </main>
  );
};

export default Test;

// ! WITHOUT ZOD
// const Test = () => {
//   const {
//     register,
//     handleSubmit,
//     setError,
//     formState: { errors, isSubmitting },
//   } = useForm<formFileds>({defaultValues: {
//     email: "test@email.com",
//     password: "************"
//   }});
//   const onSubmit: SubmitHandler<formFileds> = async (data) => {
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       throw new Error();
//       console.log(data);
//     } catch(errr){
//       setError("email", {
//         message: "This email is already taken"
//       })
//     }

//   };

//   return (
//     <main className="App flex justify-center items-center">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           {...register("email", { required: "email is required" })}
//           type="text"
//           placeholder="Email"
//           className="block my-2 p-2"
//         />
//         {errors.email && (
//           <div className="text-red-500">{errors.email.message}</div>
//         )}
//         <input
//           {...register("password", {
//             required: "Password is required",
//             minLength: {
//               value: 8,
//               message: "Password must have at least 8 characters",
//             },
//           })}
//           type="password"
//           className=" block my-2 p-2"
//           placeholder="Password"
//         />
//         {errors.password && (
//           <div className="text-red-500">{errors.password.message}</div>
//         )}
//         <button type="submit" disabled={isSubmitting}>
//           {isSubmitting ? (
//             <div>
//               <PiSpinnerGapLight className="animate-spin" /> is processing...
//             </div>
//           ) : (
//             "submit"
//           )}
//         </button>
//       </form>
//     </main>
//   );
// };
