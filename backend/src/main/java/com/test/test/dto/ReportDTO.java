package com.test.test.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ReportDTO {
    private String reportType;
    private LocalDate reportDateStart;
    private LocalDate reportDateEnd;
}
