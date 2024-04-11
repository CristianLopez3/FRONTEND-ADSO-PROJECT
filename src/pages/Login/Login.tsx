import { PiAt, PiKey, PiSignInLight, PiArrowLeft } from "react-icons/pi";
import { useCallback } from "react";
import Img from "../../assets/bg-mobile.jpg";
import { InputIcon } from "@/components/Input";
import { Link } from "react-router-dom";
import Button from "@/components/Button";
import { styles } from "./constants";
import { SubmitHandler, useForm } from "react-hook-form";
import { Auth, AuthTypes } from "@/types/Auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { loginAction } from "@/store/auth";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<AuthTypes>();

  const onSubmit: SubmitHandler<AuthTypes> = useCallback(
    async ({ username, password }) => {
      try {
        const authData: Auth = {
          username,
          password,
        };
        await dispatch(loginAction(authData));

      } catch (error) {
        throw new Error("Error in the login request");
      } finally {
        reset();
      }
    },
    [dispatch, reset]
  );

  const consoleData = () => {
    const token = localStorage.getItem("token");
    const expiradionTime = localStorage.getItem('expirationTime');
    console.log(token);
    console.log(expiradionTime);
  }

  const renderErrorMessage = (error: { message?: string }) => {
    return error && <p className="p-1 text-red-700">{error.message}</p>;
  };

  return (
    <div className={styles.main}>
      <section className={styles.section}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-20">
          <h2 className="font-mono mb-5 text-4xl font-bold"> Login </h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account if you are an employee
          </p>
          <InputIcon
            icon={<PiAt />}
            {...register("username")}
            type="email"
            styles="mb-6"
          />
          {renderErrorMessage(errors.username!)}
          <InputIcon
            icon={<PiKey />}
            {...register("password")}
            type="password"
          />
          {renderErrorMessage(errors.password!)}

          <div className="flex flex-col items-center justify-between mt-6 space-y-6 lg:flex-row lg:space-y-0">
            <div className="font-thing text-black">Forgot Password</div>
            <Button
              className={`${styles.button} ${isSubmitting && "cursor-not-allowed"}`}
              type="submit"
              variant="dark"
              content=""
            >
              <span>Next</span>
              <PiSignInLight />
            </Button>
          </div>


          <div className="mt-12 border-b border-b-grayDark"></div>
        </form>
          <button onClick={consoleData} className="bg-red-500 p-4">data</button>

        <img src={Img} alt="image" className="w-[430px] hidden md:block" />

        <Link to="/">
          <PiArrowLeft
            className="absolute top-[27px] left-[20px] md:top-[20px] md:left-[20px]"
            size={28}
          />
        </Link>
      </section>
    </div>
  );
};

export default Login;
