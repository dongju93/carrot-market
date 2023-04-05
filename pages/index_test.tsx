import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <p className="first-letter:text-4xl first-letter:hover:bg-slate-600">asdfghjklqwertyui</p>
      {/*
      <ul className="list-decimal marker:text-teal-600">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
        <input type="file" className="file:hover:text-purple-500 file:hover:bg-white file:hover:border-4 file:transition-colors file:cursor-progress file:border-0 file:rounded-lg" />
      </ul>
      */}
      {/*
      <details className="select-none open:text-white open:bg-indigo-400">
        <summary className="select-none cursor-pointer">What's in my bag</summary>
        <span className="selection: bg-teal-400 selection:text-red-300">MacBook</span>
        <span className="selection: bg-teal-400 selection:text-red-300">iPad</span>
        <span className="selection: bg-teal-400 selection:text-red-300">USB Type C cable</span>
      </details>
      */}
      {/*
      <form className="flex flex-col space-y-2 p-5">
        <input 
          type="text" 
          required 
          placeholder="Username" 
          className="border p-1 border-gray-400 rounded-md peer" 
        />
        <span className="hidden peer-invalid:block text-red-500">Invalied input!</span>
        <span className="hidden peer-valid:block text-teal-600">You got it right</span>
        <input type="submit" value="Login" className="bg-slate-200" /> 
      </form>
      */}
    </div>
  );
}

export default Home;
