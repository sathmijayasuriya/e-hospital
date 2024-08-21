package com.test.test.controller;


import com.test.test.Service.RequestService;
import com.test.test.constants.RestURI;
import com.test.test.dto.RequestDataDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.test.test.constants.RestURI.common;
import static com.test.test.constants.RestURI.getRequestData;

@CrossOrigin
@RestController
@RequestMapping(RestURI.common)
public class RequestController {

    @Autowired
    RequestService requestService;
    @GetMapping(RestURI.getRequestData)
    public @ResponseBody List<RequestDataDTO> getRequestData()
    {
        return requestService.getRequestDataList();
    }
}
