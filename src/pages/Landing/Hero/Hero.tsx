import bgImg2 from "../../../assets/component1.png";
import Food1 from "../../../assets/biryani2.png";
import Food2 from "../../../assets/biryani3.png";
import Food3 from "../../../assets/biryani5.png";
import { useState } from "react";

type Image = {
  id: number;
  image: string;
};

const ImageList: Image[] = [
  {
    id: 1,
    image: Food1,
  },
  {
    id: 2,
    image: Food2,
  },
  {
    id: 3,
    image: Food3,
  },
];

const styleBgImage = {
  backgroundImage: `url(${bgImg2})`,
  backgroundPosition: "left",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

export default function Hero() {
  const [imageId, setImageId] = useState<string>(Food1);

  return (
    <section
      style={styleBgImage}
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-secondary dark:text-white duration-200 flex justify-center items-center"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Contenido de texto */}
          <article className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome to Menu EASY
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              repudiandae molestiae voluptatibus alias temporibus, voluptate
              magni sed doloribus nam ex?
            </p>
            <div className="">
              <button className="bg-primary text-black px-4 py-2 rounded hover:scale-105 duration-200">
                Book Now
              </button>
            </div>
          </article>
          {/* Sección de imágenes */}
          <aside className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
            {/* Sección de imagen principal */}
            <div className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden">
              <img
                src={imageId}
                alt="food"
                className="w-[300px] sm:w-[400px] rounded-full mx-auto spin"
              />
            </div>
            {/* Lista de imágenes */}
            <nav className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
              {ImageList.map((image) => {
                return (
                  <img
                    key={image.id}
                    src={image.image}
                    className="max-w-[80px] h-[80px] object-containt inline-block hover:scale-105 duration-200"
                    onClick={() =>
                      setImageId(
                        image.id === 1 ? Food1 : image.id === 2 ? Food2 : Food3
                      )
                    }
                  />
                );
              })}
            </nav>
          </aside>
        </div>
      </div>
    </section>
  );
}
