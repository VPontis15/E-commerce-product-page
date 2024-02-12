import { useState } from "react";
import { ProductType } from "../state/types/productType";

const ProductImages: React.FC<{ product: ProductType }> = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState<string>(product.images[0]);
  function handleSelectedImage(image: string) {
    setSelectedImage(image);
  }
  return (
    <section className="grid justify-center gap-4">
      <img
        className=" mx-auto w-3/4  max-w-full  cursor-pointer rounded-xl object-cover object-center md:w-7/12 lg:w-80"
        src={selectedImage}
        alt=""
      />
      <div className="mt-4 flex justify-center gap-4 lg:mt-2 lg:justify-start">
        {product.images.map((image) => {
          return (
            <img
              onClick={() => handleSelectedImage(image)}
              className={` ${image === selectedImage ? "border-2  border-accent-clr opacity-50 " : ""} w-16 cursor-pointer rounded-lg object-cover object-center  transition-all duration-300 hover:opacity-50 md:w-24 lg:w-16`}
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
