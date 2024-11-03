package com.test.test.Service;

import com.test.test.dto.RequestDataDTO;
import com.test.test.dto.ResponseReqdataDTO;

import java.util.Date;
import java.util.List;

public interface RequestService {

    List<ResponseReqdataDTO> getRequestDataList();
    boolean addRequestData(RequestDataDTO requestDataDTO);
    boolean editRequestData(RequestDataDTO RequestDataDTO);
    List<ResponseReqdataDTO> searchDataByDate(Date dateFrom,Date dateTo);
    List<ResponseReqdataDTO> SearchDataByStatus(String status);
    List<ResponseReqdataDTO> SearchDataByDep(String department);
    boolean deleteRequestData(String requestId);
}
