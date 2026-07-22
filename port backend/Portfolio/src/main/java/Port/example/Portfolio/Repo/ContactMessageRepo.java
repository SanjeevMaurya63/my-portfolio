package Port.example.Portfolio.Repo;
import Port.example.Portfolio.Entity.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactMessageRepo extends JpaRepository<ContactMessage, Long> {
    List<ContactMessage> findAllByOrderByCreatedAtDesc();
    List<ContactMessage> findByIsReadFalseOrderByCreatedAtDesc();
    List<ContactMessage> findByEmail(String email);

}
