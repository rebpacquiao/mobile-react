import { textData } from "../data/textData";
const spiels = textData.find((data) => data.id === "lorem-ipsum");

function ComingSoon() {
  return (
    <>
      <div className="container pt-5 pl-5 pr-5 text-dark">
        <div>{spiels?.content}</div>
      </div>
    </>
  );
}

export default ComingSoon;
