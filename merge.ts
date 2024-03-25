export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    const merged13: number[] = [];
	const merged: number[] = [];
	let reverse_c2 = collection2.reverse();
    let i1 = 0, i2 = 0, i3 = 0, i13 = 0;

	while (i1 < collection1.length || i3 < collection3.length) {
		if (i1 < collection1.length && collection1[i1] < collection3[i3]) {
			merged13.push(collection1[i1++]);
		} else {
			merged13.push(collection3[i3++]);
		}
	}

	if (merged13.length === 0)
		return reverse_c2;

	while (i2 < reverse_c2.length || i13 < merged13.length) {
		if (i2 < reverse_c2.length && reverse_c2[i2] < merged13[i13]) {
			merged.push(reverse_c2[i2++]);
		} else {
			merged.push(merged13[i13++]);
		}
	}

    return merged;
}
