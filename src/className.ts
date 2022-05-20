type Arg =
	| string
	| { [key: string]: boolean }
	| undefined

interface ClassName {
	(...args: Arg[]): string
}

export const className: ClassName = (...args) => {
	const classNamesList: string[] = []

	for (const arg of args) {
		switch (typeof arg) {
			case 'string':
				classNamesList.push(arg)
				break
			case 'object':
				for (const key of Object.keys(arg)) {
					if (arg[key]) {
						classNamesList.push(key)
					}
				}
				break
		}
	}

	return classNamesList.join(' ')
}
