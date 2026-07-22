package Port.example.Portfolio.Service;

import Port.example.Portfolio.Entity.ContactMessage;
import Port.example.Portfolio.Repo.ContactMessageRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactMessageRepo contactRepo;

    // Save Contact Message
    public ContactMessage saveMessage(ContactMessage contactMessage) {
        return contactRepo.save(contactMessage);
    }

    // Get All Messages
    public List<ContactMessage> getAllMessages() {
        return contactRepo.findAllByOrderByCreatedAtDesc();
    }

    // Get Message By Id
    public ContactMessage getMessageById(Long id) {
        return contactRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Message Not Found"));
    }

    // Get Unread Messages
    public List<ContactMessage> getUnreadMessages() {
        return contactRepo.findByIsReadFalseOrderByCreatedAtDesc();
    }

    // Mark As Read
    public ContactMessage markAsRead(Long id) {

        ContactMessage message = contactRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Message Not Found"));

        message.setIsRead(true);

        return contactRepo.save(message);
    }

    // Delete Message
    public void deleteMessage(Long id) {

        ContactMessage message = contactRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Message Not Found"));

        contactRepo.delete(message);
    }
}