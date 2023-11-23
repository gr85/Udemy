function Patient({ patient, setPatient, deletePatient }) {
  const { name, email, date, simptomps, id } = patient

  const handleDelete = () => {
    // Deleting
    const answer = confirm('Do you really want to delete this patient?');

    if(answer) {
      deletePatient(id);
    }    
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
        <span className="font-normal normal-case">{name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">email: {''}
        <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Leaving Date: {''}
        <span className="font-normal normal-case">{date}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Simptoms: {''}
        <span className="font-normal normal-case">{simptomps}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button 
              type="button"
              className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
              onClick={() => setPatient(patient)}
          >Edit</button>

            <button 
              type="button"
              className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
              onClick={handleDelete}
            >Delete</button>
        </div>
    </div>
  )
}

export default Patient
