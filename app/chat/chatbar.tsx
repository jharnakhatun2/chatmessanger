import Image from "next/image";

const userInfo = [
  {
    id: 1,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 2,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 3,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 4,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
  {
    id: 5,
    image: "/assets/images/Skärmavbild 2023-06-30 kl. 19.53 1.png",
    title: "Anna Sven från Dedicare",
    name: "SSK, VC, stockholm",
    message: "Hej, hur mår du?",
  },
];
export default function Chatbar() {
  return (
    <div className="bg-white rounded-l-2xl px-5 h-[100%]">
      {userInfo.map((item, index) => {
        return (
          <div key={index} className="flex items-center py-2">
            <div className="w-[50px] h-[50px]">
              <Image src={item.image} width={50} height={50} alt="" />
            </div>
            <div className="px-3">
              <p className="font-semibold text-xl">{item.title}</p>
              <p className="font-medium">{item.name}</p>
              <p className="">{item.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
