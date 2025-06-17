import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MissionStats />
        <Features />
        <Meeting />
        <Apply />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-{purple}">MeaVana</div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#features" className="hover:text-blue-600">Contact</a>
          <a href="#careers" className="hover:text-blue-600">Careers</a>
        </nav>
        <a href="https://chromewebstore.google.com/detail/university-of-illinois-ur/ibcdcoicpjjcblpnplhpjkpaboeeimld" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Download</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-24 bg-gray-50">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-16">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold mb-4">Introducing Meavana</h1>
          <p className="text-lg mb-6 text-gray-700">The tool to maximize your Illini journey</p>
          <div className="space-x-4">
            <a href="https://chromewebstore.google.com/detail/university-of-illinois-ur/ibcdcoicpjjcblpnplhpjkpaboeeimld" className="bg-blue-600 text-white px-6 py-3 rounded-lg inline-block hover:bg-blue-700">Download Now</a>
            <a href="#features" className="bg-white border border-blue-600 text-blue-600 px-6 py-3 rounded-lg inline-block hover:bg-blue-50">Learn More</a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img src="uiuc-meavana/src/app/images/Meavana Quad.png" alt="Meavana Quad" className="w-3/4" />
        </div>
      </div>
    </section>
  );
}

function MissionStats() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-12">Empowering students and professionals to achieve more, one focus session at a time.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-extrabold">10k+</h3>
            <p className="text-gray-600">Downloads</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold">5.0★</h3>
            <p className="text-gray-600">App Store Rating</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold">20+</h3>
            <p className="text-gray-600">Features</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { title: 'Multiple Search Bars', desc: 'Quickly find info across all your classes and notes.', img: '/images/focus-timer.png' },
    { title: 'Notepad & Sticky Notes', desc: 'Jot down ideas during lectures or set reminders for assignments.', img: '/images/digital-notes.png' },
    { title: 'Stunning Wallpapers', desc: 'Every morning, be greeted by a handpicked wallpaper that fits your vibe & keeps you inspired.', img: '/images/themes.png' },
  ];
  return (
    <section id="features" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <img src={item.img} alt={item.title} className="h-40 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-2 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Meeting() {
  return (
    <section className="bg-blue-600 py-16">
      <div className="container mx-auto text-center px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">Learn More</h2>
        <p className="mb-4">Want to hear more how MeaVana can boost your productivity?</p>
        <p className="mb-6">Schedule a Meeting!</p>
        <a href="https://calendly.com/shivmohandutt" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100">Schedule a Meeting</a>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="career" className="bg-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Careers</h2>
        <h1 className="text=2xl mb-12">Want to help us improve MeaVana? Apply today to work with us!</h1>
        <div className="mt-12">
          <a href="https://uiuc.joinhandshake.com/e/1030842" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Apply Now</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600">© 2025 MeaVana. All rights reserved.</div>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600">Privacy</a>
          <a href="#" className="hover:text-blue-600">Terms</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
