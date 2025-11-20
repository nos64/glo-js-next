import Link from "next/link";

export default function Home() {
  return (
    <>
      <strong>HELLO next</strong>
      <br/>
      <Link href={"/second"}>Go to Second</Link>
    </>
  );
}
