
import { ThreeDots } from 'react-loader-spinner';
const Loader = () =>  {
 return (
  <button type='button'>
 <ThreeDots 
   height="80" 
   width="80" 
   radius="9"
   color="#4fa94d" 
   ariaLabel="three-dots-loading"
   wrapperStyle={{}}
   wrapperClassName=""
   visible={true}
  
    />
  </button>
  
 );
}
export default Loader;