package Port.example.Portfolio.Service;
import Port.example.Portfolio.Entity.UserProfile;
import Port.example.Portfolio.Exception.ResourceNotFoundException;
import  Port.example.Portfolio.Repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;

    public UserProfile getProfile() {
        return userRepo.findById(1L).
                orElseThrow(() -> new ResourceNotFoundException("Profile Not Found"));
    }

    public UserProfile saveProfile(UserProfile userProfile) {
        return userRepo.save(userProfile);
    }

    public UserProfile updateProfile(Long id, UserProfile userProfile) {

        UserProfile profile = userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Profile Not Found"));

        profile.setFullName(userProfile.getFullName());
        profile.setTitle(userProfile.getTitle());
        profile.setAbout(userProfile.getAbout());
        profile.setEmail(userProfile.getEmail());
        profile.setPhone(userProfile.getPhone());
        profile.setLocation(userProfile.getLocation());
        profile.setProfileImage(userProfile.getProfileImage());
        profile.setResumeUrl(userProfile.getResumeUrl());
        profile.setGithub(userProfile.getGithub());
        profile.setLinkedin(userProfile.getLinkedin());
        profile.setPortfolioWebsite(userProfile.getPortfolioWebsite());
        profile.setWhatsapp(userProfile.getWhatsapp());
        profile.setObjective(userProfile.getObjective());

        return userRepo.save(profile);
    }
}