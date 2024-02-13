export type ImgMenuProps = {
  src: string;
  alt: string;
};

export default function ImgMenu({ src, alt }: ImgMenuProps) {
  return (
    <img
      className="inline-block sm:w-full sm:h-24 md:w-full md:h-32  rounded-full"
      src={src}
      alt={alt}
    />
  );
}
