const CartDetail = () => {
    return (
      <>
        <section className=" relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
            <div className="grid grid-cols-12">
              <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                <div className="flex items-center justify-between pb-8 border-b border-gray-300">
                  <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                    Giỏ hàng
                  </h2>
                  <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                    3 Sản phẩm
                  </h2>
                </div>
                <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
                  <div className="col-span-12 md:col-span-7">
                    <p className="font-normal text-lg leading-8 text-gray-400">
                      Chi tiết sẩn phẩm
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="grid grid-cols-5">
                      <div className="col-span-3">
                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                          Số lượng
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                          Giá
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                  <div className="w-full md:max-w-[126px]">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="perfume bottle image"
                      className="mx-auto rounded-xl object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                      <div className="flex flex-col max-[500px]:items-center gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">
                          Trà sữa bí đao
                        </h6>
                        <h6 className="font-normal text-base leading-7 text-gray-500">
                          Trà sữa
                        </h6>
                        <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                          25.000đ
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                          placeholder={"1"}
                        />
                        <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                      <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                        25.000đ
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                  <div className="w-full md:max-w-[126px]">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="perfume bottle image"
                      className="mx-auto rounded-xl object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                      <div className="flex flex-col max-[500px]:items-center gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">
                          Trà sữa khoai môn
                        </h6>
                        <h6 className="font-normal text-base leading-7 text-gray-500">
                          Trà sữa
                        </h6>
                        <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                          $25.000đ
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                          placeholder={"1"}
                        />
                        <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                      <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                        $25.000đ
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group">
                  <div className="w-full md:max-w-[126px]">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="perfume bottle image"
                      className="mx-auto rounded-xl object-cover"
                    />
                  </div>
  
                  <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                      <div className="flex flex-col max-[500px]:items-center gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">
                          Trà sữa 3Q
                        </h6>
                        <h6 className="font-normal text-base leading-7 text-gray-500">
                          Trà sữa
                        </h6>
                        <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                          $25.000đ
                        </h6>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[73px] min-w-[60px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                          placeholder={"1"}
                        />
                        <button className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300">
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            viewBox="0 0 22 22"
                            fill="none"
                          >
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              strokeOpacity="0.2"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                      <p className="font-bold text-lg leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-indigo-600">
                        25.000đ
                      </p>
                    </div>
                  </div>
                </div>
  
                <div className="flex items-center justify-end mt-8">
                  <button className="flex items-center px-5 py-3 rounded-full gap-2 border-none outline-0 group font-semibold text-lg leading-8 text-indigo-600 shadow-sm shadow-transparent transition-all duration-500 hover:text-indigo-700">
                    Nhận mã giảm giá
                    <svg
                      className="transition-all duration-500 group-hover:translate-x-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                        stroke="#4F46E5"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
  
              <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                  Thông tin đơn hàng
                </h2>
                <div className="mt-8">
                  <div className="flex items-center justify-between pb-2">
                    <p className="font-normal text-lg leading-8 text-black">
                      3 Sản phẩm:
                    </p>
                    <p className="font-medium text-lg leading-8 text-black">
                      75.000đ
                    </p>
                  </div>
                  <div className="flex items-center justify-between pb-2">
                    <p className="font-normal text-lg leading-8 text-black">
                      Người nhận:
                    </p>
                    <p className="font-medium text-lg leading-8 text-black">
                      Nguyễn Văn Mừng
                    </p>
                  </div>
                  <form>
                    <label className="font-normal text-lg leading-8 text-black">
                      Số điện thoại:
                    </label>
                    <div className="flex pb-4 w-full">
                      <div className="relative w-full ">
                        <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                        <input
                          type="text"
                          className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                          placeholder="xxxx xxxx xxxx"
                        />
                        <button
                          id="dropdown-button"
                          data-target="dropdown"
                          className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                          type="button"
                        >
                          <svg
                            className="ml-2 my-auto"
                            width={12}
                            height={7}
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                              stroke="#6B7280"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center border-b border-gray-200">
                      <button className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                        Đồng ý
                      </button>
                    </div>
                    <div className="flex items-center justify-between py-8">
                      <p className="font-medium text-xl leading-8 text-black">
                        3 Sản phẩm:
                      </p>
                      <p className="font-semibold text-xl leading-8 text-indigo-600">
                        75.000đ
                      </p>
                    </div>
                    <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-green-700">
                      Thanh toán
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  export default CartDetail;
  