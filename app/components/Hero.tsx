import { Link } from "react-router";

type HeroProps = {
    name: string,
    pitch: string
}

const Hero: React.FC<HeroProps> = ({ name, pitch }) => {
    return (<header className="text-center py-10 px-10 bg-gray-300 text-green-700 transition-colors rounded duration-600">
        <h2 className="text-4xl font-bold mb-4">
            👋👋👋 Hey, I am {name} 👋👋👋
        </h2>
        <p className="text-lg text-green-600 max-w-2xl mx-auto mb-8 font-semibold">
            {pitch}
        </p>
        <div className="flex justify-center gap-8">
            <Link to='/projects' className='bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition'>Check Out My Projects ✅</Link>
            <Link
                to="/resume"
                className="relative inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition group"
            >
                <span className="transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                    Resume 📃
                </span>
                <span className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                    CV 📃
                </span>
            </Link>            <Link to='/contact' className='border border-blue-600 text-blue-600 px-8 py-3 rounded hover:bg-blue-600 hover:text-white transition'>Give me a shout 📞 </Link>
        </div>
    </header>);
}

export default Hero;