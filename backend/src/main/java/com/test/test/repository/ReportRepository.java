package com.test.test.repository;


import com.test.test.model.Report;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository {
     int saveReport(Report report);

    }
