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

import "./ProductTagStyle.css";

const ProductTags = () => {
  // get value from Tags input field
  const [tagValue, settagValue] = useState({
    name: "",
    slug: "",
  });
  // Tags add scripts
  const [addMode, setAddMode] = useState(false);

  // Tag Genaretor
  // Get All The Slug From Database
  const [allSlug, setAllSlug] = useState([]);
  useEffect(() => {
    let allSlugs = [];
    axios
      .get("http://localhost:5000/tags")
      .then((res) => {
        res.data.map((res) => allSlugs.push(res.slug));
      })
      .then(() => {
        setAllSlug(allSlugs);
      });
  }, []);
  // Genaretion tag with no duplicate
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
  const handletagValue = (data) => {
    if (data.name === "name") {
      setGenaretingSlug(true);
      settagValue({
        ...tagValue,
        slug: genarateTag(data.value),
        [data.name]: data.value,
        type: "product",
      });
    } else {
      setGenaretingSlug(false);
      settagValue({ ...tagValue, [data.name]: data.value });
    }
  };
  // this function for Send cat data
  const handleTagAd = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/tags", { ...tagValue })
      .then((res) => {
        settagValue({
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
    axios.get(`http://localhost:5000/Tags/${editId}`).then((res) => {
      settagValue({
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
      .patch(`http://localhost:5000/tags/${tagValue.id}`, {
        ...tagValue,
      })
      .then(() => {
        settagValue({
          name: "",
          slug: "",
        });
        setAddMode(false);
        setEditMode(false);
      });
  };

  // Tag delete Script
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
        axios.delete(`http://localhost:5000/tags/${catId}`).then(() => {
          setdeleteReloadSignal(!deleteReloadSignal);
        });
        swal("Poof! The Tags has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The Tags is safe");
      }
    });
  };

  // store all Tags from database
  const [allTags, setAllTags] = useState([]);
  // server delay loading
  const [dataLoad, setDataLoad] = useState(true);
  // get all Tags from database
  useEffect(() => {
    axios.get("http://localhost:5000/tags").then((res) => {
      setAllTags(res.data);
      setDataLoad(false);
    });
  }, [tagValue, deleteReloadSignal]);

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
                        ? "Edit Tags"
                        : "Add Tags"
                      : "All Tags"}
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
                    {addMode === true ? "Hide Form" : "Add Tags"}
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
                          editMode === true ? handleEdir(e) : handleTagAd(e);
                        }}
                      >
                        <p>
                          <label htmlFor="TagsName">Input a Tags name</label>
                          <Form.Control
                            onChange={(e) => handletagValue(e.target)}
                            name="name"
                            value={tagValue.name}
                            id="TagsName"
                            type="text"
                            placeholder="Tags Name"
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
                            onChange={(e) => handletagValue(e.target)}
                            name="slug"
                            value={tagValue.slug}
                            id="TagsName"
                            type="text"
                            placeholder="Tags Slug"
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
                        <tr style={{ verticalAlign: "middle" }}>
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
                      {allTags.map((singleTags, index) => (
                        <tr style={{ verticalAlign: "middle" }}>
                          <td>{index}</td>
                          <td title={singleTags.name}>
                            {singleTags.name.length >= 20
                              ? singleTags.name.slice(0, 15) + "..."
                              : singleTags.name}
                          </td>
                          <td title={singleTags.slug}>
                            {singleTags.slug.length >= 20
                              ? singleTags.slug.slice(0, 15) + "..."
                              : singleTags.slug}
                          </td>
                          <td>
                            <ButtonGroup size="sm">
                              <Button
                                onClick={() => {
                                  handleEdit(singleTags.id);
                                }}
                                variant="warning"
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => handleDelete(singleTags.id)}
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

export default ProductTags;
