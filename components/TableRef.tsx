import Link from 'next/link'
import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

type companyData = {
  title: string;
  id: string; // Add the id property to the type
}

type Props = {
  data: companyData[]
}

const TableRef = (props: Props) => {
  const numColumns = props.data.length;
  return (
    <div className={`w-full font-inter`}>
      <div className="bg-white text-emphasis shadow-md rounded my-6 font-medium">
        <div className="table-responsive">
          <table className="table-auto w-full font-fr">
            <tbody>
              {[...Array(9)].map((_, i) => (
                <tr key={i}>
                  {[...Array(numColumns)].map((_, j) => (
                    <td key={j} className={`py-3 border hover:bg-gray-100 px-6 text-center`}>
                      <Link href={`companies/${props.data[j].id}`}>{props.data[j]?.title}</Link>
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

export default TableRef;
