import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  // User Verificatrions
  const [reActive, setReActive] = useState(false);
  useEffect(() => {
    let element = document.querySelectorAll(".admin-sidebar-menu li a");
    element.forEach((singleElement) => {
      if (singleElement.className === "active") {
        if (singleElement.nextElementSibling !== null) {
          if (singleElement.nextElementSibling.className === "dropDown") {
            singleElement.nextElementSibling.classList.add("active");
          }
        }
      } else {
        if (singleElement.nextElementSibling !== null) {
          singleElement.nextElementSibling.classList.remove("active");
        }
      }
    });
  }, [reActive]);

  // Control Position
  return (
    <>
      {/* {console.log(userRole)} */}
      <Container fluid>
        <Row>
          <Col style={{ minHeight: "100%" }} md={2}>
            <Card
              className="bg-dark sideBarContainer"
              style={{ minHeight: "100vh", height: "100%" }}
            >
              <Card.Header>
                <h3 className="text-center text-light">E-Commerce</h3>
              </Card.Header>
              <Card.Body className="controlContainer">
                <ul className="admin-sidebar-menu">
                  <li key={"/admin/dashbord"}>
                    <NavLink
                      onClick={() => {
                        setReActive(!reActive);
                      }}
                      to={"/admin/dashbord"}
                    >
                      Dashbord
                    </NavLink>
                  </li>
                  <li key={"/admin/post"}>
                    <NavLink
                      onClick={() => {
                        setReActive(!reActive);
                      }}
                      to={"/admin/post"}
                    >
                      Post
                    </NavLink>
                    <ul className="dropDown">
                      <li key={"/admin/post/allpost"}>
                        <NavLink to={"/admin/post/allpost"}>All Post</NavLink>
                      </li>
                      <li key={"/admin/post/categories"}>
                        <NavLink to={"/admin/post/categories"}>
                          Categories
                        </NavLink>
                      </li>
                      <li key={"/admin/post/tag"}>
                        <NavLink to={"/admin/post/tag"}>Tags</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li key={"/admin/comments"}>
                    <NavLink
                      onClick={() => {
                        setReActive(!reActive);
                      }}
                      to={"/admin/comments"}
                    >
                      Comments
                    </NavLink>
                  </li>
                  <li key={"/admin/products"}>
                    <NavLink
                      onClick={() => {
                        setReActive(!reActive);
                      }}
                      to={"/admin/products"}
                    >
                      Products
                    </NavLink>
                    <ul className="dropDown">
                      <li key={"/admin/products/allproduct"}>
                        <NavLink to={"/admin/products/allproduct"}>
                          All Product
                        </NavLink>
                      </li>
                      <li key={"/admin/products/categories"}>
                        <NavLink to={"/admin/products/categories"}>
                          Categories
                        </NavLink>
                      </li>
                      <li key={"/admin/products/tags"}>
                        <NavLink to={"/admin/products/tags"}>Tags</NavLink>
                      </li>
                    </ul>
                  </li>
                  <li key={"/admin/users"}>
                    <NavLink
                      onClick={() => {
                        setReActive(!reActive);
                      }}
                      to={"/admin/users"}
                    >
                      Users
                    </NavLink>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col md={10}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
