import { useState } from 'react';
import NavBar from './NavBar';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Integrate with backend to send messages)');
  };

  return (
    <main className="bg-gradient-to-br from-purple-50 to-blue-100 min-h-screen text-gray-800">
      <NavBar />
      <section className="max-w-2xl mx-auto py-40 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Reach Me Out</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-300" />
          </div>
          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} required className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-300"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Send</button>
        </form>
      </section>
    </main>
  );
}
