const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-9 py-16 pg-gray-900 text-green-600">
            <div className="flex flex-col md:flex-row md:items-start items-center gap-10 mb-12">
                <img src='/images/workingFromHome.jpg' alt='profile' className="w-50 h-50 rounded-lg object-cover border-2 border-blue-300 shadow-md"/>
            </div>
            <div>
                <h1 className="text-3xl font-bold text-white-500 mb-4">
                    Thanks for stopping by!  👋 <br/> My name is Alex Korobchevsky
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                    I am jack of all trades that been chasing his own tail around banks and financial services companies over the last 20 years and counting...
                </p>
            </div>

            {/* Bio Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4"> My Mission
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Teach you something GPT, Gemini and Claude won't know <br/>
                    Otherwise who needs engineers...
                </p>
            </div>

            <h2 className="text-2xl font-semibold text-green-600 mb-4">
                🚀 My stack 🥞
            </h2>
            <ul className="flex flex-wrap text-md text-gray-200 justify-between">
                {
                    [
                        'Linux',
                        'GCP',
                        'GIT',
                        'Podman',
                        'Kubernetes',
                        'Ansible',
                        'Terraform',
                        'TypeScript'
                    ].map((tech) => (
                        <li key={ tech } className="bg-gray-500 px-5 py-2 rounded-full">{ tech }</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default AboutPage;