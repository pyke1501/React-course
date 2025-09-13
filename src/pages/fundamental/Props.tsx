

import { useDispatch } from "react-redux"
import TextButton from "../../components/ui/button/text-button"
import { useAppContext } from "../../context/AppContext"
import { setExpand } from "../../redux/sidebar.action";

/* props
 - use to pass props value into child component
 - parent pass props to N children

user = {
  name: '',
  paperBird: '',
  'paper bird': ''
}
// access property of object
user.name
user['name']
user['paper bird']

render 1 component in jsx
- Name component PascalCase
- alway: <></>
Eg: <Product />

destructuring object: phân rã từng properties
// const name = user.name;
const { name = 'tony' } = user;

rest operator -> get all remain properties
const { name, ...restProps } = user;

spread operator -> dàn trải các properties thay vì đi khai báo từng cái

*/


function Typography() {
  return (
    <div>this is Typography</div>
  )
}

function Props() {
  const dispatch = useDispatch();
  const product = {
    name: 'iphone',
    price: 200,
    isStock: true
  }
  const { theme } = useAppContext();


  function uppdateExpand() {
    dispatch(setExpand(true));
  }

  console.log('props theme: ', theme)

  return (
    <div>
      <h1>Props</h1> <br />
      Theme: {theme} <br />
      <TextButton 
        firstName="tony" // string
        isAdult={true} // boolean
        colors={['red', 'blue']} // array
        address={{
          city: 'hcm',
          ward: 13
        }} // object
        onClick={() => {}} // function
        name-bird="toto"
        component1={<Typography />}
        component2={Typography}
        {...product} // spread operator
      >
        this is children
        <button onClick={uppdateExpand}>Dispatch action update expand</button>
      </TextButton>
      
    </div>
  )
}

export default Props