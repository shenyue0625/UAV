package com.project.autoexpress.handler.controller;

import com.project.autoexpress.entity.Customer;
import com.project.autoexpress.handler.service.CustomerService;
import com.project.autoexpress.holder.response.AccountInfoResponseBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

  @Autowired
  private CustomerService customerService;

  @RequestMapping(value = "/accountinfo", method = RequestMethod.GET)
  public ResponseEntity<Object> accountInfo() {
    System.out.println("Enter the accountInfo controller");
    Customer customer = customerService.getCurrentCustomer();
    AccountInfoResponseBody response = new AccountInfoResponseBody();
    response.setEmail(customer.getUser().getEmailId());
    response.setFirstName(customer.getFirstName());
    response.setLastName(customer.getLastName());
    response.setBillingAddress(customer.getBillingAddress());
    response.setShippingAddress(customer.getShippingAddress());
    return new ResponseEntity<>(response, HttpStatus.OK);
  }

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public ResponseEntity<Object> root() {
    String content = "Note from Yaowei Ma: Spring Security will automatically send a GET request to localhost:8080/. " +
            "\n In our online shop project, it's okay. Since all webpage comes from server, so this GET request will give browser a home page." +
            "\n But in our new project, there is no webpage from server." +
            "\n Therefore, I will send back a redirect response, telling browser to seek a front-end page at front-end server.";
    HttpHeaders headers = new HttpHeaders();
    headers.add("location","http://localhost:8080/accountinfo");
    return new ResponseEntity<>(content, headers, HttpStatus.PERMANENT_REDIRECT);
  }
}
