package com.test.test.Service;

import com.test.test.model.Report;
import com.test.test.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ReportServiceImpl implements ReportService{

    @Autowired
    private ReportRepository reportRepository;

    public void addReport(Report report) {
        reportRepository.saveReport(report);
    }
}
