import { Outlet } from "react-router";
import Hero from '~/components/Hero';

const HomeLayout = () => {
    return (  <>
                <Hero name="Alex" pitch="I build cloud application environments and help others improve their DevOps skills"/>
                <section>
                    <Outlet />
                </section>
            </>);
}
 
export default HomeLayout;