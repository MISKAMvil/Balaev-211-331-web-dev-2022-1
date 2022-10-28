"use strict";

function pow(x, n) {
	if ((x >= 1) && (x % 1 == 0)) {
		let number = x;
		if (n == 1) {
			alert(x);
		}
		else {
			for (let i = 1; i < n; i++) {
				x = x * number;
			}
			alert(x);
		}
	}
	else {
		alert('Число ' + x + ' не является натуральным.')
	}
}

pow(2, 6);