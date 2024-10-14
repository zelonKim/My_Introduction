import Link from "next/link";

export default function DetailHobby() {
  return (
    <>
      <div className="text-3xl text-center">What is his Hobby?</div>
      <Link href="/hobby/pop">팝송듣기</Link>
      <div className="mt-10"></div>
      <Link href="/hobby/book">책읽기</Link>
    </>
  );
}
