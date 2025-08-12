import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Site Reliability Engineer",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "May 2023 - Present",
      description: [
        "Designed and deployed containerized applications using Docker and orchestrated them with a scalable Kubernetes cluster",
        "Implemented CI/CD pipelines using GitHub Actions, automating build, test, and deployment processes",
        "Architected cross-platform bilingual automation testing framework using Appium for Android/iOS with English/Arabic support, featuring RTL text validation and dynamic UI element detection",
        "Developed predictive capacity planning ETL pipeline using ARIMA, SARIMAX, and ETS models for accurate CPU forecasting and automated resource allocation",
        "Orchestrated Alpha Vault infrastructure rebuilding with Kubernetes automation, resolving critical issues and achieving 100% smoke test pass rate"
      ],
      current: true
    },
    {
      title: "Data Engineer",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "Nov 2022 - Apr 2023",
      description: [
        "Implemented comprehensive developer productivity monitoring system by integrating GitLab's REST API with InfluxDB and Grafana",
        "Developed Python automation scripts to extract, transform, and load developer activity data from GitLab into time-series databases",
        "Created custom Grafana dashboards displaying team and individual developer productivity metrics"
      ],
      current: false
    },
    {
      title: "Automation Tester - Intern",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "Mar 2022 - Oct 2022",
      description: [
        "Developed and implemented a cross-platform automation testing framework using Appium for both iOS and Android applications",
        "Utilized a JSON-based approach to manage and externalize test data, improving reusability and scalability of test cases",
        "Used Xcode and Appium Inspector for element identification and UI inspection on iOS and Android applications"
      ],
      current: false
    },
    {
      title: "Software Developer - Intern",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "May 2021 - Feb 2022",
      description: [
        "Developed and integrated a Campaign Management module into an existing application ecosystem",
        "Built user interfaces and workflows for the admin dashboard, enabling users to create, schedule, and automate campaign deliveries using cron jobs",
        "Integrated the campaign module within the Ionic mobile app to receive and display push notifications"
      ],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black dark:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
            Work <span className="text-blue-400 dark:text-gray-800">Experience</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            My professional journey in Site Reliability Engineering, Data Engineering, and Software Development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 dark:bg-gray-300 md:transform md:-translate-x-px"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full border-4 ${
                  exp.current ? 'bg-blue-500 border-blue-400' : 'bg-gray-600 border-gray-500'
                } md:transform md:-translate-x-1/2 z-10`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
                }`}>
                  <div className="glow-card rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 group">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 bg-blue-500/20 dark:bg-gray-800/30 text-blue-400 dark:text-gray-800 text-xs font-medium rounded-full mb-3">
                        Current Position
                      </span>
                    )}
                    
                    <h3 className="text-xl font-bold text-white dark:text-black mb-2 group-hover:text-blue-400 dark:group-hover:text-gray-700 transition-colors">
                      {exp.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-gray-300 dark:text-gray-700 text-sm">
                      <div className="flex items-center gap-1">
                        <Building size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-200 dark:text-gray-800 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 dark:bg-gray-600 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;