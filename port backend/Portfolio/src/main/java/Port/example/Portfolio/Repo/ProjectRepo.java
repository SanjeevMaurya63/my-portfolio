package Port.example.Portfolio.Repo;

import Port.example.Portfolio.Entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {

    List<Project> findAllByOrderByDisplayOrderAsc();

    List<Project> findByFeaturedTrueOrderByDisplayOrderAsc();

    List<Project> findByProjectTypeIgnoreCase(String projectType);

    List<Project> findByTechnologiesContainingIgnoreCase(String technology);

}
