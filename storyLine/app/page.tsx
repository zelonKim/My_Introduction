import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-3xl text-center">Who Is Zelon?</div>
      <p className="m-5 text-lg">
        Zelon의 본명은 '김성진'이다. 그는 깃허브에서 ZelonKim이라는 닉네임으로
        활동하고 있다보니, 스스로를 Zelon이라고 부르고 다닌다.
        <br />
        그의 mbti는 INFJ이다. 여러번 검사해봤는데 항상 INFJ로 나온다. 역시나
        '선의의 예언자' 유형답게 미래에 대해 예측하는 것을 좋아하며 상상력과
        창의력이 뛰어나다.
        <br />
        그는 원래 사회복지를 전공했는데, 졸업 후에 코딩이 너무 끌려서 스스로
        공부하기 시작했다고 한다. 분명, 그의 미래주의적인 성향때문에 더더욱
        코딩에 끌렸을 것이다.
        <br />
        그래서 그는 5개월 가까이 국비지원학원을 통해 인공지능에 대해 배웠다.
        그리고, 그는 스스로 생각했다. 챗GPT처럼 웹 페이지나 어플을 만들줄 알아야
        인공지능을 활용할 수 있겠다는 것을..
        <br />
        그래서, 그는 주로 노마드코더 인강과 두잇 시리즈 책을 통해 웹개발 및
        앱개발을 공부했다. 그리고, 스스로 더욱 깊은 이해를 위해
        한국방송통신대학교 컴퓨터 과학과에 입학하여 전공지식을 쌓아나갔다.
        <br />
        그렇게 그는 코딩이 너무 끌리고 재밌어서 공부하다보니 2년이라는 시간이
        훌쩍 지나갔다고 한다. 그리고 그는 항상 바뀌는 기술 트렌드에 맞춰서
        꾸준한 프로그래밍 공부에 대한 필요성을 느꼈다고 한다.
        <br />
        <div className="mt-5"></div>
        <Link href="/hobby" className="font-bold">
          Hobby
        </Link>
        <div className="mt-5"></div>
        <Link href="/vision" className="font-bold">
          Vision
        </Link>
        <div className="mt-5"></div>
        <Link href="/swot" className="font-bold">
          SWOT
        </Link>
        <div className="mt-5"></div>
        <Link href="/study" className="font-bold">
          Study
        </Link>
      </p>
    </>
  );
}
