import Card from './Card'

const ListProject = ({ data }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 my-2'>
        {data.map((key, index) => (
          <Card
            id={key.id}
            key={index}
            image={key.image}
            name={key.name}
            description={key.description}
            status={key.status}
            tools={key.tools}
            duration={index}
          />
        ))}
    </div>
  )
}

export default ListProject