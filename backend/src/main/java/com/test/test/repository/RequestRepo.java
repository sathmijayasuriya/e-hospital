package com.test.test.repository;

import com.test.test.dto.RequestDataDTO;
import com.test.test.model.ReqData;

import java.util.Date;
import java.util.List;

public interface RequestRepo {

    List<ReqData> getRequestData();
    void saveRequestData(ReqData reqData);
    ReqData findByRequestID(String requestID) ;
    void updateRequestData(ReqData reqData);
    List<ReqData> searchDataByDate(Date dateFrom,Date dateTo);
    List<ReqData> SearchDataByStatus(String status);


}
