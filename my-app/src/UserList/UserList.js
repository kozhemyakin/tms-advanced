import data from "./data.json";

function UserList() {

  const mydata_map = data.map( (item) =>  {
    return (
        <div key={item._id} value={item._id}>
            <h3>{item.name.first}</h3>
            <h4>{item.name.last}</h4>
        </div>
    );
  });

  const mydata_filter = filter.map( (item) =>  {
    return (
        <div key={item._id} value={item._id}>
            <h3>{item.name.first}</h3>
            <h4>{item.name.last}</h4>
        </div>
    );
  });

  const mydata_reduce = data.map( (item) =>  {
    return (
        <div key={item._id} value={item._id}>
            <h3>{item.name.first}</h3>
            <h4>{item.name.last}</h4>
        </div>
    );
  });


  return (
    <container>
      <div>{mydata_map}</div>
    </container>
    
)}

export default UserList;