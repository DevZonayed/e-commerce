import swal from "@sweetalert/with-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonGroup, Table, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

import "./productTable.css";

const AdminProductTable = (props) => {
  // Image Featured Set and remore script start here
  const [loadagain, setloadAgain] = useState(false);
  const [isFeathered, setIsFeathered] = useState(false);
  const handleFeathered = (id) => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => {
        setIsFeathered(res.data.Feathered);
      })
      .then(() => {
        axios
          .patch(`http://localhost:5000/products/${id}`, {
            Feathered: !isFeathered,
          })
          .then((res) => {
            setloadAgain(!loadagain);
          });
      });
  };

  /**
   * Send Product For Edit
   */
  const handleEdit = (mode, productId) => {
    props.isEdit(mode, productId);
  };

  /**
   * Handle Product Delete Functions
   */
  const handleDelete = (id) => {
    swal({
      title: "Are you sure",
      text: "Your Deletation Can not be undone",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        axios.delete(`http://localhost:5000/products/${id}`);
        swal("The Product has been deleted!", {
          icon: "success",
        });
        setloadAgain(!loadagain);
      } else {
        swal("The Product is safe");
      }
    });
  };
  // Delete script End Here

  // Get Product From Database
  const [allProduct, setAllProduct] = useState([]);
  const [productload, setProductLoad] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      setAllProduct(res.data);
      setProductLoad(false);
    });
  }, [loadagain]);
  // Product get End here

  return (
    <>
      <Table className="text-center" striped bordered hover>
        <thead>
          <tr key={"p_table_head"}>
            <th>#</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Price</th>
            <th>Status</th>
            <th>Type</th>
            <th>Feathered</th>
            <th>Control</th>
          </tr>
        </thead>
        {productload === true ? (
          <tbody>
            {/* Skeletor start */}
            {[...Array(4)].map((x, i) => (
              <tr key={i} style={{ verticalAlign: "middle" }}>
                <td>{<Skeleton highlightColor={"crimson"} />}</td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
            ))}
            {/* Skeletor end */}
          </tbody>
        ) : (
          <tbody>
            {allProduct.map((singleProduct, index) => (
              <tr key={index} style={{ verticalAlign: "middle" }}>
                <td>{index}</td>
                <td title={singleProduct.name}>
                  {singleProduct.name.length >= 20
                    ? singleProduct.name.slice(0, 15) + "..."
                    : singleProduct.name}
                </td>
                <td title={singleProduct.slug}>
                  {singleProduct.slug.length >= 20
                    ? singleProduct.slug.slice(0, 15) + "..."
                    : singleProduct.slug}
                </td>
                <td>
                  {singleProduct.oldPrice === false
                    ? singleProduct.nowPrice
                    : `Sell- ${singleProduct.nowPrice} / Reg- ${singleProduct.oldPrice}`}
                </td>
                <td>{singleProduct.status}</td>
                <td>{singleProduct.type}</td>
                <td>
                  {singleProduct.Feathered === true ? (
                    <i
                      onClick={() => handleFeathered(singleProduct.id)}
                      title="Dubble Click Here To Change Status"
                      style={{
                        fontSize: "20px",
                        color: "var(--orange)",
                        cursor: "pointer",
                      }}
                      className="bx bxs-star"
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleFeathered(singleProduct.id)}
                      title="Dubble Click Here To Change Status"
                      style={{ fontSize: "20px", cursor: "pointer" }}
                      className="bx bx-star"
                    ></i>
                  )}
                </td>
                <td>
                  <ButtonGroup size="sm">
                    <Link
                      target={"_blank"}
                      to={`/productdetails/${singleProduct.id}`}
                    >
                      <Button variant="success">View</Button>
                    </Link>
                    <Button
                      onClick={() => handleEdit(true, singleProduct.id)}
                      variant="warning"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(singleProduct.id)}
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
    </>
  );
};

export default AdminProductTable;
