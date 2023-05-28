# orderbook

Execute with JDK17

H2 console: http://localhost:8080/h2-console/ connect as Generic H2 (Embedded), org.h2.Driver, jdbc:h2:mem:orders, sa/password

Swagger: http://localhost:8080/v2/api-docs  http://localhost:8080/swagger-ui/index.html#/order-controller

https://console.cloud.google.com/iam-admin/iam?project=shareazade  
Google API key can be found here https://console.cloud.google.com/apis/credentials?project=shareazade

https://github.com/MomenSherif/react-oauth Sample React Google Oauth code  

http://localhost:8080/order/v1/executionReportPDF export the PDF from the browser

# References

https://spring.io/guides/tutorials/rest/
https://spring.io/guides/gs/testing-web/
https://www.springboottutorial.com/spring-boot-swagger-documentation-for-rest-services

https://jsonpath.com/

https://www.baeldung.com/entity-to-and-from-dto-for-a-java-spring-application
https://www.baeldung.com/java-modelmapper-lists


Lifecycle of an OrderBook

```mermaid
graph TD
    A[OPEN] -->|all orders created + closeOrderBook| B(CLOSED)
    B(CLOSED) -->|all orders closed + openOrderBook| A[OPEN]
``` 

Lifecycle of an OrderEntry

```mermaid
graph TD
    A[OPEN] -->|execution fills it| B(FILLED)
    B(FILLED) -->|all orders are filled| C[CLOSED]
``` 



