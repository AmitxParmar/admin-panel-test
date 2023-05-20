import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/AdminPanel/select"

import { cn } from '@/lib/utils'

interface IDropdown {
    options: string[]
    className?: string
    placeholder?: string

}

const Dropdown: React.FC<IDropdown> = ({  options, className, placeholder }) => {
    return (
        <Select>
            <SelectTrigger className={cn(
                "w-full",
                className
            )}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {options.map((item, index) => (
                    <SelectItem key={index} value={item}>{item}</SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}

export default Dropdown