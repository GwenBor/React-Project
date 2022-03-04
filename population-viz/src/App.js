import "./App.css";
import TableComponent from "./Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import PaginationComponent from "./Pagination";
import BarChart from "./Chart";

// Parent component, fetches data and passes required props to child components (Search, Pagination, Table)
function App() {
  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const [pageData, setPageData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const chartData = {
    labels: apiData.map((data) => data.Country),
    datasets: [
      {
        label: "Population",
        data: apiData.map((data) => data.Population),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#008080",
          "#a52a2a",
          "#ff7f50",
          "#00008b",
          "#ff8c00",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  function handlePageChange(event, value) {
    console.log(value);
    setPageNumber(value);
  }

  function handleSearch(searchValue) {
    setSearchQuery(searchValue);
    setPageNumber(1);
  }

  useEffect(() => {
    let query = "https://dhis2-app-course-api.ifi.uio.no/api?";
    // Add search query to API parameters
    if (searchQuery) {
      query = query + "&search=" + searchQuery;
      setPageNumber(1);
    }

    if (pageNumber) {
      query = query + "&page=" + pageNumber;
    }

    axios
      .get(query)
      .then((res) => {
        setApiData(res.data.results);
        console.log(res.data.results);
        setPageData(res.data.pager);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery, pageNumber]); //when searchQuery changes, useEffect fetches data with new query

  return (
    <div className="App">
      <div className={"table"}>
        <Search onChangeQuery={handleSearch}></Search>
        <TableComponent apiData={apiData} pageData={pageData}></TableComponent>
        <PaginationComponent
          pageData={pageData}
          pageNumber={pageNumber}
          onPageChange={handlePageChange}
        ></PaginationComponent>
      </div>
      <BarChart className={"chart"} chartData={chartData} />
    </div>
  );
}

export default App;
