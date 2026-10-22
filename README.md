# I Love Game
 Project Overview 

 Demo Link: !!!!
## Documentation

## Architecture

# Installation (optional)

# **Functional Guide** 

## **1. Project Overview** 

Application Name: I Love game

Application Category / Topic: Game Collection Platform

Main Purpose (2–4 sentences): Game Catalog that enables users to upload own games and share with others. 

## **2. User Access & Permissions** 

### **Guest (Not Authenticated)** 

_Describe what an unauthenticated user can access:_ 

- Available pages / routes: 

- Public data shown: 

### **Authenticated User** 

_Describe what a logged-in user can access:_ 

- Main sections / pages: 

- Details pages: 

- Create / Edit / Delete actions: 

## **3. Authentication & Session Handling** 

### **Authentication Flow** 

_Explain step-by-step:_ 

- What happens when the app loads 

- How authentication status is checked 

- What happens on successful login or registration 

- What happens on logout 

### **Session Persistence** 

- How is the user session stored? (e.g. Context, localStorage, cookies) 

- How is automatic login handled after a page refresh? 

## **4. Routing Structure** 



<!-- Start of picture text -->
SoftUni<br><!-- End of picture text -->

© SoftUni – about.softuni.bg. Copyrighted document. Unauthorized copy, reproduction or use is not permitted. Follow us: Page 1 of 3 SSe00e00® 

Page 1 of 3 

### **Route Guards Logic** 

- How is routing split between guest-only and private routes? 

### **Main Routes** 

_Describe the main route structure:_ 

- Number and type of top-level pages 

### **Nested & Parameterized Routes** 

- Is there nested routing (e.g. a layout route with child routes)? 

- Which routes use URL parameters (e.g. /catalog/:id)? 

## **5. List → Details Flow** 

### **Catalog / List Page** 

- What data is displayed? 

- How does the user interact with the list (filter / sort / search)? 

### **Details Page** 

- How is navigation triggered (Link / useNavigate)? 

- What data is received via route parameters? 

## **6. Data Source & Backend** 

### **Backend Type** 

- Real backend (Firebase, or custom Node.js/Express + MongoDB) 

## **7. Data Operations (CRUD)** 

_All four operations — Create, Read, Update, and Delete — are required for the collection described in the Technical Requirements (see CRUD Operations, 10 pts). Describe how each one is implemented:_ 

### **Create (POST)** 

- How does the user create new data? 

### **Read (GET)** 

- Where is data fetched and displayed? 

### **Update (PUT/PATCH)** 

- How does the author edit an existing record? 

- How is the UI updated after the change? 

### **Delete** 

- How does the author delete an existing record? 





















© SoftUni – about.softuni.bg. Copyrighted document. Unauthorized copy, reproduction or use is not permitted. 

Follow us: 

Page 2 of 3 

- How is the UI updated after the change? 

## **8. Forms & Validation** 

### **Forms Used** 

_List all forms in the application:_ 

### **Validation Rules** 

_Describe at least three validated fields:_ 

- Field name and rules: 

- Field name and rules: 

- Field name with multiple validation rules: 

## **9. React-Specific Techniques** 

### **Hooks & Component Lifecycle** 

- Which hooks are used, and where? (useState, useEffect, custom hooks…) 

- Give one example of mount / update / unmount behavior in your app. 

### **Context API** 

- What state/data is shared through Context, and which components consume it? 

### **Component Styling** 

- How are components styled? (CSS files, CSS Modules, styling library) 

## **10. Typical User Flow** 

Describe a normal user journey through the app: 

- 1. 

- 2. 

- 3. 

- 4. 

## **11. Error & Edge Case Handling** 

_Describe how the app handles:_ 

- Authentication errors 

- Network or data errors 

- Empty or missing data states 





















© SoftUni – about.softuni.bg. Copyrighted document. Unauthorized copy, reproduction or use is not permitted. 

Follow us: 

Page 3 of 3 



## Deploy with cloudflare
 1. `npm i -D wrangler` (optional)
 2. `npx wrangler login`
 3. `npx wrangler deploy`

