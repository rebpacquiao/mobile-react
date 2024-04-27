import sevronLogo from "../assets/img/Sevron_Full.png";

function OwnerInformation() {
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
                COSHH Risk ASSESSMENT
              </div>
              <div className="text-slate-500 font-1xl">
                for industry Cleaner 500ml
              </div>
            </div>
            <div className="flex-1 px-5 pt-5 mt-6 sm:border-l sm:mt-0 border-slate-200/60 dark:border-darkmode-400 sm:pt-0">
              <div className="font-medium text-left sm:mt-3">
                Contact Details
              </div>
              <div className="flex flex-col">
                <div className="flex items-center truncate sm:whitespace-normal">
                  <span className="mr-2">
                    <strong>Company</strong>
                  </span>
                  <span>Sevron Ltd.</span>
                </div>
                <div className="flex items-center truncate sm:whitespace-normal">
                  <span className="mr-2">
                    <strong>Assessed By</strong>
                  </span>
                  <span>Sebastian Shaw</span>
                </div>
                <div className="flex items-center truncate sm:whitespace-normal">
                  <span className="mr-2">
                    <strong>Assessed On</strong>
                  </span>
                  <span>07/07/2022</span>
                </div>
                <div className="flex items-center truncate sm:whitespace-normal">
                  <span className="mr-2">
                    <strong>Review Date</strong>
                  </span>
                  <span>On SDS update</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerInformation;
