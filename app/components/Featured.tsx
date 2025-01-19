import Image from "next/image";
export default function Featured() {
  return (
    <div className="text-center w-screen">
        <div>
        <h1 className="font-semibold text-xl py-5 text-left ml-7">Featured</h1>
      </div>
      <div className="flex justify-center items-center"><img src="/Featured.png" alt="Heroimg" /></div>
      <div className="flex justify-center items-center flex-col gap-3 p-10 text-center">
        <h2 className=" text-4xl font-bold uppercase"> STEP INTO WHAT FEELS GOOD</h2>
        <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button>Find Your Shoe</button>
      </div>
       </div>
  );
}