import { textData } from "../data/textData";

function ReportIssue() {
  const spiels = textData.find((data) => data.id === "lorem-ipsum");
  return (
    <>
      <div className="container mx-auto">
        <div className="w-full pt-5  text-dark">
          <h1 className="text-4xl mb-3">Report an issue</h1>
          <p>{spiels?.content}</p>
        </div>
      </div>
    </>
  );
}

export default ReportIssue;
