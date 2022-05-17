import data from "./data.json";

function UserList() {

  // MAP
  const mydata_map = data.map( (item) => {
    return (
        <div key={item._id} value={item._id}>
            <h3>{item.name.first}</h3>
            <h4>{item.name.last}</h4>
            <h5>{item.age}</h5>
        </div>
    );
  });

  // FILTER
  function aboveEighteeen (item) {
    return item.age === 40;
  }

  const mydata_filter = data.filter(aboveEighteeen).map( (item) => {
    return (
        <div key={item._id} value={item._id}>
            <h3>{item.name.first}</h3>
            <h4>{item.name.last}</h4>
            <h5>{item.age}</h5>
        </div>
    );
  });;

  // REDUCE
  const mydata_reduce = data.reduce( (acc, item) => {
      acc.push((
        <div key={item._id} value={item._id}>
            <h5>{item.age} is here</h5>
        </div>
    ))

    return acc
  }, []);

  return (
    <div>
        <div>{mydata_map}</div>
        <div>{mydata_filter}</div>
        <div>{mydata_reduce}</div>
    </div>
    
)}

export default UserList;