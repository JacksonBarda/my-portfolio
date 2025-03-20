export default function Footer() {
    return (
        <footer className="p-4 bg-gray-800 text-center text-white">
            <p>
                Email me at:{" "}
                <a
                    href="mailto:jacksonbarda@gmail.com"
                    className="hover:text-blue-500 underline"
                >
                    jacksonbarda@gmail.com
                </a>
            </p>
            <p className="mt-2">
                Call me at: (208) 473-9170
            </p>
            <div className="mt-2 space-x-4">
                <a
                    href="https://www.linkedin.com/in/jackson-barda-835ab0233/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-custom-grey-text underline"
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/JacksonBarda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-custom-grey-text underline"
                >
                    GitHub
                </a>
                <a
                    href="/Barda, Jackson C, Resume - 2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-custom-grey-text underline"
                >
                    Resume
                </a>
            </div>
        </footer>
    );
}