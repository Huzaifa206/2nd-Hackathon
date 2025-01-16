import Image from "next/image";
export default function Essential() {
  return (
    <section className="w-screen p-4" >
      <div>
        <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly ">
      <Image width={350} height={300} alt="" src={"/Frame.png"} layout="responsive"/>
      <Image width={350} height={300} alt="" src={"/Frame1.png"} layout="responsive"/>
      <Image width={350} height={300} alt="" src={"/Frame2.png"} layout="responsive"/>
      </div>
    </section>
  );
}