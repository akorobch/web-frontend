import { Outlet } from "react-router";
import Hero from '~/components/Hero';

const MainLayout = () => {
    return (  <>
                <section className='max-w-6xl mx-auto px-6 my-8 bg-black text-white'>
                    <Outlet />
                </section>
            </>);
}
 
export default MainLayout;