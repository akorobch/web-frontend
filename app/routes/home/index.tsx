import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The friendly DevOps guy" },
    { name: "description", content: "DevOps Cloud and Platform Engineering" },
  ];
}

export default function Home() {
    const name = "Alex";
    const pitch = "I build cloud application environments and help others improve their DevOps skills";

    return (
        <>Homepage</>
    );
}
