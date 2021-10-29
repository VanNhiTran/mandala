import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GridTable from "../components/blog/GridTable";
import ListTable from "../components/blog/ListTable";

function News() {
  const [typeLayout, setTypeLayout] = useState("grid-table");

  return (
    <div className="news">
      <div className="container">
        <div className="news_top">
          <NavLink to="/" className="active">
            Home <i className="fa fa-angle-right"></i>
          </NavLink>
          <a href="/news">Blog</a>
        </div>
        <h1>BLOG</h1>
        <div className="news_controlbar d-flex">
          <div className="left">
            <i
              className="fa fa-th-large"
              onClick={() => setTypeLayout("grid-table")}
            ></i>
            <i
              className="fa fa-list icon-right"
              onClick={() => setTypeLayout("list-table")}
            ></i>
          </div>
          <div className="right">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i class="fa fa-caret-left"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="fa fa-caret-right"></i>
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {typeLayout === "grid-table" && <GridTable />}
        {typeLayout === "list-table" && <ListTable />}
        <div className="news_controlbar d-flex">
          <div className="left">
            <i
              className="fa fa-th-large"
              onClick={() => setTypeLayout("grid-table")}
            ></i>
            <i
              className="fa fa-list icon-right"
              onClick={() => setTypeLayout("list-table")}
            ></i>
          </div>
          <div className="right">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i class="fa fa-caret-left"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="fa fa-caret-right"></i>
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
