import { useEffect, useState } from "react";
import axios from 'axios';

const CardModal = (props) => {
  const [userInfo, setUserInfo] = useState();

  // useEffect(() => {
  //   axios.get(`https://api.github.com/users/${props.userUrl}`)
  //   .then(res => {
  //     console.log(res)
  //     setUserInfo(res)
  //   })
  // }, [])

  const closeModal = (e) => {
    props.onClose && props.onClose(e);
  }

 return (
  <>
    {props.showModal && 
      <div className="modal" id="modal">
        <h2 className='text-center font-bold'>{props.userUrl.login}</h2>
        
        <div className='content flex flex-col items-center'>
          <img className='py-4 px-4' src={props.userUrl.avatar_url}/>
          {/* <h3>{props.userUrl.login}</h3> */}
        </div>
        <div className='actions flex justify-center'>
          <button className='toggle-button' onClick={closeModal}>Close</button>
        </div>
      </div>
    } 
    {props.showModal && <div className="modal-overlay" id="modal-overlay"></div>}
  </>

  
 )
}

export default CardModal;