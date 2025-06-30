import './App.css';

function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-cyan-700">
      <form
        action="submit"
        className="flex flex-col gap-4 bg-amber-700 w-[60vw] max-w-md p-8 rounded-2xl shadow-lg text-white"
      >
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="mb-1 text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Please enter your name!"
            className="px-4 py-2 rounded-md bg-yellow-200 text-black caret-amber-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <div className="flex flex-col text-left">
          <label htmlFor="password" className="mb-1 text-sm font-medium">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="*****"
            className="px-4 py-2 rounded-md bg-yellow-200 text-black caret-amber-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-yellow-300 text-amber-900 font-semibold py-2 px-6 rounded-lg hover:bg-yellow-400 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
