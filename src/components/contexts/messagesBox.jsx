import svg2 from "../../img/search-normal.svg";
import { Link } from "react-router-dom";

const MessagesBox = () => {
    return (
        <div className="flex h-screen max-w-screen-2xl mx-auto antialiased text-gray-800">
            <div class="flex flex-col flex-auto h-full w-1/4 flex-shrink-0">
                <div class="flex flex-row items-center justify-center h-full w-full"></div>
                <div class="flex flex-col flex-auto  rounded-2xl w-full h-full p-4">
                    <div className="border p-4 mt-5 rounded-xl">
                        <div>
                            <h1 className="text-center font-semibold text-2xl my-3">
                                Messages
                            </h1>
                            <div class="my-3">
                                <form>
                                    <div>
                                        <div class="relative w-full">
                                            <input
                                                class="p-3 w-full z-20 text-sm text-gray-900 bg-blue-50 rounded-full border outline-none focus:border-blue-500"
                                                placeholder="Search"
                                                required
                                            />
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
                                        <img
                                            class="w-16"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                        />
                                    </div>
                                    <div className="px-2 w-96 ">
                                        <div className="flex justify-between">
                                            <h1 class="">UserName</h1>
                                            <span class="text-xs  text-gray-500">2 min ago</span>
                                        </div>
                                        <p class="text-start break-words overful-hidden text-sm">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>{" "}
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div class="flex border-y  py-3">
                                <div class="w-18 flex justify-content items-center">
                                    <img
                                        class="w-16"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt0yboM1y3PKIke01cHJpc0V7j-LAmoZ4PkQ&usqp=CAU"
                                    />
                                </div>
                                <div className="px-2 w-96 ">
                                    <div className="flex justify-between">
                                        <h1 class="">UserName</h1>
                                        <span class="text-xs  text-gray-500">2 min ago</span>
                                    </div>
                                    <p class="text-start break-words overful-hidden text-sm">
                                        Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessagesBox
