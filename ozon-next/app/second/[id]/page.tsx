import Link from "next/link";

export default async function Id({ params }) {
  const { id } = await params;
  return (
    <>
      <strong>{id}</strong>
      <br/>
      <Link href={"/second"}>Go to Second</Link>
    </>

  );
}