import { expect, it } from "vitest";

export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

interface Props{
  className: string 

}

// or 
export type ButtonProps = {
  className: string
}
const Button: React.FC<Props> = (props) => {
  <button className={props.className}> test </button>
}

{/* <Button> test</Button> */}
it("Should add the two numbers together", () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
});
