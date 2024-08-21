package com.test.test.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ResponseHeader {
    private String responseCode;
    private String responseDescription;
    private String responseTime;
}
