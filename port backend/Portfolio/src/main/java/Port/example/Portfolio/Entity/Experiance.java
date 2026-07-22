package Port.example.Portfolio.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "experience")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Experiance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String organizationName;

    @Column(nullable = false)
    private String role;

    @Column(nullable = false)
    private String type; // Training, Internship, Freelance, Full Time

    private String location;

    private LocalDate startDate;

    private LocalDate endDate;

    private Boolean currentlyWorking;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String certificateUrl;

    private Integer displayOrder;
}
