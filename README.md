# Tax Calculator Web Application

This web application is designed as part of the Fyle Web Development Internship Challenge. It allows users to calculate taxes based on their input. The application follows specific guidelines and requirements provided by Fyle.

## Overview

This project aims to create a tax calculator web application to assist users in calculating their taxes based on their income and age. The application is built using HTML, CSS, and JavaScript.

## Features

- **Tax Calculation**: Calculates taxes based on the user's income and age according to specified formulas.
- **Tax Deduction Display**: Shows the amount of tax deducted from the total income.
- **Error Highlighting**: Highlights input fields with errors by bordering them in red.
- **User-Friendly Interface**: Utilizes an 'X' button for closing modal dialogs for enhanced user experience.
- **Age Dropdown**: Provides options for users to select their age group for accurate tax calculation.
- **Responsive Design**: Ensures the application is responsive and works seamlessly on various screen sizes.

## Usage

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/tax-calculator.git`
2. Navigate to the project directory: `cd tax-calculator`
3. Open the `index.html` file in your preferred web browser.

## Screenshots

![Screenshot 1](screenshots/Screenshot%202024-04-16%20165159.png)
![Screenshot 2](screenshots/Screenshot%202024-04-16%20165259.png)
![Screenshot 3](screenshots/Screenshot%202024-04-16%20165313.png)
![Screenshot 4](screenshots/Screenshot%202024-04-16%20165609.png)
![Screenshot 5](screenshots/Screenshot%202024-04-16%20165622.png)
![Screenshot 6](screenshots/Screenshot%202024-04-16%20165144.png)


## Edge Cases Coverage

- **Alphanumeric Input**: Error handling for input containing both alphabets and numbers.
- **Empty Space**: Detection and handling of empty spaces in user input.
- **Space Between Numbers**: Correct handling of input with spaces between numbers.
- **Empty Input**: Error handling for cases where the user does not enter any input.
- **Negative Numbers**: Handling of negative numbers in the input fields.
- **Total Deduction Validation**: Validation to ensure the total applicable deduction does not exceed the combined annual and gross income.


## Assumptions

- **User Locale**: The application assumes that the user will be from India, and therefore, the locale string `'en'` & ₹ has been used.



## How to Contribute

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-new-feature`
3. Make your changes and commit them: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-new-feature`
5. Submit a pull request.

## Credits

This project was developed by Syed Fardeen Jeelani. Special thanks to Fyle for providing the internship challenge.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or suggestions. Thank you for your interest in the Tax Calculator Web Application!
