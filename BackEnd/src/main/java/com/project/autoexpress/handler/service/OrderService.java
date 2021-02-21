package com.project.autoexpress.handler.service;

import com.project.autoexpress.handler.dao.OrderDao;
import com.project.autoexpress.holder.request.OrderRequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderDao orderDao;

    public String addOrder(OrderRequestBody orderRequest) {
        return orderDao.addOrder(orderRequest);
    }
}
