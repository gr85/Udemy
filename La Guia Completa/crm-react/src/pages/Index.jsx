import { useLoaderData } from "react-router-dom"
import Customer from "../components/Customer"


export function loader() {
  const customers = [
    {
      id: 1,
      name: 'Juan',
      phone: 102013313,
      email: 'juan@juan.com',
      company: 'Code With Juan'
    },
    {
      id: 2,
      name: 'Karen',
      phone: 130198313,
      email: 'karen@karen.com',
      company: 'Code With Karen'
    },
    {
      id: 3,
      name: 'Jaime',
      phone: 31983913,
      email: 'jaime@jaime.com',
      company: 'Code With Jaime'
    },
    {
      id: 4,
      name: 'Miguel',
      phone: 319387982,
      email: 'miguel@miguel.com',
      company: 'Code With Miguel'
    },
    {
      id: 5,
      name: 'Pedro',
      phone: 159845698,
      email: 'pedro@pedro.com',
      company: 'Code With Pedro'
    }
  ]
  
  return customers;
}

function Index() {
  const customers = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Customers</h1>
      <p className="mt-3">Manage your Customers</p>

      {customers.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Customer</th>
              <th className="p-2">Contact</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map( customer => (
              <Customer 
                customer={customer}
                key={customer.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No Customers yet</p>
      )}
    </>
  )
}

export default Index
