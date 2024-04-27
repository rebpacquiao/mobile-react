import { textData } from "../data/textData";

function TaskOperator() {
  const spiels = textData.find((data) => data.id === "lorem-ipsum");
  return (
    <>
      <div className="container pt-5 pl-5 pr-5 text-dark">
        <div>{spiels?.content}</div>
      </div>
    </>
  );
}

export default TaskOperator;
