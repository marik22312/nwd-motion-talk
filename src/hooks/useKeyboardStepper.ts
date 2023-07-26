import {bindKey, unbindKey} from '@rwh/keystrokes';
import { useEffect, useState } from 'react';

interface KeyboardNavigationArgs {
    steps?: number;
    onEnd?: () => void;
    onBack?: () => void;
}
export const useKeyboardStepper = (args?: KeyboardNavigationArgs) => {
    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        const next = () => {
            if (!args?.steps) {
                return setCurrentStep(s => s + 1);
            }

            if(currentStep < args?.steps) {
                return setCurrentStep(s => s + 1);
            }

            return args?.onEnd && args.onEnd();

        }

        const back = () => {
            if(currentStep > 0) {
                return setCurrentStep(s => s - 1);
            }
            return args?.onBack?.();

        }
        bindKey('arrowRight', next);
        bindKey('arrowLeft', back);

        return () => {
            unbindKey('arrowRight');
            unbindKey('arrowLeft');
        }
    },[currentStep]);

    return {
        currentStep
    }
};