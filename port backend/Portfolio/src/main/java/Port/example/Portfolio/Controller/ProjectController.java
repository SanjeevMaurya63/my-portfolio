package Port.example.Portfolio.Controller;

import Port.example.Portfolio.Entity.Project;
import Port.example.Portfolio.Service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProjectController {

    private final ProjectService projectService;

    // Get All Projects
    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    // Get Project By Id
    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    // Get Featured Projects
    @GetMapping("/featured")
    public List<Project> getFeaturedProjects() {
        return projectService.getFeaturedProjects();
    }

    // Get Projects By Type
    @GetMapping("/type/{projectType}")
    public List<Project> getProjectsByType(@PathVariable String projectType) {
        return projectService.getProjectsByType(projectType);
    }

    // Add Project
    @PostMapping
    public Project addProject(@RequestBody Project project) {
        return projectService.addProject(project);
    }

    // Update Project
    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id,
                                 @RequestBody Project project) {
        return projectService.updateProject(id, project);
    }

    // Delete Project
    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable Long id) {

        projectService.deleteProject(id);

        return "Project Deleted Successfully";
    }

}