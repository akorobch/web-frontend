const Resume = () => {
    return (
        <div className="w-full mx-auto px-9 py-16 bg-gray-100 text-green-600">
            <div>
                <h1 className="text-2xl font-bold text-white-500 mb-4">
                    Alex Korobchevsky
                </h1>
                <h2 className="text-xl font-bold text-white-500 mb-4">
                    Software Engineer
                </h2>
                <div className="flex gap-6 mb-8">
                    <a
                        href="https://www.linkedin.com/in/alex-korobchevsky-9b404010"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                            className="inline-block"
                        >
                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.2 8h4.6v16H.2V8zm7.8 0h4.4v2.2h.06c.61-1.16 2.1-2.38 4.32-2.38 4.63 0 5.48 3.05 5.48 7V24h-4.6v-7c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.68 1.82-2.68 3.7V24h-4.6V8z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/akorobch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded transition"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width="24"
                            height="24"
                            className="inline-block"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.107-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 016 0c2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.104.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.373-12-12-12z" />
                        </svg>
                        GitHub
                    </a>
                </div>
                <p className="text-lg mb-6">
                    Canadian citizen, based in the beautiful city of Toronto 🏙️<br />
                    I am not looking for work right now so please don't send me any reasonable offers. <br />
                    If you have an unreasonably high one let's talk! <br />
                    Freelancing under 20 hours a week only. <br />
                </p>
            </div>

            {/* Bio Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold text-green-600 mb-4"> Summary
                </h2>
                <ul className="list-disc list-inside">
                    <li>Solid understanding of all stages of software lifecycle: analysis, design, implementation, testing, deployment and maintenance</li>
                    <li>Extensive experience in installing and configuring multi-tiered applications on various Operating Systems, Database Management Systems and Web Servers</li>
                    <li>Able to multitask in fast-paced, multiple project environments and meet tight deadlines</li>
                    <li>Experience working with the distributed mission-critical infrastructure and providing 24/7 support</li>
                    <li>Excellent client-facing and communication skills (both written and verbal), coupled with a strong technical background</li>
                    <li>Risk, securities and trading floor experience (equity and derivatives)</li>
                    <li>Exceptional analytical and problem solving skills</li>
                    <li>Detail-oriented, with the ability to focus and work quickly</li>
                </ul>
            </div>

            <h2 className="text-2xl font-semibold text-green-600 mb-4">
                Key Skills
            </h2>
            <ul className="flex flex-wrap text-md text-gray-200 gap-6">
                {
                    [
                        'Linux',
                        'Windows Server',
                        'SQL',
                        'Powershell',
                        'Kubernetes',
                        'Docker',
                        'Ansible',
                        'Shell',
                        'FIX',
                        'Azure',
                        'Terraform',
                        'GCP'
                    ].sort().map((tech) => (
                        <li key={tech} 
                            className="bg-gray-500 px-5 py-2 rounded-full"
                            title="5 years"
                        >{tech}</li>
                    ))
                }
            </ul>
            <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4"> Education
            </h2>
            <strong>2004</strong> - Toronto Metropolitan University - Bachelor of Applied Computer Science, minor in math.
            <h2 className="text-2xl font-semibold text-green-600 mt-10 mb-4"> Certifications
            </h2>
            <strong>2025</strong> - CKA - Certified Kubernetes Administrator - <a
                href="https://training.linuxfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
            > Linux Foundation
            </a>
            <br/>
            <strong>2024</strong> - Associate Cloud Engineer - <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
            > Google
            </a>        
        </div>
    );
}

export default Resume;