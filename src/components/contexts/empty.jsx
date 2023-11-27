import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs'
import svg2 from '../../img/search-normal.svg'
import png2 from '../../img/bg-.svg'
import png1 from '../../img/bg-2.svg'
import { Link } from 'react-router-dom'

function Empty() {
  return (
    <div className="App">
      <h1></h1>
      <div class="flex h-screen max-w-screen-2xl mx-auto antialiased text-gray-800">
        <div class="flex flex-row h-full w-afull overflow-x-hidden">
          <div class="flex flex-col flex-auto h-full w-1/4 flex-shrink-0">
            <div class="flex flex-row items-center justify-center h-full w-full">
            </div>
            <div class="flex flex-col flex-auto  rounded-2xl w-full h-full p-4">
              <div className="border p-4 mt-5 rounded-xl">
                <div>
                  <h1 className="text-center font-semibold text-2xl my-3">Messages</h1>
                  <div class="my-3">
                    <form>
                      <div>
                        <div class="relative w-full">
                          <input class="p-3 w-full z-20 text-sm text-gray-900 bg-blue-50 rounded-full border outline-none focus:border-blue-500" placeholder="Search" required />
                          <div class="absolute top-0 right-0 p-3 text-sm font-medium h-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                            <img src={svg2} />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="flex flex-col space-y-1 mt-4  h-full border rounded-xl overflow-y-auto">
                <div class="flex flex-col h-full w-full px-5 overflow-x-auto mb-4">
                  <Link to={"/message"}>
                    <div class="flex  my-2 py-3">
                      <div class="w-18 flex justify-content items-center">
                        <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                      </div>
                      <div className="px-2 w-96 ">
                        <div className="flex justify-between">
                          <h1 class="">UserName</h1>
                          <span class="text-xs  text-gray-500">2 min ago</span>
                        </div>
                        <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      </div>
                    </div>
                  </Link>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>    <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>


                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                  <div class="flex border-y  py-3">
                    <div class="w-18 flex justify-content items-center">
                      <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />
                    </div>
                    <div className="px-2 w-96 ">
                      <div className="flex justify-between">
                        <h1 class="">UserName</h1>
                        <span class="text-xs  text-gray-500">2 min ago</span>
                      </div>
                      <p class="text-start break-words overful-hidden text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-auto h-full w-3/4 flex-shrink-0">
            <div
              class="flex flex-col flex-auto rounded-2xl w-full h-full p-4"
            >
              <div class="border px-5 rounded-xl my-5">
                <div class="flex py-3">
                  <div class="w-18 flex justify-content items-center">
                    <img class="w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU" />

                  </div>
                  <div className="px-2 w-full">
                    <div className='flex justify-between'>
                      <div className="">
                        <h1 class="font-semibold">None</h1>
                        <h1 class="text-xs  text-gray-500">None</h1>
                      </div>
                      <button className='rounded-full bg-gray-100 p-4'>
                        <BsThreeDotsVertical />
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div class="flex flex-col h-full w-full border rounded-xl overflow-x-auto mb-4">
                <div class="flex flex-col h-full">
                  <center><h1>None</h1></center>
                  
                  {/* <div class="grid grid-cols-12 gap-y-2">
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                        >
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>Lorem ipsum dolor sit amet !</div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-6 col-end-13 p-3 rounded-lg">
                      <div class="flex items-center justify-start flex-row-reverse">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>




                        <div
                          class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            <img src={png1} />
                          </div>
                          <div
                            class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                          >
                            Seen
                          </div>
                        </div>    <div
                          class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            <img src={png2} />
                          </div>
                          <div
                            class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                          >
                            Seen
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>      <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis, in.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-start-1 col-end-8 p-3 rounded-lg">
                      <div class="flex flex-row items-center">
                        <div
                          class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                        >
                          A
                        </div>
                        <div
                          class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                        >
                          <div class="flex flex-row items-center">
                            <button
                              class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10"
                            >
                              <svg
                                class="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                ></path>
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="1.5"
                                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                              </svg>
                            </button>
                            <div class="flex flex-row items-center space-x-px ml-4">
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-12 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-6 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-5 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-3 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                              <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                class="flex flex-row items-center h-16 border rounded-xl bg-white w-full px-2"
              >
                <div className='border-r border-gary-600 px-2'>
                  <button
                    class="flex items-center justify-center text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div class="flex-grow">
                  <div class="relative w-full">
                    <input

                      class="flex w-full outline-none rounded-xl focus:outline-none pl-4 h-10"
                      placeholder='None'
                    />

                  </div>
                </div>
                <div class="ml-4 flex gap-3 px-6">
                  <button
                    class="flex items-center justify-center rounded-xl text-white py-1 flex-shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.5">
                        <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#171725" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.2002 9.40009C5.2002 9.40009 6.2502 10.8001 8.0002 10.8001C9.7502 10.8001 10.8002 9.40009 10.8002 9.40009" stroke="#171725" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.90039 5.90015H5.90739" stroke="#171725" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.0996 5.90015H10.1066" stroke="#171725" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>
                  </button>
                  <button
                    class="flex items-center justify-center rounded-xl text-white py-1 flex-shrink-0"
                  >
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 5.51055L12.1931 21.3588L10.8042 12.5518L3.87163 6.94548L23 5.51055Z" fill="#2B59FF" stroke="#2B59FF" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M22.9987 5.50982L10.8394 12.6755" stroke="#2B59FF" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Empty;