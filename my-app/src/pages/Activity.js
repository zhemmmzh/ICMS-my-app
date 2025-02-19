import React, { useState } from 'react';
import { Link, useNavigate, useParams, Routes, Route } from 'react-router-dom';
import './activity.css';
import { Steps } from '@douyinfe/semi-ui';

function Activity() {
    return (
        <Steps type="basic" current={1} onChange={(i)=>console.log(i)}>
            <Steps.Step title="Finished" description="This is a description" />
            <Steps.Step title="In Progress" description="This is a description" />
            <Steps.Step title="Waiting" description="This is a description" />
        </Steps>
    );
}


export default Activity;
