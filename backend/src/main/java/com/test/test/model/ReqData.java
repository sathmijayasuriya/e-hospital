package com.test.test.model;


import com.test.test.dto.ResponseHeaderDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ReqData {
    private ResponseHeader responseHeader;
    private String requestID;
    private String floor;
    private String room;
    private String service;
    private String status;
    private String priority;
    private String department;
    private String requestedBy;
    private String assignedTo;
}
