package com.project.autoexpress.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;

@Entity
@Table(name = "shippingorder")
public class ShippingOrder implements Serializable {
  // Let's assume one user can create many salesOrder
  // currently, there are now history salesOrder
  // history model will be implemented with a history table later.

  // currently, differents order from the same people
  // may be similar in terms of the content of this table.

  private static final long serialVersionUID = 201L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private int id;
  @ManyToOne
  private Customer customer; // 相当于 FK user_id
  private String senderAddress;
  private String receiverAddress;
  private String receiverName;
  private String cardNumber;
  private String size; // (small, medium, large)
  private int weight;
  private String description;
  private String deliveryMethod; // (robot, drone)
  private double fee;
  private String status; // (waiting, ongoing, finished)
  private Timestamp time;

  @ManyToOne
  private Station station; // 相当于 FK station_id

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public Customer getCustomer() {
    return customer;
  }

  public void setCustomer(Customer customer) {
    this.customer = customer;
  }

  public String getSenderAddress() {
    return senderAddress;
  }

  public void setSenderAddress(String senderAddress) {
    this.senderAddress = senderAddress;
  }

  public String getReceiverAddress() {
    return receiverAddress;
  }

  public void setReceiverAddress(String receiverAddress) {
    this.receiverAddress = receiverAddress;
  }

  public String getReceiverName() {
    return receiverName;
  }

  public void setReceiverName(String receiverName) {
    this.receiverName = receiverName;
  }

  public String getCardNumber() {
    return cardNumber;
  }

  public void setCardNumber(String cardNumber) {
    this.cardNumber = cardNumber;
  }

  public String getSize() {
    return size;
  }

  public void setSize(String size) {
    this.size = size;
  }

  public int getWeight() {
    return weight;
  }

  public void setWeight(int weight) {
    this.weight = weight;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getDeliveryMethod() {
    return deliveryMethod;
  }

  public void setDeliveryMethod(String deliveryMethod) {
    this.deliveryMethod = deliveryMethod;
  }

  public double getFee() {
    return fee;
  }

  public void setFee(double fee) {
    this.fee = fee;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Station getStation() {
    return station;
  }

  public void setStation(Station station) {
    this.station = station;
  }
}
