package com.test.test.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter

public class ResponseHeaderDTO {
    private String responseCode;
    private String responseDescription;
    private String responseTime;

}
