package com.test.test.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class RequestDataDTO {

    private ResponseHeaderDTO responseHeaderDTO;
    private String requestID;
    private Date createdOn;

    private String floor;
    private String room;
    private String service;
    private String status;
    private String priority;
    private String department;
    private String requestedBy;
    private String assignedTo;

}
