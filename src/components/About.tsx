import React from 'react';
import { Code, Database, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 md:w-8 md:h-8 text-blue-400 dark:text-blue-500" />,
      title: "Site Reliability Engineering",
      description: "Expert in CI/CD pipelines, containerization, and cloud infrastructure automation"
    },
    {
      icon: <Database className="w-6 h-6 md:w-8 md:h-8 text-teal-400 dark:text-teal-500" />,
      title: "Data Engineering",
      description: "Specialized in building robust ETL pipelines and real-time data processing systems"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 dark:text-yellow-500" />,
      title: "Automation",
      description: "Passionate about automating workflows and improving deployment efficiency"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-400 dark:text-purple-500" />,
      title: "Team Leadership",
      description: "Strong collaboration skills and experience in cross-functional team environments"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-20 lg:py-24 bg-gray-900/80 dark:bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white dark:text-gray-900">
            About <span className="text-blue-400 dark:text-blue-600">Me</span>
          </h2>
          <p className="text-lg text-gray-300 dark:text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate Site Reliability and Data Engineering professional with expertise in designing scalable infrastructure and implementing cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-gray-200 dark:text-gray-700 leading-relaxed">
                I am a Site Reliability and Data Engineering professional with extensive experience in designing scalable infrastructure, 
                automating deployment workflows, and implementing real-time monitoring using Prometheus and Grafana.
              </p>
              <p className="text-base md:text-lg text-gray-200 dark:text-gray-700 leading-relaxed">
                Proficient in Kubernetes, CI/CD practices, and building robust ETL pipelines. Skilled at transforming complex 
                data into actionable insights and delivering comprehensive solutions across automation testing and campaign management.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 dark:border-blue-500 pl-6 py-4 bg-gray-800/30 dark:bg-blue-50 rounded-r-lg">
              <blockquote className="text-gray-200 dark:text-gray-700 italic text-base md:text-lg font-medium">
                "Building reliable, scalable systems that empower teams to achieve their goals efficiently and effectively."
              </blockquote>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="grid gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glow-card p-4 md:p-5 rounded-xl transition-all duration-300 hover:transform hover:scale-105 group animate-scale-in"
                  style={{ animationDelay: `${index * 150}ms` }}
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