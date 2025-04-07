"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { db } from "../../firebase/client";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Product {
  id: string;
  name: string;
  features: string[];
  location: string;
  price: string;
  type: string;
  categoryId: string;
  available: boolean;
  images: string[];
}

interface Category {
  id: string;
  name: string;
}

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [features, setFeatures] = useState<string[]>([]); 

  const router = useRouter();
  const params = useParams();
  const id = params?.id as string | undefined;

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        // Fetch product
        const productRef = doc(db, "products", id);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          const productData = productSnap.data() as Omit<Product, "id">;
          setProduct({ id: productSnap.id, ...productData });

          // Fetch Category
          if (productData.categoryId) {
            const categoryRef = doc(db, "category", productData.categoryId);
            const categorySnap = await getDoc(categoryRef);
            if (categorySnap.exists()) {
              setCategory((categorySnap.data() as Category).name);
            }
          }

          // Set the features array
          if (productData.features && Array.isArray(productData.features)) {
            setFeatures(productData.features);
          }
        } else {
          router.push("/404");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id, router]);

  if (!id)
    return (
      <p className="text-center mt-10 text-red-500">Invalid product ID.</p>
    );
  if (!product)
    return (
      <p className="text-center mt-10 text-gray-500">Loading product...</p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-20 ">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-teal-700 text-center ">
        {product.name}
      </h2>

      {/* Embla Carousel */}
      <EmblaCarousel images={product.images} />

      <div className="mt-2 space-y-3 text-gold">
      <p className="text-lg"><strong>Features:</strong></p>
        <ul className="list-disc ml-6">
          {features.map((feature, index) => (
            <li key={index} className="text-md text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
        <p className="text-md">
          <strong>Category:</strong> {category}
        </p>
        <p className="text-md">
          <strong>Price:</strong> {product.price}
        </p>
        <p className="text-md">
          <strong>Location:</strong> {product.location}
        </p>
        <p className="text-md">
          <strong>Type:</strong> {product.type}
        </p>

        <p
          className={`text-md font-semibold ${
            product.available ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.available ? "Available" : "Out of Stock"}
        </p>
      </div>

      <Link
        href="/properties"
        className="mt-6 block text-center w-1/2 mx-auto text-white bg-teal-700 px-4 py-2 rounded-lg shadow-md hover:bg-teal-900 transition"
      >
        Back to Products
      </Link>
    </div>
  );
}

// Embla Carousel Component
const EmblaCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className="overflow-hidden rounded-lg shadow-md" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-none w-full">
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              width={600}
              height={400}
              className="object-contain w-full h-[400px]"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};
