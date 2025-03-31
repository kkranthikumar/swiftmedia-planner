
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, BarChart, MapPin, DollarSign, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight gradient-heading">
                AI-Powered Media Planning in Minutes, Not Days
              </h1>
              <p className="text-lg md:text-xl text-gray-700 max-w-xl">
                Generate optimized media plans based on budget, location, and audience data in just 5 minutes. No more waiting for days.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="btn-primary font-medium text-base">
                  Get Started Free
                </Button>
                <Button variant="outline" className="btn-secondary font-medium text-base">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-200/30 blur-3xl"></div>
                <div className="bg-white rounded-xl shadow-2xl p-8 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3882&q=80" 
                    alt="AI Media Planning Dashboard" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              How SwiftMedia Transforms Your Media Planning
            </h2>
            <p className="text-lg text-gray-700">
              Our AI-powered platform analyzes all relevant data points to generate the perfect media plan in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <Clock className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">5-Minute Planning</h3>
              <p className="text-gray-600">
                What used to take days now takes minutes. Get comprehensive media plans in just 5 minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <BarChart className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
              <p className="text-gray-600">
                Leverage existing data on ad hoardings, display, TV, and other advertising assets.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <MapPin className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Location Optimization</h3>
              <p className="text-gray-600">
                Factor in area, land value, population density for optimal geographic targeting.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <DollarSign className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Budget Maximization</h3>
              <p className="text-gray-600">
                Make every dollar count with AI-optimized budget allocation across channels.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <Users className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Targeting</h3>
              <p className="text-gray-600">
                Reach the right people at the right time with demographic-based targeting.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-3">Ready to transform your media planning?</h3>
              <p className="mb-6">
                Join thousands of brands that have already made the switch to SwiftMedia.
              </p>
              <Link to="/pricing">
                <Button variant="secondary" className="bg-white text-brand-700 hover:bg-gray-100">
                  View Pricing <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-brand-700 mb-2">97%</p>
              <p className="text-gray-600">Time Saved on Planning</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-brand-700 mb-2">5,000+</p>
              <p className="text-gray-600">Media Plans Generated</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-brand-700 mb-2">24%</p>
              <p className="text-gray-600">Average Budget Optimization</p>
            </div>
            <div className="p-6">
              <p className="text-4xl md:text-5xl font-bold text-brand-700 mb-2">500+</p>
              <p className="text-gray-600">Satisfied Agencies & Brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Trusted by Leading Agencies & Brands
            </h2>
            <p className="text-lg text-gray-700">
              See what our clients say about the SwiftMedia experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-brand-200 w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://placehold.co/100x100/e4d8ff/333333?text=JD" alt="Client Avatar" />
                </div>
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-sm text-gray-500">Marketing Director, ABC Agency</p>
                </div>
              </div>
              <p className="text-gray-700">
                "SwiftMedia has completely transformed our media planning process. What used to take my team days now takes minutes, and the recommendations are spot-on."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-brand-200 w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://placehold.co/100x100/e4d8ff/333333?text=JS" alt="Client Avatar" />
                </div>
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-sm text-gray-500">CMO, XYZ Brands</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The level of optimization we've achieved with SwiftMedia is incredible. Our campaigns are performing better than ever, and we're spending less time on planning."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-brand-200 w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src="https://placehold.co/100x100/e4d8ff/333333?text=RJ" alt="Client Avatar" />
                </div>
                <div>
                  <p className="font-semibold">Robert Johnson</p>
                  <p className="text-sm text-gray-500">CEO, Media Solutions</p>
                </div>
              </div>
              <p className="text-gray-700">
                "As an agency, we need to deliver quality plans quickly. SwiftMedia has become our secret weapon, helping us win more clients with its fast, data-driven planning."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Media Planning?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of brands and agencies that have already made the switch to AI-powered media planning.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-brand-700 hover:bg-gray-100 font-medium text-base">
              Start Free Trial
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 font-medium text-base">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
