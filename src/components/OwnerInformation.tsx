import sevronLogo from "../assets/img/Sevron_Full.png";
import { textData } from "../data/textData";

function OwnerInformation() {
  const spiels = textData.find((data) => data.id === "owner-information");
  return (
    <>
      <div className="px-5 pt-5 mt-5 intro-y box text-dark">
        <div className="flex flex-col sm:flex-row pb-5 -mx-5 border-b border-slate-200/60 dark:border-darkmode-400">
          <div className="flex flex-col sm:flex-row items-center justify-center flex-1 px-5 sm:justify-start">
            <div className="relative flex-none image-fit">
              <img
                src={sevronLogo}
                alt="Sevron Logo"
                className="rounded-full"
              />
            </div>
            <div className="ml-5 mr-5">
              <div className="text-lg font-medium truncate sm:w-40 sm:whitespace-normal">
                {spiels?.title}
              </div>
              <div className="text-slate-500 font-1xl">{spiels?.subTitle}</div>
            </div>
            <div className="flex-1 px-5 pt-5 mt-6 sm:border-l sm:mt-0 border-slate-200/60 dark:border-darkmode-400 sm:pt-0">
              <h3 className="text-2xl text-left mb-2 sm:mt-3">
                {spiels?.contactDetails}
              </h3>
              <div className="flex flex-col">
                {spiels &&
                  spiels.companyInfo &&
                  spiels.companyInfo.map((info) => (
                    <div
                      className="flex items-center truncate sm:whitespace-normal"
                      key={info.title}
                    >
                      <span className="mr-2">
                        <strong>{info.title}</strong>
                      </span>
                      <span>{info.value}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerInformation;
