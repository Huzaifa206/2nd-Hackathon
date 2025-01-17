import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

export default function ProductDetails() {
    return (
    <div>
     <TopHeader />
     <Header />
     <ProductDetail/>
     <Footer />
  </div>
    );
  }