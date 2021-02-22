package com.project.autoexpress.handler.dao;

import com.project.autoexpress.entity.ShippingOrder;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class TrackingDao {

    @Autowired
    private SessionFactory sessionFactory;

//    public ShippingOrder getShippingOrderById(int orderId) {
//        try (Session session = sessionFactory.openSession()) {
//            return session.get(ShippingOrder.class, orderId);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        return null;
//    }

    public ShippingOrder getShippingOrderById(Integer orderId) {
        ShippingOrder shippingOrder = null;

        try (Session session = sessionFactory.openSession()) {
            Criteria criteria = session.createCriteria(ShippingOrder.class);
            shippingOrder = (ShippingOrder) criteria.add(Restrictions.eq("orderId", orderId)).uniqueResult();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (shippingOrder != null) {
            return shippingOrder;
        }
        return null;
    }
}





