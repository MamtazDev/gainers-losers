import { countryName, tableData } from "../utils/data";

const Home = () => {
  return (
    <div className="home py-14">
      <div className="container px-5">
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
                  className="mr-2 form-radio w-[14px] h-[14px] cursor-pointer appearance-none rounded-full border-2 border-gray-[#73C2FB] checked:bg-[#73C2FB] checked:border-transparent checked:ring-2 checked:ring-[#73C2FB] checked:ring-offset-2 checked:ring-opacity-50"
                />

                <label
                  htmlFor={countryData}
                  className="uppercase text-base font-semibold text-[#191E29] cursor-pointer">
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
                <thead className="  px-5 py-4  hover:cursor-pointer uppercase ">
                  <tr>
                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
                      <span className="pr-2">No.</span>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
                      <span className="pr-2">Name</span>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
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
                          }}></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}></div>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
                      <span className="pr-2">Industry</span>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
                      <span className="pr-2">Sector</span>
                    </th>

                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
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
                          }}></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
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
                          }}></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
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
                          }}></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
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
                          }}></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
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
                          }}></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}></div>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="text-white text-base font-bold py-4 lg:py-8 px-3 bg-[#73C2FB] text-left capitalize ">
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
                          }}></div>
                        <div
                          className="filter-desc"
                          style={{
                            width: "0px",
                            height: "0px",
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderTop: "5px solid rgb(204, 204, 204)",
                            marginTop: "1px",
                          }}></div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((tableItem, index) => (
                    <tr
                      className="hover:bg-gray-100 hover:cursor-pointer"
                      key={index}>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.no}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29] uppercase">
                          {tableItem.name}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.marketCap}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.industry}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.sector}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.oneDay}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.oneWeek}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.oneMonth}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.threeMonth}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p className="text-sm font-medium text-[#191E29]">
                          {tableItem.sixMonth}
                        </p>
                      </td>
                      <td className="py-3 lg:py-5 px-6 border-b border-gray-200">
                        <p
                          className={`${
                            tableItem.color ? "text-[#EB0B0B]" : null
                          } text-sm font-medium text-[#191E29]`}>
                          {tableItem.oneYear}
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
