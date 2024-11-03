package com.test.test.controller;


import com.test.test.Service.ReportService;
import com.test.test.constants.RestURI;
import com.test.test.model.Report;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;

@CrossOrigin
@RestController
@RequestMapping(RestURI.common)
public class ReportController {
    @Autowired
    private ReportService reportService;
    @PostMapping(RestURI.addReportData)
    public String addReport(
            @RequestParam("reportType") String reportType,
            @RequestParam("reportDateStart") String reportDateStart,
            @RequestParam("reportDateEnd") String reportDateEnd,
            @RequestParam("file") MultipartFile file) {

        try {
            // 1. Save the file on the server
            String uploadDir = "backend/src/main/resources/uploads";
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            String fileName = file.getOriginalFilename();
            Path filePath = uploadPath.resolve(fileName);
            Files.write(filePath, file.getBytes());

            // 2. Save file info and report details to the database
            Report report = new Report();
            report.setReportType(reportType);
            report.setReportDateStart(LocalDate.parse(reportDateStart));
            report.setReportDateEnd(LocalDate.parse(reportDateEnd));
            report.setPdfFileName(fileName);

            reportService.addReport(report);
            return "Report added successfully!";
        } catch (IOException e) {
            e.printStackTrace();
            return "Error uploading file";
        }
    }


}
