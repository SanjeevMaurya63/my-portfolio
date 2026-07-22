package Port.example.Portfolio.Repo;

import Port.example.Portfolio.Entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepo extends JpaRepository<Skill, Long> {

    List<Skill> findByCategoryOrderBySkillNameAsc(String category);
}
