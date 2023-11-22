import { useState, useEffect } from "react";

function Form() {
    const [name, setName] = useState('');

    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Follow up Patients</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="text-indigo-600 font-bold">Manage them</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Pet's Name</label>
                    <input 
                        id="pet"
                        type="text"
                        placeholder="Pet's name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        onChange={ (event) => setName(event.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Owner's Name</label>
                    <input 
                        id="owner"
                        type="text"
                        placeholder="Owner's name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="Owner's contact email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="lDate" className="block text-gray-700 uppercase font-bold">Leaving date</label>
                    <input 
                        id="lDate"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="simptoms" className="block text-gray-700 uppercase font-bold">Leaving date</label>
                    <textarea 
                        id="simptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe the simptomps"
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
                    cursor-pointer transition-all"
                    value="Add patient"
                />
            </form>
        </div>
    )
}

export default Form;