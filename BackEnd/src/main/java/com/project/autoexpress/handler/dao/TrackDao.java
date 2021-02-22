package com.project.autoexpress.handler.dao;

import com.project.autoexpress.entity.ShippingOrder;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TrackDao {

    @Autowired
    private SessionFactory sessionFactory;

    public ShippingOrder trackOrder(Integer shippingOrderId) {
        ShippingOrder shippingOrder = null;

        try (Session session = sessionFactory.openSession()) {
            Criteria criteria = session.createCriteria(ShippingOrder.class);

            shippingOrder = (ShippingOrder) criteria.add(Restrictions.eq("id", shippingOrderId)).uniqueResult();


        } catch (Exception e) {
            e.printStackTrace();
        }

        if (shippingOrder != null) {
            return shippingOrder;
        }
        return null;
    }
}
