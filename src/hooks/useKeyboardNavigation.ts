import {bindKey, unbindKey} from '@rwh/keystrokes';
import { useEffect, useState } from 'react';

interface KeyboardNavigationArgs {
    steps: Function[];
    onEnd?: Function;
}
export const useKeyboardNavigation = (args: KeyboardNavigationArgs) => {
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        const next = () => {
            if(currentStep < args.steps.length) {
                args.steps[currentStep]();
                setCurrentStep(s => s + 1);
            } else {
                args.onEnd && args.onEnd();
            }
        }
        bindKey('arrowRight', () => next());
        bindKey('arrowLeft', () => console.log('left'));

        return () => {
            unbindKey('arrowRight');
            unbindKey('arrowLeft');
        }
    },[currentStep]);
};