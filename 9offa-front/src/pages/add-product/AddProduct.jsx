import React, { useRef } from "react";

const AddProduct = () => {
  const name = useRef("");
  const category = useRef("");
  const description = useRef("");
  const price = useRef("");

  return (
    <>
      <h2 className="center-text">Add Product</h2>
      <form className="p-3">
        <div className="form-group mb-4">
          <label for="exampleFormControlInput1">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Name"
          />
        </div>

        <div className="form-group mb-4">
          <label for="exampleFormControlSelect1">Category</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Accessories</option>
            <option>Kids & Baby Fashion</option>
            <option>Women's Clothing</option>
            <option>Men's Clothing</option>
            <option>Footwear Collection</option>
          </select>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="exampleFormControlInput1">Price</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Price"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
      <form
        action="http://localhost:4000/upload"
        method="POST"
        enctype="multipart/form-data"
      >
        <div class="mb-3">
          <div class="form-file custom-file">
            <input
              class="form-control"
              type="file"
              id="formFile"
              name="image"
              multiple
            />
            <label class="form-file-label" for="image" />
          </div>
        </div>
        <button type="submit" class="btn btn-success">
          Upload
        </button>
      </form>
    </>
  );
};

export default AddProduct;
