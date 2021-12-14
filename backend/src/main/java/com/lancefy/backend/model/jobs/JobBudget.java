package com.lancefy.backend.model.jobs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class JobBudget {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Enumerated(EnumType.STRING)
    private PaymentType paymentType;
    private String budget;

    public JobBudget(PaymentType paymentType, String budget) {
        this.paymentType = paymentType;
        this.budget = budget;
    }
}
