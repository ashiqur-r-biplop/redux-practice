import Counter from "../../Component/Counter";

const ChildTwo = ({ count, setCount }) => {
  return (
    <div className="border-2 border-purple-600 m-10 max-w-4xl mx-auto rounded-md">
      <div className="bg-purple-300 w-10 h-10 m-5 rounded-full text-3xl grid place-content-center">
        <p>2</p>
      </div>
      <div className="w-full grid place-content-center">
        <Counter count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default ChildTwo;
