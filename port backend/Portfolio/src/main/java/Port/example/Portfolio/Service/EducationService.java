package Port.example.Portfolio.Service;

import Port.example.Portfolio.Entity.Education;
import Port.example.Portfolio.Repo.EducationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EducationService {

    private final EducationRepo educationRepo;

        // Get All Education
    public List<Education> getAllEducation() {
        return educationRepo.findAllByOrderByDisplayOrderAsc();
    }

        // Get Education By Id
    public Education getEducationById(Long id) {
        return educationRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Education Not Found"));
    }

        // Add Education
    public Education addEducation(Education education) {
        return educationRepo.save(education);
    }

        // Update Education
    public Education updateEducation(Long id, Education education) {

        Education existingEducation = educationRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Education Not Found"));

        existingEducation.setInstituteName(education.getInstituteName());
        existingEducation.setDegree(education.getDegree());
        existingEducation.setFieldOfStudy(education.getFieldOfStudy());
        existingEducation.setUniversity(education.getUniversity());
        existingEducation.setGrade(education.getGrade());
        existingEducation.setStartYear(education.getStartYear());
        existingEducation.setEndYear(education.getEndYear());
        existingEducation.setDescription(education.getDescription());
        existingEducation.setInstituteLogo(education.getInstituteLogo());
        existingEducation.setDisplayOrder(education.getDisplayOrder());

        return educationRepo.save(existingEducation);
    }

        // Delete Education
    public void deleteEducation(Long id) {

        Education education = educationRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Education Not Found"));

        educationRepo.delete(education);
    }
}
