/**
 * Arabic Pathways — International configuration.
 *
 * Keep API keys OUT of this file. The browser talks only to the Apps Script
 * gateway. This URL points to the existing Pathways gateway deployment; once
 * that deployment is upgraded to v5.2, Gemini Arabic TTS and level-adaptive
 * voice grading become active automatically.
 */
window.ARABIC_PATHWAYS_CONFIG = {
  gatewayUrl: 'https://script.google.com/macros/s/AKfycbzlQuZGi9aEST8qbDALMrESQdfGhtweG96aDpZ4Y4gfeMVfv1g7oLVixUVfL55-ISPHVw/exec',
  gatewayExpectedService: 'Pathways Gateway v5.2',
  voiceFallback: true
};
