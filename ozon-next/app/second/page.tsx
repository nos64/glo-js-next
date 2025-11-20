import Link from "next/link";

export default function Second() {
  return (
    <>
      <strong>Second next</strong>
      <br/>
      <Link href={"/"}>Go to Home</Link>
      <br/>
      <Link href={"/"}>Go to Home</Link>
      <br/>
      <Link href={"/second/1"}>Second1</Link>
      <br/>
      <Link href={"/second/2"}>Second2</Link>
      <br/>
      <Link href={"/second/3"}>Second3</Link>
    </>

  );
}