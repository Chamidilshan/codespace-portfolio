/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "ChatGPT mobile",
    description: "a Flutter app that lets you chat with OpenAI's language model. With its sleek and user-friendly interface, this app takes your chat experience to the next level.",
    url: "https://github.com/Chamidilshan/ChatGPT-App",
  },
  {
    title: "Garbage Collector In Java and Rust",
    description:
      "Garbage collection is the process of looking at heap memory, identifying which objects are in use and which are not, and deleting the unused objects.",
    url: "https://chamidilshan.medium.com/garbage-collector-in-java-and-rust-726dc25d245",
  },
  {
    title: "Dawn Resort Web App",
    description: "A captivating and interactive web application that showcases the beauty of our luxurious resort. This project is coded using React, making it highly responsive and user-friendly and hosted in firebase",
    url: "https://github.com/Chamidilshan/dawn-resourt-app",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn"}}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
