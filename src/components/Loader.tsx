import React, { useState, useEffect } from 'react';
import { Server, Database, Activity, Shield, TrendingUp, Terminal, Cpu, HardDrive, Wifi, CheckCircle } from 'lucide-react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentSystemCheck, setCurrentSystemCheck] = useState(0);

  const bootSequence = [
    { text: "$ initializing_sre_systems...", delay: 0, color: "text-green-400" },
    { text: "✓ Docker containers: HEALTHY", delay: 400, color: "text-blue-400" },
    { text: "✓ Kubernetes cluster: RUNNING", delay: 700, color: "text-cyan-400" },
    { text: "✓ Prometheus metrics: COLLECTING", delay: 1000, color: "text-orange-400" },
    { text: "✓ Grafana dashboards: ONLINE", delay: 1300, color: "text-purple-400" },
    { text: "✓ CI/CD pipelines: OPERATIONAL", delay: 1600, color: "text-teal-400" },
    { text: "✓ Load balancers: OPTIMIZED", delay: 1900, color: "text-pink-400" },
    { text: "✓ SSL certificates: VALID", delay: 2200, color: "text-green-400" },
    { text: "✓ Database connections: STABLE", delay: 2500, color: "text-blue-400" },
    { text: "$ system_reliability: 99.99%", delay: 2800, color: "text-emerald-400" },
    { text: "$ loading_portfolio...", delay: 3100, color: "text-yellow-400" },
  ];

  const systemChecks = [
    { icon: <Server className="w-6 h-6" />, label: "Infrastructure", status: "initializing" },
    { icon: <Database className="w-6 h-6" />, label: "Data Pipeline", status: "initializing" },
    { icon: <Activity className="w-6 h-6" />, label: "Monitoring", status: "initializing" },
    { icon: <Shield className="w-6 h-6" />, label: "Security", status: "initializing" },
    { icon: <Terminal className="w-6 h-6" />, label: "Automation", status: "initializing" },
    { icon: <Cpu className="w-6 h-6" />, label: "Performance", status: "initializing" }
  ];

  const [systems, setSystems] = useState(systemChecks);

  const phases = [
    "Booting SRE Systems...",
    "Checking Infrastructure Health...",
    "Validating Service Mesh...",
    "Optimizing Resource Allocation...",
    "System Ready - Welcome!"
  ];

  useEffect(() => {
    // Show terminal immediately for debugging
    setShowTerminal(true);

    // Progressive system checks - balanced timing
    const systemTimer = setInterval(() => {
      setCurrentSystemCheck(prev => {
        if (prev < systems.length - 1) {
          setSystems(currentSystems => 
            currentSystems.map((system, index) => 
              index === prev ? { ...system, status: 'completed' } : system
            )
          );
          return prev + 1;
        }
        return prev;
      });
    }, 500);

    // Terminal text animation - balanced timing
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line.text]);
      }, 300 + (index * 300));
    });

    // Progress animation - balanced speed
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 2.5 + 1.5;
        
        // Update phase based on progress
        const phaseIndex = Math.floor((newProgress / 100) * phases.length);
        setCurrentPhase(Math.min(phaseIndex, phases.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onLoadingComplete();
          }, 1000);
          return 100;
        }
        
        return newProgress;
      });
    }, 100);

    return () => {
      clearInterval(systemTimer);
      clearInterval(interval);
    };
  }, [onLoadingComplete, phases.length]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Matrix-style Background */}
      <div className="absolute inset-0">
        {/* Network Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <div
                key={i}
                className="border border-green-500/20 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Data Flow Lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-pulse"
            style={{
              left: `${10 + i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
        
        {/* Central Hub Animation */}
        <div className="text-center mb-12">
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Rotating Server Ring */}
            <div className="absolute inset-0 rounded-full border-4 border-green-400/30 animate-spin"></div>
            <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
            
            {/* Central Server Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center shadow-2xl animate-glow-pulse">
                <Server className="w-10 h-10 text-white" />
              </div>
            </div>
            
            {/* Orbiting System Icons */}
            {systems.map((system, index) => {
              const angle = (index * 2 * Math.PI) / systems.length;
              const radius = 80;
              const x = 50 + (radius * Math.cos(angle)) / 2;
              const y = 50 + (radius * Math.sin(angle)) / 2;
              
              return (
                <div
                  key={index}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    system.status === 'completed' ? 'text-green-400' : 'text-gray-500'
                  }`}
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <div className={`p-3 rounded-lg ${
                    system.status === 'completed' ? 'bg-green-500/20' : 'bg-gray-800/50'
                  } border ${
                    system.status === 'completed' ? 'border-green-400/50' : 'border-gray-600/50'
                  } transition-all duration-500`}>
                    {system.icon}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SRE Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text mb-4 animate-pulse">
              SITE RELIABILITY ENGINEER
            </h1>
            <p className="text-green-400 text-xl font-mono font-semibold">
              Ensuring 99.99% uptime & optimal performance
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terminal Output */}
          <div className="bg-black/90 rounded-lg border-2 border-green-500/50 p-4 h-64 overflow-hidden">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-green-400 text-sm font-mono font-bold">SRE-Terminal v2.0</span>
            </div>
            <div className="space-y-2 text-sm font-mono">
              {terminalLines.map((line, index) => {
                const bootLine = bootSequence.find(b => b.text === line);
                const lineColor = bootLine?.color || 'text-green-400';
                return (
                  <div key={index} className={lineColor}>
                    {line}
                  </div>
                );
              })}
              <div className="flex items-center mt-2">
                <span className="text-green-400">$ </span>
                <div className="w-2 h-4 bg-green-400 ml-1 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* System Status Panel */}
          <div className="bg-gray-900/90 rounded-lg border-2 border-blue-500/50 p-4">
            <h3 className="text-blue-400 font-bold mb-4 flex items-center text-lg">
              <Activity className="w-6 h-6 mr-2" />
              System Health Monitor
            </h3>
            <div className="space-y-3">
              {systems.map((system, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    system.status === 'completed' 
                      ? 'bg-green-500/20 border-2 border-green-500/50' 
                      : 'bg-gray-800/70 border-2 border-gray-600/50'
                  } transition-all duration-500`}
                >
                  <div className="flex items-center">
                    <div className={system.status === 'completed' ? 'text-green-400' : 'text-gray-400'}>
                      {system.icon}
                    </div>
                    <span className={`ml-3 font-medium ${system.status === 'completed' ? 'text-green-400' : 'text-gray-300'}`}>
                      {system.label}
                    </span>
                  </div>
                  <div className="flex items-center">
                    {system.status === 'completed' ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-400 border-t-blue-400 rounded-full animate-spin"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 bg-gray-900/80 rounded-lg p-4 border border-green-500/30">
          <div className="flex justify-between items-center mb-3">
            <span className="text-green-400 font-mono text-lg font-semibold">{phases[currentPhase]}</span>
            <span className="text-cyan-400 font-mono font-bold text-xl">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden border border-gray-600">
            <div 
              className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-cyan-500 transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Status Message */}
        <div className="text-center mt-6">
          <p className="text-cyan-400 text-lg font-mono font-semibold animate-pulse">
            ⚡ Establishing secure connection to portfolio infrastructure...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
