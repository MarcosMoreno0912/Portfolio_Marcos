/*import React from 'react';
import style from './ContactMe.module.css';

const ContactMe = () => {


	return (
		<>
			<div className={style.viewContact}>
				<div className={style.container}>
					<div>
						
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactMe;*/

import style from './ContactMe.module.css';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const ContactMe = () => (
	<div className={style.viewContact}>
	<div className={style.container}>
		<div className={style.form}>
  		<Form
    		{...layout}
    		name="nest-messages"
    		onFinish={onFinish}
    		style={{
      		maxWidth: 600,
    		}}
    		validateMessages={validateMessages}
  		>
    		<Form.Item
      		name={['user', 'name']}
      		label="Nombre"
      		rules={[
        		{
          		required: true,
       		 	},
      		]}
    		>
      		<Input />
    		</Form.Item>
    		<Form.Item
      		name={['user', 'email']}
      		label="Email"
      		rules={[
        		{
          		type: 'email',
        		},
      		]}
    		>
      		<Input />
    		</Form.Item>
    		<Form.Item name={['user', 'asunto']} label="Asunto">
      		<Input />
    		</Form.Item>
    		<Form.Item name={['user', 'descripcion']} label="Descripcion">
     		 	<Input.TextArea />
    		</Form.Item>
    		<Form.Item
      		wrapperCol={{
       		 	...layout.wrapperCol,
        		offset: 8,
      		}}
    		>
      		<Button type="primary" htmlType="submit">
       			Send email
      		</Button>
    		</Form.Item>
  		</Form>
  	</div>
  </div>
  </div>
);

export default ContactMe;