# 🌍 Currency Converter

A simple and beautiful currency converter built using **React**, **Tailwind CSS**, and the **ExchangeRate API**.

## 📸 Preview

![image](https://github.com/user-attachments/assets/44de5f8e-9067-464b-9cd0-429eb275adb4)

## 🚀 Features

- 🔄 Convert between any two currencies.
- 📊 Live exchange rates via ExchangeRate API.
- 🔁 Swap currencies easily.
- 🎨 Stylish UI with a modern glassmorphism effect.
- 📱 Fully responsive design.

## 🧰 Tech Stack

- **Frontend**: React, Tailwind CSS
- **API**: ExchangeRate API
- **Languages**: JavaScript

## 🔧 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
```

### 2. Install dependencies
```bash
npm install
```
### 3. Run the application
```bash
npm start
```
The app will run at: http://localhost:3000

## 🔑 API Key
This project uses the ExchangeRate API.

You can use the free public key included, but for better reliability, sign up and replace your key in:

```bash
src/hooks/useCurrencyInfo.js
```

Update the fetch URL:

```js
fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${currency}`)
```

## 🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

## 📄 License
This project is licensed under the MIT License.

## 💡 Inspiration
Inspired by popular currency tools like XE and Google Currency Converter.
