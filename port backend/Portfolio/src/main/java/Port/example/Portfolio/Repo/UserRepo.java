package Port.example.Portfolio.Repo;

import Port.example.Portfolio.Entity.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserProfile, Long> {

}
