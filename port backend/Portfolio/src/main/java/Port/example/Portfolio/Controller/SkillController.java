package Port.example.Portfolio.Controller;

import Port.example.Portfolio.Entity.Skill;
import Port.example.Portfolio.Service.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
@CrossOrigin("*")
public class SkillController {

    private final SkillService skillService;

    // Get All Skills
    @GetMapping
    public List<Skill> getAllSkills() {
        return skillService.getAllSkills();
    }

    // Get Skill By Id
    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return skillService.getSkillById(id);
    }

    // Add Skill
    @PostMapping
    public Skill addSkill(@RequestBody Skill skill) {
        return skillService.addSkill(skill);
    }

    // Update Skill
    @PutMapping("/{id}")
    public Skill updateSkill(@PathVariable Long id,
                             @RequestBody Skill skill) {
        return skillService.updateSkill(id, skill);
    }

    // Delete Skill
    @DeleteMapping("/{id}")
    public String deleteSkill(@PathVariable Long id) {

        skillService.deleteSkill(id);

        return "Skill Deleted Successfully";
    }

}
