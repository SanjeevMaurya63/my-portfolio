package Port.example.Portfolio.Repo;

import Port.example.Portfolio.Entity.Experiance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExperianceRepo extends JpaRepository<Experiance, Long> {

    List<Experiance> findAllByOrderByDisplayOrderAsc();

    List<Experiance> findByTypeIgnoreCase(String type);

    List<Experiance> findByCurrentlyWorkingTrue();

}