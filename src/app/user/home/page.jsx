"use client";
import React from "react";
import Card from "../../../components/reccomp/card";
export default function Page() {
  const doginfo = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },

    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/pug-dog-isolated-white-background_2829-11416.jpg?w=740&t=st=1704570987~exp=1704571587~hmac=9dacb80239467895ec0636e6be79421630d3fa164b56dc55f9031646f71663c4",
      breed: "terrier",
      price: "100",
      ownerName: "John",
    },
  ];

  return (
    <div className="container">
      {doginfo.map((dog, index) => {
        return (
          <div key={index}>
            <Card
              imageSrc={dog.imageSrc}
              breed={dog.breed}
              price={dog.price}
              ownerName={dog.ownerName}
            />
          </div>
        );
      })}
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          margin-top: 20px;
          margin-left: 80px;
        }
      `}</style>
    </div>
  );
}
