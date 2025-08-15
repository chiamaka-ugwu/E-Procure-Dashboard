// import Image from "next/image";
import Link from "next/link";
import React from "react";
import Chart from "./Chart";
import { icons } from "../../public/assets/assets";
import Image from "next/image";

const Dashboard = () => {
  return (
    <>
      <section className="md:w-[83%] relative md:left-53">
        {/* 1 */}
        <div className="h-16 flex items-center w-[95%] mx-auto">
          <h1 className="font-semibold text-md">Dashboard</h1>
        </div>

        {/* 2 */}
        <div className="bg-gradient-to-b from-blue-900 to-red h-50">
          <div className="w-[95%] mx-auto">
            <div>
              <p className="text-white text-base font-semibold w-fit py-3 border-b-3 border-b-red">
                My Dashboard
              </p>
            </div>
            <p className="text-md font-semibold text-white my-4">Overview</p>
            <div className="flex justify-between">
              <div className="box bg-white w-[23%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2 text-base">17</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Total Purchases
                    </p>
                  </div>
                  <Image src={icons.invoice} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>

              <div className="box bg-white w-[23%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2 text-base">2</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Pending Approvals
                    </p>
                  </div>
                  <Image src={icons.cart} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>

              <div className="box bg-white w-[23%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2 text-base">35%</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Budget Usage
                    </p>
                  </div>
                  <Image src={icons.addCart} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>

              <div className="box bg-white w-[23%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2 text-base">5</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Top Suppliers
                    </p>
                  </div>
                  <Image src={icons.star} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="bg-blue-50 pb-10 pt-20">
          <p className="p-8 text-md font-semibold">Payment Monitoring</p>
          <div className="w-[95%] mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
            <div className="flex flex-wrap gap-7 md:w-[48%]">
              <div className="box bg-white w-[47%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2 text-base">17</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Total Purchases
                    </p>
                  </div>
                  <Image src={icons.totalInvoice} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red-600 underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>

              <div className="box bg-white w-[47%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2 text-base">2</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Cash at hand
                    </p>
                  </div>
                  <Image src={icons.cash} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red-600 underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>

              <div className="box bg-white w-[47%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2 text-base">35%</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Budget Usage
                    </p>
                  </div>
                  <Image src={icons.payment} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red-600 underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>

              <div className="box bg-white w-[47%] p-4 h-37 shadow-md rounded-md">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold mb-2   text-base">5</p>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Suppliers
                    </p>
                  </div>
                  <Image src={icons.vendor} width={25} alt="icon" />
                </div>
                <div className="border border-gray mb-7"></div>
                <div className="flex justify-between items-center">
                  <Link className="text-[11px] text-red-600 underline" href="">
                    Details
                  </Link>
                  <Image src={icons.arrow} width={20} alt="arrow" />
                </div>
              </div>
            </div>
            <div className="md:w-[48%]">
              <Chart />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
