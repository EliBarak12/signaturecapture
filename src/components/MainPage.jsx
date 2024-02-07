import React from 'react';

const MainPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-3xl font-semibold">Welcome to My Website</h1>
      </header>
      <main className="container mx-auto p-4">
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id felis ut risus molestie commodo.</p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">Service 1</li>
            <li className="text-lg">Service 2</li>
            <li className="text-lg">Service 3</li>
          </ul>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="flex flex-col">
            <label htmlFor="name" className="text-lg mb-2">Name:</label>
            <input type="text" id="name" className="border rounded-lg p-2 mb-4" placeholder="Your Name" />
            <label htmlFor="email" className="text-lg mb-2">Email:</label>
            <input type="email" id="email" className="border rounded-lg p-2 mb-4" placeholder="Your Email" />
            <label htmlFor="message" className="text-lg mb-2">Message:</label>
            <textarea id="message" rows="4" className="border rounded-lg p-2 mb-4" placeholder="Your Message"></textarea>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="bg-gray-700 text-white p-4 text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainPage;
