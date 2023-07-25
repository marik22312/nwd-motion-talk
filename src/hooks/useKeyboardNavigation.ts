import {bindKey, unbindKey} from '@rwh/keystrokes';
import { useEffect, useState } from 'react';

type StepFunction = () => void;

interface KeyboardNavigationArgs {
    steps: StepFunction[] | {
        next: StepFunction;
        prev: StepFunction;
    }[];
    onEnd?: Function;
}
export const useKeyboardNavigation = (args: KeyboardNavigationArgs) => {
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        const next = () => {
            if(currentStep < args.steps.length) {
                if (typeof args.steps[currentStep] === 'function') {
                    (args.steps[currentStep] as StepFunction)();
                } else {
                    (args.steps[currentStep] as any).next();
                }
                
            } else {
                args.onEnd && args.onEnd();
            }
            setCurrentStep(s => s + 1);
        }
        bindKey('arrowRight', () => next());
        bindKey('arrowLeft', () => console.log('left'));

        return () => {
            unbindKey('arrowRight');
            unbindKey('arrowLeft');
        }
    },[currentStep]);

    return {
        currentStep
    }
};