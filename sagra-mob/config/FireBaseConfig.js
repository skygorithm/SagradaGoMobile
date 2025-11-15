import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  FB_API,
  FB_AUTH_DOMAIN,
  FB_PROJECT_ID,
  FB_STORAGE_BUCKET,
  FB_SENDER_ID,
  FB_APP_ID,
  FB_MEASUREMENT_ID
} from "@env";

const firebaseConfig = {
  apiKey: FB_API,
  authDomain: FB_AUTH_DOMAIN,
  projectId: FB_PROJECT_ID,
  storageBucket: FB_STORAGE_BUCKET,
  messagingSenderId: FB_SENDER_ID,
  appId: FB_APP_ID,
  measurementId: FB_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

