import React, { useState, useEffect, useRef } from 'react';
import { 
  Server, 
  Database, 
  Cloud, 
  Code, 
  GitBranch, 
  Monitor, 
  Shield, 
  Cpu, 
  HardDrive, 
  Network,
  Container,
  Activity,
  Terminal,
  Zap,
  Globe,
  Settings,
  FileCode,
  Layers,
  Box
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "SRE & Cloud",
      icon: <Server className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: "Docker", level: 90, icon: <Container className="w-5 h-5" /> },
        { name: "Kubernetes", level: 85, icon: <Layers className="w-5 h-5" /> },
        { name: "GitLab CI/CD", level: 88, icon: <GitBranch className="w-5 h-5" /> },
        { name: "Prometheus", level: 80, icon: <Activity className="w-5 h-5" /> },
        { name: "Grafana", level: 85, icon: <Monitor className="w-5 h-5" /> }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-8 h-8 text-green-400" />,
      skills: [
        { name: "Python", level: 95, icon: <Code className="w-5 h-5" /> },
        { name: "PySpark", level: 80, icon: <Zap className="w-5 h-5" /> },
        { name: "ETL Pipelines", level: 85, icon: <Network className="w-5 h-5" /> },
        { name: "InfluxDB", level: 75, icon: <Database className="w-5 h-5" /> },
        { name: "PostgreSQL", level: 82, icon: <HardDrive className="w-5 h-5" /> }
      ]
    },
    {
      title: "Development",
      icon: <Code className="w-8 h-8 text-purple-400" />,
      skills: [
        { name: "JavaScript", level: 88, icon: <Globe className="w-5 h-5" /> },
        { name: "TypeScript", level: 85, icon: <FileCode className="w-5 h-5" /> },
        { name: "Node.js", level: 80, icon: <Terminal className="w-5 h-5" /> },
        { name: "Angular", level: 75, icon: <Box className="w-5 h-5" /> },
        { name: "NestJS", level: 78, icon: <Code className="w-5 h-5" /> }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      skills: [
        { name: "Git", level: 90, icon: <GitBranch className="w-5 h-5" /> },
        { name: "Terraform", level: 70, icon: <Cloud className="w-5 h-5" /> },
        { name: "Ansible", level: 75, icon: <Settings className="w-5 h-5" /> },
        { name: "Airflow", level: 72, icon: <Network className="w-5 h-5" /> },
        { name: "Shell Scripting", level: 85, icon: <Terminal className="w-5 h-5" /> }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900/70 dark:bg-gray-100/80" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
            Technical <span className="text-blue-400 dark:text-gray-800">Skills</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glow-card rounded-lg p-6 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white dark:text-black">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <div className="mr-2 text-gray-400 dark:text-gray-600">
                          {skill.icon}
                        </div>
                        <span className="text-gray-200 dark:text-gray-800 text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-300 dark:text-gray-700 text-xs">{skill.level}%</span>
                    </div>
                    
                    <div className="skill-bar w-full rounded-full h-2 overflow-hidden">
                      <div
                        className="skill-progress h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <h3 className="text-xl font-semibold mb-6 text-white dark:text-black flex items-center justify-center">
            <Box className="w-6 h-6 mr-2 text-cyan-400" />
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: 'Airflow', icon: <Network className="w-4 h-4" /> },
              { name: 'Appium', icon: <Cpu className="w-4 h-4" /> },
              { name: 'Playwright', icon: <Monitor className="w-4 h-4" /> },
              { name: 'Docker', icon: <Container className="w-4 h-4" /> },
              { name: 'ETL', icon: <Database className="w-4 h-4" /> },
              { name: 'Git', icon: <GitBranch className="w-4 h-4" /> },
              { name: 'Grafana', icon: <Monitor className="w-4 h-4" /> },
              { name: 'InfluxDB', icon: <Database className="w-4 h-4" /> },
              { name: 'Ionic', icon: <Globe className="w-4 h-4" /> },
              { name: 'JavaScript', icon: <Code className="w-4 h-4" /> },
              { name: 'Kubernetes', icon: <Layers className="w-4 h-4" /> },
              { name: 'NestJS', icon: <Box className="w-4 h-4" /> },
              { name: 'PostgreSQL', icon: <HardDrive className="w-4 h-4" /> },
              { name: 'Prometheus', icon: <Activity className="w-4 h-4" /> },
              { name: 'PySpark', icon: <Zap className="w-4 h-4" /> },
              { name: 'Python', icon: <Code className="w-4 h-4" /> },
              { name: 'TypeScript', icon: <FileCode className="w-4 h-4" /> },
              { name: 'Xcode', icon: <Box className="w-4 h-4" /> },
              { name: 'Shell Scripting', icon: <Terminal className="w-4 h-4" /> },
              { name: 'Node.js', icon: <Terminal className="w-4 h-4" /> },
              { name: 'Angular', icon: <Box className="w-4 h-4" /> },
              { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
              { name: 'Go', icon: <Code className="w-4 h-4" /> },
              { name: 'Terraform', icon: <Cloud className="w-4 h-4" /> },
              { name: 'Ansible', icon: <Settings className="w-4 h-4" /> },
              { name: 'Selenium', icon: <Monitor className="w-4 h-4" /> },
              { name: 'TestNG', icon: <Shield className="w-4 h-4" /> },
              { name: 'Arabic Localization', icon: <Globe className="w-4 h-4" /> },
              { name: 'UI Testing', icon: <Monitor className="w-4 h-4" /> },
              { name: 'Mobile Testing', icon: <Cpu className="w-4 h-4" /> },
              { name: 'ARIMA', icon: <Activity className="w-4 h-4" /> },
              { name: 'SARIMAX', icon: <Activity className="w-4 h-4" /> },
              { name: 'ETS', icon: <Activity className="w-4 h-4" /> },
              { name: 'Time Series Analysis', icon: <Activity className="w-4 h-4" /> },
              { name: 'Predictive Modeling', icon: <Activity className="w-4 h-4" /> },
              { name: 'Vault', icon: <Shield className="w-4 h-4" /> },
              { name: 'Helm', icon: <Settings className="w-4 h-4" /> }
            ].map((tech, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-gray-700/50 dark:bg-gray-300/50 text-gray-300 dark:text-gray-700 rounded-full text-sm border border-gray-600 dark:border-gray-400 hover:border-blue-400 dark:hover:border-gray-600 hover:text-blue-400 dark:hover:text-gray-800 transition-all duration-300 cursor-default flex items-center gap-2"
              >
                <span className="text-blue-400 dark:text-gray-600">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;