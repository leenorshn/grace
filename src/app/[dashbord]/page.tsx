"use client"

import { useEffect, useState } from "react"
import getAlertData, { deletePost } from "../api/get-data";
import { useParams } from "next/navigation";



export default function Example() {

  const [notification, setNotification] = useState<any>([])
  const { dashbord } = useParams()

  console.log(dashbord);


  useEffect(() => {
    async function loadData(params: any) {
      var data = await getAlertData(dashbord)
      console.log(data);

      setNotification([...data])
    }

    loadData(dashbord)
  }, [])





  return (
    <div className="px-4 sm:px-6 lg:px-8 h-screen">
      <div className="sm:flex sm:items-center max-w-4xl mx-auto mt-8">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold leading-6 text-gray-900">Alert d urgence UOR</h1>

        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <div>
            <a href="/" className="px-8 py-2 rounded-md bg-black text-white">Retour</a>

          </div>
        </div>
      </div>
      <div className="mt-8 flow-root max-w-5xl mx-auto">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Alert
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Localisation
                    </th>

                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {notification.map((person, i) => (
                    <tr key={i}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person?.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.detail ?? ""}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.position.toString()}</td>

                      <td className="relative whitespace-nowrap space-x-4 py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <button onClick={(e) => {
                          e.preventDefault()
                          deletePost(person._id)
                        }} className="text-red-600 hover:text-red-900">
                          effacer <span className="sr-only">,</span>
                        </button>
                        <a href="/map" className="text-indigo-600 hover:text-indigo-900">
                          voir <span className="sr-only">,</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
