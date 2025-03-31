
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  Clock, 
  Target, 
  MapPin, 
  DollarSign, 
  Users, 
  Zap, 
  LineChart, 
  RefreshCw, 
  FileCog 
} from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive AI-powered media planning solutions for brands and agencies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Service */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block bg-brand-100 px-4 py-2 rounded-full text-brand-700 font-medium mb-2">
                Core Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
                AI Media Planning
              </h2>
              <p className="text-gray-700">
                Our flagship service uses advanced AI to generate comprehensive media plans in just 5 minutes. 
                By analyzing your budget, target audience, geographic data, and available advertising assets, 
                we create optimized plans that maximize your ROI.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 mt-1">
                    <Clock className="text-brand-700 h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">5-Minute Turnaround</h4>
                    <p className="text-gray-600">Get complete media plans in minutes, not days.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 mt-1">
                    <BarChart className="text-brand-700 h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Data-Driven Recommendations</h4>
                    <p className="text-gray-600">Decisions based on real data, not guesswork.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-100 p-2 rounded-full mr-3 mt-1">
                    <RefreshCw className="text-brand-700 h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Easy Revisions</h4>
                    <p className="text-gray-600">Quick adjustments based on changing requirements.</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/pricing">
                  <Button className="btn-primary">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-200/30 blur-3xl"></div>
                <img 
                  src="https://placehold.co/600x500/e4d8ff/333333?text=AI+Media+Planning" 
                  alt="AI Media Planning" 
                  className="rounded-xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Additional Services
            </h2>
            <p className="text-lg text-gray-700">
              Comprehensive solutions to support your media planning needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <Target className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Audience Analysis</h3>
              <p className="text-gray-600 mb-6">
                In-depth analysis of your target audience to ensure your media plan reaches the right people at the right time.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Demographic profiling</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Behavioral insights</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Consumption patterns</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <DollarSign className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Budget Optimization</h3>
              <p className="text-gray-600 mb-6">
                Advanced algorithms to allocate your budget across different channels for maximum impact and ROI.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Cost efficiency analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Channel allocation</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">ROI forecasting</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <MapPin className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Geographic Targeting</h3>
              <p className="text-gray-600 mb-6">
                Precise location-based targeting that considers land value, population density, and existing media assets.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Area analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Population mapping</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Asset identification</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <LineChart className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
              <p className="text-gray-600 mb-6">
                Real-time monitoring and analytics to track the performance of your media plan and make data-driven adjustments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Real-time dashboards</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Performance metrics</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Adjustment recommendations</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <Users className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Consulting Services</h3>
              <p className="text-gray-600 mb-6">
                Expert advice from media planning specialists to complement our AI-powered solutions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Strategy development</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Campaign optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Performance reviews</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-brand-100 p-3 rounded-lg w-fit mb-6">
                <FileCog className="text-brand-700" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-600 mb-6">
                Tailored media planning solutions designed to meet your specific business requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Bespoke planning tools</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">Integration services</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <Zap className="text-green-600 h-3 w-3" />
                  </div>
                  <span className="text-gray-700">White-label solutions</span>
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Our Process
            </h2>
            <p className="text-lg text-gray-700">
              How we deliver lightning-fast, high-quality media plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6">1</div>
                <h3 className="text-xl font-semibold mb-3">Input Your Requirements</h3>
                <p className="text-gray-600">
                  Provide your budget, target audience, geographic focus, and campaign objectives.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 w-12 h-2 bg-brand-200">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-600 rounded-full"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6">2</div>
                <h3 className="text-xl font-semibold mb-3">AI Data Analysis</h3>
                <p className="text-gray-600">
                  Our AI analyzes your inputs alongside our database of advertising assets and performance data.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 w-12 h-2 bg-brand-200">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-600 rounded-full"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6">3</div>
                <h3 className="text-xl font-semibold mb-3">Plan Generation</h3>
                <p className="text-gray-600">
                  The system generates an optimized media plan with channel mix, budget allocation, and timeline.
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 w-12 h-2 bg-brand-200">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-brand-600 rounded-full"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <div className="bg-brand-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-6">4</div>
                <h3 className="text-xl font-semibold mb-3">Review & Implement</h3>
                <p className="text-gray-600">
                  Review your plan, make any needed adjustments, and implement with confidence.
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
            Ready to Transform Your Media Planning?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Start using our AI-powered platform today and get your first media plan in just 5 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/pricing">
              <Button className="bg-white text-brand-700 hover:bg-gray-100 font-medium text-base">
                View Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white/10 font-medium text-base">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
