# News app

## Description:
This web application was developed as a test task to demonstrate skills in web development using technologies like React, React Router, Redux, Redux Toolkit, TypeScript, and Material-UI. The application has pages with news, profile, and the main page, as well as multilingual support using react-i18next.

## Getting Started:
To get started with the News App, follow these steps:
1. Clone the repository
2. In the terminal enter the command `npm i`
3. In the terminal enter the command `npm start`

## Application features:

1. The main page (/) with arbitrary content.

2. The news page (/news) that contains a list of news. Data obtained from https://jsonplaceholder.typicode.com/. The page also has a "load more" button that, when clicked, loads new posts. In addition, it is possible to delete news from the list.

3. The page with arbitrary text (/profile), available only after authorization. If a user tries to access this page without authorization, the user should be redirected to the main page.

4. The site header or footer contains links to the main page (/), the news page (/news), and the profile page (/profile). If the user is not authorized, a login button is displayed instead of a link to the profile.

5. Multilingualism for the site menu using react-i18next.

6. A login form with "fake" data (username: admin, password: 12345). If the data is entered incorrectly, an error message is displayed. If the data is entered correctly, the user is redirected to the profile page (/profile).

7. Information about the user's authorization is stored in localStorage. If the user has logged in and then refreshed the page, the authorization does not disappear.

# Technologies Used

React

React Router

Redux

Redux Toolkit

TypeScript

Material-UI

react-i18next