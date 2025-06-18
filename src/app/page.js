import Image from 'next/image';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
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
    <header className="bg-white shadow-md fixed w-full z-10 border-b-4 border-orange-500">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-purple-700 flex items-center">
          <span className="mr-2">MeaVana</span>
          <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
        </div>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-purple-600">Features</a>
          <a href="#meeting" className="hover:text-purple-600">Contact</a>
          <a href="#career" className="hover:text-purple-600">Careers</a>
        </nav>
        <a
          href="https://chromewebstore.google.com/detail/university-of-illinois-ur/ibcdcoicpjjcblpnplhpjkpaboeeimld"
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Download
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-24 bg-gradient-to-br from-purple-50 via-white to-orange-50 relative overflow-hidden">
      {/* UIUC diagonal accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-orange-500 opacity-10 transform -skew-y-6 z-0"></div>
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center px-6 py-16 relative z-10">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold mb-4 text-purple-700">Introducing Meavana</h1>
          <p className="text-lg mb-6 text-gray-700">The tool to maximize your Illini journey</p>
          <div className="space-x-4">
            <a
              href="https://chromewebstore.google.com/detail/university-of-illinois-ur/ibcdcoicpjjcblpnplhpjkpaboeeimld"
              className="bg-orange-500 text-white px-6 py-3 rounded-lg inline-block hover:bg-orange-600 transition"
            >
              Download Now
            </a>
            <a
              href="#features"
              className="bg-white border border-purple-600 text-purple-700 px-6 py-3 rounded-lg inline-block hover:bg-purple-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img src="/images/Meavana Quad.png" alt="Meavana Quad" className="w-3/4 rounded-xl shadow-lg border-4 border-orange-200" />
        </div>
      </div>
    </section>
  );
}

function MissionStats() {
  return (
    <section className="bg-purple-50 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4 text-purple-700">Our Mission</h2>
        <p className="text-gray-700 mb-12">Empowering students and professionals to achieve more, one focus session at a time.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-4xl font-extrabold text-orange-500">6k+</h3>
            <p className="text-gray-600">Overall Meavana Users</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-orange-500">5.0★</h3>
            <p className="text-gray-600">App Store Rating</p>
          </div>
          <div>
            <h3 className="text-4xl font-extrabold text-orange-500">20+</h3>
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
    <section id="features" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-700">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="bg-purple-50 p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-orange-500">
              <img src={item.img} alt={item.title} className="h-40 mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-2 text-center text-purple-700">{item.title}</h3>
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
    <section id="meeting" className="bg-gradient-to-r from-purple-600 to-orange-500 py-16">
      <div className="container mx-auto text-center px-6 text-white">
        <h2 className="text-3xl font-bold mb-4">Learn More</h2>
        <p className="mb-4">Want to hear more how MeaVana can boost your productivity?</p>
        <p className="mb-6">Schedule a Meeting!</p>
        <a
          href="https://calendly.com/shivmohandutt"
          className="bg-white text-purple-700 px-6 py-3 rounded-lg hover:bg-orange-100 transition font-semibold"
        >
          Schedule a Meeting
        </a>
      </div>
    </section>
  );
}

function Apply() {
  return (
    <section id="career" className="bg-purple-50 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-purple-700">Careers</h2>
        <h1 className="text-2xl mb-12 text-gray-800">Want to help us improve MeaVana? Apply today to work with us!</h1>
        <div className="mt-12">
          <a
            href="https://uiuc.joinhandshake.com/e/1030842"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t-4 border-orange-500 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600">© 2021 MeaVana. All rights reserved.</div>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="mailto:support@meavana.com" className="hover:text-purple-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
