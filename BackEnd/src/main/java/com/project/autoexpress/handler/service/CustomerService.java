package com.project.autoexpress.handler.service;

// service layer:
//        to decouple controller and DAO
//        if you have some entity related logic like fetch an image or use external service
//        you need to put them here.

import com.project.autoexpress.entity.Customer;
import com.project.autoexpress.entity.User;
import com.project.autoexpress.handler.dao.CustomerDao;
import com.project.autoexpress.request.RegisterRequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

  @Autowired
  private CustomerDao customerDao;

  public int addCustomer(RegisterRequestBody request) {
    User user = new User();   // build a user from request
    user.setEnabled(true);
    user.setEmailId(request.getEmail());
    user.setPassword(request.getPassword());

    Customer customer = new Customer(); // build a customer from request
    customer.setBillingAddress(request.getBillingAddress());
    customer.setShippingAddress(request.getShippingAddress());
    customer.setFirstName(request.getFirstName());
    customer.setLastName(request.getLastName());
    customer.setUser(user);

    return customerDao.addCustomer(customer); // after save customer, a user entry will automatically built in database by hibernate.
  }

  public Customer getCustomerByUserName(String userName) {
    return customerDao.getCustomerByUserName(userName);
  }
}

