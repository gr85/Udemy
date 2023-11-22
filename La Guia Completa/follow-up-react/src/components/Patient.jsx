function Patient() {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
        <span className="font-normal normal-case">Manel</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">email: {''}
        <span className="font-normal normal-case">mail@mail.com</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Leaving Date: {''}
        <span className="font-normal normal-case">10 October 2022</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Simptoms: {''}
        <span className="font-normal normal-case">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Mollitia cum laudantium libero quia ullam eius veniam, quae ut consequatur nesciunt rem quam et, 
        itaque magnam quasi molestiae. Ratione, numquam exercitationem!</span>
        </p>
    </div>
  )
}

export default Patient
