import React from "react";

export const AddProductForm = ({ handlechange, onSubmit }) => {
  return (
    <>
      <h2 className="center-text">Add Product</h2>
      <form className="p-3" enctype="multipart/form-data">
        <div className="form-group mb-4">
          <label for="exampleFormControlInput1">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Product Name"
            name="name"
            onChange={handlechange}
          />
        </div>

        <div className="form-group mb-4">
          <label for="exampleFormControlSelect1">Category</label>
          <select
            class="form-control"
            id="exampleFormControlSelect1"
            name="category"
            onChange={handlechange}
          >
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
            name="description"
            onChange={handlechange}
          ></textarea>
        </div>
        <div className="form-group mb-4">
          <label htmlFor="exampleFormControlInput1">Price</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Price"
            name="price"
            onChange={handlechange}
          />
        </div>

        <div className="mb-3">
          <div className="form-file custom-file">
            <input
              class="form-control"
              type="file"
              id="formFile"
              name="image"
              multiple
              onChange={handlechange}
            />
            <label className="form-file-label" htmlFor="image" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>
          Add Product
        </button>
      </form>
    </>
  );
};
