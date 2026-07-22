/**
 * API Utility Module - Connects Frontend to Spring Boot Backend
 * Base URL: http://localhost:8080
 */

const API_BASE_URL = 'http://localhost:8080';

/**
 * Generic fetch wrapper with error handling
 */
async function apiFetch(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`API Fetch Failed: ${url}`, error);
    throw error;
  }
}

// ============================================
// Projects API
// ============================================

async function fetchProjects() {
  return apiFetch('/api/projects');
}

async function fetchFeaturedProjects() {
  return apiFetch('/api/projects/featured');
}

async function fetchProjectsByType(type) {
  return apiFetch(`/api/projects/type/${type}`);
}

// ============================================
// Skills API
// ============================================

async function fetchSkills() {
  return apiFetch('/api/skills');
}

async function fetchSkillById(id) {
  return apiFetch(`/api/skills/${id}`);
}

// ============================================
// Education API
// ============================================

async function fetchEducation() {
  return apiFetch('/api/education');
}

// ============================================
// Experience API
// ============================================

async function fetchExperiences() {
  return apiFetch('/api/experiences');
}

// ============================================
// User Profile API
// ============================================

async function fetchProfile() {
  return apiFetch('/api/user');
}

// ============================================
// Contact API
// ============================================

async function submitContact(formData) {
  return apiFetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
}
