import React from 'react';
import { 
  Database, 
  Zap, 
  TrendingUp, 
  Shield, 
  Code, 
  Container, 
  Layers, 
  GitBranch, 
  Activity, 
  Monitor, 
  Terminal, 
  Cloud, 
  Settings, 
  FileCode, 
  Network, 
  HardDrive,
  Globe,
  Box,
  Cpu
} from 'lucide-react';

const Projects = () => {
  const getTechIcon = (tech: string) => {
    const iconMap: { [key: string]: JSX.Element } = {
      'Python': <Code className="w-3 h-3" />,
      'Docker': <Container className="w-3 h-3" />,
      'Kubernetes': <Layers className="w-3 h-3" />,
      'GitLab API': <GitBranch className="w-3 h-3" />,
      'Grafana': <Monitor className="w-3 h-3" />,
      'InfluxDB': <Database className="w-3 h-3" />,
      'Prometheus': <Activity className="w-3 h-3" />,
      'REST API': <Network className="w-3 h-3" />,
      'Appium': <Cpu className="w-3 h-3" />,
      'iOS': <Box className="w-3 h-3" />,
      'Android': <Box className="w-3 h-3" />,
      'Selenium': <Monitor className="w-3 h-3" />,
      'TestNG': <Shield className="w-3 h-3" />,
      'Java': <Code className="w-3 h-3" />,
      'JSON': <FileCode className="w-3 h-3" />,
      'Xcode': <Box className="w-3 h-3" />,
      'CI/CD': <GitBranch className="w-3 h-3" />,
      'Helm': <Settings className="w-3 h-3" />,
      'Vault': <Shield className="w-3 h-3" />,
      'DevOps': <Settings className="w-3 h-3" />,
      'ETL': <Database className="w-3 h-3" />,
      'ARIMA': <Activity className="w-3 h-3" />,
      'SARIMAX': <Activity className="w-3 h-3" />,
      'ETS': <Activity className="w-3 h-3" />,
      'Pandas': <Code className="w-3 h-3" />,
      'Scikit-learn': <Code className="w-3 h-3" />,
      'Apache Airflow': <Network className="w-3 h-3" />,
      'Time Series Analysis': <Activity className="w-3 h-3" />,
      'Predictive Modeling': <Activity className="w-3 h-3" />,
      'Data Pipeline': <Network className="w-3 h-3" />,
      'Infrastructure as Code': <Cloud className="w-3 h-3" />,
      'Service Mesh': <Network className="w-3 h-3" />,
      'Monitoring': <Monitor className="w-3 h-3" />,
      'Automated Testing': <Shield className="w-3 h-3" />,
      'Arabic Localization': <Globe className="w-3 h-3" />,
      'UI Testing': <Monitor className="w-3 h-3" />,
      'CI/CD Integration': <GitBranch className="w-3 h-3" />
    };
    
    return iconMap[tech] || <Code className="w-3 h-3" />;
  };

  const achievements = [
    {
      title: "Cross-Platform Bilingual Testing Framework",
      description: "Architected Appium-based framework supporting Android/iOS with English/Arabic bilingual capabilities, featuring RTL text validation and dynamic UI element detection. Achieved 40% improvement in testing efficiency and comprehensive cross-platform coverage.",
      technologies: ["Appium", "iOS", "Android", "Selenium", "TestNG", "Java", "JSON", "Xcode", "Arabic Localization", "UI Testing", "CI/CD Integration"],
      icon: <Zap className="w-8 h-8 text-teal-400" />,
      gradient: "from-teal-500/20 to-green-500/20"
    },
    {
      title: "Predictive Capacity Planning ETL Pipeline",
      description: "Implemented comprehensive ETL pipeline with advanced predictive modeling using ARIMA, SARIMAX, and ETS algorithms for accurate CPU capacity forecasting. Automated resource allocation predictions enabling proactive infrastructure scaling and cost optimization through data-driven decision making.",
      technologies: ["Python", "ARIMA", "SARIMAX", "ETS", "ETL", "Pandas", "Scikit-learn", "Time Series Analysis", "Predictive Modeling", "Apache Airflow", "Data Pipeline"],
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Alpha Vault Infrastructure Rebuilding",
      description: "Orchestrated complete vault infrastructure rebuilding using Kubernetes with automated deployment pipelines. Resolved critical vault issues, implemented comprehensive service automation, and achieved 100% smoke test pass rate ensuring robust and reliable vault operations.",
      technologies: ["Kubernetes", "Docker", "Helm", "CI/CD", "Vault", "Infrastructure as Code", "Service Mesh", "Monitoring", "Automated Testing", "DevOps"],
      icon: <Shield className="w-8 h-8 text-orange-400" />,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Developer Productivity Monitoring System",
      description: "Created a comprehensive monitoring system that provided real-time visualization of commit frequency, pull request throughput, review cycles, and code quality metrics, improving project transparency and resource allocation by 25%.",
      technologies: ["Python", "GitLab API", "InfluxDB", "Grafana", "REST API"],
      icon: <Database className="w-8 h-8 text-blue-400" />,
      gradient: "from-blue-500/20 to-purple-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black dark:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white dark:text-black">
            Key <span className="text-blue-400 dark:text-gray-800">Achievements</span>
          </h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">
            Showcasing key projects that demonstrate my expertise in Site Reliability Engineering, Data Engineering, and Automation
          </p>
        </div>

        {/* Enhanced Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative overflow-hidden glow-card rounded-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative p-6 z-10">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-gray-700/50 dark:bg-gray-300/50 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white dark:text-black mb-3 group-hover:text-blue-400 dark:group-hover:text-gray-700 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-200 dark:text-gray-800 mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {achievement.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 dark:bg-gray-300/50 text-gray-300 dark:text-gray-700 rounded text-xs border border-gray-600 dark:border-gray-400 group-hover:border-blue-400/50 dark:group-hover:border-gray-600/50 transition-colors duration-300 flex items-center gap-1"
                    >
                      <span className="text-blue-400 dark:text-gray-600">
                        {getTechIcon(tech)}
                      </span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;