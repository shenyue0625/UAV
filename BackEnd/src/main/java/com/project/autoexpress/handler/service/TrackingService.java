package com.project.autoexpress.handler.service;

import com.project.autoexpress.entity.ShippingOrder;
import com.project.autoexpress.handler.dao.TrackingDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TrackingService {

    @Autowired
    private TrackingDao trackingDao;

    public ShippingOrder getShippingOrderById(int orderId) {
        return trackingDao.getShippingOrderById(orderId);
    }
}
