import Image from "next/image";
export default function Essential() {
  return (
    <section className="w-screen m-4" >
      <div>
        <h2 className="font-semibold text-xl py-5"> The Essentials</h2>
      </div>
      <div className="flex justify-evenly flex-wrap ">
        <Image width={350} height={300} alt="" src={"/Frame.png"} />
        <Image width={350} height={300} alt="" src={"/Frame1.png"} />
        <Image width={350} height={300} alt="" src={"/Frame2.png"} />
      </div>
    </section>
  );
}