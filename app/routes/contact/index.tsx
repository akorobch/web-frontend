import type { Route } from "./+types";

const ContactPage = ({ actionData }: Route.ComponentProps) => {

    const labelClass = "block text-medium font-semibold text-green-600";
    const inputClass = "w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-500 font-semibold text-gray-100";

    return (
        <div className="max-w-3xl mx-auto mt-12 px-10 py-12 bg-gray-300">
            <h2 className="text-3xl font-bold text-green-800 mb-10 text-center">
                📮 Contact Me
            </h2>

            <form action="https://formspree.io/f/xldpkbwa" 
            method='post' className="space-y-6">
                <div>
                    <label htmlFor="name" className={labelClass}>Full Name <span className="text-red-500">*</span></label>
                    <input type="text" id="name" name="name" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="email" className={labelClass}>Email <span className="text-red-500">*</span></label>
                    <input type="text" id="email" name="email" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="subject" className={labelClass}>Subject <span className="text-red-500">*</span></label>
                    <input type="text" id="subject" name="subject" className={inputClass} />
                </div>
                <div>
                    <label htmlFor="message" className={labelClass}>Message <span className="text-red-500">*</span></label>
                    <textarea id="message" name="message" className={`${inputClass} h-50`} />
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg bg-blue-600 hover:bg-blue-700 cursor-pointer mt-10">
                    Send Message
                </button>
            </form>
        </div>);
}

export default ContactPage;