import React from "react";

import { Input } from "@/components/AdminPanel/Input";
import Dropdown from "./Dropdown";
import QuillEditor from "@/components/Editor/QuillEditor";


const AdminPanel = () => {

    return (
        <>
            <div className="max-w-[950px] min-w-[950px] ">
                <form className="border rounded-md border-emphasis">
                    <div className="grid p-6 grid-cols-2 gap-0">
                        <div className="grid grid-row-3 relative">
                            <div className="w-full h-9 mb-1">
                                <Input className="max-w-[350px]" type="text" placeholder="Company Name" />
                            </div>
                            <div className="w-full h-9 mb-1">
                                <Input className="min-w-max max-w-[350px]" type="text" placeholder="Tagline" />
                            </div>
                            <div className="w-full h-9 mb-1">
                                <Input className="min-w-max max-w-[350px]" type="text" placeholder="Tags" />
                            </div>
                            {/* <div className="w-full h-[37px] m-3">
                                <Input className=" max-w-[350px]" type="text" placeholder="Tagline" />
                            </div>
                            <div className="w-full h-[37px] m-3">
                                <Input className="max-w-[350px]" type="text" placeholder="Tags" />
                            </div> */}
                        </div>
                        <div className="relative w-full max-w-[550px] h-[190px] max-h-[190px]">
                            <QuillEditor  />
                            {/* <Menubar placeholder="Tags" /> */}
                        </div>
                    </div>

                    {/* Removed the checkbox for now */}

                    <div className="grid grid-flow-col mt-6">
                        <div className="max-w-[750px] w-[750px] h-[400px] max-h-[400px] overflow-hidden scrollbar-thin m-2 my-auto ">
                            {/* <Input className="min-" placeholder="Company Description" /> */}
                            <QuillEditor />
                            {/* <Menubar placeholder="Company Description" /> */}
                        </div>
                        <div className="flex flex-col items-center ">
                            <div className="h-[90px] mb-5 text-white rounded-full w-[90px] bg-black">
                                Logo URL
                            </div>

                            <div className="w-[120px] h-[37px] m-2">
                                <Input placeholder="Logo URL" />
                            </div>

                            <div className="w-[120px] min-w-[120px] h-[37px] m-2">
                                {/* <label htmlFor="">No. of E</label> */}
                                <Dropdown
                                    placeholder="No. of E"
                                    options={["1-10", "11-25", "26-50", "51-100", "100+"]}
                                />
                            </div>
                            <div className="w-[120px] h-[37px] m-2">
                                <Input className="text-sm w-[120px] max-w-[120px]" placeholder="No of M" />
                                {/* <DropDown text="No. of M"
                                options={["1-10", "11-25", "26-50", "51-100", "100+"]} /> */}
                            </div>
                            <div className="w-[92px] min-w-[120px] h-[37px] m-2">
                                <Input type="text" placeholder="Funding" />
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[320px] h-[340px] max-h-[340px] m-2">
                            {/* <Menubar placeholder="About Company" /> */}
                        </div>

                        <div className="w-[550px] h-[340px] max-h-[340px] m-2">
                            {/* <Menubar placeholder="description" /> */}
                        </div>
                    </div>

                    <div className="flex justify-end w-[875px]">

                    </div>
                </form>
            </div>
        </>
    );
};

export default AdminPanel;
