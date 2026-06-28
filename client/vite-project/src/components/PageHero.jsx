const PageHero = ({
  title,
  subtitle,
  image
}) => {
  return (
    <div
      className="relative h-[300px]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">

        <h1 className="text-5xl font-serif">
          {title}
        </h1>

        <p className="mt-4 text-lg">
          {subtitle}
        </p>

      </div>
    </div>
  );
};

export default PageHero;