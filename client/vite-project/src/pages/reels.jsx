const reels = [
  "/videos/reel1.mp4",
  "/videos/reel2.mp4",
  "/videos/reel3.mp4",
];

const Reels = () => {
  return (
    <div className="bg-[#F8F5F2] min-h-screen py-10 px-6">

      <h1 className="text-3xl font-serif text-center mb-10 text-[#2C2C2C]">
        Styled in Ethnique
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {reels.map((video, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition hover:scale-105"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Reels;