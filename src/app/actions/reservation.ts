'use server';

export async function submitReservation(formData: FormData) {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const name = formData.get('name');
  const phone = formData.get('phone');
  const date = formData.get('date');
  const time = formData.get('time');
  const guests = formData.get('guests');

  // MOCK LOGGING: In a real app, this would insert into Supabase
  console.log('--- [MOCK RESERVATION RECEIVED] ---');
  console.log(`Name: ${name}`);
  console.log(`Phone: ${phone}`);
  console.log(`Date: ${date}`);
  console.log(`Time: ${time}`);
  console.log(`Guests: ${guests}`);
  console.log('-----------------------------------');

  // Return success result
  return {
    success: true,
    message: 'Reservation submitted successfully (MOCK)',
  };
}
