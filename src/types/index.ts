export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  spotsLeft?: number;
  status: 'available' | 'sold-out' | 'upcoming';
  statusLabel: string;
  description: string;
  // ⚠️ DUMMY DATA / CLIENT INPUT REQUIRED:
  // Field: image
  // Reason: Event visual banner placeholder
  // Replace with: High resolution event photo of workshop atmosphere or finished ceramic pieces
  imageUrl: string;
}

export interface RegistrationFormData {
  eventId: string;
  eventTitle: string;
  name: string;
  email: string;
  phone: string;
  guestsCount: number;
  notes?: string;
}
