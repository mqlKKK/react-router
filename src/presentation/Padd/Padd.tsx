import * as React from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import FormItem from 'antd/lib/form/FormItem';


export interface addProps {
  addClick: (text: string) => void,
}

export function Padd({ addClick }: addProps) {
  let input: any
  return (
    <div>
      <Form layout={'horizontal'} 
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          addClick(input.value)
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <Button type="primary" htmlType="submit" ghost >
          添加
      </Button>
      </Form>
    </div>
  )
}



/*
export class Padd12 extends React.Component<any, any> {
  
  handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("所有输入控件的值Items：",this.props.form.getFieldsValue());
    if (!this.props.form.getFieldsValue()) {
      return
    }
    this.props.addClick(this.props.form.getFieldsValue())
    this.props.form.getFieldsValue = ''
  }

  render() {
    return (
      <Form className="login-form"
        onSubmit={this.handleSubmit}>
        <FormItem>
          <Input></Input>
        </FormItem>
        <Button type="primary" htmlType="submit" ghost >
          添加
      </Button>
      </Form>
    )
  }
}
export const Padd2 = Form.create({})(Padd12);
*/