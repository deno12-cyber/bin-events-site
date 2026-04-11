/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Mic2, 
  Music, 
  Users, 
  Youtube,
  Video,
  Instagram, 
  MessageCircle, 
  Phone, 
  Mail, 
  ShieldCheck,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Home,
  Briefcase,
  Image as ImageIcon,
  MessageSquare,
  Facebook
} from 'lucide-react';

// --- Assets ---
const BASE_URL = "";
const LOGO_URL = "/Utool-20260411-152848548.png";
const INSTAGRAM_URL = "https://www.instagram.com/mc_ssalongo_koire_bin_alex?igsh=MXd0OTRjNTRtNDAxOA%3D%3D&utm_source=qr";
const FACEBOOK_URL = "https://www.facebook.com/share/1GUmsqwCnJ/?mibextid=wwXIfr";
const WHATSAPP_NUMBER = "256705435424";
const EMAIL_ADDRESS = "alexgillig256@gmail.com";
const SLOGAN = "It's all About Talent";

// --- Components ---

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-full scale-150 animate-pulse"></div>
        <img 
          src={LOGO_URL} 
          alt="BIN Events Logo" 
          className="h-56 md:h-80 w-auto object-contain relative z-10"
          referrerPolicy="no-referrer"
        />
      </motion.div>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-white text-xl md:text-2xl font-serif italic mb-2 tracking-widest">
          BIN Events & Management
        </h2>
        <div className="w-12 h-[1px] bg-gold mx-auto mb-4"></div>
        <p className="text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-light">
          {SLOGAN}
        </p>
      </motion.div>

      {/* Loading bar */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-white/10 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-full h-full bg-gold"
        />
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <Users size={20} /> },
    { name: 'Services', href: '#services', icon: <Briefcase size={20} /> },
    { name: 'Gallery', href: '#gallery', icon: <ImageIcon size={20} /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare size={20} /> },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/5 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-3 group">
            <img 
              src={LOGO_URL} 
              alt="BIN Events Logo" 
              className="h-12 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col leading-none">
              <span className="text-white text-[10px] uppercase tracking-[0.3em] font-light group-hover:text-gold transition-colors">Events & Management</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest text-white/70 hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-2 bg-gold text-black text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:bg-gold-light shadow-[0_0_15px_rgba(212,175,55,0.3)]"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Toggle - Hidden in App Mode */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile App Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/5 backdrop-blur-xl flex items-center justify-around z-[60] border-t border-white/10 rounded-t-2xl">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="flex flex-col items-center gap-1 text-white/50 hover:text-gold transition-colors"
          >
            {link.icon}
            <span className="text-[8px] uppercase tracking-tighter">{link.name}</span>
          </a>
        ))}
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-start">
      {/* Animated Background Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold/20"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold-dark/20"
        />
        
        {/* Floating Particles/Bokeh */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.3
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 bg-gold rounded-full blur-[1px]"
          />
        ))}
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Event" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
      </div>

      <div className="relative z-10 text-left px-6 md:px-24 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-serif italic mb-8 leading-tight"
        >
          We Create <span className="text-gold not-italic font-sans font-bold">Unforgettable</span> Experiences
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 bg-gold text-black px-10 py-4 text-sm uppercase tracking-widest font-bold hover:scale-105 transition-all duration-300 group shadow-[0_0_20px_rgba(212,175,55,0.4)]"
          >
            Book Your Event
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gold/50"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-luxury-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Our Story</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
            Crafting Excellence in Every Detail
          </h3>
          <p className="text-white/60 text-lg leading-relaxed mb-8">
            BIN Events and Management is more than an event management company; we are architects of memories. Based in the heart of Kampala, we bring a touch of sophistication and local flair to every occasion. It's all about talent, and we ensure the best talent is at your service.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-gold text-3xl font-bold mb-2">10+</h4>
              <p className="text-white/40 text-xs uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <h4 className="text-gold text-3xl font-bold mb-2">500+</h4>
              <p className="text-white/40 text-xs uppercase tracking-widest">Events Managed</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden border border-gold/20 p-4">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000" 
              alt="Event Setup" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-gold/30 -z-10 hidden md:block"></div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<null | typeof services[0]>(null);

  const services = [
    {
      title: 'Event Planning',
      description: 'From concept to execution, we handle every detail of your weddings, galas, and corporate functions.',
      details: 'Our comprehensive event planning service covers venue selection, vendor management, budget tracking, and on-site coordination. We specialize in creating bespoke experiences that reflect your unique personality and vision.',
      icon: <Calendar className="text-gold" size={32} />,
      talent: [
        { name: 'Wedding Planning', image: '/q.jpeg' },
        { name: 'Corporate Galas', image: '/s.jpeg' },
        { name: 'Private Parties', image: '/o.jpeg' },
        { name: 'Event Design', image: '/m.jpeg' },
        { name: 'Bespoke Management', image: '/l.jpeg' },
      ]
    },
    {
      title: 'Professional MCs',
      description: 'Charismatic and professional masters of ceremony to keep your audience engaged and the event on track.',
      details: 'A great event needs a great voice. Our roster of professional MCs are experts at reading the room, managing transitions, and maintaining high energy.',
      icon: <Mic2 className="text-gold" size={32} />,
      talent: [
        { name: 'Mc SALONGO KOIRE bin ALEX', image: '/IMG_9524.JPG' },
        { name: 'Mc SALONGO KOIRE bin ALEX', image: '/IMG_9317.PNG' },
        { name: 'Mc bakiddawo', image: '/WhatsApp Image 2026-04-11 .jpeg' },
        { name: 'Mc bakiddawo', image: '/WhatsApp Image 2026-04-11 at 7.21.03 AM.jpeg' },
      ]
    },
    {
      title: 'Sound / PA System',
      description: 'State-of-the-art audio equipment and expert technicians for crystal clear sound at any venue.',
      details: 'We provide premium audio solutions tailored to your venue\'s acoustics. Our inventory includes high-fidelity speakers, wireless microphones, and digital mixers.',
      icon: <Music className="text-gold" size={32} />,
      talent: [
        { name: 'Premium Audio Setup', image: '/r.jpeg' },
        { name: 'Professional PA System', image: '/t.jpeg' },
        { name: 'Event Sound Management', image: '/y.jpeg' },
        { name: 'High-Fidelity Speakers', image: '/v.jpeg' },
        { name: 'Digital Audio Tech', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=400' },
      ]
    },
    {
      title: 'Artist Management',
      description: 'Connecting you with top-tier local and international talent to elevate your event experience.',
      details: 'Entertainment is the soul of any event. We manage relationships with top musicians, dancers, and performers.',
      icon: <Users className="text-gold" size={32} />,
      talent: [
        { name: 'Elite Performers', image: '/j.jpeg' },
        { name: 'Talent Showcase', image: '/k.jpeg' },
        { name: 'Live Entertainment', image: '/n.jpeg' },
        { name: 'Professional Artists', image: '/p.jpeg' },
        { name: 'Stage Presence', image: '/z.jpeg' },
      ]
    },
    {
      title: 'Vio Ushering Services',
      description: 'Professional ushering, gift wrapping, and security bouncers for elite event management.',
      details: 'Our Vio Ushering team provides comprehensive event support including professional ushering, exquisite gift wrapping, elite bouncers, and efficient off-loading teams to ensure your event runs flawlessly.',
      icon: <ShieldCheck className="text-gold" size={32} />,
      talent: [
        { name: 'Professional Ushers', image: '/IMG_6464.JPG' },
        { name: 'Elite Ushering Team', image: '/IMG_6467.JPG' },
        { name: 'Vio Excellence', image: '/11.JPG' },
        { name: 'Elite Service', image: '/12.JPG' },
        { name: 'Professional Protocol', image: '/13.JPG' },
        { name: 'Luxury Ushering', image: '/14.JPG' },
        { name: 'Corporate Vests Team', image: '/IMG_6468.JPG' },
        { name: 'Event Hostesses', image: '/IMG_6469.JPG' },
        { name: 'Vio Service Team', image: '/IMG_6691.JPG' },
        { name: 'Umbrella Protocol', image: '/IMG_6696.JPG' },
        { name: 'Protocol Team', image: '/IMG_6697.JPG' },
        { name: 'Elite Lineup', image: '/IMG_6699.JPG' },
      ]
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold uppercase tracking-widest text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-serif">Exquisite Services</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className="group p-4 md:p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-gold/50 transition-all duration-500 cursor-pointer"
            >
              <div className="mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-4 group-hover:text-gold transition-colors">{service.title}</h4>
              <p className="text-white/50 text-[10px] md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                {service.description}
              </p>
              <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-luxury-black border border-gold/30 p-8 md:p-12 overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-gold transition-colors z-10"
              >
                <X size={24} />
              </button>
              
              <div className="mb-8">
                {selectedService.icon}
              </div>
              <h3 className="text-3xl font-serif mb-6 text-gold">{selectedService.title}</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8 italic">
                "{selectedService.description}"
              </p>
              <div className="w-12 h-[1px] bg-gold mb-8"></div>
              <p className="text-white/50 leading-relaxed mb-12">
                {selectedService.details}
              </p>

              {/* Talent Showcase */}
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-6">Available Talent & Options</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {selectedService.talent.map((item, idx) => (
                    <div key={`${item.name}-${idx}`} className="group/talent relative aspect-[3/4] overflow-hidden border border-white/10">
                      <motion.img 
                        initial={{ filter: 'grayscale(100%)' }}
                        whileInView={{ filter: 'grayscale(0%)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.endsWith('.png')) {
                            target.src = target.src.replace('.png', '.jpg');
                          } else if (target.src.endsWith('.jpg')) {
                            target.src = `https://picsum.photos/seed/${item.name}/400/600`;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                      <p className="absolute bottom-4 left-4 text-xs uppercase tracking-widest font-bold text-white group-hover/talent:text-gold transition-colors">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="bg-gold text-black px-8 py-3 text-xs uppercase tracking-widest font-bold hover:bg-gold-light transition-colors"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "BIN Events and Management transformed our corporate gala into a masterpiece. Their attention to detail and professionalism is unmatched in Uganda.",
      author: "Sarah Namubiru",
      company: "CEO, Pearl Dynamics",
    },
    {
      quote: "Our wedding was a dream come true. Every moment was perfectly orchestrated, allowing us to simply enjoy our special day.",
      author: "David & Maria",
      company: "Private Client",
    },
    {
      quote: "The sound quality and artist management for our concert were world-class. BIN Events and Management is the gold standard for large-scale productions.",
      author: "Robert Kato",
      company: "Director, Pulse Entertainment",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-luxury-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-gold uppercase tracking-widest text-sm mb-12">Client Testimonials</h2>
        
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-2xl md:text-3xl font-serif italic mb-8 leading-relaxed text-white/90">
                "{testimonials[activeIndex].quote}"
              </p>
              <div>
                <p className="text-gold font-bold tracking-widest uppercase text-sm mb-1">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-white/30 text-xs uppercase tracking-widest">
                  {testimonials[activeIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-500 ${
                index === activeIndex ? 'bg-gold w-8' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    '/1.JPG',
    '/2.JPG',
    '/3.PNG',
    '/4.JPG',
    '/IMG_6464.JPG',
    '/IMG_6467.JPG',
    '/IMG_6468.JPG',
    '/IMG_6469.JPG',
    '/IMG_6691.JPG',
    '/IMG_6696.JPG',
    '/IMG_6697.JPG',
    '/IMG_6699.JPG',
    '/IMG_9524.JPG',
    '/IMG_9317.PNG',
    '/WhatsApp Image 2026-04-11 .jpeg',
    '/WhatsApp Image 2026-04-11 at 7.21.03 AM.jpeg',
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-luxury-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-serif">Visual Masterpieces</h3>
          </div>
          <p className="text-white/40 max-w-md text-sm">
            A glimpse into the extraordinary events we've brought to life across Uganda and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <motion.img 
                initial={{ filter: 'grayscale(100%)' }}
                whileInView={{ filter: 'grayscale(0%)' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 }}
                src={src} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith('.png')) {
                    target.src = target.src.replace('.png', '.jpg');
                  } else if (target.src.endsWith('.jpg')) {
                    target.src = `https://picsum.photos/seed/gallery-${index}/800/800`;
                  }
                }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-gold uppercase tracking-widest text-xs border border-gold px-4 py-2">View Event</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    eventType: 'Wedding',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const text = `*New Inquiry from BIN Events Website*%0A%0A` +
                 `*Name:* ${formData.name}%0A` +
                 `*Phone:* ${formData.phone}%0A` +
                 `*WhatsApp for Feedback:* ${formData.whatsapp}%0A` +
                 `*Event Type:* ${formData.eventType}%0A` +
                 `*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/256705435424?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-gold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-8">Let's Create Magic</h3>
          <p className="text-white/60 mb-12 max-w-md">
            Ready to start planning your next exclusive event? Reach out to our team of experts today.
          </p>

          <div className="space-y-8">
            <a href="tel:+256705435424" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                <Phone className="text-gold group-hover:text-black" size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Call Us</p>
                <p className="text-lg">+256 705 435 424</p>
              </div>
            </a>
            <a href="mailto:alexgillig256@gmail.com" className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                <Mail className="text-gold group-hover:text-black" size={20} />
              </div>
              <div>
                <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Email Us</p>
                <p className="text-lg">alexgillig256@gmail.com</p>
              </div>
            </a>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="https://youtube.com/@ssalongokoirebinalex?si=12Iicai8UIrdim4k" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 group">
                <Youtube size={20} className="text-gold group-hover:text-black" />
                <span className="text-xs uppercase tracking-widest font-bold">YouTube</span>
              </a>
              <a href="https://www.tiktok.com/@mcssalongokoirebinalex?_r=1&_t=ZS-95SJU02TT9u" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 group">
                <Video size={20} className="text-gold group-hover:text-black" />
                <span className="text-xs uppercase tracking-widest font-bold">TikTok</span>
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 group">
                <Instagram size={20} className="text-gold group-hover:text-black" />
                <span className="text-xs uppercase tracking-widest font-bold">Instagram</span>
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full hover:bg-gold hover:text-black transition-all duration-300 group">
                <Facebook size={20} className="text-gold group-hover:text-black" />
                <span className="text-xs uppercase tracking-widest font-bold">Facebook</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Full Name</label>
                <input 
                  required
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40">Phone Number</label>
                <input 
                  required
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors"
                  placeholder="+256..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">WhatsApp for Feedback</label>
              <input 
                required
                type="tel" 
                value={formData.whatsapp}
                onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors"
                placeholder="+256..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Event Type</label>
              <select 
                value={formData.eventType}
                onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors appearance-none"
              >
                <option className="bg-black">Wedding</option>
                <option className="bg-black">Corporate Event</option>
                <option className="bg-black">Concert</option>
                <option className="bg-black">Private Party</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-white/40">Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors resize-none"
                placeholder="Tell us about your vision..."
              />
            </div>
            <button type="submit" className="w-full bg-gold text-black py-4 uppercase tracking-widest font-bold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2">
              Send via WhatsApp <MessageCircle size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-luxury-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <a href="#home" className="flex items-center gap-3 justify-center md:justify-start mb-2 group">
            <img 
              src={LOGO_URL} 
              alt="BIN Events Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col leading-none">
              <span className="text-white text-[8px] uppercase tracking-[0.3em] font-light group-hover:text-gold transition-colors">Events & Management</span>
            </div>
          </a>
          <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">{SLOGAN}</p>
        </div>

        <div className="flex gap-8">
          <a href="https://youtube.com/@ssalongokoirebinalex?si=12Iicai8UIrdim4k" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Youtube size={20} /></a>
          <a href="https://www.tiktok.com/@mcssalongokoirebinalex?_r=1&_t=ZS-95SJU02TT9u" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Video size={20} /></a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Instagram size={20} /></a>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Facebook size={20} /></a>
        </div>

        <p className="text-white/30 text-xs">
          © {new Date().getFullYear()} BIN Events and Management. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/256705435424"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-24 md:bottom-8 right-6 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl text-white hover:bg-[#128C7E] transition-colors"
    >
      <MessageCircle size={32} fill="currentColor" />
    </motion.a>
  );
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative md:bg-luxury-black">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:max-w-none md:mx-0 max-w-md mx-auto min-h-screen bg-black shadow-2xl relative overflow-x-hidden md:bg-transparent"
        >
          <Navbar />
          <main className="pb-20 md:pb-0">
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </motion.div>
      )}
    </div>
  );
}
