const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto px-9 py-16 pg-gray-900 text-green-600">
            <div>
                <h1 className="text-2xl font-bold text-white-500 mb-4">
                    Alex Korobchevsky
                </h1>
                <h2 className="text-xl font-bold text-white-500 mb-4">
                    Software Engineer
                </h2>
                <a href="https://www.linkedin.com/in/alex-korobchevsky-9b404010" target='_blank' className='inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition'>
                    LinkedIn ➡️
                </a>
                <p className="text-gray-600 text-lg mb-6">
                    Canadian citizen, based in the beautiful city of Toronto 🏙️<br />
                    I am not looking for work right now so please don't send me any reasonable offers. <br />
                    If you have an unreasonably high one let's talk! <br />
                    Freelancing under 20 hours a week only. <br />
                </p>
            </div>

            {/* Bio Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4"> My Mission
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Teach you something GPT, Gemini and Claude won't know <br />
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
                    ].sort().map((tech) => (
                        <li key={tech} className="bg-gray-500 px-5 py-2 rounded-full">{tech}</li>
                    ))
                }
            </ul>
            <h2 className="text-2xl font-semibold text-green-600 mt-14 mb-4">
                ℹ️ Interests 😔
            </h2>
            <ul className="flex flex-wrap text-md text-gray-200 gap-3">
                {
                    [
                        'World History',
                        'Politics',
                        'Spiritiality',
                        'Cultural Exchange',
                        'Weightlifting',
                        'Reading',
                        'Daydreaming',
                        'Linguistics',
                        'Urban Exploration',
                        'Wilderness'
                    ].sort().map((interest) => (
                        <li key={interest} className="bg-gray-500 px-5 py-2 rounded-full">{interest}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Resume;