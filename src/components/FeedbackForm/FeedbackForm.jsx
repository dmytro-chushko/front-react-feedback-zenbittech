import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FeedbackField,
  ButtonSubmit,
  FeedbackMessage,
  ErrorMessage,
  Loader,
} from './FeedbackForm.styled';
import { useAddFeedbackMutation } from 'redux/feedback/feedbackOperations';

export const FeedbackForm = () => {
  const [addFeedback, { isLoading }] = useAddFeedbackMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async ({ name, email, message }) => {
    const result = await addFeedback({ name, email, message });
    if (result.error) {
      toast.error(result.error.data.message[0]);
      return;
    }
    toast.success("You've just sent feedback");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FeedbackField
        type="text"
        placeholder="Your name*"
        {...register('name', {
          required: 'Name is required',
          maxLength: {
            value: 20,
            message: 'Only 20 symbols',
          },
          pattern: {
            value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message:
              'Name may contain only letters, apostrophe, dash and spaces',
          },
        })}
      />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
      <FeedbackField
        type="text"
        placeholder="Your e-mail*"
        {...register('email', {
          required: 'Email is required',
          maxLength: {
            value: 30,
            message: 'Only 30 symbols',
          },
          pattern: {
            value:
              /^(([0-9A-Za-z._%+-]{1,})@([-0-9A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/iu,
            message: 'Email must be such view email@domein.com',
          },
        })}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      <FeedbackMessage
        type="text"
        placeholder="Your message*"
        message
        {...register('message', {
          required: 'Message is required',
          maxLength: {
            value: 255,
            message: 'Not more than 255 characters',
          },
        })}
      />
      {errors.message && (
        <ErrorMessage message>{errors.message.message}</ErrorMessage>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <ButtonSubmit type="submit">Send message</ButtonSubmit>
      )}
      <ToastContainer />
    </form>
  );
};
