
interface IAddress {
  city: string,
  ward: number;
}

interface TextButtonProps extends React.PropsWithChildren{
  firstName?: string,
  isAdult?: boolean,
  age?: number,
  component1?: React.ReactNode,
  component2?: () => React.ReactElement,
  colors?: string[], // number[], IAddress[]
  address?: IAddress,
  onClick?: () => void,
}

function TextButton({ 
  firstName, 
  isAdult, 
  age = 30, 
  component1, 
  component2: Component2, 
  children,
  ...restProps 
}: TextButtonProps) {
  // console.log('TextButton: ', {
  //   firstName,
  //   isAdult,
  //   age,
  //   restProps: restProps,
  //   component1,
  //   Component2
  // })

  return (
    <>
      <button type="button">
        FirstName: {firstName} <br />
        Adult: {isAdult ? (<>Adult</>) : (<>Children</>)} <br/>
        {/* Name Bird: {props['name-bird']} */}
      </button>
      <br />
      Component 1:  {component1 && component1} <br />
      Component 2: {Component2 && <Component2 />} <br />
      {children} <br />

    </>
  )
}

export default TextButton