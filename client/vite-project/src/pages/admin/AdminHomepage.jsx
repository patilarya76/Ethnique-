import { useState } from "react";

function Homepage() {
  const [videoUrl, setVideoUrl] =
    useState("");

  const saveSection = async () => {
    await fetch(
      "https://ethnique.onrender.com/api/homepage",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          title: "Cotton Collection",
          subtitle:
            "Handwoven cotton sarees crafted for timeless elegance.",
          videoUrl,
          buttonText:
            "Shop Collection",
          buttonLink:
            "/products",
        }),
      }
    );

    alert("Saved");
  };

  return (
    <div>
      <h2>Homepage Section</h2>

      <input
        placeholder="Cloudinary Video URL"
        value={videoUrl}
        onChange={(e) =>
          setVideoUrl(
            e.target.value
          )
        }
      />

      <button onClick={saveSection}>
        Save
      </button>
    </div>
  );
}

export default Homepage;