import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Site Reliability Engineer | DevOps, GitOps & SOC",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "May 2023 - Present",
      description: [
        "Containerized applications with Docker and operated a scalable Kubernetes cluster on AWS for production workloads",
        "Built CI/CD with GitHub Actions and declarative GitOps delivery using Argo CD for automated, auditable deployments",
        "Engineered an end-to-end Wazuh SOC platform (YARA, FIM, auditd, Osquery, active response) for threat detection and incident response",
        "Developed a predictive capacity-planning ETL pipeline using ARIMA, SARIMAX, and ETS for CPU forecasting and automated resource allocation",
        "Rebuilt Alpha Vault infrastructure with Kubernetes automation, resolving critical issues and achieving a 100% smoke-test pass rate"
      ],
      tags: ["Kubernetes", "AWS", "Argo CD", "GitHub Actions", "Wazuh", "Prometheus", "Grafana", "Go", "ETL"],
      current: true
    },
    {
      title: "Data Engineer",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "Nov 2022 - Apr 2023",
      description: [
        "Built a developer-productivity monitoring system by integrating GitLab's REST API with InfluxDB and Grafana",
        "Wrote Python ETL automation to extract, transform, and load developer activity data into time-series databases",
        "Created custom Grafana dashboards surfacing team and individual productivity metrics, improving transparency by 25%"
      ],
      tags: ["Python", "PySpark", "Apache Airflow", "InfluxDB", "Grafana", "PostgreSQL"],
      current: false
    },
    {
      title: "Automation Test Engineer",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "Mar 2022 - Oct 2022",
      description: [
        "Architected a cross-platform bilingual (English/Arabic) automation framework with Appium for Android/iOS, including RTL validation and dynamic element detection",
        "Extended coverage with Playwright and Selenium for web and visual regression testing across the stack",
        "Externalized test data with a JSON-based approach, improving reusability and scalability of test cases",
        "Used Xcode, Android Studio, and Appium Inspector for element identification and UI inspection"
      ],
      tags: ["Appium", "Playwright", "Selenium", "iOS Testing", "Android Studio", "Visual Testing"],
      current: false
    },
    {
      title: "Full-Stack Developer",
      company: "Finstein Advisory Service LLP",
      location: "Chennai, India",
      period: "May 2021 - Feb 2022",
      description: [
        "Developed and integrated a Campaign Management module into an existing application ecosystem",
        "Built admin-dashboard UIs and workflows (Angular) to create, schedule, and automate campaign deliveries via cron jobs",
        "Integrated the campaign module within an Ionic mobile app to receive and display push notifications"
      ],
      tags: ["Angular", "NestJS", "Node.js", "PostgreSQL", "Ionic", "TypeScript"],
      current: false
    }
  ];

  return (
    <section id="experience" className="modern-section py-20 bg-gradient-to-b from-slate-950 to-slate-900 dark:from-white dark:to-blue-50/60">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            My professional journey in Site Reliability Engineering, Security Engineering, Data Engineering, and Automation Testing
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/70 via-blue-500/50 to-emerald-400/50 dark:from-blue-500/50 dark:to-cyan-500/40 md:transform md:-translate-x-px"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full border-4 pulse-ring ${
                  exp.current ? 'bg-blue-500 border-blue-400' : 'bg-gray-600 border-gray-500'
                } md:transform md:-translate-x-1/2 z-10`}></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-1/2 md:pr-12' : 'md:ml-1/2 md:pl-12'
                }`}>
                  <div data-tilt className="glow-card modern-panel card-sheen rounded-xl p-6 transition-all duration-300 group">
                    {exp.current && (
                      <span className="inline-block px-3 py-1 bg-cyan-400/20 dark:bg-gray-800/30 text-cyan-300 dark:text-gray-800 text-xs font-medium rounded-full mb-3">
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

                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-700/50 dark:border-blue-200/60">
                      {exp.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-cyan-400/10 dark:bg-blue-50 border border-cyan-400/25 dark:border-blue-200 text-cyan-200 dark:text-blue-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
