package com.project.autoexpress.requestholder;

public class OrderRequestBody {

    private String senderAddress;
    private String receiverAddress;
    private String receiverName;
    private String cardNumber;
    private int size;
    private int weight;
    private String description;
    private String deliveryMethod;
    private float fee;

    public void setSenderAddress(String senderAddress) {
        this.senderAddress = senderAddress;
    }

    public void setReceiverAddress(String receiverAddress) {
        this.receiverAddress = receiverAddress;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void setSize(int size) {
        this.size = size;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setDeliveryMethod(String deliveryMethod) {
        this.deliveryMethod = deliveryMethod;
    }

    public void setFee(float fee) {
        this.fee = fee;
    }

    public String getSenderAddress() {
        return senderAddress;
    }

    public String getReceiverAddress() {
        return receiverAddress;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public int getSize() {
        return size;
    }

    public int getWeight() {
        return weight;
    }

    public String getDescription() {
        return description;
    }

    public String getDeliveryMethod() {
        return deliveryMethod;
    }

    public float getFee() {
        return fee;
    }
}
