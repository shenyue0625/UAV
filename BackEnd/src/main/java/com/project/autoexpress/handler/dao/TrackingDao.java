package com.project.autoexpress.handler.dao;

import com.project.autoexpress.entity.ShippingOrder;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TrackingDao {

    @Autowired
    private SessionFactory sessionFactory;

    public ShippingOrder getShippingOrderById(int orderId) {
        try (Session session = sessionFactory.openSession()) {
            return session.get(ShippingOrder.class, orderId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


}





