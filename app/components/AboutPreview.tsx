import { Link } from "react-router";

const AboutPreview = () => {
    return (<section className="mt-12 p-10 flex flex-col md:flex-row items-center gap-8 bg-gray-500 rounded-lg">
        <img
            src='images/propicture.jpg'
            alt='Professional Profile Picture'
            className='w-32 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md'
        />
        <div>
            <h2 className="text-2xl font-bold text-white mb-4">
                👋 About Me
            </h2>
            <p className="text-white mb-4 max-w text-xl">
                I am Alex - student and lover of life and DevOps Engineering
            </p>
            <Link to='/about' className='inline-block text-blue-300 hover:underline text-xl'>
            Wanna know more?
            </Link>
        </div>
    </section>);
}

export default AboutPreview;