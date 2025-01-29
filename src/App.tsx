import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Globe2, 
  ArrowRight, 
  Users, 
  Code2, 
  Rocket,
  MessageSquare,
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowUp,
  ChevronDown,
  Laptop
} from 'lucide-react';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth', duration: 100 });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', duration: 1000 });
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const projects = [
    {
      title: 'Compilando Já',
      description: 'Website para uma empresa especializada em educação tecnológica.',
      image: '/src/img/trabalho1.png',
      tech: ['Next.js', 'Tailwindcss', 'Javascript']
    },
    {
      title: 'Website Delivery',
      description: 'Plataforma dedicada a uma empresa especializada em serviços de delivery.',
      image: '/src/img/trabalho2.png',
      tech: ['HTML', 'CSS', 'SCSS', 'Javascript']
    },
    {
      title: 'IMovi',
      description: 'Website para uma empresa especializada em venda de imóveis.',
      image: '/src/img/trabalho3.png',
      tech: ['React', 'Javacript', 'Bootstrap','Sass']
    }
  ];

  const partners = [
    'Clínica Lunar',
    'AWS',
    'Compilando Já',
    'Microsoft',
    'Flutter',
    'Vite',
    'Firebase'
  ];

  const steps = [
    {
      title: 'Descoberta',
      description: 'Reunião inicial para entender suas necessidades',
      icon: Users
    },
    {
      title: 'Planejamento',
      description: 'Definição de escopo, tecnologias e cronograma',
      icon: Code2
    },
    {
      title: 'Desenvolvimento',
      description: 'Construção do projeto com updates semanais',
      icon: Laptop
    },
    {
      title: 'Testes',
      description: 'Garantia de qualidade e performance',
      icon: MessageSquare
    },
    {
      title: 'Lançamento',
      description: 'Publicação e suporte inicial',
      icon: Rocket
    }
  ];

  const faqs = [
    {
      question: 'Quanto tempo leva para desenvolver um app?',
      answer: 'O tempo varia conforme a complexidade, mas geralmente entre 2-4 meses.'
    },
    {
      question: 'Quais plataformas vocês atendem?',
      answer: 'Desenvolvemos para iOS, Android e Web.'
    },
    {
      question: 'Como funciona o pagamento?',
      answer: 'Trabalhamos com pagamentos parcelados conforme as entregas.'
    },
    {
      question: 'Oferecem suporte após o lançamento?',
      answer: 'Sim, oferecemos 3 meses de suporte gratuito após o lançamento.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#313135] backdrop-blur-sm shadow-md z-50">
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 text-red-500">
            <img src="/src/img/logo.png" width={170} alt="Logo" />
            </div>
            <div className="space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-[#8638ff] font-medium">Home</button>
              <button onClick={() => scrollToSection('projects')} className="text-white hover:text-[#8638ff] font-medium">Projetos</button>
              <button onClick={() => scrollToSection('process')} className="text-white hover:text-[#8638ff] font-medium">Processos</button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#8638ff] font-medium">Sobre</button>
              <button onClick={() => scrollToSection('faq')} className="text-white hover:text-[#8638ff] font-medium">FAQ</button>
            </div>
            <div>
              <a target='_blank' href="https://calendly.com/vorteklabs/30min" className="inline-flex items-center bg-white text-sm text-[#18181b] px-3 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Agende uma Reunião
                <ArrowRight className="ml-2" size={15} />
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#611fc5] text-white p-3 rounded-full shadow-lg hover:bg-[#612cb1] drop-shadow-lg transition-all duration-500 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-[#8638ff] to-[#8638ff] text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6">
              Construindo o futuro digital dos seus sonhos.
            </h1>
            <p className="text-sm md:text-lg lg:text-xl mb-8">
              Criação estratégica para impulsionar o seu negócio no mundo digital.
            </p>
            <a target='_blank' href="https://calendly.com/vorteklabs/30min" className="inline-flex items-center bg-white text-[#18181b] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Agende uma Reunião
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-[#1e1f22]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="overflow-hidden">
            <div className="flex space-x-16 animate-scroll-infinite">
              {[...partners, ...partners].map((partner, index) => (
                <span key={index} className="text-white text-lg whitespace-nowrap font-medium">
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-[#18181b]" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">Projetos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="group relative bg-[#1e1f22] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className=" w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#8638ff]">{project.title}</h3>
                  <p className="text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-white text-[#18181b] rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#18181b]">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">Por Que Nos Escolher?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code2 className="text-[#8638ff]" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-[#8638ff]">Expertise Técnica</h3>
              <p className="text-white text-xs/loose sm:text-sm/loose lg:text-base/loose">Especializados em tecnologias modernas, <br /> oferecemos soluções digitais inovadoras <br /> e eficientes para o seu projeto.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-[#8638ff]" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-[#8638ff]">Entrega Rápida</h3>
              <p className="text-white text-xs/loose sm:text-sm/loose lg:text-base/loose">Processos ágeis e otimizados para garantir <br /> entregas eficientes e dentro do prazo.</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-[#8638ff]" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-[#8638ff]">Suporte Dedicado</h3>
              <p className="text-white text-xs/loose sm:text-sm/loose lg:text-base/loose">Atendimento transparente e suporte <br /> contínuo para garantir o sucesso do seu projeto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#18181b]" id="process">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">Nossos Processos</h2>
          <div className="max-w-7xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-[#1e1f22] rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="bg-[#8638ff] text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {<step.icon size={24} />}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2 text-[#8638ff]">{step.title}</h3>
                    <p className="text-white text-xs/loose sm:text-sm/loose lg:text-base/loose">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-[#18181b]" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">Quem Somos?</h2>
            <p className="text-white mb-8 text-xs sm:text-sm md:text-base lg:text-lg font-light"> 
            Somos Lucas e Rafael, desenvolvedores de software e a força por trás da Vortek Labs. Trabalhamos para ajudar microempreendedores a construir uma presença online sólida e alcançar seus objetivos com soluções digitais inteligentes.  

            Nosso compromisso vai além de criar sites funcionais, buscamos entregar excelência. Aliamos criatividade e conhecimento técnico para transformar suas ideias em projetos digitais de impacto.  

            Se você procura uma equipe dedicada e atenta aos detalhes, vamos nos conectar e fazer seu projeto acontecer!  
            </p>
            <div className="flex justify-center space-x-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8638ff]">15+</div>
                <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8638ff]">98%</div>
                <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light">Clientes Satisfeitos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8638ff]">2</div>
                <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light">Anos no Mercado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#18181b]" id="faq">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">Perguntas Frequentes</h2>
          <div className="max-w-7xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#1e1f22] rounded-lg shadow-md overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#313135]"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-[#8638ff]">{faq.question}</h3>
                  <ChevronDown
                    className={`transform text-white transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-40 py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8638ff] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-evenly">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contato</h3>
              <p className="mb-2">vorteklabs@gmail.com</p>
              <p>(27) 99984-8179</p>
              <p>(27) 99916-4443</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Endereço</h3>
              <p>Serra, ES</p>
              <p>Brasil</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#611fc5]"><Github size={24} /></a>
                <a href="#" className="hover:text-[#611fc5]"><Linkedin size={24} /></a>
                <a href="https://www.instagram.com/vortek.labs/?next=%2F" className="hover:text-[#611fc5]"><Instagram size={24} /></a>
                <a href="#" className="hover:text-[#611fc5]"><Mail size={24} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2025 Vortek Labs. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
