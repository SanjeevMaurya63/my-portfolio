package Port.example.Portfolio.Repo;

import Port.example.Portfolio.Entity.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EducationRepo extends JpaRepository<Education, Long> {

    List<Education> findAllByOrderByDisplayOrderAsc();

    List<Education> findByDegreeContainingIgnoreCase(String degree);

    List<Education> findByUniversityContainingIgnoreCase(String university);

}
