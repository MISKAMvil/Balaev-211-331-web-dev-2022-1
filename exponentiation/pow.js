"use strict";

function pow(x, n) {
	if ((n >= 1) && (n % 1 == 0)) {
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
		alert('Число ' + n + ' не является натуральным.')
	}
}

pow(2, 6);