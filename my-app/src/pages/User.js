// src/Home.js
import React from 'react';
import { Transfer, Checkbox, Avatar } from '@douyinfe/semi-ui';
import { IconHandle, IconClose } from '@douyinfe/semi-icons';
import './User.css';

function User() {
  const renderSourceItem = item => {
    return (
        <div className="components-transfer-demo-source-item" key={item.label}>
            <Checkbox
                onChange={() => {
                    item.onChange();
                }}
                key={item.label}
                checked={item.checked}
                style={{ height: 52, alignItems: 'center' }}
            >
                <Avatar color={item.color} size="small">
                    {item.abbr}
                </Avatar>
                <div className="info">
                    <div className="name">{item.label}</div>
                    <div className="email">{item.value}</div>
                </div>
            </Checkbox>
        </div>
    );
};

const renderSelectedItem = item => {
    const { sortableHandle } = item;
    const DragHandle = sortableHandle(() => <IconHandle className={`semi-right-item-drag-handler`} />); 
    return (
        <div className="components-transfer-demo-selected-item" key={item.label}>
            <DragHandle />
            <Avatar color={item.color} size="small">
                {item.abbr}
            </Avatar>
            <div className="info">
                <div className="name">{item.label}</div>
                <div className="email">{item.value}</div>
            </div>
            <IconClose onClick={item.onRemove} />
        </div>
    );
};

const customFilter = (sugInput, item) => {
    return item.value.includes(sugInput) || item.label.includes(sugInput);
};

const data = [
    { label: '张三', value: 'B24010101', abbr: '张', color: 'amber', area: 'US', key: 1 },
    { label: '李四', value: 'B24020202', abbr: '李', color: 'indigo', area: 'UK', key: 2 },
    { label: '王五', value: 'B24030303', abbr: '王', color: 'cyan', area: 'HK', key: 3 },
    { label: '小明', value: 'B24040404', abbr: '明', color: 'blue', area: 'India', key: 4 },
    { label: '小华', value: 'B24050505', abbr: '华', color: 'blue', area: 'India', key: 5 },
    { label: '小红', value: 'B24060606', abbr: '红', color: 'blue', area: 'India', key: 6 },
];

return (
    <div className="main-content">
        <Transfer
            draggable
            className="Transfer-container"
            dataSource={data}
            filter={customFilter}
            defaultValue={['B24010101', 'B24020202']}
            renderSelectedItem={renderSelectedItem}
            renderSourceItem={renderSourceItem}
            inputProps={{ placeholder: '搜索姓名或学工号' }}
            onChange={(values, items) => console.log(values, items)}
        />
    </div>
);
}



export default User;
