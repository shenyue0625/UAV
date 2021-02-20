package com.project.autoexpress.handler.controller;

import com.project.autoexpress.handler.service.OrderService;
import com.project.autoexpress.requestholder.OrderRequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @RequestMapping(value = "/payment", method = RequestMethod.POST)
    public ResponseEntity<Object> placeOrder(@RequestBody OrderRequestBody orderRequest) {

        // request containing the request body.
        int status = orderService.addOrder(orderRequest);
        if (status == -1) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }

        // TODO : return tracking number
        return new ResponseEntity<>(null, HttpStatus.CREATED);
    }
}
