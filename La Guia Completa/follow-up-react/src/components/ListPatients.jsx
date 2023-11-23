import Patient from "./Patient"


function ListPatients({ patients, setPatient, deletePatient }) {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      { patients && patients.length ? (
          <>
            <h2 className="font-black text-3xl text-center">Patients List</h2> 
            <p className="text-xl mt-5 mb-10 text-center">
              Manage your {''}
              <span className="text-indigo-600 font-bold">Patients and Appointments</span>
            </p>
    
            { patients.map( (patient) => {
                return (
                  <Patient 
                    key={patient.id}
                    patient={patient}
                    setPatient={setPatient}
                    deletePatient={deletePatient}
                  />
                )
            })}
          </> 
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No Patients</h2> 
            <p className="text-xl mt-5 mb-10 text-center">
              Start by adding new patient {''}
              <span className="text-indigo-600 font-bold">and will be shown here</span>
            </p>
          </>
        ) 
      }
       
             
    </div>
  )
}

export default ListPatients
