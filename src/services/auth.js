import axios from 'axios';
import AWS from 'aws-sdk';

// Load AWS credentials from environment variables
const accessKeyId = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const region = 'your-aws-region';  // e.g., 'us-east-1'

// Configure AWS SDK with credentials
AWS.config.update({
  accessKeyId,
  secretAccessKey,
  region,
});

// Replace with your actual API Gateway URL if using API Gateway
const API_GATEWAY_URL = 'https://your-api-id.execute-api.region.amazonaws.com/your-stage/handleUserAuth';

// Sign Up Function
export const signUp = async ({ firstName, lastName, phoneNumber, email, password }) => {
  try {
    const response = await axios.post(API_GATEWAY_URL, {
      operation: 'signUp',
      userData: {
        email,
        firstName,
        lastName,
        phoneNumber,
        // Do not store the password directly; handle it securely
      },
    }, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY, // If your API Gateway uses API keys
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error signing up: ' + error.message);
  }
};

// Login Function
export const login = async (emailOrPhone, password) => {
  try {
    const response = await axios.post(API_GATEWAY_URL, {
      operation: 'login',
      email: emailOrPhone,
      // Verify the password securely, this example does not handle it
    }, {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY, // If your API Gateway uses API keys
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error logging in: ' + error.message);
  }
};

// Check if User is Authenticated
export const checkAuth = async () => {
  // This will typically remain the same, depending on how you manage sessions or tokens
  try {
    // Implement token validation or session check
    return true; // Example, replace with actual logic
  } catch {
    return null;
  }
};

// Sign Out Function
export const signOut = async () => {
  try {
    // Implement sign-out logic (e.g., token removal)
  } catch (error) {
    throw new Error('Error signing out: ' + error.message);
  }
};
