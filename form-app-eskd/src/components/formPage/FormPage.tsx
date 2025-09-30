import { useForm } from "react-hook-form";
import styles from "./formPage.module.scss";

type FormData = { name: string; phone: string; message: string };

export const FormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Ошибка при отправке");
      reset();
      alert("Сообщение успешно отправлено!");
    } catch (err) {
      console.error(err);
      alert("Не удалось отправить сообщение");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Пожалуйста, заполните форму</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.field}>
          <label>Имя</label>
          <input
            {...register("name", {
              required: "Имя обязательно",
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
          />
          {errors.name && (
            <span className={styles.error}>{errors.name.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label>Телефон</label>
          <input
            {...register("phone", {
              required: "Телефон обязателен",
              pattern: {
                value: /^(\+375|80)\d{9}$/,
                message: "Неверный формат телефона",
              },
            })}
          />
          {errors.phone && (
            <span className={styles.error}>{errors.phone.message}</span>
          )}
        </div>

        <div className={styles.field}>
          <label>Сообщение</label>
          <textarea
            {...register("message", {
              required: "Сообщение обязательно",
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
          />
          {errors.message && (
            <span className={styles.error}>{errors.message.message}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Отправка..." : "Отправить"}
        </button>
      </form>
    </div>
  );
};
