import { className } from '../src'

describe('Testing className function', () => {
	it('Should return one string input', () => {
		expect(className('cn1')).toEqual('cn1')
	})

	it('Should join two string inputs', () => {
		expect(className('cn1', 'cn2')).toEqual('cn1 cn2')
	})

	it('Should return two string inputs', () => {
		expect(className()).toEqual(undefined)
	})

})
