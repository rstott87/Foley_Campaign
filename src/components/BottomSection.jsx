const BottomSection = function () {
  return (
    <div>
      {/* <img
        className="z-0 absolute w-full"
        src="https://lh3.googleusercontent.com/0zfnFoLcYt2PNw-MnylNdTjJaZBMrpTIUX3g71aFQf_5FeBskmysZFEROxf3zePa1nlLaWZ-APNbpFaLt5xTlhGla6VozaWx_Jznw4ZD0dO1EERoZ-2R33ZJlkeoIokyIfuQJ0Fq_Q=w2400"
        alt=""
      /> */}
      <div
        id="about"
        className="z-30 opacity-80 bg-gradient-to-b from-neutral-100 to-violet-300 "
      >
        <div className="m-auto w-96 py-5 px-8 lg:w-auto">
          <h1 className="mb-2 text-center text-3xl font-bold leading-loose">
            About Dave
          </h1>
          <p className="text-center text-lg font-bold italic tracking-wide lg:tracking-tight">
            Dave has been an employee with the Department of Revenue's Child Support Enforcement Division for over 10 years. Not long after his career began at DOR, he became actively involved with SEIU as a union steward. Dave's reputation as an attentive and accesible steward led to decisve victories in both of his campaigns for chapter president, a position which he currently holds. As chapter president, he's become known as someone who's easy to reach and quick to get things done.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
