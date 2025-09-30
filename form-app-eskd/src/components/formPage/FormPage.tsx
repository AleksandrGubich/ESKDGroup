import { Form, Input, Button, message, Typography } from "antd";
import styles from "./formPage.module.scss";

const { Title } = Typography;

type FormData = { name: string; phone: string; message: string };

export const FormPage = () => {
  const [form] = Form.useForm<FormData>();

  const onFinish = async (values: FormData) => {
    try {
      const res = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Ошибка при отправке");
      form.resetFields();
      message.success("Сообщение успешно отправлено!");
    } catch (err) {
      console.error(err);
      message.error("Не удалось отправить сообщение");
    }
  };

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.title}>
        Пожалуйста, заполните форму
      </Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        requiredMark={false}
        className={styles.form}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[
            { required: true, message: "Имя обязательно" },
            { min: 2, message: "Минимум 2 символа" },
          ]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>

        <Form.Item
          label="Телефон"
          name="phone"
          rules={[
            { required: true, message: "Телефон обязателен" },
            {
              pattern: /^(\+375|80)\d{9}$/,
              message: "Неверный формат телефона",
            },
          ]}
        >
          <Input placeholder="Введите телефон" />
        </Form.Item>

        <Form.Item
          label="Сообщение"
          name="message"
          rules={[
            { required: true, message: "Сообщение обязательно" },
            { min: 2, message: "Минимум 2 символа" },
          ]}
        >
          <Input.TextArea
            placeholder="Введите сообщение"
            autoSize={{ minRows: 4 }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
