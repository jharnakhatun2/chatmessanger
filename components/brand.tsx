import Image from "next/image";
import Link from "next/link";

export default function Brand() {
  return (
    <Link href={'/'} className=" inline-flex items-center ">
      <Image
        src={'/assets/images/Group 69.svg'}
        width={50}
        height={63}
        alt='logo'
        className="lg:hidden"
      />
      <h1 className="text-[3rem]">Konsulta</h1>
    </Link>
  )
}
