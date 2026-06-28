import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    description: "",
    highlight: "",
    fabric: "",
    color: "",
    sareeLength: "",
    blouse: "",
    collection: "",
    priceINR: "",
    stock: "",
    image: "",
    video: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/products"
      );

      const data = await response.json();

      setProducts(data.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  const saveProduct = async () => {
    try {
      let url =
        "http://localhost:5000/api/admin/products";

      let method = "POST";

      if (editingId) {
        url = `http://localhost:5000/api/admin/products/${editingId}`;
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          ...formData,
          images: [formData.image],
          video: formData.video,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert(
          editingId
            ? "Product Updated Successfully"
            : "Product Added Successfully"
        );

        setEditingId(null);

        setFormData({
          name: "",
          sku: "",
          description: "",
          highlight: "",
          fabric: "",
          color: "",
          sareeLength: "",
          blouse: "",
          collection: "",
          priceINR: "",
          stock: "",
          image: "",
        });

        fetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await fetch(
        `http://localhost:5000/api/admin/products/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = (product) => {
    setEditingId(product._id);

    setFormData({
      name: product.name || "",
      sku: product.sku || "",
      description:
        product.description || "",
      highlight:
        product.highlight || "",
      fabric: product.fabric || "",
      color: product.color || "",
      sareeLength:
        product.sareeLength || "",
      blouse: product.blouse || "",
      collection:
        product.collection || "",
      priceINR:
        product.priceINR || "",
      stock: product.stock || "",
      image:
        product.images?.[0] || "",

      video:
        product.video || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>
        {editingId
          ? "Update Product"
          : "Add Product"}
      </h1>

      <div
        style={{
          display: "grid",
          gap: "10px",
          maxWidth: "600px",
          marginBottom: "40px",
        }}
      >
        <input
          placeholder="Product Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          placeholder="SKU"
          value={formData.sku}
          onChange={(e) =>
            setFormData({
              ...formData,
              sku: e.target.value,
            })
          }
        />

        <input
          placeholder="Price INR"
          value={formData.priceINR}
          onChange={(e) =>
            setFormData({
              ...formData,
              priceINR: e.target.value,
            })
          }
        />

        <input
          placeholder="Stock"
          value={formData.stock}
          onChange={(e) =>
            setFormData({
              ...formData,
              stock: e.target.value,
            })
          }
        />

        <input
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) =>
            setFormData({
              ...formData,
              image: e.target.value,
            })
          }
        />
        <input
          placeholder="Video URL"
          value={formData.video}
          onChange={(e) =>
              setFormData({
                ...formData,
                video: e.target.value,
              })
            }
          />
        {formData.image && (
          <img
            src={formData.image}
            alt="Preview"
            width="150"
            style={{
              borderRadius: "10px",
            }}
          />
        )}
        {formData.video && (
          <video
            src={formData.video}
            width="250"
            controls
          />
        )}
        <input
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Highlight"
          value={formData.highlight}
          onChange={(e) =>
            setFormData({
              ...formData,
              highlight:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Fabric"
          value={formData.fabric}
          onChange={(e) =>
            setFormData({
              ...formData,
              fabric: e.target.value,
            })
          }
        />

        <input
          placeholder="Color"
          value={formData.color}
          onChange={(e) =>
            setFormData({
              ...formData,
              color: e.target.value,
            })
          }
        />

        <input
          placeholder="Saree Length"
          value={formData.sareeLength}
          onChange={(e) =>
            setFormData({
              ...formData,
              sareeLength:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Blouse"
          value={formData.blouse}
          onChange={(e) =>
            setFormData({
              ...formData,
              blouse: e.target.value,
            })
          }
        />

        <input
          placeholder="Collection"
          value={formData.collection}
          onChange={(e) =>
            setFormData({
              ...formData,
              collection:
                e.target.value,
            })
          }
        />

        <button
          onClick={saveProduct}
          style={{
            padding: "12px",
            cursor: "pointer",
          }}
        >
          {editingId
            ? "Update Product"
            : "Add Product"}
        </button>
      </div>

      <h3>
        Total Products: {products.length}
      </h3>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <img
                  src={
                    product.images?.[0]
                  }
                  alt={product.name}
                  width="60"
                />
              </td>

              <td>{product.name}</td>

              <td>{product.sku}</td>

              <td>
                ₹{product.priceINR}
              </td>

              <td>{product.stock}</td>

              <td>
                <button
                  onClick={() =>
                    editProduct(
                      product
                    )
                  }
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteProduct(
                      product._id
                    )
                  }
                  style={{
                    marginLeft:
                      "10px",
                    color: "red",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;