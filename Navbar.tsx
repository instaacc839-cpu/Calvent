@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  
  --color-brand-50: #f5f7ff;
  --color-brand-100: #ebf0ff;
  --color-brand-500: #4f46e5;
  --color-brand-600: #4338ca;
  --color-brand-700: #3730a3;
  
  --animate-pulse-slow: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Base resets & custom modern visual presets */
html, body {
  background-color: #fafafa;
  color: #111111;
  font-family: var(--font-sans);
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
  -webkit-font-smoothing: antialiased;
}

/* Linear-like subtle custom scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: #f4f4f5;
}
::-webkit-scrollbar-thumb {
  background: #e4e4e7;
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d4d4d8;
}

/* Custom premium styles */
.study-card-border {
  border: 1px solid rgba(24, 24, 27, 0.05);
}

.glow-subtle {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.02), 0 1px 2px -1px rgba(0, 0, 0, 0.02);
}

.markdown-body h1, .markdown-body h2, .markdown-body h3 {
  font-family: var(--font-display);
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #0f172a;
}
.markdown-body h3 {
  font-size: 1.125rem;
}
.markdown-body p {
  margin-bottom: 1rem;
  line-height: 1.625;
}
.markdown-body ul, .markdown-body ol {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  list-style-type: disc;
}
.markdown-body li {
  margin-bottom: 0.25rem;
}
.markdown-body code {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  background-color: #f1f5f9;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
}
