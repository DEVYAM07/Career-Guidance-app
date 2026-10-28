import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CareerGrid from './components/CareerGrid';
import RoadmapView from './components/RoadmapView';
import PromptModal from './components/PromptModal';
import SettingsModal from './components/SettingsModal';
import { fetchCareerRoadmap } from './services/geminiService';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentCareer, setCurrentCareer] = useState('');
  const [roadmap, setRoadmap] = useState(null);
  const [source, setSource] = useState('');
  const [promptUsed, setPromptUsed] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Modals
  const [isPromptModalOpen, setIsPromptModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [apiKey, setApiKey] = useState('');

  useEffect(() => {
    const savedKey = localStorage.getItem('levelup_gemini_api_key') || import.meta.env.VITE_GEMINI_API_KEY || '';
    setApiKey(savedKey);
  }, []);

  const handleSaveApiKey = (newKey) => {
    setApiKey(newKey);
    if (newKey) {
      localStorage.setItem('levelup_gemini_api_key', newKey);
    } else {
      localStorage.removeItem('levelup_gemini_api_key');
    }
  };

  const handleSearch = async (career) => {
    if (!career || !career.trim()) return;
    const cleanCareer = career.trim();
    setCurrentCareer(cleanCareer);
    setIsLoading(true);
    setErrorMessage('');

    try {
      const response = await fetchCareerRoadmap(cleanCareer, apiKey);
      setRoadmap(response.data);
      setSource(response.source);
      setPromptUsed(response.promptUsed);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error("Search error:", err);
      setErrorMessage("Could not generate roadmap. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPreset = (careerName) => {
    setSearchQuery(careerName);
    handleSearch(careerName);
  };

  const handleBackToSearch = () => {
    setRoadmap(null);
  };

  return (
    <div className="min-h-screen bg-[#14123b] text-white flex flex-col justify-between selection:bg-[#ff3d8b] selection:text-white px-4 sm:px-8 md:px-16">
      {/* Centered Main Content Area */}
      <main className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center py-6 sm:py-12">
        {!roadmap ? (
          <div className="w-full max-w-3xl">
            {/* Header: Level Up badge, Headline, Subtitle */}
            <Header
              onOpenPrompt={() => setIsPromptModalOpen(true)}
              onOpenSettings={() => setIsSettingsModalOpen(true)}
              isApiKeySet={!!apiKey}
            />

            {/* Search Input Bar with "Show my path" button */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onSubmit={handleSearch}
              isLoading={isLoading}
            />

            {errorMessage && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/20 border border-red-500 text-red-200 text-xs font-semibold">
                {errorMessage}
              </div>
            )}

            {/* Quick Select Buttons: Doctor, Engineer, Civil servant... */}
            <CareerGrid
              onSelectCareer={handleSelectPreset}
              disabled={isLoading}
            />
          </div>
        ) : (
          /* Detailed Career Roadmap View */
          <RoadmapView
            roadmap={roadmap}
            source={source}
            promptUsed={promptUsed}
            onBack={handleBackToSearch}
            onOpenPrompt={() => setIsPromptModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto py-6 border-t border-[#231e54] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8b86af] gap-3">
        <div>
          <span>Level Up • Built for Class 10 Students to discover their future</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPromptModalOpen(true)}
            className="hover:text-white transition-colors"
          >
            Fixed LLM Prompt Template
          </button>
          <span>•</span>
          <button
            onClick={() => setIsSettingsModalOpen(true)}
            className="hover:text-white transition-colors"
          >
            LLM API Key
          </button>
        </div>
      </footer>

      {/* Modals */}
      <PromptModal
        isOpen={isPromptModalOpen}
        onClose={() => setIsPromptModalOpen(false)}
        currentCareer={currentCareer || searchQuery}
      />

      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        onSaveKey={handleSaveApiKey}
        currentApiKey={apiKey}
      />
    </div>
  );
}
