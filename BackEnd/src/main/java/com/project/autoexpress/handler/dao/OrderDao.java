package com.project.autoexpress.handler.dao;

import com.project.autoexpress.entity.Customer;
import com.project.autoexpress.entity.ShippingOrder;
import com.project.autoexpress.handler.service.CustomerService;
import com.project.autoexpress.requestholder.OrderRequestBody;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import java.sql.Timestamp;

@Repository
public class OrderDao {

    @Autowired
    private SessionFactory sessionFactory;

    @Autowired
    private CustomerService customerService;


    public int addOrder (OrderRequestBody orderRequest) { // set 是否成功，通过返回一个int来表达。
        // use emailId of the current user to get corresponding customer
        Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
        String emailId = loggedInUser.getName();
        Customer customer = customerService.getCustomerByUserName(emailId);

        ShippingOrder shippingOrder = new ShippingOrder(); // build a shipping order from request
        shippingOrder.setCustomer(customer);
        shippingOrder.setSenderAddress(orderRequest.getSenderAddress());
        shippingOrder.setReceiverAddress(orderRequest.getReceiverAddress());
        shippingOrder.setReceiverName(orderRequest.getReceiverName());
        shippingOrder.setCardNumber(orderRequest.getCardNumber());
        shippingOrder.setDeliveryMethod(orderRequest.getDeliveryMethod());
        shippingOrder.setDescription(orderRequest.getDescription());
        shippingOrder.setFee(orderRequest.getFee());
        shippingOrder.setSize(orderRequest.getSize());
        shippingOrder.setWeight(orderRequest.getWeight());
        // add current time
        shippingOrder.setTime(new Timestamp(System.currentTimeMillis()));
        shippingOrder.setStatus("waiting");

        Session session = null;

        try {
            session = sessionFactory.openSession();
            session.beginTransaction();
            session.save(shippingOrder);
            session.getTransaction().commit();
        } catch (Exception e) {
            e.printStackTrace();
            session.getTransaction().rollback();
            return -1; // on error
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return 0; // on success
    }
}
