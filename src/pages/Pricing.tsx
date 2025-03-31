
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const [annual, setAnnual] = useState(true);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Choose the plan that's right for your business. All plans include core features.
            </p>
            <div className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-8">
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  annual ? 'bg-brand-600 text-white shadow-md' : 'text-gray-700'
                }`}
                onClick={() => setAnnual(true)}
              >
                Annual (Save 20%)
              </button>
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !annual ? 'bg-brand-600 text-white shadow-md' : 'text-gray-700'
                }`}
                onClick={() => setAnnual(false)}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-gray-600 mb-6">For small businesses and freelancers</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? '99' : '119'}</span>
                  <span className="text-gray-600">{annual ? '/year' : '/month'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 5 media plans per month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Basic audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Standard reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-600 hover:bg-brand-700">Get Started</Button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-brand-600 relative transform scale-105 z-10">
              <div className="bg-brand-600 text-white text-center py-2 text-sm font-medium">
                Most Popular
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <p className="text-gray-600 mb-6">For growing agencies and marketing teams</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? '249' : '299'}</span>
                  <span className="text-gray-600">{annual ? '/year' : '/month'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 25 media plans per month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Priority email & chat support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Performance tracking</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-600 hover:bg-brand-700">Get Started</Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large agencies and brands</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${annual ? '599' : '699'}</span>
                  <span className="text-gray-600">{annual ? '/year' : '/month'}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Unlimited media plans</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom audience targeting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Advanced analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Custom integrations</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-600 hover:bg-brand-700">Contact Sales</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Features Comparison
            </h2>
            <p className="text-lg text-gray-700">
              Compare plan features to find the right option for your business.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-gray-600 font-semibold">Feature</th>
                  <th className="py-4 px-6 text-center text-gray-600 font-semibold">Starter</th>
                  <th className="py-4 px-6 text-center text-gray-600 font-semibold bg-brand-50">Professional</th>
                  <th className="py-4 px-6 text-center text-gray-600 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">Media Plans per Month</td>
                  <td className="py-3 px-6 text-center text-gray-700">5</td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">25</td>
                  <td className="py-3 px-6 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">Audience Targeting</td>
                  <td className="py-3 px-6 text-center text-gray-700">Basic</td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">Advanced</td>
                  <td className="py-3 px-6 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">Geographic Analysis</td>
                  <td className="py-3 px-6 text-center text-gray-700">Basic</td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">Advanced</td>
                  <td className="py-3 px-6 text-center text-gray-700">Premium</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">Reporting & Analytics</td>
                  <td className="py-3 px-6 text-center text-gray-700">Standard</td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">Comprehensive</td>
                  <td className="py-3 px-6 text-center text-gray-700">Advanced Dashboard</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">Team Members</td>
                  <td className="py-3 px-6 text-center text-gray-700">1</td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">5</td>
                  <td className="py-3 px-6 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">Support</td>
                  <td className="py-3 px-6 text-center text-gray-700">Email</td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">Email & Chat</td>
                  <td className="py-3 px-6 text-center text-gray-700">Dedicated Manager</td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">API Access</td>
                  <td className="py-3 px-6 text-center text-gray-700">
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center text-gray-700">
                    <div className="flex justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                  </td>
                </tr>
                <tr className="border-t border-gray-100">
                  <td className="py-3 px-6 text-gray-700">Custom Integrations</td>
                  <td className="py-3 px-6 text-center text-gray-700">
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center text-gray-700 bg-brand-50/30">
                    <div className="flex justify-center">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center text-gray-700">
                    <div className="flex justify-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-brand-600 mr-2" />
                Can I switch plans later?
              </h3>
              <p className="text-gray-700">
                Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the start of your next billing cycle.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-brand-600 mr-2" />
                Is there a free trial available?
              </h3>
              <p className="text-gray-700">
                Yes, we offer a 14-day free trial on our Professional plan. No credit card required to get started.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-brand-600 mr-2" />
                What payment methods do you accept?
              </h3>
              <p className="text-gray-700">
                We accept all major credit cards including Visa, Mastercard, American Express, and Discover. For Enterprise plans, we also offer invoicing options.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-brand-600 mr-2" />
                Do you offer any discounts?
              </h3>
              <p className="text-gray-700">
                We offer a 20% discount for annual billing. We also offer special pricing for nonprofits and educational institutions. Contact our sales team for more information.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <HelpCircle className="h-5 w-5 text-brand-600 mr-2" />
                What happens if I exceed my plan limits?
              </h3>
              <p className="text-gray-700">
                If you exceed your plan's media plan limit, you can purchase additional one-time plans or upgrade to a higher tier. We'll notify you before you reach your limit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Try SwiftMedia free for 14 days. No credit card required.
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

export default Pricing;
