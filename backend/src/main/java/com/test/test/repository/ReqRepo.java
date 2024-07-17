package com.test.test.repository;

import com.test.test.model.ReqData;
import org.modelmapper.ModelMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class ReqRepo {
    private final JdbcTemplate jdbcTemplate;
    private final ModelMapper modelMapper ;

    public ReqRepo(JdbcTemplate jdbcTemplate, ModelMapper modelMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.modelMapper = modelMapper;
    }

    public List<ReqData> getData() {
        String query = "SELECT requestId, floor FROM RequestTable";
        List<Map<String, Object>> rows = jdbcTemplate.queryForList(query);
        List<ReqData> reqDataList = new ArrayList<>();
        for (Map<String, Object> row : rows) {
            ReqData reqData = modelMapper.map(row, ReqData.class);
            reqDataList.add(reqData);
        }
        return reqDataList;
    }
}
