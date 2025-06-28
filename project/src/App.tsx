import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Code, Telescope, Menu, X, ChevronRight, Star, Zap, Mail, Phone, User, GraduationCap, CheckCircle } from 'lucide-react';
import { ContactModal } from './components/ContactModal';
import { LearnMoreModal } from './components/LearnMoreModal';

interface Club {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  meetingTime: string;
  meetingDay: string;
  location: string;
  members: number;
  advisor: string;
  leadership: string;
  leadership_mail: string;
  activities: string[][];
  nextMeeting: string;
  image: string;
}

interface JoinFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  grade: string;
  experience: string;
  motivation: string;
}

const clubs: Club[] = [
  {
    id: 'tridev',
    name: 'TriDev',
    description: 'Coding & Software Development Club',
    fullDescription: 'TriDev is Oakridge\'s premier coding club where students explore the exciting world of software development. From web development to mobile apps, AI to game development, we cover it all.',
    icon: <Code className="w-8 h-8" />,
    color: 'from-[#44c3cf] to-[#702a82]',
    gradient: 'bg-gradient-to-br from-[#44c3cf]/10 to-[#702a82]/10',
    meetingTime: '3:30 PM - 5:00 PM',
    meetingDay: 'Wednesdays',
    location: 'Hybrid - Online every Wednesday, except offline in room 303 first Wednesday of each month',
    members: 24,
    advisor: 'CS Teacher Rama B',
    leadership: 'Gautam Bansal, Gaurav Kshirsagar, and Ritesh Marupudi',
    leadership_mail: "gautam_bansal@oakridge.in",
    activities: [
      ['Hackathons & Coding Competitions','Enjoy coding competitions across a range of platforms and languages, with AI allowed and encouraged!'],
      ['Open Source Contributions','Let\'s put our code out there for the world to see!'],
      ['Tech Talk Sessions','We have professional developers, and experienced high schoolers, who come and talk to inspire us regarding software development!'],
      ['Project Showcases','Everyone is encouraged to share and showcase their projects in our special project showcases!']
    ],
    nextMeeting: 'January 17, 2025',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'astrophiles',
    name: 'Astrophiles',
    description: 'Astronomy & Space Science Club',
    fullDescription: 'Astrophiles brings together students passionate about astronomy, space exploration, and the mysteries of the universe. We observe celestial events, study cosmic phenomena, and dream of the stars.',
    icon: <Telescope className="w-8 h-8" />,
    color: 'from-[#702a82] to-[#44c3cf]',
    gradient: 'bg-gradient-to-br from-[#702a82]/10 to-[#44c3cf]/10',
    meetingTime: '4:00 PM - 5:30 PM',
    meetingDay: 'Fridays',
    location: 'Online',
    members: 18,
    advisor: 'Physics Teacher Rajesh Javvadi',
    leadership: 'Yash Xavier and Roshan Churukanti',
    leadership_mail: 'yash_xavier@oakridge.in',
    activities: [
  ['Stargazing Sessions', 'Nighttime events where participants observe stars, planets, and constellations with the naked eye or telescopes.'],
  ['Telescope Workshops', 'Hands-on sessions to learn how to set up, use, and maintain different types of telescopes.'],
  ['Astrophotography', 'Workshops or sessions focused on capturing images of celestial objects using cameras and telescopes.'],
  ['Space Mission Analysis', 'Interactive discussions or activities analyzing real or fictional space missions and their scientific goals.'],
  ['Planetarium Visits', 'Trips to a planetarium to experience immersive sky simulations and learn about astronomy in an engaging way.']
  ]
  ,
    nextMeeting: 'January 19, 2025',
    image: 'https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

function App() {
  const [selectedClub, setSelectedClub] = useState<Club | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [joinSuccess, setJoinSuccess] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false);
  const [contactClub, setContactClub] = useState<Club | null>(null);

  const handleClubSelect = (club: Club) => {
    setSelectedClub(club);
    setMobileMenuOpen(false);
  };

  const handleBackToHome = () => {
    setSelectedClub(null);
    setShowJoinForm(false);
    setJoinSuccess(false);
  };

  const handleJoinClick = (club: Club) => {
    setSelectedClub(club);
    setShowJoinForm(true);
    setJoinSuccess(false);
  };

  const handleContactClick = () => {
    setContactClub();
    setShowContactModal(true);
  };

  const handleLearnMoreClick = () => {
    setShowLearnMoreModal(true);
  };

  if (showJoinForm && selectedClub) {
    return <JoinForm club={selectedClub} onBack={handleBackToHome} onSuccess={() => setJoinSuccess(true)} />;
  }

  if (joinSuccess && selectedClub) {
    return <JoinSuccess club={selectedClub} onBack={handleBackToHome} />;
  }

  if (selectedClub) {
    return <ClubDetail club={selectedClub} onBack={handleBackToHome} onJoin={() => handleJoinClick(selectedClub)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#44c3cf]/5 to-[#702a82]/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img 
                src="/cropped-OIS-central-Horizontal-logo-copy-2.png" 
                alt="Oakridge International School" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-900">Oakridge Clubs</h1>
                <p className="text-sm text-gray-600">Student Club Directory</p>
              </div>
            </div>
            
            <div className="hidden sm:flex items-center space-x-4">
              <button
                onClick={() => handleContactClick()}
                className="px-4 py-2 text-gray-700 hover:text-[#44c3cf] transition-colors duration-200 font-medium"
              >
                Contact
              </button>
              <button
                onClick={handleLearnMoreClick}
                className="px-6 py-2 bg-gradient-to-r from-[#44c3cf] to-[#702a82] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Learn More
              </button>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg bg-white shadow-md"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-200 px-4 py-4">
          <h1 className="text-xl font-bold text-gray-900 mb-1">Oakridge Clubs</h1>
          <p className="text-sm text-gray-600 mb-4">Student Club Directory</p>
          <div className="space-y-2">
            <button
              onClick={() => {
                handleContactClick();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              Contact
            </button>
            <button
              onClick={() => {
                handleLearnMoreClick();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 bg-gradient-to-r from-[#44c3cf] to-[#702a82] text-white rounded-lg font-semibold"
            >
              Learn More
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-[#702a82] mb-6 border border-[#44c3cf]/30">
            <Star className="w-4 h-4 mr-2" />
            Discover Your Passion
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Join Amazing
            <span className="bg-gradient-to-r from-[#44c3cf] to-[#702a82] bg-clip-text text-transparent"> Clubs</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore exciting opportunities, meet like-minded students, and develop new skills through our vibrant club community at Oakridge International School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('clubs-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-[#44c3cf] to-[#702a82] text-white rounded-xl font-semibold hover:from-[#44c3cf]/90 hover:to-[#702a82]/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Clubs
            </button>
            <button 
              onClick={handleLearnMoreClick}
              className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white transition-all duration-300 border border-gray-200 hover:shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#44c3cf] to-[#702a82] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">42+</h3>
              <p className="text-gray-600">Active Members</p>
            </div>
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#702a82] to-[#ffcc08] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">2</h3>
              <p className="text-gray-600">Active Clubs</p>
            </div>
            <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffcc08] to-[#44c3cf] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Weekly</h3>
              <p className="text-gray-600">Meetings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs Section */}
      <section id="clubs-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Clubs</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover clubs that match your interests and help you grow both personally and academically.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {clubs.map((club) => (
              <ClubCard key={club.id} club={club} onSelect={handleClubSelect} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <img 
                src="/cropped-OIS-central-Horizontal-logo-copy-2.png" 
                alt="Oakridge International School" 
                className="h-12 w-auto mx-auto md:mx-0 mb-4"
              />
              <p className="text-gray-600 mb-4">
                Oakridge International School - Nurturing Global Citizens
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById('clubs-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-gray-600 hover:text-[#44c3cf] transition-colors duration-200"
                >
                  Our Clubs
                </button>
                <button
                  onClick={handleLearnMoreClick}
                  className="block mx-auto text-gray-600 hover:text-[#44c3cf] transition-colors duration-200"
                >
                  About Us
                </button>
                <button
                  onClick={() => handleContactClick()}
                  className="block mx-auto text-gray-600 hover:text-[#44c3cf] transition-colors duration-200"
                >
                  Contact
                </button>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center md:justify-end">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:gautam_bansal@oakridge.in">gautam_bansal@oakridge.in</a>
                </p>
                <button
                  onClick={() => handleContactClick()}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#44c3cf] to-[#702a82] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-2"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-sm text-gray-500">
              © 2025 Oakridge International School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ContactModal 
        isOpen={showContactModal} 
        onClose={() => setShowContactModal(false)} 
        club={contactClub}
      />
      <LearnMoreModal 
        isOpen={showLearnMoreModal} 
        onClose={() => setShowLearnMoreModal(false)} 
      />
    </div>
  );
}

function ClubCard({ club, onSelect }: { club: Club; onSelect: (club: Club) => void }) {
  return (
    <div 
      className={`${club.gradient} p-8 rounded-3xl border border-white/20 hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2`}
      onClick={() => onSelect(club)}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`p-4 bg-gradient-to-br ${club.color} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}>
          {club.icon}
        </div>
        <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{club.name}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{club.description}</p>
      
      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-700">
          <Calendar className="w-4 h-4 mr-3 text-gray-500" />
          <span>{club.meetingDay} • {club.meetingTime}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <MapPin className="w-4 h-4 mr-3 text-gray-500" />
          <span>{club.location}</span>
        </div>
        <div className="flex items-center text-sm text-gray-700">
          <Users className="w-4 h-4 mr-3 text-gray-500" />
          <span>{club.members} members</span>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-white/30">
        <button className="w-full py-3 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white transition-all duration-300 group-hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}

function ClubDetail({ club, onBack, onJoin, onContact }: { club: Club; onBack: () => void; onJoin: () => void; onContact: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#44c3cf]/5 to-[#702a82]/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="mr-4 p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <img 
              src="/cropped-OIS-central-Horizontal-logo-copy-2.png" 
              alt="Oakridge International School" 
              className="h-12 w-auto mr-4"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">{club.name}</h1>
              <p className="text-sm text-gray-600">Club Details</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
  <div className={`inline-flex items-center p-4 bg-gradient-to-br ${club.color} rounded-2xl text-white mb-6`}>
    {club.icon}
  </div>
  <h1 className="text-5xl font-bold text-gray-900 mb-6">{club.name}</h1>
  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{club.fullDescription}</p>

  {/* Leadership Card */}
  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-6">
    <div className="flex items-center mb-3">
      <UserGroup className="w-5 h-5 text-gray-500 mr-3" />
      <span className="font-semibold text-gray-900">Club Leadership Team</span>
    </div>
    <p className="text-gray-700">{club.leadership}</p>
  </div>

  {/* Info Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
      <div className="flex items-center mb-3">
        <Calendar className="w-5 h-5 text-gray-500 mr-3" />
        <span className="font-semibold text-gray-900">Next Meeting</span>
      </div>
      <p className="text-gray-700">{club.nextMeeting}</p>
      <p className="text-sm text-gray-600 mt-1">{club.meetingDay} • {club.meetingTime}</p>
    </div>

    <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
      <div className="flex items-center mb-3">
        <MapPin className="w-5 h-5 text-gray-500 mr-3" />
        <span className="font-semibold text-gray-900">Location</span>
      </div>
      <p className="text-gray-700">{club.location}</p>
      <p className="text-sm text-gray-600 mt-1">Advisor: {club.advisor}</p>
    </div>
  </div>
</div>

            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="w-full h-80 object-cover rounded-3xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-gray-500 mr-3" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{club.members}</p>
                    <p className="text-sm text-gray-600">Active Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Club Activities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {club.activities.map((activity, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-br ${club.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{activity[0]}</h3>
                <p className="text-sm text-gray-600">{activity[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${club.gradient} p-12 rounded-3xl border border-white/20`}>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join {club.name}?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with fellow students who share your passion and start your journey with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onJoin}
                className={`px-8 py-4 bg-gradient-to-r ${club.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                Join Club
              </button>
              <button 
                onClick={() => window.location.href = `mailto:${club.leadership_mail}?subject=${encodeURIComponent(`Question about ${club.name}`)}`}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white transition-all duration-300 border border-gray-200"
              >
                Contact Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function JoinForm({ club, onBack, onSuccess }: { club: Club; onBack: () => void; onSuccess: () => void }) {
  const [formData, setFormData] = useState<JoinFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    experience: '',
    motivation: ''
  });
  const [errors, setErrors] = useState<Partial<JoinFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<JoinFormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.grade) newErrors.grade = 'Please select your grade';
    if (!formData.motivation.trim()) newErrors.motivation = 'Please tell us why you want to join';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Log form data (in a real app, this would be sent to a server)
    console.log('Club Application Submitted:', {
      club: club.name,
      applicant: formData,
      timestamp: new Date().toISOString()
    });
    
    setIsSubmitting(false);
    onSuccess();
  };

  const handleInputChange = (field: keyof JoinFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#44c3cf]/5 to-[#702a82]/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="mr-4 p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <img 
              src="/cropped-OIS-central-Horizontal-logo-copy-2.png" 
              alt="Oakridge International School" 
              className="h-12 w-auto mr-4"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Join {club.name}</h1>
              <p className="text-sm text-gray-600">Membership Application</p>
            </div>
          </div>
        </div>
      </header>

      {/* Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center p-4 bg-gradient-to-br ${club.color} rounded-2xl text-white mb-4`}>
                {club.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Join {club.name}</h2>
              <p className="text-gray-600">Fill out the form below to become a member of our club</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#44c3cf] focus:border-transparent transition-all duration-300 ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your first name"
                    />
                  </div>
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#44c3cf] focus:border-transparent transition-all duration-300 ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your last name"
                    />
                  </div>
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#44c3cf] focus:border-transparent transition-all duration-300 ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#44c3cf] focus:border-transparent transition-all duration-300 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    Grade *
                  </label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      id="grade"
                      value={formData.grade}
                      onChange={(e) => handleInputChange('grade', e.target.value)}
                      className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#44c3cf] focus:border-transparent transition-all duration-300 ${
                        errors.grade ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select your grade</option>
                      <option value="9">Grade 9</option>
                      <option value="10">Grade 10</option>
                      <option value="11">Grade 11</option>
                      <option value="12">Grade 12</option>
                    </select>
                  </div>
                  {errors.grade && <p className="mt-1 text-sm text-red-600">{errors.grade}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#44c3cf] focus:border-transparent transition-all duration-300"
                  placeholder={`Tell us about any previous experience related to ${club.name.toLowerCase()}...`}
                />
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join {club.name}? *
                </label>
                <textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#44c3cf] focus:border-transparent transition-all duration-300 ${
                    errors.motivation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Share your motivation and what you hope to achieve..."
                />
                {errors.motivation && <p className="mt-1 text-sm text-red-600">{errors.motivation}</p>}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={onBack}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white transition-all duration-300 border border-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 px-8 py-4 bg-gradient-to-r ${club.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function JoinSuccess({ club, onBack }: { club: Club; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#44c3cf]/5 to-[#702a82]/10">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <button
              onClick={onBack}
              className="mr-4 p-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <img 
              src="/cropped-OIS-central-Horizontal-logo-copy-2.png" 
              alt="Oakridge International School" 
              className="h-12 w-auto mr-4"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Application Submitted</h1>
              <p className="text-sm text-gray-600">Welcome to {club.name}!</p>
            </div>
          </div>
        </div>
      </header>

      {/* Success Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/20 p-12 shadow-xl">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your interest in joining {club.name}. We've received your application and will review it shortly.
            </p>
            
            <div className={`${club.gradient} p-6 rounded-2xl border border-white/20 mb-8`}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#44c3cf] rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <p className="text-gray-700">Our club advisor will review your application within 2-3 business days</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#702a82] rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <p className="text-gray-700">You'll receive an email confirmation with next steps</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#ffcc08] rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <p className="text-gray-700">Attend your first meeting on {club.meetingDay} at {club.meetingTime}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBack}
                className={`px-8 py-4 bg-gradient-to-r ${club.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                Back to Clubs
              </button>
              <button 
                onClick={() => {
                  // This would open a contact modal in a real implementation
                  alert(`Contact ${club.advisor} at ${club.advisor.toLowerCase().replace(' ', '.')}@oakridge.in`);
                }}
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-xl font-semibold hover:bg-white transition-all duration-300 border border-gray-200"
              >
                Contact Advisor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;