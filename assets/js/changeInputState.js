/** input 상태 변경 */
export default function changeInputState(target, state, msg, className) {
	const { classList, parentElement: parent } = target;
	const descText = parent.querySelector(`p.${className}`);
	const preState = classList.contains(className);

	/** 초기화 */
	function initial() {
		if (descText) descText.remove();
		if (preState) classList.remove(className);
	}

	/** 변경 */
	function change() {
		if (!descText) {
			const p = document.createElement('p');
			p.classList.add(`${className}`);
			p.textContent = msg;
			parent.append(p);
		} else {
			descText.textContent = msg;
		}
		if (!preState) classList.add(className);
	}

	if (state) change();
	else initial();
}
