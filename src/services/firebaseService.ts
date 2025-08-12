import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'contact-submissions'), {
      ...formData,
      timestamp: serverTimestamp(),
      status: 'new'
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form. Please try again.');
  }
};

export const getContactSubmissions = async () => {
  try {
    // This function can be used later for admin purposes
    // For now, we'll just return a success message
    return { success: true };
  } catch (error) {
    console.error('Error fetching submissions:', error);
    throw new Error('Failed to fetch submissions.');
  }
};
