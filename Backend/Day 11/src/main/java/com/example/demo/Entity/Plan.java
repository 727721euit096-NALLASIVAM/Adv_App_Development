package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "plan")
public class Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long planId;

    private String planType;
    private String planName;
    private String planValidity;
    private String planDetails;
    private double planPrice;
    public Long getPlanId() {
        return planId;
    }
    public void setPlanId(Long planId) {
        this.planId = planId;
    }
    public String getPlanType() {
        return planType;
    }
    public void setPlanType(String planType) {
        this.planType = planType;
    }
    public String getPlanName() {
        return planName;
    }
    public void setPlanName(String planName) {
        this.planName = planName;
    }
    public String getPlanValidity() {
        return planValidity;
    }
    public void setPlanValidity(String planValidity) {
        this.planValidity = planValidity;
    }
    public String getPlanDetails() {
        return planDetails;
    }
    public void setPlanDetails(String planDetails) {
        this.planDetails = planDetails;
    }
    public double getPlanPrice() {
        return planPrice;
    }
    public void setPlanPrice(double planPrice) {
        this.planPrice = planPrice;
    }

    // Getters and Setters
}
