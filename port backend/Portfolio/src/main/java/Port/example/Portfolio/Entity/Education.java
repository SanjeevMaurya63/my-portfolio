package Port.example.Portfolio.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "education")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Education {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String instituteName;

    @Column(nullable = false)
    private String degree;

    private String fieldOfStudy;

    private String university;

    private String grade;

    private Integer startYear;

    private Integer endYear;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String instituteLogo;

    private Integer displayOrder;
}
