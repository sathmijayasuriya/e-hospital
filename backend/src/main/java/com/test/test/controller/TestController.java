package com.test.test.controller;


import com.google.gson.Gson;
import com.test.test.Service.Service;
import com.test.test.dto.RequestData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/test")
public class TestController {

    private final Service service;

    public TestController(Service service) {
        this.service = service;
    }

    @GetMapping("/getData")
    public String test(){
        return "this is test api";
    }


    @GetMapping("/getRequestData")
    public ResponseEntity<List<RequestData>> getData()
    {
        List<RequestData> response1 = service.getData();
        return ResponseEntity.ok(response1);
    }
}
