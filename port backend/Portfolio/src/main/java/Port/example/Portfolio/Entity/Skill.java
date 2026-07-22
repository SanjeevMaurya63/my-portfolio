package Port.example.Portfolio.Entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "skills")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String skillName;

    @Column(nullable = false)
    private String codingSkill;

    @Column(nullable = false)
    private String category;

    private String icon;

    private Integer proficiency;

    @Column(columnDefinition = "TEXT")
    private String description;
}
