const CardModal = (props) => {

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