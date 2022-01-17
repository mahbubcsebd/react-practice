let title = 'My Card';
let desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores odit aut iste quam praesentium!';

// Component
function Card(props){
  return <div className="card">
            <h1 className="card-title" id="myId">{props.title}</h1>
            <p className='card-desc'>{props.desc}</p>
        </div>
}

export default Card;