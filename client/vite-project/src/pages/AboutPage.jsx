import PageHero from "../components/PageHero";

const AboutPage = () => {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Celebrating Indian Craftsmanship"
        image="/images/about-banner.jpg"
      />

      <div className="max-w-5xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-serif mb-6">
          Our Story
        </h2>

        <p className="text-gray-700 leading-8">
          Ethnique by Jayant was born from a passion
          for timeless Indian craftsmanship...
        </p>

      </div>
    </>
  );
};

export default AboutPage;