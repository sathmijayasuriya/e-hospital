package com.test.test.repository;

import com.test.test.model.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ReportRepositoryImpl implements ReportRepository{

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int saveReport(Report report) {
        String sql = "INSERT INTO reports (report_type, report_date_start, report_date_end, pdf_file_name) VALUES (?, ?, ?, ?)";
        return jdbcTemplate.update(sql, report.getReportType(), report.getReportDateStart(), report.getReportDateEnd(), report.getPdfFileName());
    }


}
