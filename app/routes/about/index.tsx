const AboutPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16 pg-gray-900">
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                <img src='/images/profile.jpg' alt='profile' className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-md"/>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white-800 mb-2">
                    Hey, I am Alex 👋
                </h1>
                <p className="text-gray-300 text-lg">
                    The best moments in life are being touched and kissed by the woman I adore
                </p>
            </div>

            {/* Bio Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-white mb-4"> My Mission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    Love and be loved till the end of time
                </p>
                <h2 className="text-2xl font-semibold text-white mb-4">
                    🚀 Tech I use
                </h2>
            </div>

            {/* Tech Stack */}
                <ul className="flex flex-wrap gap-4 text-sm text-gray-300">
                    {
                        [
                            'Chest Hair',
                            'Ukrainian 🌭 ',
                            'Veggie Muscles',
                            'KK style dancing'
                        ].map((tech) => (
                            <li key={ tech } className="bg-gray-700 px-3 py-1 rounded-md">{ tech }</li>
                        ))
                    }
                </ul>
        </div>
    );
}

export default AboutPage;