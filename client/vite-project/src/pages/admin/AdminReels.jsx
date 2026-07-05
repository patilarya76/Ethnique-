import { useEffect, useState } from "react";

function AdminReels() {
  const [reels, setReels] = useState([]);

  const [title, setTitle] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] =
    useState("");

  useEffect(() => {
    fetchReels();
  }, []);

  const fetchReels = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/reels"
      );

      const data = await res.json();

      setReels(data.reels || []);
    } catch (error) {
      console.log(error);
    }
  };

  const addReel = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/reels",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            videoUrl,
            thumbnail,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        fetchReels();

        setTitle("");
        setVideoUrl("");
        setThumbnail("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReel = async (id) => {
    try {
      await fetch(
        `http://localhost:5000/api/reels/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchReels();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 bg-[#F8F4EF] min-h-screen">

      {/* Header */}

      <div className="mb-10">
        <h1
          className="
            text-4xl
            font-bold
            text-[#6D1830]
          "
        >
          Reels Management
        </h1>

        <p className="text-gray-500 mt-2">
          Manage homepage reels and
          social content.
        </p>
      </div>

      {/* Add Reel Form */}

      <div
        className="
          bg-white
          rounded-3xl
          shadow-lg
          p-8
          mb-10
        "
      >
        <h2
          className="
            text-xl
            font-semibold
            mb-6
          "
        >
          Add New Reel
        </h2>

        <div className="grid gap-4">

          <input
            className="
              border
              p-4
              rounded-xl
            "
            placeholder="Reel Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            className="
              border
              p-4
              rounded-xl
            "
            placeholder="Video URL"
            value={videoUrl}
            onChange={(e) =>
              setVideoUrl(
                e.target.value
              )
            }
          />

          <input
            className="
              border
              p-4
              rounded-xl
            "
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(e) =>
              setThumbnail(
                e.target.value
              )
            }
          />

          <button
            onClick={addReel}
            className="
              bg-[#6D1830]
              hover:bg-[#541224]
              text-white
              py-4
              rounded-xl
              font-medium
              transition
            "
          >
            Add Reel
          </button>

        </div>
      </div>

      {/* Reel List */}

      <div
        className="
          grid
          md:grid-cols-3
          lg:grid-cols-4
          gap-6
        "
      >
        {reels.map((reel) => (
          <div
            key={reel._id}
            className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-lg
              border
            "
          >

            {/* Thumbnail */}

            <div
              className="
                h-[320px]
                overflow-hidden
              "
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            {/* Content */}

            <div className="p-5">

              <h3
                className="
                  text-lg
                  font-semibold
                  mb-4
                "
              >
                {reel.title}
              </h3>

              <video
                src={reel.videoUrl}
                controls
                className="
                  w-full
                  rounded-xl
                "
              />

              <button
                onClick={() =>
                  deleteReel(
                    reel._id
                  )
                }
                className="
                  mt-4
                  w-full
                  bg-red-500
                  hover:bg-red-600
                  text-white
                  py-3
                  rounded-xl
                  transition
                "
              >
                Delete Reel
              </button>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default AdminReels;