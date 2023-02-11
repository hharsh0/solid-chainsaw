
function Card({avatar,firstName,lastName,email}:any) {
  return (
    <div
      className="md p-4 w-full md:w-1/2 shrink-0"
      style={{ maxWidth: "544px" }}
    >
      <div className="h-full transform overflow-hidden rounded-md border-2 border-solid border-gray-200 bg-transparent bg-opacity-20 transition duration-500 hover:scale-105 hover:rounded-md hover:border-[#DE1D8D] hover:bg-gray-300 dark:border-gray-700 dark:hover:border-[#DE1D8D] dark:hover:bg-gray-800 shrink-0">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={avatar}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 object-cover">
            Employee
          </h2>
          <p className="leading-relaxed mb-3">
            {firstName} {lastName}
          </p>
          <p className="leading-relaxed mb-3">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card