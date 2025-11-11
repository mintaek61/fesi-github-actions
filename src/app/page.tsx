import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export default async function Home() {
  // 무료 상품 API 문서: https://fakestoreapi.com/docs
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product: Product) => (
        <div key={product.id} className="border shadow-sm">
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
          />
          <h1>{product.title}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
