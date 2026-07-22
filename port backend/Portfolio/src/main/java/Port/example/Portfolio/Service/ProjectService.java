package Port.example.Portfolio.Service;

import Port.example.Portfolio.Entity.Project;
import Port.example.Portfolio.Repo.ProjectRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepo projectRepo;

    // Get All Projects
    public List<Project> getAllProjects() {
        return projectRepo.findAllByOrderByDisplayOrderAsc();
    }

    // Get Project By Id
    public Project getProjectById(Long id) {
        return projectRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Project Not Found"));
    }

    // Get Featured Projects
    public List<Project> getFeaturedProjects() {
        return projectRepo.findByFeaturedTrueOrderByDisplayOrderAsc();
    }

    // Get Projects By Type
    public List<Project> getProjectsByType(String projectType) {
        return projectRepo.findByProjectTypeIgnoreCase(projectType);
    }

    // Add Project
    public Project addProject(Project project) {
        return projectRepo.save(project);
    }

    // Update Project
    public Project updateProject(Long id, Project project) {

        Project existingProject = projectRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Project Not Found"));

        existingProject.setProjectName(project.getProjectName());
        existingProject.setProjectType(project.getProjectType());
        existingProject.setDescription(project.getDescription());
        existingProject.setTechnologies(project.getTechnologies());
        existingProject.setGithubUrl(project.getGithubUrl());
        existingProject.setLiveDemoUrl(project.getLiveDemoUrl());
        existingProject.setImageUrl(project.getImageUrl());
        existingProject.setFeatured(project.getFeatured());
        existingProject.setDisplayOrder(project.getDisplayOrder());

        return projectRepo.save(existingProject);
    }

    // Delete Project
    public void deleteProject(Long id) {

        Project project = projectRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Project Not Found"));

        projectRepo.delete(project);
    }
}