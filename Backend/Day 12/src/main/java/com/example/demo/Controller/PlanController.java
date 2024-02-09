package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Plan;
import com.example.demo.Service.PlanService;
import java.util.List;

@RestController
@RequestMapping("/plans")
public class PlanController {

    @Autowired
    private PlanService planService;

    @GetMapping("/")
    public List<Plan> getAllPlans() {
        return planService.getAllPlans();
    }

    @GetMapping("/{id}")
    public Plan getPlanById(@PathVariable Long id) {
        return planService.getPlanById(id);
    }

    @PostMapping("/")
    public void saveOrUpdatePlan(@RequestBody Plan plan) {
        planService.saveOrUpdatePlan(plan);
    }

    @DeleteMapping("/{id}")
    public void deletePlan(@PathVariable Long id) {
        planService.deletePlan(id);
    }
}
