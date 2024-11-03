package com.test.test.Service;

import com.test.test.constants.ResponseCode;
import com.test.test.constants.ResponseMessage;
import com.test.test.dto.RequestDataDTO;
import com.test.test.dto.ResponseHeaderDTO;
import com.test.test.dto.ResponseReqdataDTO;
import com.test.test.model.ReqData;
import com.test.test.model.ResponseHeader;
import com.test.test.repository.RequestRepo;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class RequestServiceImpl implements RequestService{

    private static final Logger logger = LoggerFactory.getLogger(RequestServiceImpl.class);
    @Autowired
    private RequestRepo requestRepo;
    @Autowired
    private ModelMapper modelMapper;
    @Override
    public List<ResponseReqdataDTO> getRequestDataList(){

        ResponseHeader responseHeader = new ResponseHeader();
        responseHeader.setResponseDescription(ResponseMessage.SUCCESS);
        responseHeader.setResponseCode(ResponseCode.SUCCESS);
        responseHeader.setResponseTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));

        ModelMapper modelMapper = new ModelMapper();

            // Fetch data from repository
            List<ReqData> reqDataList = requestRepo.getRequestData();

            List<ResponseReqdataDTO> dataDTOList = reqDataList.stream().toList()
                    .stream().map(
                            reqData -> {
                                ResponseReqdataDTO dto = modelMapper.map(reqData, ResponseReqdataDTO.class);
                                ResponseHeaderDTO responseHeaderDTO = modelMapper.map(responseHeader,ResponseHeaderDTO.class);
                                dto.setResponseHeaderDTO(responseHeaderDTO);
                                return dto;
                        }
                    ).collect(Collectors.toList());
            return dataDTOList;
    }

    @Override
    public boolean addRequestData(RequestDataDTO requestDataDTO) {
        try {
            // Mapping DTO to Entity
            ReqData reqData = modelMapper.map(requestDataDTO, ReqData.class);
            // Set additional fields if necessary (e.g., createdOn)
            reqData.setCreatedOn(new Date());
            // Save to the repository
            requestRepo.saveRequestData(reqData);
            return true;
        } catch (Exception e) {
            logger.error("Error adding request data: {}", e.getMessage());
            return false;
        }
    }

    @Override
    public boolean editRequestData(RequestDataDTO requestDataDTO){
        ReqData existingRequest = requestRepo.findByRequestID(requestDataDTO.getRequestId());  //get request id to check existing
        if (existingRequest != null) {
            updateRequestDataFromDTO(existingRequest, requestDataDTO);
            requestRepo.updateRequestData(existingRequest);
            return true;
        }
        return false;
    }
    private void updateRequestDataFromDTO(ReqData existingRequest, RequestDataDTO requestDataDTO) {
        existingRequest.setCreatedOn(requestDataDTO.getCreatedOn());
        existingRequest.setFloor(requestDataDTO.getFloor());
        existingRequest.setRoom(requestDataDTO.getRoom());
        existingRequest.setService(requestDataDTO.getService());
        existingRequest.setStatus(requestDataDTO.getStatus());
        existingRequest.setPriority(requestDataDTO.getPriority());
        existingRequest.setDepartment(requestDataDTO.getDepartment());
        existingRequest.setRequestedBy(requestDataDTO.getRequestedBy());
        existingRequest.setAssignedTo(requestDataDTO.getAssignedTo());
    }

    @Override
    public List<ResponseReqdataDTO> searchDataByDate(Date dateFrom,Date dateTo){
        List<ReqData> reqDataList = requestRepo.searchDataByDate(dateFrom, dateTo);

        if(reqDataList.isEmpty()){
            ResponseHeader responseHeader = new ResponseHeader();
            responseHeader.setResponseCode(ResponseCode.NO_CONTENT);
            responseHeader.setResponseDescription(ResponseMessage.REQUEST_NOTFOUND);
            responseHeader.setResponseTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
        }
        // Convert list of ReqData to list of RequestDataDTO
        return reqDataList.stream().map(reqData -> {
            ResponseReqdataDTO responseReqdataDTO = modelMapper.map(reqData, ResponseReqdataDTO.class);

            // Success Response Header
            ResponseHeaderDTO responseHeaderDTO = new ResponseHeaderDTO();
            responseHeaderDTO.setResponseCode(ResponseCode.SUCCESS);
            responseHeaderDTO.setResponseDescription(ResponseMessage.SUCCESS);
            responseHeaderDTO.setResponseTime(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));

            responseReqdataDTO.setResponseHeaderDTO(responseHeaderDTO);
            return responseReqdataDTO;
        }).collect(Collectors.toList());
    }

    @Override
    public List<ResponseReqdataDTO> SearchDataByStatus(String status){
        List<ReqData> reqDataList = requestRepo.SearchDataByStatus(status);

        return reqDataList.stream()
                .map(reqData -> modelMapper.map(reqData, ResponseReqdataDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<ResponseReqdataDTO> SearchDataByDep(String department){
        List<ReqData> reqDataList = requestRepo.SearchDataByDep(department);

        return reqDataList.stream()
                .map(reqData -> modelMapper.map(reqData, ResponseReqdataDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public boolean deleteRequestData(String requestId) {
        ReqData existingRequest = requestRepo.findByRequestID(requestId);
        if (existingRequest != null) {
            requestRepo.deleteRequestData(requestId);
            return true;
        } else {
            return false;
        }
    }

}
