import React from 'react';
import Table from '@/components/TableRef';
import TableRef from '@/components/TableRef';

const Data: React.FC = () => {
  
const data = [
{
  id: "23xc872g",
  title: "Company Name"
},
{
  id: "23xc872g",
  title: "Company Name"
},
{
  id: "23xc872g",
  title: "Company Name"
},
]
  return (
    <div className="w-full p-24">
      <TableRef data={data}/>
    </div>
  );
};

export default Data;
