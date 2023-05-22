import React from "react";

import { Input } from "@/components/AdminPanel/Input";
import Dropdown from "./Dropdown";
import QuillEditor from "@/components/Editor/QuillEditor";
import { Button } from "./Button";
import Image from "next/image";


const AdminPanel = () => {

    const handleSubmit = () => {
        console.log("submitted successfully")
    }

    return (
        <form className="m-auto border w-[950px] bg-white drop-shadow-lg min-h-full p-7 rounded-md border-[#ccc]" onSubmit={() => handleSubmit()}>

            <div className="grid grid-cols-2 w-full h-[150px]">
                <div className="grid grid-row-3 max-h-56 gap-0 mr-4 relative">
                    <Input className="max-w-[350px] placeholder:text-gray-400 min-w-full w-full h-9 mb-1" type="text" placeholder="Company Name" />
                    <Input className="max-w-[350px] placeholder:text-gray-400 min-w-full w-full h-9 mb-1" type="text" placeholder="Tagline" />
                    <Input className="max-w-[350px] placeholder:text-gray-400 min-w-full w-full h-9 mb-1" type="text" placeholder="Tags" />
                </div>
                <div className="h-auto border-b border-[#ccc] mb-4 overflow-hidden">
                    <QuillEditor />
                </div>
            </div>

            {/* Removed the checkbox for now */}
            <div className="h-[350px] justify-between relative grid grid-flow-col mt-1">
                <div className="h-auto w-[750px] border-b border-[#ccc] mb-4 overflow-hidden">
                    <QuillEditor />
                </div>

                <div className="relative flex flex-col items-center justify-center w-fit">
                    <div className="h-[90px] mb-5 text-white rounded-full w-[90px] bg-black overflow-hidden border border-[#ccc] shadow-sm">
                        <Image
                            src={"https://www.gravatar.com/avatar/fallback?s=160&d=mp&r=PG"}
                            height={90}
                            width={90}
                            alt="upload profile"
                        />
                    </div>
                    <Input className="text-sm placeholder:text-gray-400 w-[120px] max-w-[120px] h-9 my-2" placeholder="Logo URL" />
                    <Input className="text-sm placeholder:text-gray-400 w-[120px] max-w-[120px] h-9 my-2" placeholder="Funding" />
                    <Input className="text-sm placeholder:text-gray-400 w-[120px] max-w-[120px] h-9 my-2" placeholder="No of M" />
                    <Dropdown
                        className="w-[120px] min-w-[120px] h-9 my-2"
                        placeholder="No. of E"
                        options={["1-10", "11-25", "26-50", "51-100", "100+"]} />
                </div>
            </div>
            <Button className="w-full mt-5">Save</Button>
        </form>
    );
};

export default AdminPanel;
