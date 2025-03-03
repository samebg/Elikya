import React, { useState } from 'react';
import { Phone, Mail, MapPin, AlertTriangle, School, Plane, Building2, Hotel, CreditCard, MessageSquare, MapIcon as WhatsappIcon, Star, Users, Briefcase, Award } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    { title: 'Health Visa', icon: Building2, description: 'Assistance with medical treatment visa applications' },
    { title: 'Tourism Visa', icon: Plane, description: 'Support for tourist visa processing' },
    { title: 'Study Visa', icon: School, description: 'Guidance through student visa applications' },
    { title: 'Hotel Booking', icon: Hotel, description: 'Find and book accommodations worldwide' },
    { title: 'Ticket Booking', icon: Plane, description: 'Flight reservations and travel arrangements' },
    { title: 'Scholarship Applications', icon: School, description: 'Help with finding and applying for scholarships' }
  ];

  const testimonials = [
    {
      name: "Kesie M",
      role: "International Student",
      content: "Thanks to Elikya, I'm currently a student at Northwest University in Washington State.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Michael Chen",
      role: "Medical Tourist",
      content: "When I needed to travel for medical treatment, Elikya made the visa process seamless. Their attention to detail ensured I had no issues with my documentation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    },
    {
      name: "Amara Okafor",
      role: "Business Traveler",
      content: "I've used Elikya for multiple business trips, and they consistently deliver exceptional service. Their hotel and flight bookings are always perfect.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const partners = [
    {
      name: "Global University Alliance",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Network of prestigious universities offering scholarship opportunities"
    },
    {
      name: "International Travel Association",
      logo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Ensuring quality standards in travel services worldwide"
    },
    {
      name: "Medical Tourism Council",
      logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Facilitating access to quality healthcare across borders"
    },
    {
      name: "Premium Hotels Network",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      description: "Exclusive partnerships with luxury accommodations worldwide"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">Elikya</div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => setActiveSection('home')} className="hover:text-blue-200">Home</button>
              <button onClick={() => setActiveSection('services')} className="hover:text-blue-200">Our Services</button>
              <button onClick={() => setActiveSection('about')} className="hover:text-blue-200">About Us</button>
              <button onClick={() => setActiveSection('contact')} className="hover:text-blue-200">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Elikya International Education Agency</h1>
          <p className="text-xl mb-8">Your Trusted Partner for International Travel and Education</p>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <div className="flex items-center">
          <AlertTriangle className="h-6 w-6 text-yellow-400 mr-2" />
          <p className="text-yellow-700">
            <span className="font-bold">Warning:</span> Be alert for scammers. Only make payments if contacted by our official number.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Need Consultation?</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
              <p className="text-lg">Get expert advice on:</p>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• Visa Applications</li>
              <li>• Hotel Bookings</li>
              <li>• Flight Tickets</li>
              <li>• Scholarship Opportunities</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic flex-grow">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow text-center">
                <div className="h-40 flex items-center justify-center mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="Pictures/Flo.jpg" alt="Office" class="rounded-lg shadow-lg"
                alt="Office"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 text-lg">
                Florette Ebengho, de nationalité Congolaise -Américaine âgée de 27 ans; elle est la fondatrice de la société Elikya Internationale Education Agency.  Partenaire à beaucoup d’institutions tant internationales que nationales , EIEA accompagne les étudiants qui veulent poursuivre leurs études à l’étranger.( USA et Canada)
                  Titulaire d’un baccalauréat en études internationales ; Florette Ebengho a également une maîtrise en développement  internationale à Northwest University de Washington State qui est d’ailleurs l’un des partenaires de cette firme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <WhatsappIcon className="h-6 w-6 text-green-500 mr-2" />
                  <p>WhatsApp: [Number to be added]</p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600 mr-2" />
                  <p>US Phone: [Number to be added]</p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-500 mr-2" />
                  <p>[Address to be added]</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p>© 2024 Elikya International Education Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;