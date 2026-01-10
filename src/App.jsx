import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      
      {/* MOCK MAIN CONTENT */}
      <nav className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto font-bold text-gray-700">AppDashboard</div>
      </nav>
      <main className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Dashboard Content</h1>
        <p className="text-gray-600 mb-8">This is the main area of the page. The notifications should appear floating on the top-right.</p>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-32 bg-white rounded shadow border border-gray-200"></div>
          <div className="h-32 bg-white rounded shadow border border-gray-200"></div>
          <div className="h-32 bg-white rounded shadow border border-gray-200"></div>
        </div>
      </main>

      {/* NOTIFICATION CONTAINER: Fixed to viewport */}
      {/* FUTURE BUG: Remove 'fixed top-4 right-4' to make it flow with document */}
      <div className="fixed top-4 right-4 w-80 space-y-4 z-50">
        
        {/* Success Toast */}
        <div className="bg-white border-l-4 border-green-500 rounded shadow-lg p-4 flex items-start animate-slide-in">
          <div className="flex-shrink-0 text-green-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-900">Successfully saved!</h3>
            <p className="text-sm text-gray-500 mt-1">Your changes have been deployed.</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-600">×</button>
        </div>

        {/* Error Toast */}
        <div className="bg-white border-l-4 border-red-500 rounded shadow-lg p-4 flex items-start animate-slide-in">
          <div className="flex-shrink-0 text-red-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-900">Connection Error</h3>
            <p className="text-sm text-gray-500 mt-1">Could not connect to the database.</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-600">×</button>
        </div>

        {/* Info Toast */}
        <div className="bg-white border-l-4 border-blue-500 rounded shadow-lg p-4 flex items-start animate-slide-in">
          <div className="flex-shrink-0 text-blue-500">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-gray-900">New Update</h3>
            <p className="text-sm text-gray-500 mt-1">Version 2.0 is now available.</p>
          </div>
          <button className="ml-auto text-gray-400 hover:text-gray-600">×</button>
        </div>

      </div>
    </div>
  );
}

export default App;