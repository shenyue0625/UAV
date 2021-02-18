package com.project.autoexpress;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.sql.DataSource;
import java.util.Properties;


@Configuration
@EnableWebMvc
public class ApplicationConfig {

  @Bean(name = "sessionFactory")
  public LocalSessionFactoryBean sessionFactory() {
    LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
    sessionFactory.setDataSource(dataSource()); // which DB you want to connect?
    sessionFactory.setPackagesToScan("com.project.autoexpress.entity"); // where to scan entities (POJO class)?
    sessionFactory.setHibernateProperties(hibernateProperties()); // use what ORM properties?
    return sessionFactory;
  }

  @Bean(name = "dataSource")
  public DataSource dataSource() {
    final String INSTANCE = "autoexpress-instance.c5cogveqk32k.us-east-2.rds.amazonaws.com"; // instance address - endpoint - API
    final String PORT_NUM = "3306";
    final String DB_NAME = "autoexpress";
    final String USERNAME = "admin";
    final String PASSWORD = "hksssyyyyz";

    DriverManagerDataSource dataSource = new DriverManagerDataSource();
    dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
    dataSource.setUrl("jdbc:mysql://" + INSTANCE + ":" + PORT_NUM + "/" + DB_NAME);
    dataSource.setUsername(USERNAME);
    dataSource.setPassword(PASSWORD);

    return dataSource;
  }
  

  private final Properties hibernateProperties() {
    Properties hibernateProperties = new Properties();
    hibernateProperties.setProperty("hibernate.hbm2ddl.auto", "update");
    hibernateProperties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5InnoDBDialect");
    hibernateProperties.setProperty("hibernate.show_sql", "true");
    return hibernateProperties;
  }
}
