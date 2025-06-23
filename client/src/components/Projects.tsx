import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@shared/schema";

export function Projects() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects", activeFilter],
    queryFn: async () => {
      const url = activeFilter === "all" 
        ? "/api/projects" 
        : `/api/projects?category=${activeFilter}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch projects");
      return response.json();
    },
  });

  const filters = [
    { key: "all", label: t("projects.filters.all") },
    { key: "2024", label: "2024" },
    { key: "2023", label: "2023" },
    { key: "industrial", label: t("projects.filters.industrial") },
    { key: "technology", label: t("projects.filters.technology") },
  ];

  if (isLoading) {
    return (
      <section id="projects" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t("projects.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="noise-grid gradient-border glass rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-48 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
                  </div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">{t("projects.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full transition-all duration-300 hover-scale ${
                activeFilter === filter.key
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'noise-grid gradient-border glass'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div 
              key={project.id} 
              className="noise-grid gradient-border glass rounded-2xl overflow-hidden hover-scale transition-all duration-500 group animate-fade-up relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Moving Vector Elements in Project Cards */}
              <div className="absolute top-4 left-4 w-6 h-6 opacity-15 animate-vector-pulse">
                <svg viewBox="0 0 24 24" className="w-full h-full text-current">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" fill="none"/>
                  <circle cx="12" cy="8" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">{project.year} • {project.category}</span>
                  <span className={`text-sm px-2 py-1 rounded ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                      : 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
