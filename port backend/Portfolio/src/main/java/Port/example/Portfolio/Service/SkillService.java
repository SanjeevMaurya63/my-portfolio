package Port.example.Portfolio.Service;
import Port.example.Portfolio.Entity.Skill;
import Port.example.Portfolio.Repo.SkillRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepo skillRepo;

        // Get All Skills
    public List<Skill> getAllSkills() {
        return skillRepo.findAll();
    }

        // Get Skill By Id
    public Skill getSkillById(Long id) {
        return skillRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill Not Found"));
    }

        // Add Skill
    public Skill addSkill(Skill skill) {
        return skillRepo.save(skill);
    }

        // Update Skil
    public Skill updateSkill(Long id, Skill skill) {

        Skill existingSkill = skillRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill Not Found"));

        existingSkill.setSkillName(skill.getSkillName());
        existingSkill.setCodingSkill(skill.getCodingSkill());
        existingSkill.setCategory(skill.getCategory());
        existingSkill.setIcon(skill.getIcon());
        existingSkill.setProficiency(skill.getProficiency());
        existingSkill.setDescription(skill.getDescription());


        return skillRepo.save(existingSkill);
    }

        // Delete Skill
    public void deleteSkill(Long id) {

        Skill skill = skillRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Skill Not Found"));

        skillRepo.delete(skill);
    }
}
