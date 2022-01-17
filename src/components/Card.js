// Component
function Card(props){
  // Destructuring Object
  const {title,desc} = props;
  return <div className="card">
            <h1 className="card-title" id="myId">{title}</h1>
            <p className='card-desc'>{desc}</p>
        </div>
}

export default Card;