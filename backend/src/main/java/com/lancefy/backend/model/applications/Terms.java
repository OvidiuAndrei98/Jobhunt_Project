package com.lancefy.backend.model.applications;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Terms {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int bid;
    private int fees;
    private int receive;
}
