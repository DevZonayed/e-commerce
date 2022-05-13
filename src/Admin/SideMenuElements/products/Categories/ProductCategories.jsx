import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import swal from "@sweetalert/with-react";

import "./CategoriesStyle.css";

const ProductCategories = () => {
  // get value from category input field
  const [catValue, setCatValue] = useState({
    name: "",
    slug: "",
  });
  // Category add scripts
  const [addMode, setAddMode] = useState(false);

  // Tag Genaretor
  const [allSlug, setAllSlug] = useState([]);
  useEffect(() => {
    let allSlugs = [];
    axios
      .get("http://localhost:5000/category")
      .then((res) => {
        res.data.map((res) => allSlugs.push(res.slug));
      })
      .then(() => {
        setAllSlug(allSlugs);
      });
  }, []);
  const genarateTag = (text) => {
    if (typeof text === "string") {
      let wordArray = text.toLowerCase().split(" ").join("-");
      let slug = allSlug.filter((singleSlug) => {
        return singleSlug === wordArray;
      });
      if (slug.length === 0) {
        return wordArray;
      } else {
        return wordArray + Math.floor(Math.random() * 5000);
      }
    }
  };
  // genareate slug signal
  const [genaretingSlug, setGenaretingSlug] = useState(false);
  // exicute add of edit value to input
  const handleCatValue = (data) => {
    if (data.name === "name") {
      setGenaretingSlug(true);
      setCatValue({
        ...catValue,
        slug: genarateTag(data.value),
        [data.name]: data.value,
        type: "product",
      });
    } else {
      setGenaretingSlug(false);
      setCatValue({ ...catValue, [data.name]: data.value });
    }
  };
  // this function for Send cat data
  const handleCatAd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/category", { ...catValue })
      .then((res) => {
        setCatValue({
          name: "",
          slug: "",
        });
        setAddMode(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Cat Edit Script Here
  const [editMode, setEditMode] = useState(false);
  const handleEdit = (editId) => {
    axios.get(`http://localhost:5000/category/${editId}`).then((res) => {
      setCatValue({
        id: editId,
        name: res.data.name,
        slug: res.data.slug,
      });
      setAddMode(true);
      setEditMode(true);
    });
  };

  const handleEdir = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/category/${catValue.id}`, {
        ...catValue,
      })
      .then(() => {
        setCatValue({
          name: "",
          slug: "",
        });
        setAddMode(false);
        setEditMode(false);
      });
  };

  // Cat delete Script
  const [deleteReloadSignal, setdeleteReloadSignal] = useState(true);
  const handleDelete = (catId) => {
    swal({
      title: "Are You Sure?",
      text: "Once Deleted , You will not be able to undone",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        axios.delete(`http://localhost:5000/category/${catId}`).then(() => {
          setdeleteReloadSignal(!deleteReloadSignal);
        });
        swal("Poof! The Category has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The Category is safe");
      }
    });
  };

  // store all category from database
  const [allCategory, setAllCategory] = useState([]);
  // server delay loading
  const [dataLoad, setDataLoad] = useState(true);
  // get all category from database
  useEffect(() => {
    axios.get("http://localhost:5000/category").then((res) => {
      setAllCategory(res.data);
      setDataLoad(false);
    });
  }, [catValue, deleteReloadSignal]);

  return (
    <>
      <Row>
        <Col>
          <Card className="my-2">
            <Card.Header>
              <Row>
                <Col md={"4"}>
                  <h3>
                    {addMode === true
                      ? editMode === true
                        ? "Edit Category"
                        : "Add Category"
                      : "All Category"}
                  </h3>
                </Col>
                <Col md={"4"}></Col>
                <Col md={"4"} className="d-flex justify-content-end">
                  <Button
                    onClick={() => {
                      setAddMode(!addMode);
                      setEditMode(false);
                    }}
                  >
                    {addMode === true ? "Hide Form" : "Add Category"}
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              {addMode === true ? (
                <>
                  <Row>
                    <Col md={"4"}></Col>
                    <Col md={"4"}>
                      <Form
                        onSubmit={(e) => {
                          editMode === true ? handleEdir(e) : handleCatAd(e);
                        }}
                      >
                        <p>
                          <label htmlFor="categoryName">
                            Input a category name
                          </label>
                          <Form.Control
                            onChange={(e) => handleCatValue(e.target)}
                            name="name"
                            value={catValue.name}
                            id="categoryName"
                            type="text"
                            placeholder="Category Name"
                          />
                        </p>
                        <p>
                          {genaretingSlug === true ? (
                            <label className="blinking" htmlFor="TagsName">
                              Generating Slug...
                            </label>
                          ) : (
                            <label htmlFor="TagsName">Input a Slug</label>
                          )}
                          <Form.Control
                            onChange={(e) => handleCatValue(e.target)}
                            name="slug"
                            value={catValue.slug}
                            id="categoryName"
                            type="text"
                            placeholder="Category Name"
                          />
                        </p>
                        <p>
                          <Button
                            type="submit"
                            className="w-100"
                            variant="primary"
                          >
                            Send Data
                          </Button>
                        </p>
                      </Form>
                    </Col>
                    <Col md={"4"}></Col>
                  </Row>
                </>
              ) : (
                <Table className="text-center" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Slug</th>
                      <th>Control</th>
                    </tr>
                  </thead>
                  {dataLoad === true ? (
                    <tbody>
                      {/* Skeletor start */}
                      {[...Array(2)].map((x, i) => (
                        <tr key={i} style={{ verticalAlign: "middle" }}>
                          <td>{<Skeleton highlightColor={"crimson"} />}</td>
                          <td>
                            <Skeleton highlightColor={"yellow"} />
                          </td>
                          <td>
                            <Skeleton highlightColor={"crimson"} />
                          </td>
                          <td>
                            <Skeleton highlightColor={"crimson"} />
                          </td>
                        </tr>
                      ))}
                      {/* Skeletor end */}
                    </tbody>
                  ) : (
                    <tbody>
                      {allCategory.map((singlecategory, index) => (
                        <tr key={index} style={{ verticalAlign: "middle" }}>
                          <td>{index}</td>
                          <td title={singlecategory.name}>
                            {singlecategory.name.length >= 20
                              ? singlecategory.name.slice(0, 15) + "..."
                              : singlecategory.name}
                          </td>
                          <td title={singlecategory.slug}>
                            {singlecategory.slug.length >= 20
                              ? singlecategory.slug.slice(0, 15) + "..."
                              : singlecategory.slug}
                          </td>
                          <td>
                            <ButtonGroup size="sm">
                              <Button
                                onClick={() => {
                                  handleEdit(singlecategory.id);
                                }}
                                variant="warning"
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => handleDelete(singlecategory.id)}
                                variant="danger"
                              >
                                Delete
                              </Button>
                            </ButtonGroup>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )}
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductCategories;
