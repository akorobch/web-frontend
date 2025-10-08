import { Outlet } from "react-router";
import type { Route } from '../about/+types'; 

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The friendly DevOps guy" },
    { name: "description", content: "DevOps Cloud and Platform Engineering" },
  ];
}

const MainLayout = () => {
    return (  <>
                <section className='max-w-6xl mx-auto px-6 my-8 bg-black text-white'>
                    <Outlet />
                </section>
            </>);
}
 
export default MainLayout;