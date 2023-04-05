import Image from "next/image";

export default function Card({ helpLink }) {
  console.log(helpLink);
  console.log(helpLink.img);
  console.log(helpLink.alt);

  return (
    <div className="max-w-xs rounded-md shadow-md bg-teal-100 dark:bg-gray-900 dark:text-gray-100 font-mons">
      <Image
        src={helpLink.image}
        alt={helpLink.alt}
        width={800}
        height={500}
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between sp p-6 space-y-8">
        <div className="">
          <h2 className="text-center text-lg lg:text-xl font-bold mb-5">
            {helpLink.title}
          </h2>
          <p className=" text-center text-sm sm:text-sm lg:text-sm dark:text-gray-100">
            {helpLink.description}
          </p>
        </div>
        <a
          href={helpLink.href}
          className="font-bold text-xs lg:text-sm flex justify-end"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
