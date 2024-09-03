package com.test.test.Service;

import com.test.test.dto.RequestDataDTO;
import com.test.test.model.ReqData;

import java.util.Date;
import java.util.List;

public interface RequestService {

    List<RequestDataDTO> getRequestDataList();
    boolean addRequestData(RequestDataDTO requestDataDTO);
//    void updateRequestDataFromDTO(ReqData existingRequest, RequestDataDTO requestDataDTO);
    boolean editRequestData(RequestDataDTO RequestDataDTO);
    List<RequestDataDTO> searchDataByDate(Date dateFrom,Date dateTo);
    List<RequestDataDTO> SearchDataByStatus(String status);
}
