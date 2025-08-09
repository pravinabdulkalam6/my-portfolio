import React from 'react';
import { Code, Database, Zap, Users, Server, Cloud, GitBranch, Cpu, Shield, Monitor, Rocket, TrendingUp, Award, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Site Reliability Engineering",
      description: "Expert in CI/CD pipelines, containerization, and cloud infrastructure automation"
    },
    {
      icon: <Database className="w-8 h-8 text-teal-400" />,
      title: "Data Engineering",
      description: "Specialized in building robust ETL pipelines and real-time data processing systems"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automation",
      description: "Passionate about automating workflows and improving deployment efficiency"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Team Leadership",
      description: "Strong collaboration skills and experience in cross-functional team environments"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-gray-900/70 dark:bg-gray-100/80">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
            About <span className="text-blue-400 dark:text-gray-800">Me</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            A passionate Site Reliability and Data Engineering professional with expertise in designing scalable infrastructure and implementing cutting-edge solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-left">
            <div className="prose prose-invert dark:prose max-w-none">
              <p className="text-gray-200 dark:text-gray-800 leading-relaxed">
                I am a Site Reliability and Data Engineering professional with extensive experience in designing scalable infrastructure, 
                automating deployment workflows, and implementing real-time monitoring using Prometheus and Grafana.
              </p>
              <p className="text-gray-200 dark:text-gray-800 leading-relaxed">
                Proficient in Kubernetes, CI/CD practices, and building robust ETL pipelines. Skilled at transforming complex 
                data into actionable insights and delivering comprehensive solutions across automation testing and campaign management.
              </p>
            </div>

            <div className="border-l-4 border-blue-400 dark:border-gray-600 pl-6">
              <blockquote className="text-gray-200 dark:text-gray-800 italic">
                "Strong decision-making skills and adept at problem-solving with strong teamwork and collaboration skills."
              </blockquote>
            </div>
          </div>

          {/* Right Content - Highlights & Visual Elements */}
          <div className="space-y-6 animate-fade-in-right">
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glow-card p-6 rounded-lg transition-all duration-300 hover:transform hover:scale-105 group animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white dark:text-black">{item.title}</h3>
                  <p className="text-gray-300 dark:text-gray-700 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Tech Stack Visualization */}
            <div className="relative">
              <div className="text-center mb-4">
                <h4 className="text-lg font-semibold text-white dark:text-black mb-2">Core Technologies</h4>
                <p className="text-gray-400 dark:text-gray-600 text-sm">Technologies I work with daily</p>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="relative h-40 md:h-48 bg-gray-800/30 dark:bg-gray-200/30 rounded-lg overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-6 gap-4 p-4">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                    ))}
                  </div>
                </div>

                {/* Floating Icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Central Server Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="p-4 bg-blue-500/20 dark:bg-blue-600/20 rounded-full animate-pulse">
                        <Server className="w-8 h-8 text-blue-400 dark:text-blue-600" />
                      </div>
                    </div>

                    {/* Orbiting Icons */}
                    <div className="absolute top-4 left-8 animate-float" style={{ animationDelay: '0s' }}>
                      <Cloud className="w-6 h-6 text-teal-400 dark:text-teal-600" />
                    </div>
                    <div className="absolute top-8 right-12 animate-float" style={{ animationDelay: '1s' }}>
                      <Database className="w-6 h-6 text-purple-400 dark:text-purple-600" />
                    </div>
                    <div className="absolute bottom-8 left-12 animate-float" style={{ animationDelay: '2s' }}>
                      <GitBranch className="w-6 h-6 text-yellow-400 dark:text-yellow-600" />
                    </div>
                    <div className="absolute bottom-4 right-8 animate-float" style={{ animationDelay: '3s' }}>
                      <Monitor className="w-6 h-6 text-green-400 dark:text-green-600" />
                    </div>
                    <div className="absolute top-1/2 left-4 animate-float" style={{ animationDelay: '4s' }}>
                      <Shield className="w-6 h-6 text-red-400 dark:text-red-600" />
                    </div>
                    <div className="absolute top-1/2 right-4 animate-float" style={{ animationDelay: '5s' }}>
                      <Cpu className="w-6 h-6 text-orange-400 dark:text-orange-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              <div className="text-center p-3 md:p-4 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg hover:bg-gray-800/70 dark:hover:bg-gray-200/70 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6 text-blue-400 dark:text-blue-600" />
                </div>
                <div className="text-xl font-bold text-blue-400 dark:text-blue-600">2+</div>
                <div className="text-xs text-gray-400 dark:text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg hover:bg-gray-800/70 dark:hover:bg-gray-200/70 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <Target className="w-6 h-6 text-teal-400 dark:text-teal-600" />
                </div>
                <div className="text-xl font-bold text-teal-400 dark:text-teal-600">50+</div>
                <div className="text-xs text-gray-400 dark:text-gray-600">Projects</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-gray-800/50 dark:bg-gray-200/50 rounded-lg hover:bg-gray-800/70 dark:hover:bg-gray-200/70 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-purple-400 dark:text-purple-600" />
                </div>
                <div className="text-xl font-bold text-purple-400 dark:text-purple-600">15+</div>
                <div className="text-xs text-gray-400 dark:text-gray-600">Technologies</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="text-center p-4 md:p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-600/10 dark:to-purple-600/10 rounded-lg border border-blue-500/20 dark:border-blue-600/20">
              <Rocket className="w-8 h-8 text-blue-400 dark:text-blue-600 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white dark:text-black mb-2">Mission</h4>
              <p className="text-gray-300 dark:text-gray-700 text-sm">
                Building reliable, scalable infrastructure that empowers teams to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;