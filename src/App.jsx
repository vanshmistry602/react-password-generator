import { useState, useCallback, useEffect, useRef } from "react";

function App() {
	const [length, setLength] = useState(16);
	const [numberAllowed, setNumberAllowed] = useState(true);
	const [symbolAllowed, setSymbolAllowed] = useState(true);
	const [password, setPassword] = useState("");

	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let randomPassword = "";
		let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (numberAllowed) {
			characters += "0123456789";
		}
		if (symbolAllowed) {
			characters += "!@#$%^&*()_+[]{}|;:,.<>?";
		}
		for (let i = 1; i <= length; i++) {
			const randomIndex = Math.floor(Math.random() * characters.length + 1);
			randomPassword += characters.charAt(randomIndex);
		}
		setPassword(randomPassword);
	}, [length, numberAllowed, symbolAllowed, setPassword]);

	const copyPasswordToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, length);
		window.navigator.clipboard.writeText(password);
	}, [password, passwordRef]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, symbolAllowed]);

	return (
		<>
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-700">
				<h1 className="text-white text-center my-3">Password Generator</h1>
				<div className="flex shadow-md rounded-lg overflow-hidden mb-4">
					<input
						type="text"
						value={password}
						className="outline-none w-full py-1 px-3 bg-white text-gray-800 font-semibold text-lg"
						placeholder="Generated Password"
						readOnly
						ref={passwordRef}
					/>
					<button
						className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
						onClick={copyPasswordToClipboard}
						title="Copy to Clipboard"
						style={{ cursor: "pointer" }}
					>
						Copy
					</button>
				</div>
				<div className="flex text-sm gap-x-2">
					<div className="flex items-center gap-x-1">
						<input
							type="range"
							min={6}
							max={64}
							value={length}
							className="cursor-pointer"
							id="length"
							onChange={(e) => setLength(e.target.value)}
						/>
						<label htmlFor="length">Length: {length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numberAllowed}
							id="numberInput"
							onChange={() => {
								setNumberAllowed((previous) => !previous);
							}}
						/>
						<label htmlFor="numberInput">Numbers</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={symbolAllowed}
							id="characterInput"
							onChange={() => {
								setSymbolAllowed((previous) => !previous);
							}}
						/>
						<label htmlFor="characterInput">Characters</label>
					</div>
				</div>
				<br />
				<h2 className="text-white font-bold">Developed by Vansh Mistry</h2>
			</div>
		</>
	);
}

export default App;
