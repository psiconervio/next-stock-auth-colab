import Link from "next/link";
import Image from "next/image";

function ProductCard({ product }) {
  console.log(product)
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 hover:bg-gray-100 hover:cursor-pointer"
      href={`/dashboard/noticias/${product.id}`}
    >
      {product.image && <Image src={product.image} width={500} height={250} className="w-full rounded-t-lg" alt="" />}
      <div className="p-4">
        <h1 className="text-lg font-bold text-yellow-950">{product.name}</h1>
        <h2 className="text-2xl text-slate-600">{product.price}</h2>
        <p>{product.description}</p>
      </div>
    </Link>
  );
}

export default ProductCard;