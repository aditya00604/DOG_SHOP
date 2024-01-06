import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
export default function Page() {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.userinfo}>
          <Image
            className={styles.Image}
            src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1449074028.1704566431&semt=sph"
            alt="user profile pic"
            width={200}
            height={200}
          />
          <h3>Username:Adity kumar Mishra</h3>
          <h3>email:akm998800hj@gmail.com</h3>
          <h3>phone: 9876543210</h3>
          <h4>Address: 123, xyz street, abc city, 123456</h4>
          <h5>faviorate dog breed:german,husky.....</h5>
        </div>
        <div className={styles.prevorder}>
          <h1>Previous order</h1>
          <div className={styles.order}>
            <div className={styles.orderinfo}>
              <Image
                className={styles.Image}
                src="https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4"
                alt="order image"
                width={200}
                height={200}
              />
              <h3>Order id: 123456</h3>
              <h3>Order date: 12/12/2021</h3>
              <h3>Order status: delivered</h3>
            </div>
            <div className={styles.orderinfo}>
              <Image
                className={styles.Image}
                src="https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4"
                alt="order image"
                width={200}
                height={200}
              />
              <h3>Order id: 123456</h3>
              <h3>Order date: 12/12/2021</h3>
              <h3>Order status: delivered</h3>
            </div>
            <div className={styles.orderinfo}>
              <Image
                className={styles.Image}
                src="https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4"
                alt="order image"
                width={200}
                height={200}
              />
              <h3>Order id: 123456</h3>
              <h3>Order date: 12/12/2021</h3>
              <h3>Order status: delivered</h3>
            </div>
            <div className={styles.orderinfo}>
              <Image
                className={styles.Image}
                src="https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4"
                alt="order image"
                width={200}
                height={200}
              />
              <h3>Order id: 123456</h3>
              <h3>Order date: 12/12/2021</h3>
              <h3>Order status: delivered</h3>
            </div>
            <div className={styles.orderinfo}>
              <Image
                className={styles.Image}
                src="https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4"
                alt="order image"
                width={200}
                height={200}
              />
              <h3>Order id: 123456</h3>
              <h3>Order date: 12/12/2021</h3>
              <h3>Order status: delivered</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
