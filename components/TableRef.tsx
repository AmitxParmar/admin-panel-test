
import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

type Props = {
    data: {
        title: string
        id: string
    }[]
}

const TableRef = (props: Props) => {
    const numColumns = props.data.length;
    return (
        <div className={`w-full ${inter.className}`}>
            <div className="bg-white text-emphasis shadow-md rounded my-6 font-medium">
                <div className="table-responsive">
                    <table className="table-auto w-full text-black font ">
                        <tbody>
                            {[...Array(7)].map((_, i) => (
                                <tr key={i}>
                                    {[...Array(numColumns)].map((_, j) => (
                                        <td key={j} className={`py-3 border hover:bg-gray-100 px-6 text-center $`}>
                                            <Link href={`/companies/${props.data.id}`}>
                                                {props.data[j]?.title}
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableRef