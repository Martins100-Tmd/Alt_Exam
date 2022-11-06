const View = () => {
  return (
    <div className="md:grid-cols-4 items-center w-full gap-3 grid grid-cols-2 sm:justify-between shadow p-2 rounded-sm">
      <div className="flex flex-row items-start p-3 rounded-sm shadow">
        <i className="fa text-2xl text-violet-900">&#xf007;</i>
        <div className="flex flex-col items-start ml-5">
          <h1 className="text-base font-rob font-bold">2</h1>
          <p className="font-rob text-10 text-violet-300">Followers</p>
        </div>
      </div>
      <div className="flex flex-row items-start p-3 rounded-sm shadow">
        <i className="fa text-2xl text-violet-900"> &#xf07b;</i>
        <div className="flex flex-col items-start ml-5">
          <h1 className="text-base font-rob font-bold">30</h1>
          <p className="font-rob text-10 text-violet-300">Repos</p>
        </div>
      </div>
      <div className="flex flex-row items-start p-3 rounded-sm shadow">
        <i className="fa text-2xl text-violet-900">&#xf0c0;</i>
        <div className="flex flex-col items-start ml-5">
          <h1 className="text-base font-rob font-bold">3</h1>
          <p className="font-rob text-10 text-violet-300">Contributors</p>
        </div>
      </div>
      <div className="flex flex-row items-start p-3 rounded-sm shadow">
        <i className="fa text-2xl text-violet-900 fa-spin">&#xf013;</i>
        <div className="flex flex-col items-start ml-5">
          <h1 className="text-base font-rob font-bold">2</h1>
          <p className="font-rob text-10 text-violet-300">Experience</p>
        </div>
      </div>
    </div>
  );
};

export default View;
