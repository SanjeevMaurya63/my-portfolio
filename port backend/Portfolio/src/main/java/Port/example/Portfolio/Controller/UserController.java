package Port.example.Portfolio.Controller;

import Port.example.Portfolio.Entity.UserProfile;
import Port.example.Portfolio.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    // Get User Profile
    @GetMapping
    public UserProfile getProfile() {
        return userService.getProfile();
    }

    // Save User Profile
    @PostMapping
    public UserProfile saveProfile(@RequestBody UserProfile userProfile) {
        return userService.saveProfile(userProfile);
    }

    // Update User Profile
    @PutMapping("/{id}")
    public UserProfile updateProfile(@PathVariable Long id,
                                     @RequestBody UserProfile userProfile) {
        return userService.updateProfile(id, userProfile);
    }
}