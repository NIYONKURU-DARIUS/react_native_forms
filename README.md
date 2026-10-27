# 📱 React Native Forms (`react_native_forms`)

A clean, centered React Native application demonstrating all core form input elements and state management in Expo / React Native.

---

## 🚀 Features

- **Centered Form Layout**: Perfectly centered layout using React Native `ScrollView` and `StyleSheet`.
- **Core Form Elements Included**:
  - 📝 **Default Text Input**: Single-line text input for names/general text.
  - 📧 **Email Input**: Configured with `keyboardType="email-address"` and `autoCapitalize="none"`.
  - 🔒 **Password Input**: Configured with `secureTextEntry`.
  - 📞 **Phone Input**: Configured with `keyboardType="phone-pad"`.
  - 🔢 **Numeric Input**: Configured with `keyboardType="numeric"` for numbers/age.
  - 📄 **Multiline Input**: Multiline text area for bio / feedback.
  - 🎚️ **Switch**: Toggle switch for boolean choices (e.g., subscribing to updates).
  - 🔘 **Button**: Standard React Native `Button` triggering form submission.
- **Console Output**: On clicking **Submit**, all form state values and a structured JSON object are logged directly to the console (`console.log`) with user feedback.

---

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npx expo start
```

Press `w` in your terminal to open in web browser, or scan the QR code using the Expo Go mobile app.
