import React from 'react';
import { Server, GitBranch, Code, Database, ShieldCheck } from 'lucide-react';

const About = () => {
  const coreFocus = [
    'SRE & Platform Reliability',
    'DevOps & GitOps',
    'Full-Stack Development',
    'Data Engineering & ETL',
    'Security & SOC'
  ];

  const highlights = [
    {
      icon: <Server className="w-6 h-6 md:w-8 md:h-8 text-blue-400 dark:text-blue-500" />,
      title: "Site Reliability Engineering",
      description: "Keeping production resilient with Kubernetes, AWS, and end-to-end observability via Prometheus & Grafana"
    },
    {
      icon: <GitBranch className="w-6 h-6 md:w-8 md:h-8 text-cyan-400 dark:text-cyan-500" />,
      title: "DevOps & GitOps",
      description: "Automated delivery with GitHub Actions and declarative GitOps deployments using Argo CD on Kubernetes"
    },
    {
      icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-purple-400 dark:text-purple-500" />,
      title: "Full-Stack & Automation",
      description: "Building full-stack apps (Angular, NestJS, PostgreSQL) and cross-platform test automation with Appium & Playwright"
    },
    {
      icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-teal-400 dark:text-teal-500" />,
      title: "Data Engineering",
      description: "Robust ETL pipelines and predictive, time-series analytics for capacity planning and decision-making"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-emerald-400 dark:text-emerald-500" />,
      title: "Security & SOC",
      description: "Detection engineering with Wazuh — YARA, FIM, auditd, Osquery and automated active response"
    }
  ];

  return (
    <section id="about" className="modern-section py-12 md:py-20 lg:py-24 bg-gradient-to-b from-slate-900/85 to-slate-950/75 dark:from-blue-50/90 dark:to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl float-slower"></div>
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white dark:text-gray-900">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Site Reliability Engineer with a full-stack edge — spanning DevOps & GitOps, data engineering, automation testing, and security/SOC — focused on shipping resilient platforms end to end.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-200 dark:text-gray-700 leading-relaxed">
                I am a Site Reliability Engineer at Finstein who started as a developer and tester and grew into owning
                platform reliability — building automated delivery with GitHub Actions and GitOps via Argo CD,
                plus real-time observability with Prometheus and Grafana on Kubernetes and AWS.
              </p>
              <p className="text-base md:text-lg text-gray-200 dark:text-gray-700 leading-relaxed">
                That journey gives me range: full-stack development (Angular, NestJS, PostgreSQL), cross-platform test
                automation (Appium, Playwright), robust ETL pipelines, and a Wazuh-based SOC for threat detection and
                response. I turn complex data and security telemetry into actionable, resilient end-to-end solutions.
              </p>
            </div>

            <div className="modern-panel border-l-4 border-cyan-300 dark:border-blue-500 pl-6 py-4 rounded-r-lg card-sheen">
              <blockquote className="text-gray-200 dark:text-gray-700 italic text-base md:text-lg font-medium">
                "Building reliable, scalable systems that empower teams to achieve their goals efficiently and effectively."
              </blockquote>
            </div>

            <div className="glow-card modern-panel rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider font-semibold text-cyan-300 dark:text-blue-700 mb-3">
                Core Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {coreFocus.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm rounded-full bg-slate-800/60 dark:bg-blue-50 border border-slate-600/70 dark:border-blue-200 text-slate-200 dark:text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6">
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  data-tilt
                  className="glow-card modern-panel card-sheen p-4 md:p-5 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-white dark:text-gray-900">{item.title}</h3>
                      <p className="text-gray-300 dark:text-gray-600 text-sm md:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
