import { useState } from "react";
import ChildTwo from "../CaseTwo/ChildTwo";
import ChildOne from "./ChildOne";

const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-orange-700 max-w-7xl mx-auto m-10 rounded-md">
      <h1 className="m-5 text-xl">Parent</h1>
      <ChildOne setCount={setCount} count={count} />
      <ChildTwo setCount={setCount} count={count} />
    </div>
  );
};

export default Parent;
