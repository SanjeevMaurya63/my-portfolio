package Port.example.Portfolio.Service;

import Port.example.Portfolio.Entity.Experiance;
import Port.example.Portfolio.Repo.ExperianceRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExperianceService {

    private final ExperianceRepo experianceRepo;

    // Get All Experiences
    public List<Experiance> getAllExperiences() {
        return experianceRepo.findAllByOrderByDisplayOrderAsc();
    }

    // Get Experience By Id
    public Experiance getExperienceById(Long id) {
        return experianceRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Experience Not Found"));
    }

    // Get Experience By Type
    public List<Experiance> getExperienceByType(String type) {
        return experianceRepo.findByTypeIgnoreCase(type);
    }

    // Add Experience
    public Experiance addExperience(Experiance experiance) {
        return experianceRepo.save(experiance);
    }

    // Update Experience
    public Experiance updateExperience(Long id, Experiance experiance) {

        Experiance existingExperiance = experianceRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Experience Not Found"));

        existingExperiance.setOrganizationName(experiance.getOrganizationName());
        existingExperiance.setRole(experiance.getRole());
        existingExperiance.setType(experiance.getType());
        existingExperiance.setLocation(experiance.getLocation());
        existingExperiance.setStartDate(experiance.getStartDate());
        existingExperiance.setEndDate(experiance.getEndDate());
        existingExperiance.setCurrentlyWorking(experiance.getCurrentlyWorking());
        existingExperiance.setDescription(experiance.getDescription());
        existingExperiance.setCertificateUrl(experiance.getCertificateUrl());
        existingExperiance.setDisplayOrder(experiance.getDisplayOrder());

        return experianceRepo.save(existingExperiance);
    }

    // Delete Experience
    public void deleteExperience(Long id) {

        Experiance experiance = experianceRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Experience Not Found"));

        experianceRepo.delete(experiance);
    }
}