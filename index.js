function sum(n) {
	let result = n;
	if (n !== 0) {
		n--;
		return result += sum(n);
	} else {
		return result;
	}
}

module.exports = sum;