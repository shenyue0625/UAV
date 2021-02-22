package com.project.autoexpress.handler.controller;

import com.project.autoexpress.entity.ShippingOrder;
import com.project.autoexpress.handler.service.OrderService;
import com.project.autoexpress.handler.service.TrackingService;
import com.project.autoexpress.holder.request.OrderRequestBody;
import com.project.autoexpress.holder.response.OrderResponseBody;
import com.project.autoexpress.holder.response.TrackingResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class TrackingController {
    @Autowired
    private TrackingService trackingService;

    @RequestMapping(value = "/tracking", method = RequestMethod.GET)
    public ResponseEntity<Object> getShippingOrderById(@RequestParam(value = "orderId") int orderId) {
        ShippingOrder shippingOrder = trackingService.getShippingOrderById(orderId);

        TrackingResponseBody trackingResponse = new TrackingResponseBody();
        trackingResponse.setOrderId(orderId);
        trackingResponse.setTime(shippingOrder.getTime());
        trackingResponse.setSenderAddress(shippingOrder.getSenderAddress());
        trackingResponse.setReceiverAddress(shippingOrder.getReceiverAddress());
        trackingResponse.setDeliveryMethod(shippingOrder.getDeliveryMethod());
        trackingResponse.setStatus(shippingOrder.getStatus());
        trackingResponse.setCustomer(shippingOrder.getCustomer());//need last name and first name?
        return new ResponseEntity<>(trackingResponse, HttpStatus.CREATED);
    }
}
