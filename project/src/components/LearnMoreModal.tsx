import React from 'react';
import { X, Users, Calendar, MapPin, Star, GraduationCap, Award, Target } from 'lucide-react';

interface LearnMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LearnMoreModal({ isOpen, onClose }: LearnMoreModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">About Oakridge Clubs</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#44c3cf] to-[#702a82] rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Oakridge International School, our clubs are more than just extracurricular activities—they're 
                communities where students discover their passions, develop leadership skills, and form lasting friendships.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#44c3cf]/10 to-[#702a82]/10 p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#44c3cf] to-[#702a82] rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Connections</h3>
                <p className="text-gray-600 text-sm">Meet like-minded students who share your interests and passions.</p>
              </div>

              <div className="bg-gradient-to-br from-[#702a82]/10 to-[#ffcc08]/10 p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#702a82] to-[#ffcc08] rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Develop Skills</h3>
                <p className="text-gray-600 text-sm">Gain practical experience and develop both technical and soft skills.</p>
              </div>

              <div className="bg-gradient-to-br from-[#ffcc08]/10 to-[#44c3cf]/10 p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffcc08] to-[#44c3cf] rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Leadership</h3>
                <p className="text-gray-600 text-sm">Take on leadership roles and organize events and activities.</p>
              </div>

              <div className="bg-gradient-to-br from-[#44c3cf]/10 to-[#702a82]/10 p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#44c3cf] to-[#702a82] rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pursue Passions</h3>
                <p className="text-gray-600 text-sm">Explore your interests in a supportive and encouraging environment.</p>
              </div>

              <div className="bg-gradient-to-br from-[#702a82]/10 to-[#ffcc08]/10 p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#702a82] to-[#ffcc08] rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Regular Activities</h3>
                <p className="text-gray-600 text-sm">Participate in weekly meetings, workshops, and special events.</p>
              </div>

              <div className="bg-gradient-to-br from-[#ffcc08]/10 to-[#44c3cf]/10 p-6 rounded-2xl border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ffcc08] to-[#44c3cf] rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Campus Community</h3>
                <p className="text-gray-600 text-sm">Be part of the vibrant campus life at Oakridge International School.</p>
              </div>
            </div>

            {/* How to Join Section */}
            <div className="bg-gradient-to-br from-slate-50 to-[#44c3cf]/5 p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How to Join a Club</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#44c3cf] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Browse Available Clubs</h4>
                    <p className="text-gray-600">Explore our club directory to find clubs that match your interests.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#702a82] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Submit Application</h4>
                    <p className="text-gray-600">Fill out the membership application form with your details and motivation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#ffcc08] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Attend First Meeting</h4>
                    <p className="text-gray-600">Join your first club meeting and start participating in activities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about our clubs or need help choosing the right one for you, 
                don't hesitate to reach out to our student activities coordinator.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-4 bg-gradient-to-r from-[#44c3cf] to-[#702a82] text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}