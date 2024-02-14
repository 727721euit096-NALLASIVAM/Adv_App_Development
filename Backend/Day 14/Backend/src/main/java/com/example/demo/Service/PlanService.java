package com.example.demo.Service;
import java.util.List;

import com.example.demo.Entity.Plan;

public interface PlanService {
    List<Plan> getAllPlans();
    Plan getPlanById(Long id);
    void saveOrUpdatePlan(Plan plan);
    void deletePlan(Long id);
}
