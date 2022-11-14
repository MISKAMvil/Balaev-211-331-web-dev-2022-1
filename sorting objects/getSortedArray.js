// Пример работы функции.
// let array = [{ name: 'Макар', age: 20 }, { name: 'Роберт', age: 32 }, { name: 'Екатерина', age: 50 }, { name: 'Оксана', age: 24 }, { name: 'Святослав', age: 43 }];
// array = getSortedArray(array, 'age')
// console.log(array); // [{name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}, {name: 'Екатерина', age: 50}];
// array = getSortedArray(array, 'name')
// console.log(array); // [{name: 'Екатерина', age: 50}, {name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}];

function getSortedArray(array, key) {

	if (key == 'age') {
		for (var i = 0, endI = array.length - 1; i < endI; i++) {
			var wasSwap = false;
			for (var j = 0, endJ = endI - i; j < endJ; j++) {
				if (array[j].age > array[j + 1].age) {
					var swap = array[j];
					array[j] = array[j + 1];
					array[j + 1] = swap;
					wasSwap = true;
				}
			}
			if (!wasSwap) break;
		}
		console.log('Массив объектов отсортирован по age:');
		console.log(array);
	}

	if (key == 'name') {
		for (var i = 0, endI = array.length - 1; i < endI; i++) {
			var wasSwap = false;
			for (var j = 0, endJ = endI - i; j < endJ; j++) {
				if (array[j].name > array[j + 1].name) {
					var swap = array[j];
					array[j] = array[j + 1];
					array[j + 1] = swap;
					wasSwap = true;
				}
			}
			if (!wasSwap) break;
		}
		console.log('Массив объектов отсортирован по name:');
		console.log(array);
	}
}

getSortedArray([{ name: 'Макар', age: 20 }, { name: 'Роберт', age: 32 }, { name: 'Екатерина', age: 50 }, { name: 'Оксана', age: 24 }, { name: 'Святослав', age: 43 }], 'age');

getSortedArray([{ name: 'Макар', age: 20 }, { name: 'Роберт', age: 32 }, { name: 'Екатерина', age: 50 }, { name: 'Оксана', age: 24 }, { name: 'Святослав', age: 43 }], 'name');