package com.project.autoexpress.handler.controller;

import com.project.autoexpress.handler.service.StationService;
import com.project.autoexpress.holder.request.StationRequestBody;
import com.project.autoexpress.holder.response.StationInfoResponseBody;
import com.project.autoexpress.holder.response.StationResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StationController {

    @Autowired
    private StationService stationService;

    @RequestMapping(value = "/admin/addStation", method = RequestMethod.POST)
    public ResponseEntity<Object> addStation(@RequestBody StationRequestBody stationRequest) {

        StationResponseBody stationResponse = new StationResponseBody();

        // add station, get stationId
        Integer stationId = stationService.addStation(stationRequest);

        // if add unsuccessful, return bad request
        if (stationId == null) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        // if successful, put list of stations into responsebody
        List<StationInfoResponseBody> stationInfoList = stationService.getAllStations();
        stationResponse.setStationInfoList(stationInfoList);

        // return list of stations and status
        return new ResponseEntity<>(stationResponse, HttpStatus.CREATED);
    }
}
