package Port.example.Portfolio.Controller;

import Port.example.Portfolio.Entity.Experiance;
import Port.example.Portfolio.Service.ExperianceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experiences")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ExperianceController {

    private final ExperianceService experianceService;

    // Get All Experiences
    @GetMapping
    public List<Experiance> getAllExperiences() {
        return experianceService.getAllExperiences();
    }

    // Get Experience By Id
    @GetMapping("/{id}")
    public Experiance getExperienceById(@PathVariable Long id) {
        return experianceService.getExperienceById(id);
    }

    // Get Experience By Type
    @GetMapping("/type/{type}")
    public List<Experiance> getExperienceByType(@PathVariable String type) {
        return experianceService.getExperienceByType(type);
    }

    // Add Experience
    @PostMapping
    public Experiance addExperience(@RequestBody Experiance experiance) {
        return experianceService.addExperience(experiance);
    }

    // Update Experience
    @PutMapping("/{id}")
    public Experiance updateExperience(@PathVariable Long id,
                                       @RequestBody Experiance experiance) {
        return experianceService.updateExperience(id, experiance);
    }

    // Delete Experience
    @DeleteMapping("/{id}")
    public String deleteExperience(@PathVariable Long id) {

        experianceService.deleteExperience(id);

        return "Experience Deleted Successfully";
    }
}