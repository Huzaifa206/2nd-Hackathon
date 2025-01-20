import Image from "next/image";
import Header from "../components/Header";
import TopHeader from "../components/TopHeader";
import Footer from "../components/Footer";
import Link from "next/link";
import AllProductGrid from "../components/AllProductGrid";

export default function AllProducts() {
    return (
    <div className="w-screen">
      <AllProductGrid/> 
    </div>
    );
  }
  