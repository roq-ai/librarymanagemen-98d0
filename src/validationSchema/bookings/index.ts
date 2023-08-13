import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  booking_date: yup.date().required(),
  book_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
