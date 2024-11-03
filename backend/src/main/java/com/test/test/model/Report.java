package com.test.test.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Report {

    private Long reportID;
    private String reportType;
    private LocalDate reportDateStart;
    private LocalDate reportDateEnd;
    private String pdfFileName; // For storing file metadata if needed
}
