package com.test.test.Service;


import com.test.test.dto.RequestDataDTO;
import com.test.test.model.ReqData;
import com.test.test.repository.ReqRepo;
import org.modelmapper.ModelMapper;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@org.springframework.stereotype.Service
@Transactional
public class Service {

    private final ReqRepo reqRepo;
    private final ModelMapper modelMapper;


    public Service(ReqRepo reqRepo, ModelMapper modelMapper) {
        this.reqRepo = reqRepo;
        this.modelMapper = modelMapper;
    }

    public List<RequestDataDTO> getData()
    {
        List<ReqData> reqDataList = reqRepo.getData();
        List<RequestDataDTO> requestData1 = reqDataList.stream()
                .map(reqData -> modelMapper.map(reqData, RequestDataDTO.class))
                .collect(Collectors.toList());
        return requestData1;
    }
}
