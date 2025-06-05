import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Home, Package, Mail } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import logo from '/assests/atrium new.png';




const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
 

  return (
    <>
      <nav
  className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-1"
>
        <div className="container mx-auto px-4 flex items-center justify-between" data-aos="fade-up" data-aos-delay="300">
    
    
                    <Link to="/" className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo"  
              className="w-[80px] h-[80px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] -my-6 sm:-my-8 lg:-my-10 mr-[-8px] sm:mr-[-10px] lg:mr-[-11px] mt-[-20px] sm:mt-[-25px] lg:mt-[-30px] rounded-lg object-contain" 
            />
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-1">
              <span className="font-league font-bold text-lg sm:text-xl lg:text-2xl text-pharma-blue leading-tight">
                𝐀𝐌𝐀𝐍𝐀𝐇
              </span>
              <span className="font-league text-pharma-teal font-bold text-sm sm:text-base lg:text-lg leading-tight">
                𝐂𝐇𝐄𝐌𝐏𝐇𝐀𝐑𝐌
              </span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-1">
                {/* Home */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/#home"
                      className="nav-link px-4 py-2 flex items-center hover:bg-pharma-light/20 rounded-md transition-colors"
                      onClick={e => {
                        e.preventDefault();
                        handleNavClick('home');
                      }}
                    >
                      <Home className="mr-1 h-4 w-4" />
                      <span>Home</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* About Us */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <button
                      className="nav-link px-4 py-2 hover:bg-pharma-light/20 rounded-md transition-colors"
                      onClick={() => setShowAbout(true)}
                    >
                      About Us
                    </button>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Products Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(
                    "bg-transparent hover:bg-pharma-light/20 px-4 py-2 rounded-md transition-all",
                    "data-[state=open]:bg-pharma-light/30"
                  )}>
                    <Package className="mr-1 h-4 w-4" />
                    <span>Products</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="animate-fade-in">
                    <ul className="grid w-[280px] gap-1 p-3">
                      <li className="hover-scale">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/#pharmaceutical" 
                            className="block px-4 py-3 text-sm rounded-md hover:bg-pharma-blue/10 transition-colors"
                            onClick={e => {
                              e.preventDefault();
                              handleNavClick('pharmaceutical');
                            }}
                          >
                            <div className="text-pharma-blue font-medium mb-1">Pharmaceutical Products</div>
                            <p className="text-xs text-gray-600">Healthcare solutions for professionals</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="hover-scale">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/#chemical" 
                            className="block px-4 py-3 text-sm rounded-md hover:bg-pharma-teal/10 transition-colors"
                            onClick={e => {
                              e.preventDefault();
                              handleNavClick('chemical');
                            }}
                          >
                            <div className="text-pharma-teal font-medium mb-1">Chemical Products</div>
                            <p className="text-xs text-gray-600">Industrial grade chemicals</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Enquiry */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/#enquiry" 
                      className="nav-link px-4 py-2 flex items-center hover:bg-pharma-light/20 rounded-md transition-colors"
                      onClick={e => {
                        e.preventDefault();
                        handleNavClick('enquiry');
                      }}
                    >
                      <Mail className="mr-1 h-4 w-4" />
                      <span>Enquiry</span>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-pharma-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link 
                to="/" 
                className="block py-2 text-pharma-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="inline mr-2 h-4 w-4" />
                Home
              </Link>
              
              {/* About Us Mobile */}
              <button
                className="block py-2 text-pharma-blue w-full text-left"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowAbout(true);
                }}
              >
                About Us
              </button>
              
              {/* Mobile Products */}
              <div>
                <button 
                  className="flex items-center py-2 w-full text-left text-pharma-blue"
                  onClick={() => handleNavClick('products')}
                >
                  <Package className="inline mr-2 h-4 w-4" />
                  Products
                </button>
                
                <div className="pl-6 space-y-2">
                  <Link 
                    to="/#pharmaceutical" 
                    className="block py-1"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleNavClick('pharmaceutical');
                    }}
                  >
                    Pharmaceutical Products
                  </Link>
                  <Link 
                    to="/#chemical" 
                    className="block py-1"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleNavClick('chemical');
                    }}
                  >
                    Chemical Products
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/#enquiry" 
                className="block py-2 text-pharma-blue"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavClick('enquiry');
                }}
              >
                <Mail className="inline mr-2 h-4 w-4" />
                Enquiry
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* About Us Modal */}
      {showAbout && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-3xl w-full p-8 rounded-xl shadow-lg overflow-y-auto max-h-[80vh] relative">
            <button
              onClick={() => setShowAbout(false)}
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full border border-gray-300 bg-white shadow hover:bg-gray-100 transition"
              aria-label="Close"
            >
              <span className="text-xl font-bold">&times;</span>
            </button>
            <h2 className="text-2xl font-bold text-pharma-blue mb-4">ABOUT US</h2>
            <p className="mb-4 text-gray-700">
              AMANAH CHEMPHARM is one of the largest medical suppliers, wholesalers and traders of a commendable range of All Types of Surgical Disposables products, Protective Kits, Adult Diapers, Pant Style Diapers, Face Masks, Caps, & Underpads. The company works for healthcare by developing innovative technology, services and solutions that help advance both clinical therapy for patients and clinical process for healthcare providers.
            </p>
            <p className="mb-4 text-gray-700">
              At AMANAH CHEMPHARM we have a highly developed state-of-the-art infrastructure, which is appreciated all over the market. The facility is equipped with modern technology and advanced machinery. For the purpose of attaining a smooth working environment, we have divided our infrastructure in several units lead by trained and skilled professionals work efficiently and dedicatedly to achieve various organizational goals. In addition to this, the products are delivered to clients with high safety and punctuality.
            </p>
            <p className="text-gray-700">
              Our highly advanced, cutting-edge infrastructure is valued throughout the market. The facility has cutting-edge machinery and contemporary technology. In order to create a seamless working environment, we have separated our infrastructure into multiple units, each of which is run by a team of highly qualified professionals who work diligently and effectively to accomplish a range of organizational objectives.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
