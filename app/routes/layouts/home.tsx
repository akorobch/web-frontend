import { Outlet } from "react-router";
import Hero from '~/components/Hero';

const HomeLayout = () => {
    return (  <>
                <Hero name="Alex" pitch="I build cloud application environments and help others improve their DevOps skills and most importantly, their confidence"/>
                <section>
                    <Outlet />
                </section>
            </>);
}
 
export default HomeLayout;