import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Coffee, 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Info, 
  Instagram, 
  Twitter, 
  MapPin, 
  Clock, 
  Phone,
  Layout,
  Laptop
} from 'lucide-react';
import { MENU_ITEMS, MenuItem } from './types.ts';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Regular' | 'Premium' | 'Signature'>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav 
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent-blue rounded-xl flex items-center justify-center text-white shadow-lg shadow-accent-blue/20">
              <Coffee size={24} />
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-brand-blue">
              Brew<span className="text-accent-blue">Space</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium hover:text-accent-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-blue transition-all group-hover:w-full" />
              </a>
            ))}
            <button className="px-6 py-2.5 bg-brand-blue text-white rounded-full text-sm font-semibold hover:bg-brand-blue/90 transition-all active:scale-95">
              Order Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-brand-blue"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-brand-blue/5 shadow-xl md:hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    className="text-lg font-semibold text-brand-blue py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full mt-2 py-4 bg-accent-blue text-white rounded-2xl font-bold">
                  Order Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-soft-blue/30 rounded-bl-[100px] hidden lg:block" />
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-soft-blue text-accent-blue text-xs font-bold uppercase tracking-wider mb-6">
                <Layout size={14} />
                <span>The Modern Coffee Experience</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-brand-blue">
                Kopi Hebat Untuk <br />
                <span className="text-accent-blue italic font-serif">Masa Depan</span> Hebat.
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                BrewSpace menghadirkan suasana kedai kopi modern yang mendukung produktivitas Anda. 
                Nikmati perpaduan biji kopi pilihan dengan interior minimalis yang nyaman.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold flex items-center justify-center gap-2 group hover:gap-4 transition-all shadow-xl shadow-brand-blue/10">
                  Lihat Menu <ChevronRight size={20} />
                </button>
                <div className="flex items-center gap-4 px-6 py-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                        <img 
                          src={`https://i.pravatar.cc/100?u=${i}`} 
                          alt="user" 
                          referrerPolicy="no-referrer" 
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-500">
                    <span className="text-brand-blue font-bold">1k+</span> Customers
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-20 aspect-[4/5] md:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" 
                  alt="Remote work with coffee"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Laptop size={18} className="text-accent-blue" />
                    <span className="text-xs font-bold uppercase tracking-widest opacity-80">Workspace Ready</span>
                  </div>
                  <p className="text-xl font-medium">Suasana tenang untuk produktivitas maksimal di setiap cangkir.</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-blue/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-soft-blue rounded-[30px] -z-10 rotate-12" />
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-24 bg-soft-blue/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-xs font-bold text-accent-blue uppercase tracking-[0.2em] mb-4">Our Curated Menu</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-6">Pilihan Barista Kami</h3>
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {['All', 'Regular', 'Premium', 'Signature'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as any)}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                      activeCategory === cat 
                        ? 'bg-brand-blue text-white shadow-lg' 
                        : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              <AnimatePresence mode='popLayout'>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-[32px] p-4 border border-gray-100 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all flex flex-col h-full"
                  >
                    <div className="relative aspect-square rounded-[24px] overflow-hidden mb-6">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-brand-blue">
                        {item.category}
                      </div>
                    </div>
                    <div className="flex flex-col flex-grow px-2">
                      <h4 className="text-xl font-bold text-brand-blue mb-2 group-hover:text-accent-blue transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                        <span className="text-lg font-bold text-brand-blue">
                          {formatPrice(item.price)}
                        </span>
                        <button className="w-10 h-10 bg-soft-blue text-accent-blue rounded-full flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors">
                          <Plus size={20} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* About Us */}
        <section id="about" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4 pt-12">
                    <img 
                      src="https://images.unsplash.com/photo-1497933321115-3008986ef664?auto=format&fit=crop&q=80&w=400" 
                      className="rounded-3xl w-full h-64 object-cover rotate-[-2deg]"
                      alt="Coffee beans"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400" 
                      className="rounded-3xl w-full h-48 object-cover translate-x-4"
                      alt="Artisan coffee"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=400" 
                      className="rounded-3xl w-full h-48 object-cover translate-x-[-10px]"
                      alt="Modern interior"
                      referrerPolicy="no-referrer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=400" 
                      className="rounded-3xl w-full h-80 object-cover rotate-[2deg]"
                      alt="Barista working"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-soft-blue/40 rounded-full blur-3xl opacity-50" />
              </div>

              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 text-accent-blue mb-6">
                  <Info size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest">Tentang BrewSpace</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-blue mb-8 leading-tight">
                  Lebih Dari Sekadar <br /> <span className="text-accent-blue">Kedai Kopi.</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    Kami percaya bahwa setiap ide besar berawal dari satu cangkir kopi yang berkualitas. 
                    BrewSpace didirikan untuk menjadi ruang temu bagi para kolaborator, pekerja kreatif, 
                    dan pecinta kopi yang mendambakan suasana modern namun tetap hangat.
                  </p>
                  <p className="text-gray-600 leading-relaxed italic border-l-4 border-accent-blue pl-6 py-2">
                    "Visi kami adalah menyediakan ekosistem produktivitas melalui sajian kopi premium 
                    dan desain ruang yang fungsional."
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    <div>
                      <h4 className="text-3xl font-display font-bold text-brand-blue mb-1">100%</h4>
                      <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">Biji Arabica Pilihan</p>
                    </div>
                    <div>
                      <h4 className="text-3xl font-display font-bold text-brand-blue mb-1">08 AM</h4>
                      <p className="text-sm text-gray-500 font-medium tracking-wide uppercase">Buka Setiap Hari</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-brand-blue rounded-[48px] overflow-hidden relative p-12 md:p-24 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/20 blur-3xl -z-0" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-3xl -z-0" />
              
              <div className="relative z-10 text-white max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Siap Memulai <br /> Hari Anda?</h2>
                <p className="text-lg text-white/70 mb-10">
                  Pesan kopi favorit Anda sekarang atau kunjungi BrewSpace terdekat untuk pengalaman bekerja yang lebih berinspirasi.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <button className="w-full sm:w-auto px-10 py-5 bg-white text-brand-blue rounded-3xl font-bold hover:bg-white/90 transition-all flex items-center justify-center gap-3">
                    Pesan Online <ChevronRight size={20} />
                  </button>
                  <button className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-white/20 rounded-3xl font-bold hover:bg-white/10 transition-all">
                    Lokasi Kedai
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                  <Coffee size={20} />
                </div>
                <span className="text-xl font-display font-bold tracking-tight text-brand-blue">
                  Brew<span className="text-accent-blue">Space</span>
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Platform modern untuk pecinta kopi dan pekerja produktif. Kualitas terbaik, pengalaman tak terlupakan.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-soft-blue flex items-center justify-center text-accent-blue hover:bg-accent-blue hover:text-white transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-soft-blue flex items-center justify-center text-accent-blue hover:bg-accent-blue hover:text-white transition-all">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-brand-blue font-bold mb-6">Navigasi</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-500 hover:text-accent-blue transition-colors text-sm font-medium">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-brand-blue font-bold mb-6">Kontak Kami</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-gray-500">
                  <MapPin size={18} className="text-accent-blue shrink-0" />
                  <span>Jl. Senopati No. 82, Jakarta Selatan, Indonesia</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <Phone size={18} className="text-accent-blue shrink-0" />
                  <span>+62 21 555 1234</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-500">
                  <Clock size={18} className="text-accent-blue shrink-0" />
                  <span>08:00 - 22:00 WIB</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-brand-blue font-bold mb-6">Berlangganan Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Dapatkan info promo dan update menu terbaru.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-accent-blue/20"
                />
                <button className="p-2.5 bg-brand-blue text-white rounded-xl hover:bg-brand-blue/90 transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400 font-medium">© 2026 BrewSpace Coffee. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-gray-400 hover:text-brand-blue font-medium">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-brand-blue font-medium">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Plus({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      width={size || 24} 
      height={size || 24} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
