import Card from '../components/Card';
import { useState, useEffect } from 'react';

async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

function Data() {

  const [data, setData] = useState<any>([]);
  
  

   useEffect(() => {
     async function getData() {
       const apiData = await fetchData("https://reqres.in/api/users?page=1");
       setData(apiData.data);
       console.log(apiData.data)
     }
     getData();
   }, []);


  return (
    <>
      <div className="mx-auto max-w-6xl divide-y divide-gray-400">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Data
          </h1>
          <p className="text-md leading-7 text-gray-500 dark:text-gray-400">
            Data of all employees working at our organisation.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {data && data.map((item:any,key:any) => (
                <Card key={key} avatar={item.avatar} firstName={item.first_name} lastName={item.last_name} email={item.email} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Data