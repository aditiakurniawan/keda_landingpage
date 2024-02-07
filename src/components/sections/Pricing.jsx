function Pricing() {
  return (
    <section id="pricing" className="py-20 relative z-5">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="md:text-5xl text-5xl font-bold font-heading tracking-tight mt-7">
            Price Plans
          </h2>
          <div className="w-10 mx-auto mt-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-[2px]"></div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 2xl:px-28 mt-10">
          <div className="flex flex-col h-fit border border-gray-300 rounded-3xl overflow-hidden dark:border-gray-700 ">
            <div className="text-center pt-10">
              <h5 className="text-3xl font-heading font-semibold">Basic</h5>
              <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                <sup className="text-2xl align-middle">$</sup>49
              </h2>
              <span>per user, per month</span>
            </div>
            <div className="p-10">
              <ul className="mb-10 text-center">
                <li>
                  <h5 className="font-medium hover:text-gray-300">
                    Mencatat barang masuk
                  </h5>
                </li>
                <li>
                  <h5 className="font-medium hover:text-gray-300 my-4">
                    Mencatat barang keluar
                  </h5>
                </li>
                <li>
                  <h5 className="font-medium hover:text-gray-300">
                    Mencatat hasil keuntungan
                  </h5>
                </li>
              </ul>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="py-3 px-6 font-medium border rounded-xl border-black text-black hover:bg-black hover:text-white transition-all duration-500"
                >
                  Get Basic
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-20">
            <div className="absolute top-0 inset-x-0">
              <div className="flex justify-center">
                <span className="text-xs font-medium uppercase border border-gray-700 text-cyan-500 bg-white px-2 py-1 rounded-md -mt-3">
                  most popular
                </span>
              </div>
            </div>
            <div className="group">
              <div className="border rounded-xl border-gray-300 bg-white dark:border-gray-700 dark:bg-neutral-900">
                <div className="text-center">
                  <div className="flex flex-col">
                    <div className="text-center pt-10 text-white">
                      <h5 className="text-3xl font-heading font-semibold text-white">
                        Business
                      </h5>
                      <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                        <sup className="text-2xl align-middle">$</sup>69
                      </h2>
                      <span>per user, per month</span>
                    </div>

                    <div className="p-10">
                      <ul className="mb-10 text-center text-black">
                        <li className="my-4">
                          <h5 className="font-medium dark:text-gray-300">
                            Mencatat barang masuk dan keluar
                          </h5>
                        </li>
                        <li>
                          <h5 className="font-medium dark:text-gray-300">
                            Mencatat Keuntungan
                          </h5>
                        </li>
                        <li className="my-4">
                          <h5 className="font-medium dark:text-gray-300">
                            Dapat menganalisa hasil penjualan dengan CHART
                          </h5>
                        </li>
                        <li>
                          <h5 className="font-medium dark:text-gray-300">
                            Support 7x24 Jam
                          </h5>
                        </li>
                      </ul>
                      <div className="flex justify-center">
                        <a
                          href="#"
                          className="py-3 px-6 font-medium border rounded-xl border-purple-500 bg-purple-500  hover:bg-white hover:text-purple-500 text-white hover:bg-purple-500-800"
                        >
                          Get Business
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-gray-300 rounded-xl overflow-hidden dark:border-gray-700">
            <div className="text-center pt-10">
              <h5 className="text-xl font-semibold">Entrepreneur</h5>
              <h2 className="text-5xl mt-8 mb-3 items-center align-middle">
                <sup className="text-2xl align-middle">$</sup>89
              </h2>
              <span>per user, per month</span>
            </div>

            <div className="p-10">
              <ul className="mb-10 text-center">
                <li className="my-4">
                  <h5 className="font-medium hover:text-gray-300 text-black">
                    Mencatat barang masuk dan keluar
                  </h5>
                </li>
                <li>
                  <h5 className="font-medium hover:text-gray-300 text-black">
                    Mencatat Keuntungan
                  </h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium hover:text-gray-300 text-black">
                    Dapat menganalisa hasil penjualan dengan CHART
                  </h5>
                </li>
                <li>
                  <h5 className="font-medium hover:text-gray-300 text-black">
                    Support 7x24 Jam
                  </h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium hover:text-gray-300 text-black">
                    Export data ke Excel
                  </h5>
                </li>
                <li className="my-4">
                  <h5 className="font-medium hover:text-gray-300 text-black">
                    AI Prediksi penghasilan
                  </h5>
                </li>
              </ul>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="py-3 px-6 font-medium border rounded-md border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-500"
                >
                  Get Entrepreneur
                </a>
              </div>
            </div>
          </div>
        </div>
        <h5 className="text-center font-medium mt-14">
          lnterested in a custom plan?{" "}
          <a href="#" className="text-purple-500">
            Get in touch
          </a>
        </h5>
      </div>
    </section>
  );
}

export default Pricing;
