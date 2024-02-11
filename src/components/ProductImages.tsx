import { useState } from "react";
import { ProductType } from "../state/types/productType";

const ProductImages: React.FC<{ product: ProductType }> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  function handleSelectedImage(image: string) {
    setSelectedImage(image);
  }
  return (
    <section className="grid gap-4">
      <img
        className="w-80 max-w-full cursor-pointer rounded-xl object-cover object-center"
        src={selectedImage}
        alt=""
      />
      <div className="flex gap-4">
        {product.images.map((image) => {
          return (
            <img
              onClick={() => handleSelectedImage(image)}
              className={` ${image === selectedImage ? "border-2  border-accent-clr opacity-50 " : ""} w-16 cursor-pointer rounded-lg  object-cover object-center transition-all duration-300 hover:opacity-50`}
              key={image}
              src={image}
              alt=""
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
