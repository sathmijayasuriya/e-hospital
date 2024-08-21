package com.test.test.repository;

import com.test.test.model.ReqData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Repository
public class RequestRepoImpl implements RequestRepo{

    @Autowired
    JdbcTemplate jdbcTemplate;

    //return one object

//    public List<ReqData> getRequestData(){
//
//        String q1 = "SELECT * FROM RequestTable";
//        Date date = new Date();
//        Timestamp timestamp = new Timestamp(date.getTime());
//        ReqData reqData =jdbcTemplate.query(q1,new Object[]{},rs->{
//
//            if(rs.next()){
//                ReqData reqData1 = new ReqData();
//                String requestID = rs.getString("requestId");
//                String floor = rs.getString("floor");
//                String room = rs.getString("room");
//                String service = rs.getString("service");
//                String status = rs.getString("status");
//                String priority = rs.getString("priority");
//                String department = rs.getString("department");
//                String requestedBy = rs.getString("requestedBy");
//                String assignedTo = rs.getString("assignedTo");
//                reqData1.setRequestID(requestID);
//                reqData1.setFloor(floor);
//                reqData1.setRoom(room);
//                reqData1.setService(service);
//                reqData1.setStatus(status);
//                reqData1.setPriority(priority);
//                reqData1.setDepartment(department);
//                reqData1.setRequestedBy(requestedBy);
//                reqData1.setAssignedTo(assignedTo);
//
//                return reqData1;
//            }
//            else{
//                return null;
//            }
//        });
//    return reqData;
//    }

    public List<ReqData> getRequestData() {
        String q1 = "SELECT * FROM RequestTable";

        return jdbcTemplate.query(q1, (rs, rowNum) -> {
            ReqData reqData = new ReqData();
            reqData.setRequestID(rs.getString("requestId"));
            reqData.setFloor(rs.getString("floor"));
            reqData.setRoom(rs.getString("room"));
            reqData.setService(rs.getString("service"));
            reqData.setStatus(rs.getString("status"));
            reqData.setPriority(rs.getString("priority"));
            reqData.setDepartment(rs.getString("department"));
            reqData.setRequestedBy(rs.getString("requestedBy"));
            reqData.setAssignedTo(rs.getString("assignedTo"));
            return reqData;
        });
    }
}
