const SectionHeading = ({ spanValue = "", data = "" }) => {
  return (
    <h1 className="text-center mx-[3rem] md:mx-[6rem] text-[4rem] p-4 border-b border-[var(--color-white)]/40 text-[var(--color-white)] mb-16">
      {data === "My" ? (
        <>
          {data} <span className="text-[var(--color-yellow)]">{spanValue}</span>
        </>
      ) : (
        <>
          <span className="text-[var(--color-yellow)]">{spanValue}</span> {data}
        </>
      )}
    </h1>
  );
};

export default SectionHeading;
