import { useState } from "react";
import { countryName, tableData } from "../utils/data";

const Home = () => {
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [sortOrder, setSortOrder] = useState({
    column: null,
    ascending: true,
  });

  const handleSort = (columnName) => {
    setSortOrder((prevState) => ({
      column: columnName,
      ascending: prevState.column === columnName ? !prevState.ascending : true,
    }));
  };

  const sortedTableData = () => {
    const { column, ascending } = sortOrder;
    if (column) {
      return tableData.slice().sort((a, b) => {
        if (a[column] === b[column]) {
          return 0;
        }
        if (ascending) {
          return a[column] > b[column] ? 1 : -1;
        } else {
          return a[column] < b[column] ? 1 : -1;
        }
      });
    }
    return tableData;
  };

  return (
    <div className="home py-14">
      <div className="container px-6">
        <div className="country pb-10">
          <h2 className="text-2xl font-semibold capitalize text-[#191E29] pb-6">
            Country
          </h2>
          <ul>
            {countryName.map((countryData, index) => (
              <li key={index} className="pb-4 flex items-center gap-2">
                <input
                  id={countryData}
                  type="radio"
                  name="countrySelection"
                  checked={index === selectedCountryIndex}
                  onChange={() => setSelectedCountryIndex(index)}
                  className="mr-2 form-radio w-[14px] h-[14px] cursor-pointer appearance-none rounded-full border-2 border-gray-[#73C2FB] checked:bg-[#73C2FB] checked:border-transparent checked:ring-2 checked:ring-[#73C2FB] checked:ring-offset-2 checked:ring-opacity-50"
                />

                <label
                  htmlFor={countryData}
                  className="uppercase text-base font-semibold text-[#191E29] cursor-pointer"
                >
                  {countryData}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <h2 className="font-bold text-2xl text-[#191E29] pb-10">
          Companies ranked by market cap gains and losses in billions USD
        </h2>
        <div className="table_wrapper">
          <div className="w-full shadow-customShadow rounded-[8px] bg-white">
            <div className="border-gray-200 w-full bg-white rounded-[8px] overflow-x-auto">
              <table className="w-full leading-normal ">
                <thead className="  px-6 py-4  hover:cursor-pointer uppercase ">
                  <tr>
                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">No.</span>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">Name</span>
                    </th>

                    <th
                      scope="col"
                      onClick={() => handleSort("marketCap")}
                      className="whitespace-nowrap text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">Market Cap</span>
                      <div className="inline-block">
                        <div
                          className="filter-asc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            marginBottom: " 1px",
                            borderBottom: "5px solid rgb(204, 204, 204)",
                          }}
                        ></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}
                        ></div>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">Industry</span>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">Sector</span>
                    </th>

                    <th
                      scope="col"
                      onClick={() => handleSort("oneDay")}
                      className="whitespace-nowrap text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">1 Day</span>
                      <div className="inline-block">
                        <div
                          className="filter-asc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            marginBottom: " 1px",
                            borderBottom: "5px solid rgb(204, 204, 204)",
                          }}
                        ></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}
                        ></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      onClick={() => handleSort("oneWeek")}
                      className="whitespace-nowrap text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">1 Week</span>
                      <div className="inline-block">
                        <div
                          className="filter-asc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            marginBottom: " 1px",
                            borderBottom: "5px solid rgb(204, 204, 204)",
                          }}
                        ></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}
                        ></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      onClick={() => handleSort("oneMonth")}
                      className="whitespace-nowrap text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">1 Month</span>
                      <div className="inline-block">
                        <div
                          className="filter-asc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            marginBottom: "1px",
                            borderBottom: "5px solid rgb(204, 204, 204)",
                          }}
                        ></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}
                        ></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      onClick={() => handleSort("threeMonth")}
                      className="whitespace-nowrap text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">3 Months</span>
                      <div className="inline-block">
                        <div
                          className="filter-asc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            marginBottom: " 1px",
                            borderBottom: "5px solid rgb(204, 204, 204)",
                          }}
                        ></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}
                        ></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      onClick={() => handleSort("sixMonth")}
                      className="whitespace-nowrap text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">6 Months</span>
                      <div className="inline-block">
                        <div
                          className="filter-asc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            marginBottom: " 1px",
                            borderBottom: "5px solid rgb(204, 204, 204)",
                          }}
                        ></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}
                        ></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      onClick={() => handleSort("oneYear")}
                      className="whitespace-nowrap text-white text-base font-bold py-4 lg:py-8 px-6 bg-[#73C2FB] text-left capitalize "
                    >
                      <span className="pr-2">1 Year</span>
                      <div className="inline-block">
                        <div
                          className="filter-asc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            marginBottom: " 1px",
                            borderBottom: "5px solid rgb(204, 204, 204)",
                          }}
                        ></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}
                        ></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedTableData().map((tableItem, index) => (
                    <tr
                      className="hover:bg-gray-100 hover:cursor-pointer"
                      key={index}
                    >
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {/* {tableItem.no}  */}
                          {index + 1}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29] uppercase">
                          {tableItem.name}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.marketCap}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.industry}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.sector}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.oneDay}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.oneWeek}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.oneMonth}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.threeMonth}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.sixMonth}
                        </p>
                      </td>
                      <td className="whitespace-nowrap py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p
                          className={`${
                            tableItem.oneYear <= 0 ? "text-[#EB0B0B]" : null
                          } text-sm font-medium text-[#191E29]`}
                        >
                          {tableItem.oneYear}.00 B
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
