import React, { useState } from 'react';

function App() {
  const [showToasts, setShowToasts] = useState(true);
  const [visibleToasts, setVisibleToasts] = useState([1, 2, 3, 4]);

  const toasts = [
    {
      id: 1,
      type: 'success',
      icon: '✓',
      title: 'Successfully saved!',
      message: 'Your changes have been deployed to production.',
      color: 'green'
    },
    {
      id: 2,
      type: 'error',
      icon: '!',
      title: 'Connection Error',
      message: 'Unable to sync data. Retrying in 30 seconds.',
      color: 'red'
    },
    {
      id: 3,
      type: 'info',
      icon: 'i',
      title: 'New Update Available',
      message: 'Version 2.4.0 is ready to install.',
      color: 'blue'
    },
    {
      id: 4,
      type: 'warning',
      icon: '⚠',
      title: 'Low Storage',
      message: 'You have less than 5GB of storage remaining.',
      color: 'amber'
    }
  ];

  const closeToast = (id) => {
    setVisibleToasts(visibleToasts.filter(toastId => toastId !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 font-sans relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* NAVIGATION */}
      {/* [BUG - LAYERS] z-index too low, causes content overlap */}
      {/* [FIX] Change from z-0 to z-50 */}
      <nav className="relative z-0 bg-white/10 backdrop-blur-md border-b border-white/20 p-4 sticky top-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">✨</span>
            </div>
            <span className="font-bold text-white text-lg">TaskHub Pro</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-white/80 text-sm">
            <a href="#" className="hover:text-white transition">Dashboard</a>
            <a href="#" className="hover:text-white transition">Projects</a>
            <a href="#" className="hover:text-white transition">Team</a>
            <a href="#" className="hover:text-white transition">Settings</a>
          </div>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition border border-white/30">Profile</button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        
        {/* HEADER SECTION */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-blue-200 to-pink-200">
            Welcome back, Sarah
          </h1>
          <p className="text-xl text-white/60">You have 3 new tasks and 5 completed today</p>
        </div>

        {/* STATS CARDS */}
        {/* [BUG - LAYOUT] Wrong grid column count (5 instead of 4) */}
        {/* [FIX] Change grid-cols-5 to grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
          {[
            { label: 'Active Tasks', value: '12', color: 'from-blue-500 to-cyan-500' },
            { label: 'Completed', value: '48', color: 'from-green-500 to-emerald-500' },
            { label: 'Team Members', value: '8', color: 'from-purple-500 to-pink-500' },
            { label: 'Efficiency', value: '94%', color: 'from-orange-500 to-red-500' }
          ].map((stat, i) => {
            // [BUG - TYPO] Invalid color class: bg-white/2 instead of bg-white/20
            // [FIX] Change bg-white/2 to bg-white/20
            return (
              <div key={i} className="bg-white/2 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/20 transition">
                <p className="text-white/60 text-sm mb-2">{stat.label}</p>
                <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* MAIN CONTENT GRID */}
        {/* [BUG - LAYOUT] Flex-col breaks grid layout, grid becomes vertical stack */}
        {/* [FIX] Remove flex flex-col, keep grid */}
        <div className="flex flex-col grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Large Featured Card */}
          {/* [BUG - SPACING] Negative margin causes content to overlap edges */}
          {/* [FIX] Change -m-12 to m-0 */}
          <div className="lg:col-span-2 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl -m-12 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Today's Overview</h2>
            
            {/* Task Items */}
            <div className="space-y-4">
              {[
                { title: 'Design system updates', progress: 85, assigned: 'You' },
                { title: 'API integration tests', progress: 60, assigned: 'Alex' },
                { title: 'Documentation review', progress: 40, assigned: 'Jordan' },
                { title: 'Client presentation prep', progress: 90, assigned: 'You' }
              ].map((task, i) => {
                // [BUG - COLOR & CONTRAST] Text almost invisible: text-white/5
                // [FIX] Change text-white/5 to text-white/50
                return (
                  <div key={i} className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{task.title}</span>
                      <span className="text-white/5 text-sm">{task.assigned}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-white/50 text-xs mt-1">{task.progress}% complete</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {['Create Task', 'New Project', 'Invite Team', 'Export Report'].map((action, i) => (
                  <button key={i} className="w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition text-sm font-medium border border-white/20">
                    {action}
                  </button>
                ))}
              </div>
            </div>

            {/* Test Notifications */}
            {/* [BUG - SPACING] Missing padding creates cramped layout */}
            {/* [FIX] Change p-0 to p-6 */}
            <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-0">
              <h3 className="text-lg font-bold text-white mb-4">Test Toasts</h3>
              <button 
                onClick={() => setShowToasts(!showToasts)}
                className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg transition font-medium"
              >
                {showToasts ? 'Hide' : 'Show'} Notifications
              </button>
            </div>
          </div>
        </div>

        {/* RECENT ACTIVITY */}
        <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { icon: '📝', user: 'Sarah', action: 'created task', target: 'Q1 Planning', time: '2 hours ago' },
              { icon: '✓', user: 'Alex', action: 'completed', target: 'API Documentation', time: '4 hours ago' },
              { icon: '💬', user: 'Jordan', action: 'commented on', target: 'Design Review', time: '6 hours ago' },
              { icon: '🔄', user: 'System', action: 'synced data', target: 'All projects', time: '8 hours ago' }
            ].map((activity, i) => {
              // [BUG - COLOR & CONTRAST] Text too dark on dark background: text-slate-800
              // [FIX] Change text-slate-800 to text-white
              return (
                <div key={i} className="flex items-center justify-between text-white/80 py-3 border-b border-white/10 last:border-0">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{activity.icon}</span>
                    <div>
                      <p className="font-medium text-slate-800"><span className="text-white">{activity.user}</span> {activity.action} <span className="text-blue-300">{activity.target}</span></p>
                    </div>
                  </div>
                  <span className="text-white/50 text-sm">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>

      </main>

      {/* NOTIFICATION CONTAINER */}
      {/* [BUG - LAYERS] Toast positioned with absolute instead of fixed, scrolls with page */}
      {/* [FIX] Change from absolute to fixed */}
      {showToasts && (
        <div className="absolute top-24 right-4 w-96 space-y-3 z-50">
          {toasts.filter(toast => visibleToasts.includes(toast.id)).map((toast) => {
            const colorClasses = {
              green: 'from-green-500 to-emerald-500 border-green-400/30',
              red: 'from-red-500 to-pink-500 border-red-400/30',
              blue: 'from-blue-500 to-cyan-500 border-blue-400/30',
              amber: 'from-amber-500 to-orange-500 border-amber-400/30'
            };

            return (
              <div key={toast.id} className={`bg-gradient-to-r ${colorClasses[toast.color]} backdrop-blur-md border rounded-xl shadow-2xl p-5 flex items-start animate-slide-in hover:shadow-3xl transition-shadow`}>
                <div className={`flex-shrink-0 text-2xl w-8 h-8 rounded-full bg-white/20 flex items-center justify-center`}>
                  {toast.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-white text-sm">{toast.title}</h3>
                  {/* [BUG - TYPO] Invalid class: text-wh1te (typo with 1 instead of i) */}
                  {/* [FIX] Change text-wh1te to text-white */}
                  <p className="text-wh1te/80 text-sm mt-1">{toast.message}</p>
                </div>
                <button 
                  onClick={() => closeToast(toast.id)}
                  className="ml-3 text-white/60 hover:text-white transition text-lg font-bold"
                >
                  ×
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/20 bg-white/5 backdrop-blur-md mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center text-white/60 text-sm">
          <p>© 2024 TaskHub Pro. All rights reserved. | Made with ❤️</p>
        </div>
      </footer>

    </div>
  );
}

export default App;