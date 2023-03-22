// General
const numbers = document.querySelectorAll(".numbers"); // Done
const operators = document.querySelectorAll(".operators");
const pi = document.querySelector(".pi"); // Done
const eNotation = document.querySelector(".e"); // Done
const clear = document.querySelector(".clear"); // Done
const clearAll = document.querySelector(".clearall"); // Done
const posNeg = document.querySelector(".pos-neg"); // Done
const equals = document.querySelector(".equals");
const reciprocal = document.querySelector(".reciprocal"); // Done
const memoryAdd = document.querySelector(".memoryadd");
const memoryRemove = document.querySelector(".memoryremove");
const memoryRead = document.querySelector(".memoryread");
const memoryClear = document.querySelector(".memoryclear");
const subNumHold = document.querySelector(".subnumhold"); // Done
const mainNumHold = document.querySelector(".mainnumhold"); // Done
let posTrue = true;
let finalCalc;
mainNumHold.textContent = "0";

// Numbers
numbers.forEach((n) => {
	n.addEventListener("click", () => {
		if (mainNumHold.textContent === "" && n.textContent === ".") {
			console.log("Error!");
		} else if (
			mainNumHold.textContent.indexOf(".") > -1 &&
			n.textContent === "."
		) {
			console.log("Error!");
		} else if (mainNumHold.textContent === "0" && n.textContent !== ".") {
			mainNumHold.textContent = n.textContent;
		} else if (mainNumHold.textContent === "-0" && n.textContent !== ".") {
			mainNumHold.textContent = "-" + n.textContent;
		} else {
			mainNumHold.textContent += n.textContent;
		}
	});
});

// Operators

operators.forEach((op) => {
	op.addEventListener("click", () => {
		if (mainNumHold.textContent === "") {
			console.log("Error!");
		} else if (
			subNumHold.textContent != "" &&
			subNumHold.textContent.indexOf("=") < 1 &&
			mainNumHold.textContent != ""
		) {
			if (subNumHold.textContent.includes("+")) {
				finalCalc =
					parseFloat(subNumHold.textContent) +
					parseFloat(mainNumHold.textContent);
			} else if (subNumHold.textContent.includes("-")) {
				finalCalc =
					parseFloat(subNumHold.textContent) -
					parseFloat(mainNumHold.textContent);
			} else if (subNumHold.textContent.includes("x")) {
				finalCalc =
					parseFloat(subNumHold.textContent) *
					parseFloat(mainNumHold.textContent);
			} else if (subNumHold.textContent.includes("÷")) {
				finalCalc =
					parseFloat(subNumHold.textContent) /
					parseFloat(mainNumHold.textContent);
			} else if (subNumHold.textContent.includes("%")) {
				finalCalc =
					parseFloat(subNumHold.textContent) %
					parseFloat(mainNumHold.textContent);
			} else if (subNumHold.textContent.includes("^")) {
				finalCalc =
					parseFloat(subNumHold.textContent) **
					parseFloat(mainNumHold.textContent);
			}
			subNumHold.textContent = `${finalCalc} ${op.textContent}`;
			mainNumHold.textContent = "0";
		} else {
			subNumHold.textContent = `${mainNumHold.textContent} ${op.textContent}`;
			mainNumHold.textContent = "0";
		}
	});
});

// Clear And Clear All
clear.addEventListener("click", () => {
	mainNumHold.textContent = mainNumHold.textContent.slice(0, -1);
	if (mainNumHold.textContent === "") {
		mainNumHold.textContent = "0";
	}
});

clearAll.addEventListener("click", () => {
	mainNumHold.textContent = "0";
	subNumHold.textContent = "";
});

// Pi and Engineering Notion
pi.addEventListener("click", () => {
	mainNumHold.textContent = Math.PI;
});

eNotation.addEventListener("click", () => {
	mainNumHold.textContent = Math.E;
});

// Reciprocal and Positive-Negative
reciprocal.addEventListener("click", () => {
	subNumHold.textContent = `1 ÷ ${mainNumHold.textContent} =`;
	const recCalc = 1 / parseFloat(mainNumHold.textContent);
	mainNumHold.textContent = recCalc;
});

posNeg.addEventListener("click", () => {
	if (posTrue === true) {
		mainNumHold.textContent = "-" + mainNumHold.textContent;
		posTrue = false;
	} else {
		mainNumHold.textContent = mainNumHold.textContent.replace("-", "");
		posTrue = true;
	}
});

// Enter
const enterCalc = function () {
	subNumHold.textContent = `${subNumHold.textContent} ${mainNumHold.textContent} =`;
	mainNumHold.textContent = finalCalc;
};
equals.addEventListener("click", () => {
	if (subNumHold.textContent.indexOf("=") >= 1) {
		console.log("Error!");
	} else if (subNumHold.textContent.indexOf("=") < 1) {
		if (subNumHold.textContent.includes("+")) {
			finalCalc =
				parseFloat(subNumHold.textContent) +
				parseFloat(mainNumHold.textContent);
			enterCalc();
		} else if (subNumHold.textContent.includes("-")) {
			finalCalc =
				parseFloat(subNumHold.textContent) -
				parseFloat(mainNumHold.textContent);
			enterCalc();
		} else if (subNumHold.textContent.includes("x")) {
			finalCalc =
				parseFloat(subNumHold.textContent) *
				parseFloat(mainNumHold.textContent);
			enterCalc();
		} else if (subNumHold.textContent.includes("÷")) {
			finalCalc =
				parseFloat(subNumHold.textContent) /
				parseFloat(mainNumHold.textContent);
			enterCalc();
		} else if (subNumHold.textContent.includes("%")) {
			finalCalc =
				parseFloat(subNumHold.textContent) %
				parseFloat(mainNumHold.textContent);
			enterCalc();
		} else if (subNumHold.textContent.includes("^")) {
			finalCalc =
				parseFloat(subNumHold.textContent) **
				parseFloat(mainNumHold.textContent);
			enterCalc();
		}
	}
});

// Memory
let holdNumMemory;
memoryAdd.addEventListener("click", () => {
	holdNumMemory = mainNumHold.textContent;
	subNumHold.textContent = "";
});

memoryRemove.addEventListener("click", () => {
	if (holdNumMemory === undefined) {
		console.log("Nothing to delete in memory!");
	} else {
		holdNumMemory = undefined;
	}
});

memoryClear.addEventListener("click", () => {
	if (holdNumMemory === undefined) {
		console.log("Nothing to clear in memory!");
	} else  {
		holdNumMemory = undefined;
	}
});

memoryRead.addEventListener("click", () => {
	if (holdNumMemory === undefined) {
		console.log("Nothing in memory!");
	} else  {
		subNumHold.textContent = "";
		mainNumHold.textContent = holdNumMemory;
		console.log("test");
	}
});
