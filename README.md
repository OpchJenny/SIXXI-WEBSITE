# SIXXI-WEBSITE 🖥️

This is a Project for the ITCS379_Practical Software Engineering (Mj.SE) & ITCS473_Software Quality Assurance and Testing (Mj.SE) which open public for reviewing.
* Members

  * ID: 6188010 Name: Chansida Makaranond ❤️

  * ID: 6188053	Name: Thipwara	Karphondee 🧡
  
  * ID: 6188055	Name: Mangkhales	Ngamjaruskotchakorn 🖤
  
  * ID: 6188112	Name: Pimolporn	Malsuthi 💚
  
  * ID: 6188113	Name: Piraya	Chantip 💙
  
  * ID: 6188136	Name: Ornpicha	Arunsangsil 🤍

### Currenly, we have 6 pages on the Sixxi website 6️⃣
* Including

  * Home page 🏡

    * The homepage is a page for the general information for the food delivery website which has all the necessary information that is useful for the users.

  * Menu page 🍝

    * The menu page is a page that represents all of the menu lists which users can search for their menu by searching on the search box and also it has the customer feedback on the menu page too.

  * Dessert page 🍰

      * The dessert page is a page that represents all of the dessert menu lists which users can search for their dessert menu by searching on the search box and also it has the customer feedback on the menu page too.

  * About page 📚

    * The about page is a page for providing the company profile and role of each member of the team.

  * Contact page 📲

    * The contact page is a page for customers or visiter who need our help or advice which on the page will provide the address, phone number, and Email and also have the message box in order for contacting directly to us.

  * Login page ✔️

      * The login page is a page for providing the option to our customers whether they want to log in to the system by using the username and password or they want to create an account which we also provided the registration form within the login page too.

# Verification and Validation the menu 🔍
## Register to the system by using Email 🌹
| Test scenario ID | Register to the system by using Email | Test Case ID | Register-1 | 
| --- | --- | --- | --- | 
| Test Case Description | To test whether the register page is performed correctly | Test Priority | High | 
| Pre-Requisite | NA | Post-Requisite | User’s account was created | 
| Test Execution Steps: |  |  |  | 

| S.No | Action | Inputs | Expected Output | Actual Output | Test Browser | Test Result | Test Comments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Launch the register page  | http://localhost:9999/LoginRegis.html | Register page | Register page | Google Chrome | Pass | [Thipwara 12/11/2021 10:48 AM]: Launch successful |
| 2 | Fill in valid information | Username: admin1 <br /> Email: admin1@gmail.com <br /> Password: admin1234 | Register successfully | Register successfully | Google Chrome | Pass | [Thipwara 12/11/2021 10:48 AM]: Test successful |
| 3 | Fill in invalid password format | Username : admin1 <br /> Email : admin1@gmail.com <br /> Password: a | Password misformat alert | Password misformat alert | Google Chrome | Pass | [Thipwara 12/11/2021 10:48 AM]: Test successful |
| 4 | Leave the required field empty | Username: - <br /> Email: admin1@gmail.com <br /> Password: admin1234 | Empty field alert | Empty field alert | Google Chrome | Pass | [Thipwara 12/11/2021 10:48 AM]: Test successful |
| 5 | Fill in invalid email format | Username: admin1 <br /> Email: admin1 <br /> Password: admin1234 | Email misformat alert | Email misformat alert | Google Chrome | Pass | [Thipwara 12/11/2021 10:48 AM]: Test successful |
| 6 | Fill in duplicate username | Username: (duplicate username) <br /> Email: admin1@gmail.com <br /> Password: admin1234 | Username already in use alert | Username already in use alert | Google Chrome | Pass | [Thipwara 12/11/2021 10:48 AM]: Test successful |

## Login to the system 🌷
| Test scenario ID | Login to the system  | Test Case ID | Login-1 | 
| --- | --- | --- | --- | 
| Test Case Description | To test whether the user can login to the system | Test Priority | High | 
| Pre-Requisite | A valid user account | Post-Requisite | NA | 
| Test Execution Steps: |  |  |  | 

| S.No | Action | Inputs | Expected Output | Actual Output | Test Browser | Test Result | Test Comments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Launch application | http://localhost:9999/LoginRegis.html | Login page | Login page | Safari | Pass | [Piraya 11/10/2021 11:10 AM]: Launch successful |
| 2 | Fill in valid username & password | Username: admin1 <br /> Password: admin1234 | Login successfully | Login successfully | Safari | Pass | [Piraya 11/10/2021 11:10 AM]: Test successful |
| 3 | Fill in valid username | Username: admin1 <br /> Password: {wrong password} | Invalid username /password alert | Invalid username /password alert | Safari | Pass | [Piraya 11/10/2021 11:10 AM]: Test successful |
| 4 | Fill in valid password | Username: {Username which doesn’t have in database} <br /> Password: admin1234 | Invalid username /password alert | Invalid username /password alert | Safari | Pass | [Piraya 11/10/2021 11:10 AM]: Test successful |
| 5 | Fill in invalid username & password | Username:- <br /> Password: - | Invalid username /password alert | Invalid username /password alert | Safari | Pass | [Piraya 11/10/2021 11:10 AM]: Test successful |

## See the menu list 🌻
| Test scenario ID | See the menu list | Test Case ID | SeeMenuList-1 | 
| --- | --- | --- | --- | 
| Test Case Description | To test see the menu list  | Test Priority | Medium | 
| Pre-Requisite | NA | Post-Requisite | NA | 
| Test Execution Steps: |  |  |  | 

| S.No | Action | Inputs | Expected Output | Actual Output | Test Browser | Test Result | Test Comments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Click on the Menu tab on Homepage | NA | Navigate to Menu page and show menu list | Navigate to Menu page and show menu list | Google Chrome | Pass | [Thipwara 28/10/202 10:06 AM]: Test successful |
| 2 | Search for the menu | Menu’s name | Show the target menu | Show the target menu | Google Chrome | Pass | [Thipwara 28/10/202 10:08 AM]: Test successful |
| 3 | Select the menu | NA | Show the menu name, price and difficulty rate | Show the menu name, price and difficulty rate | Google Chrome | Pass | [Thipwara 28/10/202 10:06 AM]: Test successful |
| 4 | Slide to the bottom to see a customer’s comment | NA | Show customer’s comment | Show customer’s comment | Google Chrome | Pass | [Thipwara 28/10/202 10:06 AM]: Test successful |

**Comments** :The picture of food on the food details page does not expand to the right resolution

## See the menu's information 🌼
| Test scenario ID | See the menu's information | Test Case ID | SeeMenuInfo-1 | 
| --- | --- | --- | --- | 
| Test Case Description | To test see the menu’s information  | Test Priority | Medium | 
| Pre-Requisite | NA | Post-Requisite | NA | 
| Test Execution Steps: |  |  |  | 

| S.No | Action | Inputs | Expected Output | Actual Output | Test Browser | Test Result | Test Comments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Click on the Menu tab in Homepage  | NA | Navigate to Menu page and show menu list | Navigate to Menu page and show menu list | Google Chrome | Pass | [Ornpicha 17/10/202 10:10 AM]: Test successful |
| 2 | Click see more button for exploring more details of menu | NA | how the menu name, description, ingredient, and price | Show the menu name, description, ingredient, and price | Google Chrome | Pass | [Ornpicha 17/10/202 10:10 AM]: Test successful |
| 3 | Click on the slide photo  | NA | Show another photo  | Show another photo | Google Chrome | Pass | [Ornpicha 17/10/202 10:10 AM]: Test successful |

## Search menu 🌻
| Test scenario ID | Search Menu  | Test Case ID | SearchMenu-1 | 
| --- | --- | --- | --- | 
| Test Case Description | To test search menu by menu name  | Test Priority | Medium | 
| Pre-Requisite | NA | Post-Requisite | NA | 
| Test Execution Steps: |  |  |  | 

| S.No | Action | Inputs | Expected Output | Actual Output | Test Browser | Test Result | Test Comments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Click on the Menu tab in Homepage | NA | Navigate to Menu page and show menu list | Navigate to Menu page and show menu list | Google Chrome | Pass | [Chansida 10/10/2021 10:06 AM]: Test successful |
| 2 | Search for the menu by name | Menu’s name | Show the target menu that has the match query | Show the target menu that has the match query | Google Chrome | Pass | [Chansida 10/10/2021 10:06 AM]: Test successful |
| 3 | Select the menu | NA | Can click at the menu that match with the query  | Select the menu | Google Chrome | Pass | [Chansida 10/10/2021 10:06 AM]: Test successful |
| 4 | Slide to the bottom to see all the menu info | NA | Show all the menu info | Slide to the bottom to see all the menu info | Google Chrome | Pass | [Chansida 10/10/2021 10:06 AM]: Test successful |

## Integration & System Testing 🎃
### ISP - Register 🔓
**Partition characteristics**

| Characteristic | Block 1 | Block 2 | Block 3 | Block 4 | Block 5 | 
| --- | --- | --- | --- | --- | --- |
| C1 = username is empty | TRUE | FALSE |  |  |  | A
| C2 = email is empty | TRUE | FALSE |  |  |  | B
| C3 = password is empty | TRUE | FALSE |  |  |  | C
| C4 | format of username | whole is a number | whole is a normal character | Mixing no. and character | Mixing no.,char, special char | D
| C5 = Email format | completely email format | incomplete email formate |  |  |  | E
| C6 = Format of password | length greather than 0 but less than 6 | length equal to 6 | length greather than 6  |  | - | F
| C7 = Data duplicated | no duplicated | username duplicated | email duplicated | password duplicated |  | G

**BCC = 13 test cases**

Base : A2,B2,C2,D2.E1,F2,G1 admin, admin2@gmail.com, admin2

A &emsp; A1,B2,C2,D2.E1,F2,G1 " ", admin3@gmail.com, admin3 *ignore functional char. of empty

B &emsp; A2,B1,C2,D2.E1,F2,G1 adminfour," ", admin4

C &emsp; A2,B2,C1,D2.E1,F2,G1 adminfive, admin5@gmail.com," "

D &emsp; A2,B2,C2,D1.E1,F2,G1 6666, admin6@gmail.com, admin6 A2,B2,C2,D3.E1,F2,G1 #$%^, admin7@gmail.com, admin7 A2,B2,C2,D4.E1,F2,G1 admin8, admin8@gmail.com, admin8 A2,B2,C2,D5.E1,F2,G1 @dmin9, admin9@gmail.com, admin9

E &emsp; A2,B2,C2,D2.E2,F2,G1 adminten, admin10@gmail, admin10 

F &emsp; A2,B2,C2,D2.E1,F2,G2 adminzero, admin0@gmail.com, admin A2,B2,C2,D2.E1,F2,G3 adminoneone, admin11@gmail.com, admin11test

G &emsp; A2,B2,C2,D2.E1,F2,G2 adminonetwo, admin12@gmail.com, admin12 A2,B2,C2,D2.E1,F2,G3 adminonetwo, admin13@gmail.com, admin13 A2,B2,C2,D2.E1,F2,G4 adminonethree, admin14@gmail.com, admin13

**Identify possble values**

| Characteristic | Block 1 | Block 2 | Block 3 | Block 4 | Block 5 | 
| --- | --- | --- | --- | --- | --- |
| C1 = username is empty | " " | admin2 |  |  |  | 
| C2 = email is empty | " " | admin2@gmail.com |  |  |  | 
| C3 = password is empty | " " | admin2 |  |  |  | 
| C4 = format of username | 12345 | admin | @#$ | admin2 | admin2! |
| C5 = Email format | admin2@gmail.com | admin2@gmail |  |  |  | 
| C6 = Format of password | admin | length equal to 6 | admin2  |  |  | 
| C7 = Data duplicated | no duplicated | username duplicated | email duplicated | password duplicated |  | 

**Remark**

1. Ignore the relation of character that is impossible but maintain test case

2. test case value and possible value is not the same because of constraints of no duplicate data but there are a bit of change

### ISP - Login 🔒
**Partition characteristics**

| Characteristic | Block 1 | Block 2 | 
| --- | --- | --- |
| C1 = Username is empty | TRUE | FALSE | 
| C2 = Password is empty | TRUE | FALSE | 
| C3 = Correctly username&password | TRUE | FALSE | 

**BCC = 4 test cases**

Base : False, Flase, True &emsp; admin1, admin1234, Username: admin1 Password: admin1234

True, False, True &emsp; " ", admin1234, Username: admin1 Password: admin1234

False, True, True &emsp; admin1, " ", Username: admin1 Password: admin1234

False, False, False &emsp; admin1, admin1234, Username: admin1 Password: -

**Identify possble values**

| Characteristic | Block 1 | Block 2 | 
| --- | --- | --- |
| C1 = Username is empty | " " | admin1 | 
| C2 = Password is empty | " " | admin1234 | 
| C3 = Correctly username&password | Username: admin1 Password: admin1234 | Username: admin1 Password: - | 

### Business Requirement Document (BRD) 📑

| BR# | Module Name | Application Roles | Description |
| --- | --- | --- | --- |
| B1 | Register | Customer | Customer: A customer can register to the system using register page |
| B2 | Login | Customer | Customer: A customer can login to the system using login page |
| B3 | Menu list | Customer | Customer: A customer able to see the menu list, so that they can see all of the menus on the website |
| B4 | Search menu | Customer | Customer: A customer can search for menu |
| B5 | Menu's information | Customer | Customer: A customer can see the menu's information that they select |

### Technical Requirement Document (TRD) 📊
| Module | TR # | Technical requirement | 
| --- | --- | --- | 
| Register | T80 | Required field must not be blank | 
|  | T81 | Username is not duplicate | 
|  | T82 | Correct format of E-mail | 
|  | T83 | Correct format of passsword | 
|  | T84 | If username, email and password are valid then register | 
| Login | T85 | Required field must not be blank | 
|  | T86 | Valid username | 
|  | T87 | Valid password | 
|  | T88 | If username and password are match with the database, then login | 
| Search menu | T89 | The search bar should show the menu of food that user search | 
| Menu list | T90 | The menu should show in the categories | 
|  | T91 | The website should show the information of food when 
hold the mouse on the picture | 
| Menu's information | T92 | The website should show the menu information of the menu | 
|  | T93 | The minus or plus button can click to add more items or decrease items | 

### Requirement Traceability Matrix (RTM) 📗
| TestCase # | BR # | TR # | Test Case | Test Steps | Test Data | Expected Result | 
| --- | --- | --- | --- | --- | --- | --- | 
| 1 | B1 | T80 | Verify register | 1.Go to register page <br /> 2.Enter Username <br /> 3.Enter Email <br /> 4.Enter password <br /> 5.Click register | Username: admin1 <br /> Email: admin1@gmail.com <br /> Password: - | Register failed <br /> [Invalid password] | 
| 2 | B1 | T81 | Verify register | 1.Go to register page <br /> 2.Enter Username <br /> 3.Enter Email <br /> 4.Enter password <br /> 5.Click register | Username : {duplicated username} <br /> Email: admin1@gmail.com <br /> Password : admin1 | Register failed <br /> [Username already in use] | 
| 3 | B1 | T82 | Verify register | 1.Go to register page <br /> 2.Enter Username <br /> 3.Enter Email <br /> 4.Enter password <br /> 5.Click register | Username: admin1 <br /> Email: admin1@ <br /> Password: admin1234 <br /> | Register failed <br /> [pleaseinclude an @ at the {email}] | 
| 4 | B1 | T83 | Verify register | 1.Go to register page <br /> 2.Enter Username <br /> 3.Enter Email <br /> 4.Enter password <br /> 5.Click register | Username : test12 <br /> Email : test12@gmail.com <br /> Password : test | Register failed <br /> [Password too small. Should be atleast 6 characters] | 
| 5 | B1 | T84 | Verify register | 1.Go to register page <br /> 2.Enter Username <br /> 3.Enter Email <br /> 4.Enter password <br /> 5.Click register | Username : {new username} <br /> Email : {new email} <br /> Password : {new password} | Register successful | 
| 6 | B2 | T85 | Verify login | 1.Go to login page <br /> 2.Enter username <br /> 3.Enter password | Username : - <br /> Password : admin1234 | Login failed <br /> [Invalid username/password] | 
| 7 | B2 | T86 | Verify login | 1.Go to login page <br /> 2.Enter username <br /> 3.Enter password | Username : admin1 <br /> Password : {invalid password} | Login failed <br /> [Invalid username/password] | 
| 8 | B2 | T87 | Verify login | 1.Go to login page <br /> 2.Enter username <br /> 3.Enter password | Username : {invalid username} <br /> Password : admin1234 | Login failed | 
| 9 | B2 | T88 | Verify login | 1.Go to login page <br /> 2.Enter username <br /> 3.Enter password | Username : admin1 <br /> Password : admin1234 | Login successful | 
| 10 | B3 | T89 | Search menu | 1. Click on the Menu tab in Homepage  <br /> 2. Select the main dish or dessert <br /> 3. Search for the menu by name <br /> 4. Select the menu | T | User can search menu which menu name begin with T | 
| 11 | B4 | T90, T91 | See the menu list | 1. Click on the Menu tab in Homepage <br /> 2. Select the main dish or dessert <br /> 3. See the menu list | N/A | User can see the menu list <br /> of main dish or dessert |
| 12 | B5 | T92 | See the menu's information  | 1. Click on the Menu tab in HomePage <br /> 2. Select the main dish or dessert <br /> 3. Click see more button for exploring more details of menu <br /> 4. Slide to see more food photo | N/A | User can see the menu information | 

