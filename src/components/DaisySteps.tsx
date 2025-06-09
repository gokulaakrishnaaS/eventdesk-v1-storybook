import React from "react";
import { Steps } from 'react-daisyui';

const DaisySteps: React.FC = () => {
    return (
        <div>
            <Steps >
                <Steps.Step color="primary">Register</Steps.Step>
                <Steps.Step color="primary">Choose plan</Steps.Step>
                <Steps.Step>Purchase</Steps.Step>
                <Steps.Step>Receive Product</Steps.Step>
            </Steps>
            
        </div>
    );
};

export default DaisySteps;