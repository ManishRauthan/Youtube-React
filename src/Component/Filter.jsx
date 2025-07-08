function Filter(props) {
  const filtered = ["All", "Music", "Adventure", "Gaming", "Edits"];

  function filteroption(e) {
    const target = e.target.outerText;
    // console.log(target);
    props.func(target);
  }
  return (
    <>
      <div className="flex space-x-10 h-10 justify-center items-center ">
        {filtered.map((filter) => (
          <div
            className=" bg-[#494949] text-white w-max h-7 px-4 rounded-xl  cursor-pointer"
            onClick={filteroption}
          >
            {filter}
          </div>
        ))}
      </div>
    </>
  );
}

export default Filter;
