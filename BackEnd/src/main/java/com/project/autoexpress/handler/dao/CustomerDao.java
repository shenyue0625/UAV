package com.project.autoexpress.handler.dao;

import com.project.autoexpress.entity.Authorities;
import com.project.autoexpress.entity.Customer;
import com.project.autoexpress.entity.User;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerDao {

  @Autowired
  private SessionFactory sessionFactory;

  public int addCustomer(Customer customer) { // set 是否成功，通过返回一个int来表达。
    Authorities authorities = new Authorities();
    authorities.setAuthorities("ROLE_USER");
    authorities.setEmailId(customer.getUser().getEmailId());
    Session session = null;

    try {
      session = sessionFactory.openSession();
      session.beginTransaction();
      session.save(authorities);
      session.save(customer);
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

  public Customer getCustomerByUserName(String userName) {
    User user = null;
    try (Session session = sessionFactory.openSession()) {

      Criteria criteria = session.createCriteria(User.class);
      user = (User) criteria.add(Restrictions.eq("emailId", userName)).uniqueResult();
    } catch (Exception e) {
      e.printStackTrace();
    }
    if (user != null)
      return user.getCustomer();
    return null;
  }
}
