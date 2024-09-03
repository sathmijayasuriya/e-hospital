package com.test.test.Service;

import com.test.test.constants.ResponseCode;
import com.test.test.constants.ResponseMessage;
import com.test.test.controller.RequestController;
import com.test.test.dto.RequestDataDTO;
import com.test.test.dto.ResponseHeaderDTO;
import com.test.test.model.ReqData;
import com.test.test.model.ResponseHeader;
import com.test.test.repository.RequestRepo;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public List<RequestDataDTO> getRequestDataList(){

        ResponseHeader responseHeader = new ResponseHeader();
        responseHeader.setResponseDescription(ResponseMessage.SUCCESS);
        responseHeader.setResponseCode(ResponseCode.SUCCESS);

        ModelMapper modelMapper = new ModelMapper();

            // Fetch data from repository
            List<ReqData> reqDataList = requestRepo.getRequestData();

            List<RequestDataDTO> dataDTOList = reqDataList.stream().toList()
                    .stream().map(
                            reqData -> {
                                RequestDataDTO dto = modelMapper.map(reqData, RequestDataDTO.class);
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
        ReqData existingRequest = requestRepo.findByRequestID(requestDataDTO.getRequestID());  //get request id to check existing
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
    public List<RequestDataDTO> searchDataByDate(Date dateFrom,Date dateTo){
        List<ReqData> reqDataList = requestRepo.searchDataByDate(dateFrom, dateTo);

        // Convert list of ReqData to list of RequestDataDTO
        return reqDataList.stream()
                .map(reqData -> modelMapper.map(reqData, RequestDataDTO.class))
                .collect(Collectors.toList());

    }

    @Override
    public List<RequestDataDTO> SearchDataByStatus(String status){
        List<ReqData> reqDataList = requestRepo.SearchDataByStatus(status);

        return reqDataList.stream()
                .map(reqData -> modelMapper.map(reqData, RequestDataDTO.class))
                .collect(Collectors.toList());
    }

}
