import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './Components/BookingForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

test('renders the reservation details heading', () => {
  render(<LocalizationProvider dateAdapter={AdapterDayjs}><BookingForm /></LocalizationProvider>);
  const heading = screen.getByText("Reservation Details");
  expect(heading).toBeInTheDocument();
})

