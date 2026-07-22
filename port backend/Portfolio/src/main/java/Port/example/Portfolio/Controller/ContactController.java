package Port.example.Portfolio.Controller;

import Port.example.Portfolio.Entity.ContactMessage;
import Port.example.Portfolio.Service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ContactController {

    private final ContactService contactService;

    // Send Message
    @PostMapping
    public ContactMessage sendMessage(@RequestBody ContactMessage contactMessage) {
        return contactService.saveMessage(contactMessage);
    }

    // Get All Messages
    @GetMapping
    public List<ContactMessage> getAllMessages() {
        return contactService.getAllMessages();
    }

    // Get Message By Id
    @GetMapping("/{id}")
    public ContactMessage getMessageById(@PathVariable Long id) {
        return contactService.getMessageById(id);
    }

    // Get Unread Messages
    @GetMapping("/unread")
    public List<ContactMessage> getUnreadMessages() {
        return contactService.getUnreadMessages();
    }

    // Mark Message As Read
    @PutMapping("/{id}/read")
    public ContactMessage markAsRead(@PathVariable Long id) {
        return contactService.markAsRead(id);
    }

    // Delete Message
    @DeleteMapping("/{id}")
    public String deleteMessage(@PathVariable Long id) {

        contactService.deleteMessage(id);

        return "Message Deleted Successfully";
    }
}