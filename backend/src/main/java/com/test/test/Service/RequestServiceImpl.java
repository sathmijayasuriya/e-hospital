package com.test.test.Service;

import com.test.test.constants.ResponseCode;
import com.test.test.constants.ResponseMessage;
import com.test.test.dto.RequestDataDTO;
import com.test.test.dto.ResponseHeaderDTO;
import com.test.test.model.ReqData;
import com.test.test.model.ResponseHeader;
import com.test.test.repository.RequestRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class RequestServiceImpl implements RequestService{

    @Autowired
    RequestRepo requestRepo;
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
}
