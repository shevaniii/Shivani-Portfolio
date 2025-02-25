import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                
                {/* Logo or Name */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-xl font-semibold">Shivani Giri</h2>
                    <p className="text-gray-400 text-sm">Frontend Developer & MERN Stack Enthusiast</p>
                </div>

                {/* Download Resume */}
                <div className="mb-4 md:mb-0">
                    <a 
                        href="/shivani-Resume.pdf" 
                        download 
                        className="text-gray-300 hover:text-white hover:underline"
                    >
                        📄 Download My Resume
                    </a>
                </div>

                {/* Contact Information */}
                <div className="text-gray-300">
                    <p>Email: 
                        <a 
                            href="mailto:naincygiri5@gmail.com" 
                            className="hover:underline text-white"
                        > shivani.goswami212005@gamil.com</a>
                    </p>
                    <p>GitHub: 
                        <a 
                            href="https://github.com/shevaniii" 
                            className="hover:underline text-white"
                            target="_blank" 
                            rel="noreferrer"
                        > github.com/shevaaniii</a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Shivani Giri. All Rights Reserved.
            </div>
        </footer>
    );
}

