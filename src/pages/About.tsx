
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Our Mission & Vision
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We're revolutionizing media planning with AI to make it faster, smarter, and more accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-200/30 blur-3xl"></div>
                <img 
                  src="https://placehold.co/600x500/e4d8ff/333333?text=Our+Story" 
                  alt="Our Story" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
                Our Story
              </h2>
              <p className="text-gray-700">
                SwiftMedia was born out of frustration with the traditional media planning process. 
                As former agency professionals, our founders experienced firsthand the time-consuming nature of 
                creating media plans, often taking 2-5 days to complete.
              </p>
              <p className="text-gray-700">
                We knew there had to be a better way. By combining cutting-edge AI technology with 
                deep industry expertise, we created a platform that can generate high-quality, 
                data-driven media plans in just 5 minutes.
              </p>
              <p className="text-gray-700">
                Since our launch in 2021, we've helped hundreds of agencies and brands streamline 
                their media planning process, saving them countless hours and optimizing their 
                advertising budgets for maximum ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700">
              These principles guide everything we do at SwiftMedia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-brand-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible with AI and media planning technology.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-brand-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision</h3>
              <p className="text-gray-600">
                We're committed to delivering the most accurate, data-driven media plans possible.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-brand-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients to understand their unique needs and goals.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-brand-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Award className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from our technology to our customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Meet Our Leadership Team
            </h2>
            <p className="text-lg text-gray-700">
              The experts behind SwiftMedia's revolutionary platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://placehold.co/400x400/e4d8ff/333333?text=CEO" 
                alt="CEO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Alex Johnson</h3>
                <p className="text-brand-600 mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600">
                  Former Head of Media at a global agency with 15+ years of experience in advertising.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://placehold.co/400x400/e4d8ff/333333?text=CTO" 
                alt="CTO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Chen</h3>
                <p className="text-brand-600 mb-3">CTO & Co-Founder</p>
                <p className="text-gray-600">
                  AI specialist with a background in data science and machine learning.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://placehold.co/400x400/e4d8ff/333333?text=CMO" 
                alt="CMO" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Rodriguez</h3>
                <p className="text-brand-600 mb-3">Chief Marketing Officer</p>
                <p className="text-gray-600">
                  Marketing strategist with experience at top tech companies and startups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Us on Our Mission
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Become part of the media planning revolution and transform how your brand or agency works.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button className="bg-white text-brand-700 hover:bg-gray-100 font-medium text-base">
                Contact Us
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 font-medium text-base">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
