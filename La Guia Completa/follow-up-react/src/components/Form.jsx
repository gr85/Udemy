import { useState, useEffect } from "react";
import Error from "./Error";

function Form({ patients, setPatients, patient, setPatient }) {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [simptomps, setSimptomps] = useState('');
    const [error, setError] = useState(false);

    useEffect( () => {
        if(Object.keys(patient).length > 0) {
            setName(patient.name);
            setOwner(patient.owner);
            setEmail(patient.email);
            setDate(patient.date);
            setSimptomps(patient.simptomps);
        }
    }, [patient]);

    const generateId = () => {
        const random = Math.random().toString(36).substring(0,1);
        const date = Date.now().toString(36);

        return random + date
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Form validation
        if([name, owner, email, date, simptomps].includes('')) {
            setError(true);
            return;
        }

        setError(false);

        // Object patient
        const objectPatient = {
            name,
            owner,
            email,
            date,
            simptomps
        }

        if(patient.id) {
            // We are in edit mode
            objectPatient.id = patient.id;
            const patientsUpdate = patients.map( patientState => 
                patientState.id === patient.id ? objectPatient : patientState                
            )

            setPatients(patientsUpdate);
            setPatient({})
        } else {
            // We are in add mode
            objectPatient.id = generateId();
            setPatients([...patients, objectPatient]);
        }

        // Reset form
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSimptomps('');
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Follow up Patients</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Add Patients and {''}
                <span className="text-indigo-600 font-bold">Manage them</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error && <Error><p>All fields are necessary</p></Error> }
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
                        value={owner}
                        onChange={ (event) => setOwner(event.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="Owner's contact email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (event) => setEmail(event.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="lDate" className="block text-gray-700 uppercase font-bold">Leaving date</label>
                    <input 
                        id="lDate"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={ (event) => setDate(event.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="simptoms" className="block text-gray-700 uppercase font-bold">Leaving date</label>
                    <textarea 
                        id="simptoms"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe the simptomps"
                        value={simptomps}
                        onChange={ (event) => setSimptomps(event.target.value) }
                    />
                </div>

                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700
                    cursor-pointer transition-all"
                    value={ patient.id ? 'Edit Patient' : 'Add Patient' }
                />
            </form>
        </div>
    )
}

export default Form;