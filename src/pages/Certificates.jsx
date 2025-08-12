import { getAllCertificate } from "../data/constant"
import ListCardCertificate from "../components/ListCardCertificate"

const Certificates = () => {
  const data = getAllCertificate();  

  return (
    <div className='w-full min-h-screen'>
        <ListCardCertificate data={ data } />
    </div>
  )
}

export default Certificates