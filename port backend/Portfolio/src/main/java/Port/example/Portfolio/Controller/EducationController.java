package Port.example.Portfolio.Controller;

import Port.example.Portfolio.Entity.Education;
import Port.example.Portfolio.Service.EducationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/education")
@RequiredArgsConstructor
@CrossOrigin("*")
public class EducationController {

    private final EducationService educationService;

    // Get All Education
    @GetMapping
    public List<Education> getAllEducation() {
        return educationService.getAllEducation();
    }

    // Get Education By Id
    @GetMapping("/{id}")
    public Education getEducationById(@PathVariable Long id) {
        return educationService.getEducationById(id);
    }

    // Add Education
    @PostMapping
    public Education addEducation(@RequestBody Education education) {
        return educationService.addEducation(education);
    }

    // Update Education
    @PutMapping("/{id}")
    public Education updateEducation(@PathVariable Long id,
                                     @RequestBody Education education) {
        return educationService.updateEducation(id, education);
    }

    // Delete Education
    @DeleteMapping("/{id}")
    public String deleteEducation(@PathVariable Long id) {

        educationService.deleteEducation(id);

        return "Education Deleted Successfully";
    }

}