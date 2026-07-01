
function Card({data}) {
    console.log(data)
  return (
    <div className='bg-zinc-200 tracking-tighter p-4 rounded '>
          <h1 className="font-semibold text-lg">{data.name}</h1>
          <p className="text-lg">Age: {data.age}</p>
          <p className="text-lg">Address: {data.address}</p>
          <p className="text-lg">Phone: {data.phoneNumber}</p>
        </div>
  )
}

export default Card