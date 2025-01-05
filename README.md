
## System Requirements
- **Backend Framework:** Python (Flask/Django), Node.js (Express), or Java (Spring Boot)
- **Database:** Relational database (e.g., PostgreSQL/MySQL)
- **Authentication:** JWT-based authentication
- **Frontend:** Postman for API testing (frontend development optional)

## Features
### Core Requirements
1. **Lead Management**
   - Add new restaurant leads.
   - Store basic restaurant information (name, address, etc.).
   - Track lead status (e.g., New, In Progress, Converted, Dropped).

2. **Contact Management**
   - Support multiple Points of Contact (POCs) per restaurant.
   - Store contact details (name, role, phone, email, etc.).
   - Allow different roles for POCs (e.g., Manager, Chef).

3. **Interaction Tracking**
   - Record all calls made to leads.
   - Log orders placed by leads.
   - Track interaction dates and details.

4. **Call Planning**
   - Set call frequency for each lead.
   - Display leads requiring calls today.
   - Track the last call made for each lead.

5. **Performance Tracking**
   - Identify well-performing accounts based on ordering patterns.
   - Highlight underperforming accounts.
   - Monitor ordering frequency.

### Technical Requirements
1. **Data Models**
   - Well-defined schema for leads, contacts, interactions, and performance data.
   - Efficient relationship management between entities.
   - Indexing for optimal querying.

2. **API Design**
   - RESTful APIs for CRUD operations.
   - Robust error handling mechanisms.
   - Secure authentication and authorization.

3. **Business Logic**
   - Automatic determination of today's calls based on schedules.
   - Metrics calculation for account performance.
   - Seamless lead status transitions.

4. **Edge Case Handling**
   - Reassign leads if there’s a change in KAM.
   - Handle timezone differences for call scheduling.

## Installation Instructions
1. Clone the repository:
   
   git clone https://github.com/inni-69/KAM_UDAAN.git
   cd UDAAN2

2. Install dependencies:

   npm install

 
## Running Instructions
1. Start the backend server:

   npm start

2. Access the API at http://localhost:5000 (or the configured port).


![Screenshot 2025-01-05 184317](https://github.com/user-attachments/assets/9864aa45-dd44-4a3d-8e7f-171db74f5f2d)
![Screenshot 2025-01-05 184449](https://github.com/user-attachments/assets/228cfbf1-664b-47c7-8302-811f79f831e0)
![Screenshot 2025-01-05 184602](https://github.com/user-attachments/assets/4c634e0b-3769-40c1-b9dc-1e1dbc641425)
![Screenshot 2025-01-05 184635](https://github.com/user-attachments/assets/88492a2c-6d0f-4218-b301-545a14fb3a6c)
![Screenshot 2025-01-05 185415](https://github.com/user-attachments/assets/5b2b44d7-f90e-47df-a0d5-136bec182cf6)
![image](https://github.com/user-attachments/assets/2080957b-1f4d-4780-b609-5e3af1f2da33)
![image](https://github.com/user-attachments/assets/518593bc-a617-4d4b-af07-166c156e3eb5)










