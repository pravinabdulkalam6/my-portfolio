# Firebase Setup for Portfolio Contact Form

This guide will help you set up Firebase Firestore database for your portfolio contact form.

## Prerequisites

- A Google account
- Node.js and npm installed
- Your portfolio project ready

## Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter a project name (e.g., "my-portfolio-contact")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In your Firebase project console, click on "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" for now (you can secure it later)
4. Select a location for your database (choose the closest to your users)
5. Click "Done"

## Step 3: Get Firebase Configuration

1. In your Firebase project console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>)
5. Register your app with a nickname (e.g., "portfolio-web")
6. Copy the configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};
```

## Step 4: Set Up Environment Variables

1. Create a `.env` file in your project root (same level as `package.json`)
2. Add your Firebase configuration values:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

**Important:** Replace the placeholder values with your actual Firebase configuration values.

## Step 5: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your contact form
3. Fill out and submit the form
4. Check your Firebase console → Firestore Database to see if the submission was recorded

## Step 6: Security Rules (Optional but Recommended)

For production, you should set up proper security rules:

1. In Firebase console, go to Firestore Database → Rules
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact-submissions/{document} {
      allow write: if true;  // Anyone can submit
      allow read: if false;  // No one can read (for privacy)
    }
  }
}
```

## Step 7: View Submissions

To view contact form submissions:

1. Go to Firebase Console → Firestore Database
2. You'll see a collection called `contact-submissions`
3. Each document contains:
   - `name`: Sender's name
   - `email`: Sender's email
   - `message`: The message content
   - `timestamp`: When the message was sent
   - `status`: Message status (default: "new")

## Troubleshooting

### Common Issues:

1. **"Failed to submit form" error**
   - Check if your environment variables are correctly set
   - Verify your Firebase project ID and API key
   - Make sure Firestore is enabled in your project

2. **Environment variables not loading**
   - Restart your development server after adding `.env` file
   - Make sure the `.env` file is in the project root
   - Verify variable names start with `VITE_`

3. **Firebase connection issues**
   - Check your internet connection
   - Verify Firebase project is active
   - Check browser console for detailed error messages

## Next Steps

- Set up email notifications for new submissions
- Create an admin dashboard to manage submissions
- Add spam protection
- Implement rate limiting

## Support

If you encounter any issues, check:
- Firebase documentation: https://firebase.google.com/docs
- Vite environment variables: https://vitejs.dev/guide/env-and-mode.html
- Browser console for error messages
