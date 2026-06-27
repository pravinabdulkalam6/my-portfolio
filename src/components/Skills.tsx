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
      title: "SRE, Cloud & DevOps",
      icon: <Server className="w-8 h-8 text-blue-400" />,
      skills: [
        { name: "AWS", level: 82, icon: <Cloud className="w-5 h-5" /> },
        { name: "Kubernetes", level: 88, icon: <Layers className="w-5 h-5" /> },
        { name: "Docker", level: 92, icon: <Container className="w-5 h-5" /> },
        { name: "GitHub Actions", level: 88, icon: <GitBranch className="w-5 h-5" /> },
        { name: "Terraform", level: 72, icon: <Cloud className="w-5 h-5" /> }
      ]
    },
    {
      title: "GitOps & Observability",
      icon: <Activity className="w-8 h-8 text-cyan-300" />,
      skills: [
        { name: "Argo CD (GitOps)", level: 84, icon: <GitBranch className="w-5 h-5" /> },
        { name: "Prometheus", level: 82, icon: <Activity className="w-5 h-5" /> },
        { name: "Grafana", level: 86, icon: <Monitor className="w-5 h-5" /> },
        { name: "Helm", level: 76, icon: <Settings className="w-5 h-5" /> },
        { name: "Shell Scripting", level: 85, icon: <Terminal className="w-5 h-5" /> }
      ]
    },
    {
      title: "Full-Stack Development",
      icon: <Code className="w-8 h-8 text-purple-400" />,
      skills: [
        { name: "TypeScript", level: 86, icon: <FileCode className="w-5 h-5" /> },
        { name: "JavaScript", level: 88, icon: <Globe className="w-5 h-5" /> },
        { name: "Angular", level: 80, icon: <Box className="w-5 h-5" /> },
        { name: "NestJS / Node.js", level: 80, icon: <Terminal className="w-5 h-5" /> },
        { name: "PostgreSQL", level: 82, icon: <HardDrive className="w-5 h-5" /> }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-8 h-8 text-green-400" />,
      skills: [
        { name: "Python", level: 95, icon: <Code className="w-5 h-5" /> },
        { name: "PySpark", level: 80, icon: <Zap className="w-5 h-5" /> },
        { name: "ETL Pipelines", level: 86, icon: <Network className="w-5 h-5" /> },
        { name: "Apache Airflow", level: 78, icon: <Network className="w-5 h-5" /> },
        { name: "Statistical Analysis", level: 80, icon: <Activity className="w-5 h-5" /> }
      ]
    },
    {
      title: "Security & SOC",
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      skills: [
        { name: "Wazuh", level: 86, icon: <Shield className="w-5 h-5" /> },
        { name: "YARA / Osquery", level: 80, icon: <FileCode className="w-5 h-5" /> },
        { name: "SCA", level: 76, icon: <Shield className="w-5 h-5" /> },
        { name: "Threat Detection", level: 80, icon: <Activity className="w-5 h-5" /> },
        { name: "Incident Response", level: 78, icon: <Zap className="w-5 h-5" /> }
      ]
    },
    {
      title: "Automation & QA",
      icon: <Monitor className="w-8 h-8 text-orange-400" />,
      skills: [
        { name: "Appium", level: 88, icon: <Cpu className="w-5 h-5" /> },
        { name: "Playwright", level: 84, icon: <Monitor className="w-5 h-5" /> },
        { name: "Selenium", level: 80, icon: <Monitor className="w-5 h-5" /> },
        { name: "iOS / Android Testing", level: 82, icon: <Box className="w-5 h-5" /> },
        { name: "Integration & Unit Testing", level: 82, icon: <Shield className="w-5 h-5" /> }
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
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-950/70 to-slate-900/70 dark:from-slate-100/80 dark:to-blue-50/70" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              data-tilt
              className="glow-card modern-panel rounded-xl p-6 animate-fade-in-up"
              style={{ transitionDelay: `${categoryIndex * 80}ms` }}
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
              { name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
              { name: 'Argo CD', icon: <GitBranch className="w-4 h-4" /> },
              { name: 'GitOps', icon: <GitBranch className="w-4 h-4" /> },
              { name: 'GitHub Actions', icon: <GitBranch className="w-4 h-4" /> },
              { name: 'Osquery', icon: <FileCode className="w-4 h-4" /> },
              { name: 'SCA', icon: <Shield className="w-4 h-4" /> },
              { name: 'File Integrity Monitoring', icon: <Shield className="w-4 h-4" /> },
              { name: 'Statistical Data Analysis', icon: <Activity className="w-4 h-4" /> },
              { name: 'Integration Testing', icon: <Shield className="w-4 h-4" /> },
              { name: 'Unit Testing', icon: <Shield className="w-4 h-4" /> },
              { name: 'Visual Testing', icon: <Monitor className="w-4 h-4" /> },
              { name: 'Android Studio', icon: <Box className="w-4 h-4" /> },
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
              { name: 'Arabic Localization', icon: <Globe className="w-4 h-4" /> },
              { name: 'UI Testing', icon: <Monitor className="w-4 h-4" /> },
              { name: 'ARIMA', icon: <Activity className="w-4 h-4" /> },
              { name: 'SARIMAX', icon: <Activity className="w-4 h-4" /> },
              { name: 'ETS', icon: <Activity className="w-4 h-4" /> },
              { name: 'Time Series Analysis', icon: <Activity className="w-4 h-4" /> },
              { name: 'Predictive Modeling', icon: <Activity className="w-4 h-4" /> },
              { name: 'Helm', icon: <Settings className="w-4 h-4" /> },
              { name: 'Wazuh', icon: <Shield className="w-4 h-4" /> },
              { name: 'SOC Monitoring', icon: <Monitor className="w-4 h-4" /> }
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
