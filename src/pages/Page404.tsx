import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <article className="min-h-screen flex justify-center items-center border">
      <div className="text-white text-center">
        <h1 className="text-6xl py-10"> Page Not Found <span className="text-primary">404</span></h1>
        <p>
          We can't find this page, please come back to your last page or instead
          going to 
          <Link to="/" className="block ml-2  text-primary">
            Come Back
          </Link>
        </p>
      </div>
    </article>
  );
};

export default Page404;
