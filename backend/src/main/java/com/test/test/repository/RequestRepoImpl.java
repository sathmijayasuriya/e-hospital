package com.test.test.repository;

import com.test.test.model.ReqData;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Repository
public class RequestRepoImpl implements RequestRepo{

    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    private ModelMapper modelMapper;


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

    @Override
    public List<ReqData> getRequestData() {
        String q1 = "SELECT * FROM RequestTable";
        return jdbcTemplate.query(q1, (rs, rowNum) -> {
            ReqData reqData = new ReqData();
            reqData.setRequestId(rs.getString("requestId"));
            reqData.setCreatedOn(rs.getDate("createdOn"));
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
    @Override
    public void saveRequestData(ReqData reqData) {
        String q1 = "INSERT INTO RequestTable (requestId, createdOn, floor, room, service, status, priority, department, requestedBy, assignedTo) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

        jdbcTemplate.update(q1,
                reqData.getRequestId(),
                new Timestamp(reqData.getCreatedOn().getTime()),
                reqData.getFloor(),
                reqData.getRoom(),
                reqData.getService(),
                reqData.getStatus(),
                reqData.getPriority(),
                reqData.getDepartment(),
                reqData.getRequestedBy(),
                reqData.getAssignedTo());
    }
    @Override
    public ReqData findByRequestID(String requestID) {
        String sql = "SELECT * FROM RequestTable WHERE requestId = ?";

        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{requestID}, (rs, rowNum) -> {
                ReqData reqData = new ReqData();
                reqData.setRequestId(rs.getString("requestId"));
                reqData.setCreatedOn(rs.getDate("createdOn"));
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
        } catch (Exception e) {
            return null; // Handle case where no matching data is found
        }
    }
    @Override
    public void updateRequestData(ReqData reqData) {
        String sql = "UPDATE RequestTable " +
                     "SET createdOn = ?, floor = ?, room = ?, service = ?, status = ?, priority = ?, department = ?, requestedBy = ?, assignedTo = ?" +
                     " WHERE requestId = ?";

        jdbcTemplate.update(sql, reqData.getCreatedOn(), reqData.getFloor(), reqData.getRoom(), reqData.getService(),
                reqData.getStatus(), reqData.getPriority(), reqData.getDepartment(), reqData.getRequestedBy(),
                reqData.getAssignedTo(), reqData.getRequestId());
    }

    @Override
    public List<ReqData> searchDataByDate(Date dateFrom,Date dateTo){

        String query = "SELECT * FROM RequestTable WHERE createdOn BETWEEN ? AND ?";
        return jdbcTemplate.query(query, new Object[]{new java.sql.Date(dateFrom.getTime()), new java.sql.Date(dateTo.getTime())},
                (rs, rowNum) -> {
                    ReqData reqData = new ReqData();
                    reqData.setRequestId(rs.getString("requestId"));
                    reqData.setCreatedOn(rs.getDate("createdOn"));
                    reqData.setFloor(rs.getString("floor"));
                    reqData.setRoom(rs.getString("room"));
                    reqData.setService(rs.getString("service"));
                    reqData.setStatus(rs.getString("status"));
                    reqData.setPriority(rs.getString("priority"));
                    reqData.setDepartment(rs.getString("department"));
                    reqData.setRequestedBy(rs.getString("requestedBy"));
                    reqData.setAssignedTo(rs.getString("assignedTo"));
                    return reqData;
                }
        );
    }

    @Override
    public List<ReqData> SearchDataByStatus(String status){
        String query = "SELECT * FROM RequestTable WHERE status = ?";
        return jdbcTemplate.query(query, new Object[]{status },
                (rs, rowNum) -> {
                    ReqData reqData = new ReqData();
                    reqData.setRequestId(rs.getString("requestId"));
                    reqData.setCreatedOn(rs.getDate("createdOn"));
                    reqData.setFloor(rs.getString("floor"));
                    reqData.setRoom(rs.getString("room"));
                    reqData.setService(rs.getString("service"));
                    reqData.setStatus(rs.getString("status"));
                    reqData.setPriority(rs.getString("priority"));
                    reqData.setDepartment(rs.getString("department"));
                    reqData.setRequestedBy(rs.getString("requestedBy"));
                    reqData.setAssignedTo(rs.getString("assignedTo"));
                    return reqData;
                }
        );
    }

    @Override
    public List<ReqData> SearchDataByDep(String department){

        String query = "SELECT * FROM RequestTable WHERE department = ?";
        return jdbcTemplate.query(query, new Object[]{department },
                (rs, rowNum) -> {
                    ReqData reqData = new ReqData();
                    reqData.setRequestId(rs.getString("requestId"));
                    reqData.setCreatedOn(rs.getDate("createdOn"));
                    reqData.setFloor(rs.getString("floor"));
                    reqData.setRoom(rs.getString("room"));
                    reqData.setService(rs.getString("service"));
                    reqData.setStatus(rs.getString("status"));
                    reqData.setPriority(rs.getString("priority"));
                    reqData.setDepartment(rs.getString("department"));
                    reqData.setRequestedBy(rs.getString("requestedBy"));
                    reqData.setAssignedTo(rs.getString("assignedTo"));
                    return reqData;
                }
        );
    }

    @Override
    public void deleteRequestData(String requestId) {
        String sql = "DELETE FROM RequestTable WHERE requestId = ?";
        jdbcTemplate.update(sql, requestId);
    }



}
