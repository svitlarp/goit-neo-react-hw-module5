import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={css.errorMessage}>
      <p className={css.errorText}>
        Whoops, something went wrong! Please try reloading this page!{" "}
      </p>
    </div>
  );
};

export default ErrorMessage;
