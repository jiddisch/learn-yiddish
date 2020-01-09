import { SharedTools } from './shared-tools';

describe('shared tools', () => {

    it('should shuffle words of a string and return a shuffles array', () => {
        const sharedTools = SharedTools.shuffle('טער');
        
        expect(sharedTools).toBeInstanceOf(Array);
        expect(sharedTools.length).toBe(3);
    })
})
