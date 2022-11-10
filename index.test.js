const sum = require('./index');
const solution = require('./system/solution');
const { getRandomInt, findString } = require('./system/environment');

test('Функция должна вернуть число', () => {
	const type = typeof sum(5);

	expect(type).toBe('number');
});

test('Запрещено использовать циклы', async () => {
	const forMatch = await findString('for (');
	const whileMatch = await findString('while (');

	expect(forMatch).toBeFalsy();
	expect(whileMatch).toBeFalsy();
});

test('Тест. n: 5', () => {
	const res = sum(5);

	expect(res).toBe(15);
});

test('Тест. n: 25', () => {
	const res = sum(25);

	expect(res).toBe(325);
});

test('Тест. n: 41', () => {
	const res = sum(41);

	expect(res).toBe(861);
});

test('Тест. n: 8', () => {
	const res = sum(8);

	expect(res).toBe(36);
});

test('Тест. n: 162', () => {
	const res = sum(162);

	expect(res).toBe(13203);
});

test('Тест. n: 0', () => {
	const res = sum(0);

	expect(res).toBe(0);
});

test('Тест. n: 12', () => {
	const res = sum(12);

	expect(res).toBe(78);
});

test('Auto: random outcomes', () => {
	let failed = false;

	for (let i = 0; i < 100; i++) {
		const randNumber = getRandomInt(1, 200);

		if (solution(randNumber) !== sum(randNumber)) {
			failed = 'failed';
			break;
		}
	}

	expect(failed).not.toBe('failed');
});