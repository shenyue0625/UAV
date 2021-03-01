package com.project.autoexpress.holder.response;

import java.util.List;

public class StationResponseBody {
    private List<StationInfoResponseBody> stationInfoList;

    public List<StationInfoResponseBody> getStationInfoList() {
        return stationInfoList;
    }

    public void setStationInfoList(List<StationInfoResponseBody> stationInfoList) {
        this.stationInfoList = stationInfoList;
    }
}
