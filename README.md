Welcome to e-shop! This project is an ecommerce assessment application built using Next.js, Tailwind CSS, and various third-party libraries such as axios, @headlessui/react, and @heroicons/react.

**Project Structure.**
├── components/ # Reusable React components

├── pages/ # Next.js pages

├── styles/ # Tailwind CSS styles

├── public/ # Static assets

├── .env # Environment variables

├── README.md # Project README

└── ...

**Usage.**

- Installation: Clone the repository and navigate to the project directory.
  git clone <repository_url>
  cd e-shop

- Install Dependencies: Install the required dependencies using npm or yarn.
  -npm install
- Run the Development Server: Start the development server to view the
  application in your browser.
  npm run dev

- Access the Application: Open your web browser and navigate to
  http://localhost:3000 to access the e-shop application.

**Project Features**

_Products Page_: Displays a list of products available for purchase.

_Single Item Page_: Provides detailed information about a specific product. From here, users can add the item to their cart or proceed to checkout.

_Cart Modal_: Displays the items currently in the user's shopping cart.

_Create Product Page_: Allows authenticated users to create new product listings.

**Assumptions**

_User Authentication_: Assumes the existence of user authentication and session management for creating products. Authentication logic is not implemented in this project.

_Third-Party Libraries_: Utilizes axios for making HTTP requests and @headlessui/react and @heroicons/react for UI components and icons, respectively.

_Environmental Variables_: Requires a .env file for configuring environment-specific variables such as API endpoints, authentication tokens, etc.

**Choices and Explanations**

_Next.js_: Chosen for its server-side rendering capabilities, which improve SEO and initial page load times.

_Tailwind CSS_: Selected for its utility-first approach to styling, which allows for rapid development and easy customization.

_axios_: Used for making HTTP requests to fetch data from external APIs or the backend server.

_@headlessui/react and @heroicons/react_: These libraries provide accessible and customizable UI components and icons, enhancing the user experience.

_React Testing Library_:Encourages writing tests from the perspective of the user, it provides a simple and intuitive API that makes writing tests easy.

**Environmental Variables**

This project utilizes a .env file to store API endpoints. Ensure that you provide the necessary variables in the .env file for the application to function correctly.

**Testing**
To set up testing for this project, you can use the following packages:
npm install --save-dev @testing-library/react @testing-library/jest-dom jest and running npm install jest-environment-jsdom
Additionally, create a jest.config.js file and a .babelrc file in the root folder as parts of the configurations.
Test can be run using: npm test --verbose

**Feedback and Contributions**

Your feedback and contributions are welcome! If you encounter any issues, have suggestions for improvements, or would like to contribute to the project, please feel free to open an issue or submit a pull request.

Thank you for using es-hop! 🛒🛍️
