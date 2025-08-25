import React from 'react'
import { useState, useCallback, useEffect,useRef} from 'react'

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook to take a reference of password input field 
  const passwordRef = useRef(password)

  const copyPasswordtoClipboard = useCallback(() => {
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  //  memory cache mai rakhta hai 
  //  jab bhi koi dependency change hoti hai tabhi ye function firse banta ha
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char)
    }

    setPassword(pass)
    // jitni bhi dependecy hain unko yaha likhna hai if chnage then change this field 
  }, [length, numberAllowed, charAllowed, setPassword])

  // run karne ka goal yaha se hai 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center text-white px-4">
      <div className="w-full max-w-lg bg-gray-800/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6 border border-gray-700">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-cyan-400 drop-shadow-md mb-6">
          🔐 Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex items-center bg-gray-900 rounded-xl shadow-inner overflow-hidden mb-6">
        <input
          type="text"
          value={password}
          placeholder="password"
          className="flex-1 outline-none py-3 px-4 bg-transparent text-lg text-cyan-300 placeholder-gray-500"
          readOnly
          ref = {passwordRef}
        />
        <button
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 
                    hover:from-cyan-600 hover:to-cyan-500 
                    transition-all text-white font-semibold 
                    px-5 py-3 rounded-r-xl shadow-md shadow-cyan-500/30"
          onClick={copyPasswordtoClipboard}
        >
          Copy
        </button>
      </div>

        {/* Controls */}
        <div className="space-y-4 text-sm">
          
          {/* Length Row */}
          <div className="flex items-center justify-between">
            <label className="text-gray-300 font-medium w-32">Length</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="flex-1 mx-4 accent-cyan-500 cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <span className="text-cyan-400 font-bold w-8 text-right">{length}</span>
          </div>

          {/* Numbers Row */}
          <div className="flex items-center justify-between">
            <label className="text-gray-300 font-medium">Include Numbers</label>
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => { setNumberAllowed(prev => !prev) }}
              className="accent-cyan-500 w-5 h-5 cursor-pointer"
            />
          </div>

          {/* Symbols Row */}
          <div className="flex items-center justify-between">
            <label className="text-gray-300 font-medium">Include Symbols</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => { setCharAllowed(prev => !prev) }}
              className="accent-cyan-500 w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
