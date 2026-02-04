import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen  flex items-start justify-center mt-26">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Enhance Team <span className="text-green-500">Coordination</span>{" "}
            During{" "}
            <span className="text-green-500">Project Development</span>
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Streamline collaboration, improve communication, and accelerate
            project delivery with our comprehensive coordination platform.
          </p>
        </div>

        <div className="flex flex-row gap-4 mb-8 justify-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200 w-64">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">
              Team Collaboration
            </h3>
            <p className="text-xs text-slate-600">
              Foster seamless communication and real-time collaboration across
              distributed teams.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200 w-64">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">
              Project Tracking
            </h3>
            <p className="text-xs text-slate-600">
              Monitor progress, track milestones, and ensure timely delivery of
              project objectives.
            </p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-4 border border-emerald-200 w-64">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-slate-800 mb-2">
              Rapid Execution
            </h3>
            <p className="text-xs text-slate-600">
              Accelerate development cycles with efficient workflows and
              automated processes.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-slate-200 mb-5 text-sm">
            Join thousands of teams already optimizing their project
            coordination.
          </p>
          <div className="flex gap-3 justify-center">
            <div className="bg-white text-slate-800 px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors cursor-pointer text-sm">
              Get Started
            </div>
            <div className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors cursor-pointer text-sm">
              Learn More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
