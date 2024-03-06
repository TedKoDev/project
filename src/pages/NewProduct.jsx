import React, { useState } from "react";
import Button from "../components/ui/Button";
import { uploadImage } from "../api/uploader";
import { addNewProduct } from "../api/firebase";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "file") {
      setFile(files && files[0]);
      return;
    }

    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(file).then((url) => {
      console.log("url", url);
      addNewProduct(product, url);
    });
  };

  return (
    <section>
      {file && <img src={URL.createObjectURL(file)} alt="preview" />}
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          required
          placeholder="제품명을 입력해주세요."
          value={product.title ?? ""}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          required
          placeholder="가격을 입력해주세요."
          value={product.price ?? ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          required
          placeholder="제품 설명을 입력해주세요."
          value={product.description ?? ""}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          required
          placeholder="카테고리를 입력해주세요."
          value={product.category ?? ""}
          onChange={handleChange}
        />
        <input
          type="option"
          name="option"
          required
          placeholder="옵션을 입력해주세요."
          value={product.option ?? ""}
          onChange={handleChange}
        />
        <Button type="submit" text={"제품 등록하기"} />
      </form>
    </section>
  );
}
