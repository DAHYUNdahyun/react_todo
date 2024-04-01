import './List.css'

export default function List(props) {
  // 1.
  // const fruits = ["apple", 78, "banana", 8, "pineapple"]
  // fruits.sort()
  // const listItem = fruits.map((fruit,index) => <li key={index}>{fruit}</li>)
  // return(
  //   <ul>
  //     {listItem}
  //   </ul>
  // )

  //2qjs
  // const fruits = [{id:1, name:'apple', calories:95},
  //                 {id:2, name:'orange', calories:45},
  //                 {id:3, name:'banana', calories:105},
  //                 {id:4, name:'cocount', calories:159},
  //                 {id:5, name:'pineapple', calories:37}];
  
  // // 오름차순(문자열)
  // fruits.sort((a, b) => a.name.localeCompare(b.name))
  // // 내림차순(문자열)
  // fruits.sort((a, b) => b.name.localeCompare(a.name))
  // // 칼로리
  // fruits.sort((a, b) => a.calories - b.calories)
  // fruits.sort((a, b) => b.calories - a.calories)
  // // const listItem = fruits.map((fruit,index) => <li key={index}>{fruit.name} : {fruit.calories}</li>)

  // const lowCalFruits = fruits.filter(fruit => fruit.calories >= 100);
  // const listItem = lowCalFruits.map((fruit,index) =>
  //                           <li key={index}>
  //                             {fruit.name} : {fruit.calories}
  //                           </li>)
  // return(
  //   <ul>
  //     {listItem}
  //   </ul>
  // )

  // 3번
  const category = props.category;
  const itemList = props.items;

  const listItem = itemList.map(item => <li key={item.id}>
                                          {item.name}: &nbsp; 
                                          <b>{item.calories}</b>
                                        </li>);
  return(
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{listItem}</ul>
    </>
  )
}
