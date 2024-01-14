import { useEffect, useState } from "react";

function App() {
  // two state, one for event value, and one to query from api to get the data
  const [query, setquery] = useState("RTX 4090");
  const [apiquery, setapiquery] = useState("");

  // performance optimisation = when user stop typing for 500ms
  useEffect(() => {
    const timeoutid = setTimeout(() => {
      setapiquery(query);
    }, 500);
    return () => clearTimeout(timeoutid);
  }, [query]);

  // storing query in state when user types
  function handlechange(event) {
    setquery(event.target.value);
  }
  return (
    <div className="flex flex-col gap-8">
      <header className="container flex justify-center items-center h-20 border-b-2 border-gray-200">
        <h1 className="text-4xl font-semibold font-poppins">
          Search Component
        </h1>
      </header>
      <section className="container flex flex-col gap-16 justify-center">
        <div>
          <input
            className="input"
            type="text"
            onChange={handlechange}
            value={query}
            placeholder="Search for something"
          />
        </div>
        <h1 className="text-4xl font-medium text-center uppercase font-roboto">
          This is Query to the backend api:{" "}
          <span className="font-poppins font-semibold text-blue-500 normal-case underline">
            {apiquery}
          </span>
        </h1>
      </section>
    </div>
  );
}

export default App;
