package Port.example.Portfolio.Entity;

import jakarta.persistence.*;
import lombok.*;
@Entity
@Table(name = "user_profile")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String about;

    @Column(unique = true)
    private String email;

    private String phone;

    private String location;

    private String profileImage;

    private String resumeUrl;

    private String github;

    private String linkedin;

    private String portfolioWebsite;

    private String whatsapp;

    @Column(columnDefinition = "TEXT")
    private String objective;
}


