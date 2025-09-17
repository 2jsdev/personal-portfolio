import Clarity from '@microsoft/clarity';

// Microsoft Clarity Configuration
export const CLARITY_CONFIG = {
  // Replace this with your actual Clarity Project ID
  PROJECT_ID: "tc82ekniuu",
  
  // Optional: Custom configuration
  options: {
    // Enable session recordings
    sessionRecording: true,
    // Enable heatmaps
    heatmaps: true,
    // Enable performance monitoring
    performance: true,
  }
};

// Initialize Clarity
export const initializeClarity = () => {
  if (CLARITY_CONFIG.PROJECT_ID && CLARITY_CONFIG.PROJECT_ID !== "tc82ekniuu") {
    Clarity.init(CLARITY_CONFIG.PROJECT_ID);
    console.log('Microsoft Clarity initialized successfully');
  } else {
    console.warn('Microsoft Clarity Project ID not configured. Please update CLARITY_CONFIG.PROJECT_ID');
  }
};

// Helper functions for Clarity events
export const trackClarityEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('event', eventName, data);
  }
};

export const setClarityCustomTag = (tag: string) => {
  if (typeof window !== 'undefined' && (window as any).clarity) {
    (window as any).clarity('set', tag, 'true');
  }
};

// Specific tracking functions for portfolio
export const trackThemeChange = (theme: 'light' | 'dark') => {
  trackClarityEvent('theme_change', { theme });
  setClarityCustomTag(`theme_${theme}`);
};

export const trackLanguageChange = (language: string) => {
  trackClarityEvent('language_change', { language });
  setClarityCustomTag(`lang_${language}`);
};

export const trackCVDownload = () => {
  trackClarityEvent('cv_download_click');
};

export const trackContactButton = () => {
  trackClarityEvent('contact_button_click');
};

export const trackSocialLink = (platform: string) => {
  trackClarityEvent('social_link_click', { platform });
};

export const trackNavClick = (section: string) => {
  trackClarityEvent('nav_click', { section });
};

export const trackPortfolioProject = (projectName: string, action: 'view' | 'click') => {
  trackClarityEvent(`portfolio_project_${action}`, { project: projectName });
};

export const trackContactFormSubmit = (formType: string = 'email') => {
  trackClarityEvent('contact_form_submit', {
    section: 'contact',
    form_type: formType
  });
};
