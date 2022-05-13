import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import swal from "@sweetalert/with-react";
import "./EditForm.css";

const AddEditForm = (props) => {
  /*
   * Category Menagement start here
   * ======================================================
   */
  //   This state for load all category from server
  const [allcatName, setAllCatName] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/category").then((res) => {
      let allName = [];
      res.data.map((singleCat) => allName.push(singleCat.name));
      setAllCatName(allName);
    });
  }, []);
  //   this state for final storage
  const [inputCat, setInputCat] = useState([]);
  //   this function for splice a data
  const spliceCat = (index) => {
    setInputCat(inputCat.filter((item) => item !== inputCat[index]));
  };
  //   this storage for get the cat key value
  const [catVal, setCatVal] = useState("");
  //   Key Down Menagement
  //   suggestion Mode Menage script
  const [sujessionMode, setSujessionMode] = useState(false);
  const [suggestions, setsuggestions] = useState([]);
  //   This Functions for add suggestions to main state
  const handlesuggestion = (item) => {
    setInputCat([...inputCat, item]);
    setSujessionMode(false);
    setCatVal("");
  };
  const catkeyDown = (e) => {
    // filtering suggestion
    setsuggestions(
      allcatName.filter((data) =>
        new RegExp(`^${e.target.value}`, "i").test(data)
      )
    );
    if (e.target.value === "" || e.target.value === " ") {
      setSujessionMode(false);
    } else {
      if (e.key === "Enter") {
        if (suggestions.length === 1) {
          setInputCat([...inputCat, suggestions]);
          setCatVal("");
          setSujessionMode(false);
        } else if (suggestions.length >= 1) {
          swal(<h4>Please select one from Suggestion</h4>);
        } else {
          swal(
            <div>
              <h4>Please Add This Category fast</h4>
              <span>
                <a style={{ color: "red" }} href={"/admin/products/categories"}>
                  Click Here
                </a>{" "}
                For Category State
              </span>
            </div>
          );
        }
      } else {
        if (e.target.value.length >= 2) {
          setSujessionMode(true);
        } else {
          setSujessionMode(false);
        }
      }
    }
  };
  /*
   * Category Menagement End here
   * ======================================================
   */

  /*
   * Tag Menagement start here
   * ======================================================
   */
  //   This state for load all Tag from server
  const [allTagName, setAllTagName] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/tags").then((res) => {
      let allName = [];
      res.data.map((singleTag) => allName.push(singleTag.name));
      setAllTagName(allName);
    });
  }, []);
  //   this state for final storage
  const [inputTag, setInputTag] = useState([]);
  //   this function for splice a data
  const spliceTag = (index) => {
    setInputTag(inputTag.filter((item) => item !== inputTag[index]));
  };
  //   this storage for get the Tag key value
  const [tagVal, setTagVal] = useState("");
  //   Key Down Menagement
  //   suggestion Mode Menage script
  const [tagsujessionMode, setTagSujessionMode] = useState(false);
  const [tagsuggestions, setTagsuggestions] = useState([]);
  //   This Functions for add tagsuggestions to main state
  const handleTagsuggestion = (item) => {
    setInputTag([...inputTag, item]);
    setTagSujessionMode(false);
    setTagVal("");
  };
  const tagkeyDown = (e) => {
    // filtering suggestion
    setTagsuggestions(
      allTagName.filter((data) =>
        new RegExp(`^${e.target.value}`, "i").test(data)
      )
    );
    if (e.target.value === "" || e.target.value === " ") {
      setTagSujessionMode(false);
    } else {
      if (e.key === "Enter") {
        if (tagsuggestions.length === 1) {
          setInputTag([...inputTag, tagsuggestions]);
          setTagVal("");
          setTagSujessionMode(false);
        } else if (tagsuggestions.length >= 1) {
          swal(<h4>Please select one from Suggestion</h4>);
        } else {
          swal(
            <div>
              <h4>Please Add This Tagegory fast</h4>
              <span>
                <a style={{ color: "red" }} href={"/admin/products/Tagegories"}>
                  Click Here
                </a>{" "}
                For Tagegory State
              </span>
            </div>
          );
        }
      } else {
        if (e.target.value.length >= 2) {
          setTagSujessionMode(true);
        } else {
          setTagSujessionMode(false);
        }
      }
    }
  };
  /*
   * Tag Menagement End here
   * ======================================================
   */

  /**
   * Product Type MenageMent
   */
  const [productType, setProductType] = useState(false);
  const handleProductType = (e) => {
    if (e.target.value === "variable") {
      setProductType(true);
    } else {
      setProductType(false);
    }
  };
  //=========================================//

  /**
   * Variable Product Menagement Start Here
   */
  const [verItems, setVarItems] = useState([
    {
      data: {
        colorName: "",
        color: "",
        image: "",
      },
    },
  ]);

  // This function for Add variable Options
  const handleAddVar = () => {
    setVarItems([
      ...verItems,
      {
        data: {
          colorName: "",
          color: "",
          image: "",
        },
      },
    ]);
  };
  // This Function for remove variable Options
  const handleRemoveVar = (index) => {
    const allVarItem = [...verItems];
    allVarItem.splice(index, 1);
    setVarItems(allVarItem);
  };
  // This Function for Update Veriable Valus

  const handleVarValues = (event, index) => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    let allItems = [...verItems];
    allItems[index]["data"][name] = value;
    setVarItems(allItems);
  };

  /**
   * Product Sent Script Here
   */
  // Slug Genaretor
  // Get all slug from database
  const [allSlug, setAllSlug] = useState([]);
  useEffect(() => {
    let allSlugs = [];
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        res.data.map((res) => allSlugs.push(res.slug));
      })
      .then(() => {
        setAllSlug(allSlugs);
      });
  }, []);
  const genarateSlug = (text) => {
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

  //OrGanised All Data
  const allCategori = [].concat(...inputCat);
  const allTag = [].concat(...inputTag);
  const [pName, setPName] = useState("");
  const [pSlug, setPSlug] = useState("");
  const [pRPrice, setPRPrice] = useState(0);
  const [pSPrice, setPSPrice] = useState(0);
  const [pStock, setPStock] = useState(0);
  const [pStatus, setPStatus] = useState("draft");
  const [pFeatured, setPFeatured] = useState("");

  const [genaretingSlug, setGenaretingSlug] = useState(false);
  useEffect(() => {
    setPSlug(genarateSlug(pName));
  }, [pName]);
  const handleEnableGenarate = () => {
    setGenaretingSlug(true);
  };
  const handleDisableGenarate = () => {
    setGenaretingSlug(false);
  };

  const handleThrowProduct = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/products`, {
        id: "",
        category: allCategori,
        tags: allTag,
        name: pName,
        slug: pSlug,
        oldPrice: (pRPrice !== false || pRPrice === "") && pRPrice,
        nowPrice: pSPrice,
        status: pStatus,
        stock: pStock,
        productTimeThumb: new Date().getTime(),
        Feathered: false,
        type: productType !== false ? "Variable" : "Simple",
        featuredImage: pFeatured,
      })
      .then((res) => {
        if (res.data.type === "Variable") {
          axios
            .post(`http://localhost:5000/veriations`, {
              id: "",
              productId: res.data.id,
              verdata: verItems,
            })
            .then(() => {
              swal({
                title: "Aww Great!",
                text: "Product Throw Successful!",
                icon: "success",
                button: "Aww yiss!",
              });
            })
            .then(() => {
              props.formDismiss(false);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          swal({
            title: "Aww Great!",
            text: "Product Throw Successful!",
            icon: "success",
            button: "Aww yiss!",
          }).then((res) => {
            props.formDismiss(false);
          });
        }
      });
  };

  /**
   * All Edit Form Functionality Here
   */
  const [editMode, setEditMode] = useState(false);
  const [productId, setProductId] = useState("");
  const [editproductType, setEditProductType] = useState("");
  const [varId, setVarId] = useState(0);

  useEffect(() => {
    setEditMode(props.editDetails.editMode);
    setProductId(props.editDetails.productId);
  }, []);

  useEffect(() => {
    if (editMode === true) {
      axios
        .get(`http://localhost:5000/products/${productId}?_embed=veriations`)
        .then((res) => {
          const allData = res.data;
          setPName(allData.name);
          setPSlug(allData.slug);
          setPRPrice(allData.oldPrice ?? allData.oldPrice);
          setPSPrice(allData.nowPrice);
          setPStock(allData.stock);
          setPStatus(allData.status);
          setPFeatured(allData.featuredImage);
          setEditProductType(allData.type);
          if (allData.type === "Variable") {
            setProductType(true);
          }
          // Veriations Values
          setVarItems(allData.veriations[0].verdata);
          setVarId(allData.veriations[0].id);
          // tags
          setInputTag(allData.tags);
          // Categories
          setInputCat(allData.category);
        });
    }
  }, [editMode, productId]);

  // Edit Functions
  const handleFunction = (e, procductId) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:5000/products/${productId}?_embed=veriations`, {
        category: allCategori,
        tags: allTag,
        name: pName,
        slug: pSlug,
        oldPrice: typeof pRPrice === "number" ? pRPrice : false,
        nowPrice: pSPrice,
        status: pStatus,
        stock: pStock,
        type: productType !== false ? "Variable" : "Simple",
        featuredImage: pFeatured,
      })
      .then((res) => {
        axios.patch(`http://localhost:5000/veriations/${varId}`, {
          productId: res.id,
          verdata: verItems,
        });
      })
      .then(() => {
        swal({
          title: "Aww Great!",
          text: "Product Update Successful!",
          icon: "success",
          button: "Aww yiss!",
        });
      })
      .then(() => {
        props.formDismiss(false);
      })
      .catch((err) => {
        swal({
          title: "Aww No!",
          text: "Product Update Field!",
          icon: "error",
          button: "Ok",
        });
        props.formDismiss(false);
      });
  };
  // Edit Function End Here
  return (
    <>
      <Form
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        onSubmit={(e) =>
          editMode === true
            ? handleFunction(e, productId)
            : handleThrowProduct(e)
        }
      >
        <Row>
          <Col md={"4"}>
            <Card>
              <Card.Body>
                <Card>
                  <Card.Body>
                    <h4>Name Section</h4>
                    <div className="p_name my-2">
                      <label htmlFor="pName">Input Product Name</label>
                      <Form.Control
                        autoComplete="off"
                        onBlur={handleDisableGenarate}
                        onFocus={handleEnableGenarate}
                        value={pName}
                        onChange={(e) => setPName(e.target.value)}
                        id="pName"
                        type="text"
                        placeholder="Product Name"
                      />
                    </div>
                    <div className="p_slug my-2">
                      {genaretingSlug === true ? (
                        <label className="blinking" htmlFor="pSlug">
                          {" "}
                          Watching Name for Generate Slug...
                        </label>
                      ) : (
                        <label htmlFor="pSlug"> Input Product slug</label>
                      )}
                      <Form.Control
                        autoComplete="off"
                        value={pSlug}
                        onChange={(e) => {
                          setPSlug(e.target.value);
                        }}
                        id="pSlug"
                        type="text"
                        placeholder="Product Name"
                      />
                    </div>
                  </Card.Body>
                </Card>
                <Card className="my-2">
                  <Card.Body>
                    <h4>Price Section</h4>
                    <div className="p_regular_price my-2">
                      <label htmlFor="pRegularPrice">Input Regular Price</label>
                      <Form.Control
                        autoComplete="off"
                        value={pRPrice}
                        onChange={(e) => setPRPrice(e.target.value)}
                        id="pRegularPrice"
                        type="number"
                        placeholder="Product Regular Price"
                      />
                    </div>
                    <div className="p_sell_price my-2">
                      <label htmlFor="pSellPrice">Input Sell Price</label>
                      <Form.Control
                        autoComplete="off"
                        value={pSPrice}
                        onChange={(e) => setPSPrice(e.target.value)}
                        id="pSellPrice"
                        type="number"
                        placeholder="Product Sell Price"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          </Col>
          <Col md={"5"}>
            <Card>
              <Card.Body>
                <Card className="my-2">
                  <Card.Body>
                    <h4>Taxonomy Section</h4>
                    {/* Category Menagement Start Here */}
                    <div className="p_category my-2">
                      <label htmlFor="pCategory">
                        Input Your Category{" "}
                        <span
                          toltipdata="Input 3 character for suggestion"
                          className="cssTolTips"
                        >
                          ?
                        </span>
                      </label>
                      <div className="inputCategory">
                        {inputCat.map((res, index) => (
                          <div key={index} className="appinputinstantdata">
                            {res}
                            <span onClick={() => spliceCat(index)}>
                              <i className="bx bx-x"></i>
                            </span>
                          </div>
                        ))}
                        <div className="inputdatafild">
                          <div className="sujjeioncontainer">
                            {sujessionMode === true
                              ? suggestions.map((item, index) => (
                                  <div
                                    key={index}
                                    className="suggestion"
                                    onClick={() => handlesuggestion(item)}
                                  >
                                    {item}
                                  </div>
                                ))
                              : ""}
                          </div>
                          <input
                            autoComplete="off"
                            value={catVal}
                            onKeyDown={(e) => catkeyDown(e)}
                            onChange={(e) => setCatVal(e.target.value)}
                            className="inputcatfield"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Category Menagement End Here */}
                    {/* Tags Menagement Start Here */}
                    <div className="p_tags my-2">
                      <label htmlFor="pTags">
                        Input Your Tags{" "}
                        <span
                          toltipdata="Input 3 character for suggestion"
                          className="cssTolTips"
                        >
                          ?
                        </span>
                      </label>
                      <div className="inputCategory">
                        {inputTag.map((res, index) => (
                          <div key={index} className="appinputinstantdata">
                            {res}
                            <span onClick={() => spliceTag(index)}>
                              <i className="bx bx-x"></i>
                            </span>
                          </div>
                        ))}
                        <div className="inputdatafild">
                          <div className="sujjeioncontainer">
                            {tagsujessionMode === true
                              ? tagsuggestions.map((item, index) => (
                                  <div
                                    key={index}
                                    className="suggestion"
                                    onClick={() => handleTagsuggestion(item)}
                                  >
                                    {item}
                                  </div>
                                ))
                              : ""}
                          </div>
                          <input
                            autoComplete="off"
                            value={tagVal}
                            onKeyDown={(e) => tagkeyDown(e)}
                            onChange={(e) => setTagVal(e.target.value)}
                            className="inputcatfield"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Tags Menagement End Here */}
                  </Card.Body>
                </Card>
                <Card className="my-2">
                  <Card.Body>
                    {/* Additional Info Start Here */}
                    <h4>Aditional Info Section</h4>
                    <div className="p_stock">
                      <label htmlFor="p_stock">
                        Input your stock{" "}
                        <span
                          toltipdata="Leave Empty for out of stock"
                          className="cssTolTips"
                        >
                          ?
                        </span>
                      </label>
                      <Form.Control
                        autoComplete="off"
                        value={pStock}
                        onChange={(e) => setPStock(e.target.value)}
                        placeholder="Input Stock Quantity"
                        type="number"
                      />
                    </div>
                    <div className="p_type my-2">
                      <label htmlFor="product_type">
                        Select Yout Product type
                      </label>
                      <select
                        id="product_type"
                        className="form-control"
                        name="type"
                        defaultValue={editproductType}
                        onChange={(e) => handleProductType(e)}
                      >
                        {editMode === true ? (
                          <option disabled selected value={editproductType}>
                            {editproductType}
                          </option>
                        ) : (
                          <option value="">Select one</option>
                        )}
                        <option value="simple">Simple Product</option>
                        <option value="variable">Variable Product</option>
                      </select>
                    </div>
                    {/* Aditional Info End Here */}
                  </Card.Body>
                </Card>
                {/* Variable product option start here */}
                {productType ? (
                  <>
                    <Card className="my-2">
                      <Card.Body>
                        <h4>Variable Options</h4>
                        {verItems.map((singleitem, index) => (
                          <Card className="my-1" key={index}>
                            <Card.Body>
                              <div className="titleAndClose">
                                <h6>
                                  Veriable Box {index + 1}{" "}
                                  <span
                                    toltipdata="Click The Buttons on right side for control"
                                    className="cssTolTips"
                                  >
                                    ?
                                  </span>
                                </h6>
                                <div className="control">
                                  {verItems.length - 1 === index && (
                                    <Button
                                      onClick={handleAddVar}
                                      variant="link"
                                      className="add p-0"
                                    >
                                      <i className="bx bxs-plus-circle"></i>
                                    </Button>
                                  )}

                                  {verItems.length !== 1 && (
                                    <Button
                                      onClick={() => {
                                        handleRemoveVar(index);
                                      }}
                                      variant="link"
                                      className="remove p-0"
                                    >
                                      <i className="bx text-danger bxs-x-circle"></i>
                                    </Button>
                                  )}
                                </div>
                              </div>
                              <Row>
                                <Col md="10">
                                  <Row>
                                    <Col md="8">
                                      <div className="p_v_colorName my-2">
                                        <label htmlFor="p_v_color_name">
                                          Input your color name
                                        </label>
                                        <Form.Control
                                          onChange={(e) =>
                                            handleVarValues(e, index)
                                          }
                                          autoComplete="off"
                                          value={
                                            verItems[index]["data"]["colorName"]
                                          }
                                          id="p_v_color_name"
                                          name="colorName"
                                          placeholder="Input Your Color Name"
                                          type="text"
                                        />
                                      </div>
                                    </Col>
                                    <Col md="4">
                                      <div className="p_v_colorCode my-2">
                                        <label htmlFor="p_v_color_code">
                                          Input color
                                        </label>
                                        <Form.Control
                                          autoComplete="off"
                                          onChange={(e) =>
                                            handleVarValues(e, index)
                                          }
                                          value={
                                            verItems[index]["data"]["color"]
                                          }
                                          name="color"
                                          id="p_v_color_code"
                                          type="color"
                                        />
                                      </div>
                                    </Col>
                                  </Row>
                                  <div className="p_v_image my-2">
                                    <label htmlFor="p_v_image">
                                      Input your variant image url
                                    </label>
                                    <Form.Control
                                      autoComplete="off"
                                      onChange={(e) =>
                                        handleVarValues(e, index)
                                      }
                                      value={verItems[index]["data"]["image"]}
                                      name="image"
                                      id="p_v_color_code"
                                      placeholder="Image Url"
                                      type="url"
                                    />
                                  </div>
                                </Col>
                                <Col
                                  md="2"
                                  className="d-flex p-0 align-items-center"
                                ></Col>
                              </Row>
                            </Card.Body>
                          </Card>
                        ))}
                      </Card.Body>
                    </Card>
                  </>
                ) : (
                  ""
                )}
                {/* Variable product option end here */}
              </Card.Body>
            </Card>
          </Col>
          <Col md={"3"}>
            <Card>
              <Card.Body className="px-2">
                <Card className="my-2">
                  <Card.Body>
                    <h4>Status</h4>
                    <div className="statusField">
                      <select
                        defaultValue={pStatus}
                        onChange={(e) => setPStatus(e.target.value)}
                        className="form-control"
                      >
                        {editMode === true ? (
                          <option disabled selected value={pStatus}>
                            {pStatus}
                          </option>
                        ) : (
                          ""
                        )}

                        <option value={"Draft"}>Draft</option>
                        <option value={"Pending"}>Pending</option>
                        <option value={"Publish"}>Publish</option>
                      </select>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="my-2">
                  <Card.Body>
                    <h4>Featured Image</h4>
                    <div className="statusField">
                      <Form.Control
                        value={pFeatured}
                        onChange={(e) => setPFeatured(e.target.value)}
                        type="url"
                        placeholder="Input your featured Image url"
                      />
                    </div>
                  </Card.Body>
                </Card>
                <Button variant="primary" type="submit" className="w-100 mt-4">
                  {editMode === true ? "Update Product" : "Throw Product"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddEditForm;
