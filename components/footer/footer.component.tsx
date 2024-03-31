import React from "react";
import styles from "./footer.module.css";
import mainLogo from "../../public/assets/logo1.png";
import Image from "next/image";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  RightCircleFilled,
  YoutubeFilled,
} from "@ant-design/icons";

function FooterComponent({ category }) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.mainFooter}>
          <div className={styles.subFooter}>
            <section style={{ display: "flex", alignItems: "center" }}>
              <Image
                src={mainLogo.src}
                alt="logo"
                width={50}
                height={50}
                loading="lazy"
              />
              <p style={{ fontSize: "2.2em", marginLeft: "8px" }}>
                Sarkari Filing
              </p>
            </section>
            <section style={{ width: "100%" }}>
              <p>Want to talk with us</p>
              <div className={styles.footerInputContainer}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Email here"
                  className={styles.footerInput}
                />
                <RightCircleFilled className={styles.footerIcon} />
              </div>
            </section>
          </div>
          <div className={styles.sectionLinkSer}>
            <div style={{ listStyle: "none", width: "10rem" }}>
              <div>
                <h4>Quick Links</h4>
              </div>
              <div>
                <p>Home</p>
                <p>About Us</p>
                <p>Services</p>
                <p>Blogs</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div style={{ listStyle: "none" }}>
              <div>
                <h4>Services</h4>
              </div>
              <div>
                {category?.result?.map((item) => (
                  <p key={item.id}>{item.display_name}</p>
                ))}
              </div>
            </div>
          </div>
          <div style={{ listStyle: "none" }}>
            <div>
              <h4>Get In Touch</h4>
            </div>
            <div>
              <p>Contact Us</p>
              <div
                style={{
                  display: "flex",
                  columnGap: "1rem",
                  fontSize: "24px",
                  marginTop: "1rem",
                }}
              >
                <p>
                  <FacebookFilled />
                </p>
                <p>
                  <InstagramFilled />
                </p>
                <p>
                  <YoutubeFilled />
                </p>
                <p>
                  <LinkedinFilled />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.conditionSection}>
          <div>
            <p>© 2024 Sarkari Filing. Copyright and rights reserved</p>
          </div>
          <div style={{ display: "flex", gap: "100px" }}>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterComponent;