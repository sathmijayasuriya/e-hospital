package com.test.test.controller;

import com.test.test.Service.RequestService;
import com.test.test.constants.ResponseMessage;
import com.test.test.constants.RestURI;
import com.test.test.dto.RequestDataDTO;
import com.test.test.dto.ResponseReqdataDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(RestURI.common)
public class RequestController {
    @Autowired
    RequestService requestService;
    private static final Logger logger = LoggerFactory.getLogger(RequestController.class);

    //test api
    @GetMapping(RestURI.getRequestData)
    public @ResponseBody List<ResponseReqdataDTO> getRequestData()
    {
        logger.info("Request received for getRequestData");
        List<ResponseReqdataDTO> requestDataList = requestService.getRequestDataList();
        logger.info("Returning {} request data records", requestDataList.size());
        return requestDataList;
    }

    @PostMapping(RestURI.addRequestData)
    public ResponseEntity<String> addRequestData( @RequestBody RequestDataDTO requestDataDTO){
        logger.info("Request received to add request data: {}", requestDataDTO);
        try {
            boolean isAdded = requestService.addRequestData(requestDataDTO);
            if (isAdded) {
                logger.info("Request data added successfully");
                return ResponseEntity.ok(ResponseMessage.SUCCESS);
            } else {
                logger.warn("Invalid request data, cannot add request");
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResponseMessage.INVALID_REQUEST);
            }
        } catch (Exception e) {
            logger.error("Error adding request data: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResponseMessage.SYSTEM_ERROR);
        }    }

    @PutMapping(RestURI.editRequestData)
    public ResponseEntity<String> editRequestData(@RequestBody RequestDataDTO requestDataDTO){
        logger.info("Request received to edit request data: {}", requestDataDTO);
        boolean isUpdated = requestService.editRequestData(requestDataDTO);

//        if (isUpdated) {
//            return new ResponseEntity<>("Request data updated successfully.", HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>("Request data not found.", HttpStatus.NOT_FOUND);
//        }
        return isUpdated
                ? ResponseEntity.ok("Request data updated successfully.")
                : ResponseEntity.status(HttpStatus.NOT_FOUND).body("Request data not found.");
    }

    @GetMapping(RestURI.SearchDataByDate)
    public @ResponseBody List<ResponseReqdataDTO> searchDataByDate(
            @RequestParam("dateFrom") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateFrom,
            @RequestParam("dateTo") @DateTimeFormat(pattern = "yyyy-MM-dd") Date dateTo)
    {
        return requestService.searchDataByDate(dateFrom,dateTo);
    }

    @GetMapping(RestURI.SearchDataByStatus)
    public @ResponseBody List<ResponseReqdataDTO> SearchDataByStatus(@RequestParam("status")  String status)
    {
        return requestService.SearchDataByStatus(status);
    }

    @GetMapping(RestURI.SearchDataByDep)
    public @ResponseBody List<ResponseReqdataDTO> SearchDataByDep(@RequestParam("department")  String department)
    {
        return requestService.SearchDataByDep(department);
    }

    @DeleteMapping(RestURI.DeleteRequestData)
    public ResponseEntity<String> deleteRequestData(@RequestParam(" ") String requestId) {
        logger.info("Request received to delete request data with ID: {}", requestId);

        try {
            boolean isDeleted = requestService.deleteRequestData(requestId);
            if (isDeleted) {
                logger.info("Request data with ID: {} deleted successfully", requestId);
                return ResponseEntity.status(HttpStatus.OK).body(ResponseMessage.SUCCESS); // 204 No Content
            } else {
                logger.warn("Request data with ID: {} not found", requestId);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ResponseMessage.REQUEST_NOTFOUND); // 404 Not Found
            }
        } catch (Exception e) {
            logger.error("Error deleting request data with ID: {}. Error: {}", requestId, e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResponseMessage.SYSTEM_ERROR); // 500 Internal Server Error
        }
    }

}
